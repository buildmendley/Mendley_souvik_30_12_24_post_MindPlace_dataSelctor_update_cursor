import React from 'react';

interface EndSessionModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const EndSessionModal = ({ onConfirm, onCancel }: EndSessionModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md mx-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          End Session?
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to end this chat session? This will close your current conversation.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            End Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndSessionModal;