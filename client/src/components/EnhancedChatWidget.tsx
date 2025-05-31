import { useState, useRef, useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
  options?: ChatOption[];
}

interface ChatOption {
  text: string;
  action: string;
  data?: any;
}

const EnhancedChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate unique session ID
  function generateSessionId() {
    return 'session-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
  }

  // Initialize chat when widget is first opened
  useEffect(() => {
    if (isExpanded && messages.length === 0) {
      initializeChat();
    }
  }, [isExpanded]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initializeChat = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'hello',
          sessionId: sessionId
        })
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: ChatMessage = {
          text: data.response,
          isUser: false,
          timestamp: new Date(),
          options: data.options
        };
        setMessages([assistantMessage]);
      }
    } catch (error) {
      console.error('Failed to initialize chat:', error);
      // Fallback to basic greeting
      const fallbackMessage: ChatMessage = {
        text: "Hi there! I'm Spencer Roofing's assistant. I can help you with roofing questions, estimates, and emergency repairs. What brings you here today?",
        isUser: false,
        timestamp: new Date(),
        options: [
          { text: "I see damage on my roof", action: "damage_report" },
          { text: "I need maintenance", action: "maintenance" },
          { text: "I want a roof replacement", action: "replacement" }
        ]
      };
      setMessages([fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    
    if (newState) {
      trackEvent('chat_opened', 'engagement', 'chat_widget');
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);
    
    trackEvent('chat_message_sent', 'engagement', 'user_message');

    try {
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          sessionId: sessionId
        })
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: ChatMessage = {
          text: data.response,
          isUser: false,
          timestamp: new Date(),
          options: data.options
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        trackEvent('chat_response_generated', 'engagement', 'assistant_response');
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        text: "I'm having trouble connecting right now. Please try calling us directly at (720) 360-8546 for immediate assistance.",
        isUser: false,
        timestamp: new Date(),
        options: [
          { text: "Call Now", action: "call", data: "7203608546" }
        ]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = async (option: ChatOption) => {
    // Add user's choice as a message
    const userMessage: ChatMessage = {
      text: option.text,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      if (option.action === 'call') {
        window.location.href = `tel:${option.data}`;
        trackEvent('call_click', 'conversion', 'chat_widget');
        return;
      }

      const response = await fetch('/api/assistant/action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: option.action,
          data: option.data,
          sessionId: sessionId
        })
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: ChatMessage = {
          text: data.text,
          isUser: false,
          timestamp: new Date(),
          options: data.options
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        trackEvent('chat_option_selected', 'engagement', option.action);
      }
    } catch (error) {
      console.error('Action error:', error);
      const errorMessage: ChatMessage = {
        text: "I'm having trouble processing that request. Please try again or call us at (720) 360-8546.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <div key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Chat Toggle Button */}
      {!isExpanded && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Spencer Roofing Assistant</h3>
              <p className="text-xs text-blue-100">Powered by AI</p>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-blue-700 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="text-sm">
                    {formatMessageText(message.text)}
                  </div>
                  
                  {/* Quick Action Options */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-3 py-2 bg-white text-blue-600 rounded border border-blue-200 hover:bg-blue-50 transition-colors text-sm"
                          disabled={isLoading}
                        >
                          {option.action === 'call' && <Phone size={14} className="inline mr-2" />}
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedChatWidget;