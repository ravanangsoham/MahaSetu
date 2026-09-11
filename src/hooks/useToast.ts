import { useState, useEffect } from 'react';

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
}

type ToastListener = (toast: ToastMessage) => void;
const listeners: Set<ToastListener> = new Set();

export const showToast = (
  message: string,
  type: 'success' | 'info' | 'warning' | 'error' = 'info',
  duration = 3500
) => {
  const toast: ToastMessage = {
    id: Math.random().toString(36).substring(2, 9),
    message,
    type,
    duration,
  };
  listeners.forEach((listener) => listener(toast));
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (newToast: ToastMessage) => {
      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, newToast.duration || 3500);
    };

    listeners.add(handleToast);
    return () => {
      listeners.delete(handleToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, removeToast, showToast };
}
