import React from 'react';
import { Mic, Phone } from 'lucide-react';

interface InputButtonsProps {
  onVoiceClick: () => void;
  onCallClick: () => void;
  disabled?: boolean;
}

const InputButtons = ({ onVoiceClick, onCallClick, disabled }: InputButtonsProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onVoiceClick}
        className="text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
        disabled={disabled}
      >
        <Mic className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={onCallClick}
        className="text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
        disabled={disabled}
      >
        <Phone className="w-5 h-5" />
      </button>
    </>
  );
};

export default InputButtons;