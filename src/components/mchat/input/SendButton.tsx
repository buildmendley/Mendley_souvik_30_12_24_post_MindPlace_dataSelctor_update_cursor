import React from 'react';
import { Send } from 'lucide-react';

interface SendButtonProps {
  disabled: boolean;
}

const SendButton = ({ disabled }: SendButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Send className="w-5 h-5" />
    </button>
  );
};

export default SendButton;