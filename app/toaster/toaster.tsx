import React from 'react';
import {
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from 'react-icons/ai';
import './toaster.css';

type ToastType = 'success' | 'info' | 'warning' | 'error';

interface Props {
  type?: ToastType;
  message?: React.ReactNode;
  onClose?: () => void;
}

export default function Toaster({ type = 'info', message = '', onClose }: Props) {
  const icons: Record<ToastType, React.ReactNode> = {
    success: <AiOutlineCheckCircle className="icon" />,
    info: <AiOutlineInfoCircle className="icon" />,
    warning: <AiOutlineWarning className="icon" />,
    error: <AiOutlineCloseCircle className="icon" />,
  };

  return (
    <div role="status" aria-live="polite" className={`notification ${type}`}>
      {icons[type] ?? icons.info}
      <div className="message">{message}</div>
      <button
        type="button"
        aria-label="Close notification"
        className="close"
        onClick={onClose}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}
