import React, { useState, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

const messages = [
  {
    type: 'ai',
    text: "Hi! I'm Ana, your Mendley companion. How are you feeling today?",
    delay: 0
  },
  {
    type: 'user',
    text: "I've been feeling a bit overwhelmed lately...",
    delay: 2000
  },
  {
    type: 'ai',
    text: "I hear you. It's completely normal to feel overwhelmed sometimes. Would you like to talk about what's been on your mind?",
    delay: 4000
  },
  {
    type: 'user',
    text: "Yes, I think that would help.",
    delay: 6000
  },
  {
    type: 'ai',
    text: "I'm here to listen. Take your time and share what you're comfortable with. Together, we can explore ways to manage these feelings.",
    delay: 8000
  }
];

const PhoneScreen = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);

  useEffect(() => {
    messages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, message.delay);
    });

    // Reset animation after all messages are shown
    const totalDuration = Math.max(...messages.map(m => m.delay)) + 2000;
    const timer = setInterval(() => {
      setVisibleMessages([]);
      messages.forEach((message, index) => {
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, message]);
        }, message.delay);
      });
    }, totalDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[500px] flex flex-col">
      {/* Chat Header */}
      <div className="bg-ocean-dark text-white p-4 rounded-t-xl flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        <span className="font-medium">Ana - Mendley AI</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto">
        {visibleMessages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl ${
                message.type === 'user'
                  ? 'bg-ocean-dark text-white rounded-br-none'
                  : 'bg-white shadow-md rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="w-8 h-8 bg-ocean-dark text-white rounded-full flex items-center justify-center">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PhoneScreen;