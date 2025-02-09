"use client";

import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Simulate AI response (replace with actual API call)
  const simulateAIResponse = async (userMessage: string) => {
    setIsLoading(true);
    // Simulate a delay for AI response
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const aiResponse = `AI: You said "${userMessage}". How can I assist you further?`;
    return aiResponse;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message to the chat
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');

    // Get AI response
    const aiResponseText = await simulateAIResponse(inputText);
    const aiMessage: Message = {
      id: messages.length + 2,
      text: aiResponseText,
      sender: 'ai',
    };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white p-6">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-3 rounded-lg bg-gray-700 text-white">
              AI is typing...
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
