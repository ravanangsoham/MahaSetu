import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { aiService } from '../../api/aiService';
import type { ChatMessage as ChatMessageType, Scheme } from '../../types';
import { ChatMessage } from './ChatMessage';
import { VoiceUI } from './VoiceUI';
import { showToast } from '../../hooks/useToast';
import {
  Send,
  Sparkles,
  MessageSquare,
  Trash2,
  CheckCircle2,
  Brain,
  Languages,
} from 'lucide-react';

interface AskAIProps {
  onSelectScheme: (scheme: Scheme) => void;
  onNavigateTab: (tab: string) => void;
}

export const AskAIModal: React.FC<AskAIProps> = ({ onSelectScheme, onNavigateTab }) => {
  const { language, setLanguage, t } = useLanguage();
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStep, setThinkingStep] = useState(0);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const initialWelcomeMsg: ChatMessageType = {
    id: 'msg-welcome',
    sender: 'ai',
    text: {
      en: 'Hello! I am MahaSetu AI. Tell me what you need in plain language (English, मराठी, or हिंदी). I will help you discover schemes, verify indicative eligibility, prepare required documents, and navigate official state portals.',
      mr: 'नमस्कार! मी महासेतू AI आहे. तुमची गरज तुमच्या स्वतःच्या भाषेत (मराठी, English किंवा हिंदी) सांगा. मी तुम्हाला योग्य योजना शोधण्यात, पात्रता तपासण्यात आणि अर्ज करण्यात मदत करेन.',
      hi: 'नमस्ते! मैं महासेतु AI हूं। अपनी आवश्यकता अपनी भाषा में बताएं (हिंदी, मराठी या English)। मैं आपको योजनाओं को खोजने, पात्रता जांचने और आधिकारिक पोर्टल तक पहुंचने में मदद करूंगा।',
    },
    timestamp: 'Just now',
  };

  const [messages, setMessages] = useState<ChatMessageType[]>([initialWelcomeMsg]);

  const thinkingStepsText = [
    'Understanding your request...',
    'Identifying service category & department...',
    'Checking verified scheme information from MahaDBT...',
    'Matching eligibility rules...',
    'Preparing your customized citizen journey...',
  ];

  const suggestedPrompts = [
    'Am I eligible for any post-matric scholarship?',
    'माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?',
    'मला शेतकऱ्यांसाठी उपलब्ध योजना पाहिजेत.',
    'Which documents do I need for income certificate?',
    'How can I track my application status?',
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const handleClearChat = () => {
    setMessages([initialWelcomeMsg]);
    showToast('Conversation history cleared', 'info');
  };

  const handleSend = async (queryOverride?: string) => {
    const query = queryOverride || inputText;
    if (!query.trim()) return;

    // Append user message
    const userMsg: ChatMessageType = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryOverride) setInputText('');
    setIsThinking(true);
    setThinkingStep(0);

    // Multi-step thinking animation step intervals
    const stepInterval = setInterval(() => {
      setThinkingStep((prev) => {
        if (prev < thinkingStepsText.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 400);

    // Call AI Service Abstraction
    setTimeout(async () => {
      clearInterval(stepInterval);
      const response = await aiService.processQuery(query, language);
      const aiMsg: ChatMessageType = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        intent: response.intent,
        suggestedSchemes: response.matchedSchemes,
        askingQuestions: response.askingQuestions,
        journeyAction: Boolean(response.prerequisiteAlert),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 2000);
  };

  const handleAnswerQuestion = (field: string, answer: string) => {
    handleSend(`${field}: ${answer}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#0B2545] via-[#13315C] to-slate-900 rounded-3xl p-6 text-white mb-6 shadow-xl relative overflow-hidden border border-amber-500/20">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-48 h-48 text-amber-400" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-2xl font-mono shadow-md border border-amber-300">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold tracking-tight">{t('askHeaderTitle')}</h1>
                <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2.5 py-0.5 rounded-md border border-amber-400/30">
                  Multilingual AI
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">{t('askHeaderSub')}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const nextLang = language === 'en' ? 'mr' : language === 'mr' ? 'hi' : 'en';
                setLanguage(nextLang);
                showToast(`Language changed to ${nextLang === 'en' ? 'English' : nextLang === 'mr' ? 'मराठी' : 'हिंदी'}`, 'info');
              }}
              className="px-3 py-1.5 rounded-xl bg-[#F8FBFF] hover:bg-[#EEF6FF] text-[#123B8F] border border-[#D8E6F7] text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span className="uppercase font-mono">{language}</span>
            </button>

            <button
              onClick={handleClearChat}
              className="px-3 py-1.5 rounded-xl bg-[#F8FBFF] hover:bg-rose-50 hover:text-rose-600 text-[#48658F] border border-[#D8E6F7] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Clear Chat History"
            >
              <Trash2 className="w-3.5 h-3.5 text-[#48658F] hover:text-rose-600" />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Prompts Pills */}
      <div className="mb-4">
        <p className="text-xs font-bold text-[#48658F] uppercase tracking-wider mb-2 flex items-center gap-1">
          <MessageSquare className="w-3.5 h-3.5 text-[#6D4AFF]" />
          {t('askSuggestedTitle')}
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3.5 py-2 bg-white hover:bg-[#EEF6FF] text-[#294A78] hover:text-[#123B8F] text-xs font-medium rounded-xl border border-[#D8E6F7] shadow-xs transition-all hover:border-[#6D4AFF] hover:scale-101 text-left"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-[#F8FBFF] rounded-3xl p-4 sm:p-6 border border-[#D8E6F7] min-h-[420px] max-h-[580px] overflow-y-auto mb-4 shadow-inner space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onSelectScheme={onSelectScheme}
            onAnswerQuestion={handleAnswerQuestion}
            onStartPrerequisite={() => onNavigateTab('journey')}
          />
        ))}

        {/* Multi-step AI Thinking Visualization */}
        {isThinking && (
          <div className="p-4 rounded-2xl bg-white border border-[#D8E6F7] text-[#123B8F] space-y-3 max-w-md shadow-md animate-fade-in">
            <div className="flex items-center gap-2 text-[#6D4AFF] font-bold text-xs">
              <Brain className="w-4 h-4 animate-pulse" />
              <span>MahaSetu AI Intelligence Layer</span>
            </div>

            <div className="space-y-1.5">
              {thinkingStepsText.map((stepText, idx) => {
                const isPassed = idx < thinkingStep;
                const isCurrent = idx === thinkingStep;
                return (
                  <div key={idx} className="flex items-center gap-2.5 text-xs">
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A36A] shrink-0" />
                    ) : isCurrent ? (
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[#6D4AFF] border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#D8E6F7] shrink-0" />
                    )}
                    <span
                      className={
                        isPassed
                          ? 'text-[#294A78]'
                          : isCurrent
                          ? 'text-[#6D4AFF] font-bold'
                          : 'text-[#48658F]'
                      }
                    >
                      {stepText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Chat Input Bar */}
      <div className="flex items-center gap-2 bg-white p-2.5 rounded-2xl border border-slate-300 shadow-xl focus-within:border-amber-500 transition-colors">
        <VoiceUI onTranscript={(text) => handleSend(text)} />

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={t('askInputPlaceholder')}
          className="flex-1 px-3 py-2 text-sm text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium"
        />

        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim()}
          className="p-3 bg-[#0B2545] hover:bg-[#13315C] disabled:bg-slate-300 text-white rounded-xl transition-all shadow-md flex items-center justify-center"
        >
          <Send className="w-4 h-4 text-amber-400" />
        </button>
      </div>
    </div>
  );
};
