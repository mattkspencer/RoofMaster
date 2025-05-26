import { useState, useRef, useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hi there! I'm your virtual roofing assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    
    // Track chat widget toggle event
    trackEvent(newState ? 'chat_open' : 'chat_close', 'user_interaction', 'chat_widget');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: ChatMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Track user message event
    trackEvent('chat_message_sent', 'user_interaction', 'chat_widget');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, {
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      }]);
      
      // Track bot response event
      trackEvent('chat_bot_response', 'system', 'chat_widget');
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Simple bot response generation based on user input
  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('insurance') || input.includes('claim')) {
      return "I'd be happy to explain our insurance claim process. We help you navigate the entire process from documentation to completion. Would you like to schedule a free inspection to assess your damage?";
    }
    
    if (input.includes('residential') || input.includes('home') || input.includes('house')) {
      return "For residential roofing, we offer complete installation, repair, and replacement services with a variety of material options. Would you like more information about specific materials or to schedule a consultation?";
    }
    
    if (input.includes('commercial') || input.includes('business')) {
      return "Our commercial roofing solutions are designed for durability and minimal business disruption. We offer TPO, EPDM, modified bitumen, and metal systems. Can I help you schedule a commercial roof assessment?";
    }
    
    if (input.includes('repair') || input.includes('leak') || input.includes('damage')) {
      return "We provide fast, reliable roof repairs for all types of damage. For emergency leaks, we offer 24/7 service. Would you like to schedule a repair assessment?";
    }
    
    if (input.includes('cost') || input.includes('price') || input.includes('quote') || input.includes('estimate')) {
      return "Roofing costs vary based on materials, size, and complexity. We offer free, no-obligation estimates. Would you like to schedule one with our team?";
    }
    
    if (input.includes('time') || input.includes('long') || input.includes('schedule')) {
      return "Most residential roofing projects take 1-3 days, while commercial projects vary by size. We work efficiently while maintaining quality. Would you like to discuss your project timeline?";
    }
    
    // Default response
    return "Thanks for your message! That's a great question. For the most accurate information, would you like to speak with one of our roofing specialists? You can call us at 720-360-8546 or I can help you schedule a consultation.";
  };

  return (
    <div 
      id="chat-widget" 
      className={`chat-widget fixed bottom-6 left-6 z-40 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-all ${isExpanded ? 'h-[400px]' : 'h-[60px]'}`}
    >
      <div 
        id="chat-header" 
        className="bg-primary p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleChat}
      >
        <div className="flex items-center">
          <i className="fas fa-comment-dots text-white mr-2"></i>
          <h4 className="text-white font-semibold">Roofing Assistant</h4>
        </div>
        <button 
          id="chat-toggle" 
          className="text-white focus:outline-none"
          aria-label={isExpanded ? 'Minimize chat' : 'Expand chat'}
        >
          <i className={`fas fa-chevron-${isExpanded ? 'down' : 'up'}`}></i>
        </button>
      </div>
      
      <div 
        id="chat-body" 
        className={`${isExpanded ? 'block' : 'hidden'} p-4 h-80 overflow-y-auto bg-gray-50`}
      >
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start ${msg.isUser ? 'justify-end' : ''}`}>
              <div className={`${msg.isUser ? 'bg-gray-200' : 'bg-primary text-white'} rounded-lg py-2 px-4 max-w-xs ${msg.isUser ? 'ml-auto' : ''}`}>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div 
        id="chat-footer" 
        className={`${isExpanded ? 'block' : 'hidden'} p-4 border-t`}
      >
        <div className="flex items-center">
          <input 
            type="text" 
            id="chat-input" 
            placeholder="Type your question..." 
            className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button 
            id="chat-send" 
            className="bg-primary text-white px-4 py-2 rounded-r-md"
            onClick={sendMessage}
            aria-label="Send message"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
