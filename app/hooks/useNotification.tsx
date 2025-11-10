import React, { useEffect, useMemo, useRef, useState } from 'react';
import Toaster from '../toaster/toaster';


type ToastType = 'success' | 'info' | 'warning' | 'error';
type Toast = {
  type?: ToastType;
  message: React.ReactNode;
  duration?: number; // ms, 0 or undefined = auto defaults to 3000
};

export default function useNotification(
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right'
) {
  const [toast, setToast] = useState<Toast | null>(null);
  const timerRef = useRef<number | null>(null);

  const triggerNotification = (next: Toast) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setToast(next);

    const ms = Number.isFinite(next.duration as number) ? (next.duration as number) : 3000;
    if (ms > 0) {
      timerRef.current = window.setTimeout(() => setToast(null), ms);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const NotificationComponent = useMemo(() => {
    if (!toast) return null;
    return (
      <div className={`notification-container ${position}`}>
        <Toaster {...toast} onClose={() => setToast(null)} />
      </div>
    );
  }, [toast, position]);

  return { NotificationComponent, triggerNotification, clear: () => setToast(null) };
}
