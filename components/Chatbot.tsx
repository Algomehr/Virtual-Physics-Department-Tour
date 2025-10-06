import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatbotProps {
  context: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ context }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].chatbot;

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

        const systemInstruction = t.systemInstruction.replace('{context}', context);

        chatRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });
        setMessages([{ role: 'model', text: t.initialMessage }]);
      } catch (error) {
        console.error("Failed to initialize chatbot:", error);
        setMessages([{ role: 'model', text: t.errorMessage }]);
      }
    };
    
    if (context) {
        initializeChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: input });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = { role: 'model', text: t.sendError };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-700 rounded-lg flex-1">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl ${msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-600 text-gray-200'}`}>
              <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
            </div>
          </div>
        ))}
         {isLoading && (
            <div className="flex justify-start mb-4">
                 <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-xl bg-gray-600 text-gray-200">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                 </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="p-4 border-t border-gray-600 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          className="flex-1 bg-gray-800 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="ms-3 bg-cyan-500 text-white rounded-full p-2 disabled:bg-gray-500 hover:bg-cyan-600 transition-colors"
          disabled={isLoading || !input.trim()}
          aria-label={t.sendAriaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform -rotate-90 rtl:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        </button>
      </form>
    </div>
  );
};
