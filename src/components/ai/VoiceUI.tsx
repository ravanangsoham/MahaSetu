import React from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

interface VoiceUIProps {
  onTranscript: (text: string) => void;
}

export const VoiceUI: React.FC<VoiceUIProps> = ({ onTranscript }) => {
  const { isListening, startListening, stopListening } = useSpeech(onTranscript);

  return (
    <div className="relative flex items-center">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-2.5 rounded-xl transition-all flex items-center justify-center shadow-md border ${
          isListening
            ? 'bg-rose-600 text-white border-rose-400 ring-4 ring-rose-500/30 scale-105'
            : 'bg-[#123B8F] hover:bg-[#1D4ED8] text-white border-[#123B8F] hover:scale-105'
        }`}
        title={isListening ? 'Stop listening' : 'Speak your request in English/मराठी/हिंदी'}
      >
        {isListening ? (
          <MicOff className="w-4 h-4 animate-bounce" />
        ) : (
          <Mic className="w-4 h-4" />
        )}
      </button>

      {/* Animated Sound Waves Overlay */}
      {isListening && (
        <div className="absolute left-12 bg-white border border-[#6D4AFF] text-[#123B8F] text-xs px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 z-30 animate-fade-in whitespace-nowrap">
          <Volume2 className="w-4 h-4 text-[#6D4AFF] animate-pulse" />
          <span className="font-bold text-[#6D4AFF]">🎙 Listening... Speak your request</span>
          {/* Animated sound wave bars */}
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <div className="w-1 bg-[#6D4AFF] rounded-full h-full animate-pulse" />
            <div className="w-1 bg-[#123B8F] rounded-full h-2 animate-pulse delay-75" />
            <div className="w-1 bg-[#16A36A] rounded-full h-3 animate-pulse delay-150" />
            <div className="w-1 bg-[#3B82F6] rounded-full h-1.5 animate-pulse delay-200" />
          </div>
        </div>
      )}
    </div>
  );
};
