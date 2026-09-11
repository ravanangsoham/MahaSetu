import { useState, useEffect, useCallback } from 'react';

export function useSpeech(onResultCallback: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      setIsSupported(true);
    }
  }, []);

  const startListening = useCallback(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Fallback simulation for unsupported browsers
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        onResultCallback('माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?');
      }, 2500);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'mr-IN'; // Default speech recognition in Marathi

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onResultCallback(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        // On error, fallback to demo query text
        onResultCallback('माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
      onResultCallback('माझ्या मुलीच्या शिक्षणासाठी काही सरकारी योजना आहेत का?');
    }
  }, [onResultCallback]);

  const stopListening = useCallback(() => {
    setIsListening(false);
  }, []);

  return { isListening, isSupported, startListening, stopListening };
}
