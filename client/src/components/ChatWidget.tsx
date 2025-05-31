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

const ChatWidget = () => {
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

  // Enhanced bot response system with comprehensive knowledge base
  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Emergency/Urgent Issues - Highest Priority
    if (input.includes('emergency') || input.includes('urgent') || (input.includes('leak') && (input.includes('now') || input.includes('help')))) {
      return "🚨 EMERGENCY SERVICE: For immediate roof leaks or urgent repairs, call us NOW at 720-360-8546. We provide 24/7 emergency response and can typically arrive within 2-4 hours in the Denver metro area.";
    }
    
    // Roofing Materials - Detailed Information
    if (input.includes('material') || input.includes('shingle') || input.includes('metal') || input.includes('tile') || input.includes('type')) {
      return "🏠 ROOFING MATERIALS WE INSTALL:\n\n• Asphalt Shingles ($8-15/sq ft) - Most popular, 20-30 year warranty, great value\n• Metal Roofing ($12-20/sq ft) - 40-70 year lifespan, energy efficient, hail resistant\n• Tile Roofing ($10-18/sq ft) - 50+ years, perfect for Colorado climate, fire resistant\n• TPO Commercial ($6-12/sq ft) - White membrane, energy efficient\n\nNeed material recommendations for your specific situation? Call 720-360-8546";
    }
    
    // Signs You Need Roof Work
    if (input.includes('sign') || input.includes('replace') || input.includes('when') || input.includes('need new') || input.includes('old')) {
      return "⚠️ SIGNS YOU NEED ROOF ATTENTION:\n\n• Missing, cracked, or curling shingles\n• Granules accumulating in gutters\n• Sagging or uneven roof lines\n• Water stains on interior ceilings\n• Roof age over 20 years\n• Increasing energy bills\n• Moss or algae growth\n\nSpotting any of these? Get a FREE inspection: 720-360-8546";
    }
    
    // Insurance Claims Process
    if (input.includes('insurance') || input.includes('claim') || input.includes('hail') || input.includes('storm') || input.includes('adjuster')) {
      return "💼 INSURANCE CLAIMS MADE EASY:\n\nWe handle everything:\n✅ Document damage with detailed photos\n✅ Meet with insurance adjusters\n✅ Negotiate fair settlements\n✅ Handle all paperwork and permits\n✅ Coordinate timeline with insurance\n\n95% claim approval rate! Call 720-360-8546 for FREE claim assistance.";
    }
    
    // Costs and Pricing Information
    if (input.includes('cost') || input.includes('price') || input.includes('quote') || input.includes('estimate') || input.includes('$') || input.includes('expensive')) {
      return "💰 ROOFING INVESTMENT GUIDE:\n\n• Minor repairs: $150-500\n• Major repairs: $500-2,000\n• Asphalt shingle roof: $15,000-25,000\n• Metal roof: $20,000-35,000\n• Tile roof: $18,000-30,000\n• Commercial TPO: $6-12/sq ft\n\n🆓 FREE detailed estimates with no pressure! Call 720-360-8546";
    }
    
    // Warranty Information
    if (input.includes('warranty') || input.includes('guarantee') || input.includes('coverage')) {
      return "🛡️ COMPREHENSIVE WARRANTY PROTECTION:\n\n• Labor Warranty: 10 years on all installation work\n• Material Warranty: 20-50 years (manufacturer dependent)\n• Workmanship Guarantee: 100% satisfaction promise\n• Storm Damage: Lifetime repair guarantee\n\nAll warranties are transferable to new homeowners. Questions? 720-360-8546";
    }
    
    // Maintenance Tips and Care
    if (input.includes('maintenance') || input.includes('care') || input.includes('tips') || input.includes('prevent')) {
      return "🔧 ROOF MAINTENANCE ESSENTIALS:\n\n• Clean gutters spring & fall\n• Trim tree branches away from roof\n• Remove debris and leaves regularly\n• Check for loose or missing shingles\n• Clear moss and algae immediately\n• Schedule annual professional inspections\n\n📅 We offer maintenance plans starting at $99/year! Call 720-360-8546";
    }
    
    // Timeline and Scheduling
    if (input.includes('time') || input.includes('long') || input.includes('schedule') || input.includes('quick') || input.includes('fast')) {
      return "⏰ PROJECT TIMELINES:\n\n• Emergency repairs: Same day service\n• Small repairs: 1-2 days\n• Residential reroof: 2-4 days\n• Commercial projects: 3-10 days\n• Insurance claims: 2-4 weeks (total process)\n\nWeather dependent. Rush jobs available for emergencies. Call 720-360-8546 to discuss your timeline.";
    }
    
    // Residential Services
    if (input.includes('residential') || input.includes('home') || input.includes('house')) {
      return "🏠 RESIDENTIAL ROOFING SERVICES:\n\n• Complete roof replacement & installation\n• Emergency leak repairs\n• Gutter installation & repair\n• Attic ventilation systems\n• Skylight installation\n• Ice dam prevention\n• Chimney repairs\n\nServing all of Denver metro area. FREE estimates: 720-360-8546";
    }
    
    // Commercial Services
    if (input.includes('commercial') || input.includes('business') || input.includes('tpo') || input.includes('flat')) {
      return "🏢 COMMERCIAL ROOFING EXPERTISE:\n\n• TPO & EPDM membrane systems\n• Modified bitumen roofing\n• Metal roofing solutions\n• Flat roof specialists\n• Preventive maintenance programs\n• Minimal business disruption guarantee\n\nCommercial estimates & emergency service: 720-360-8546";
    }
    
    // Gutters specific
    if (input.includes('gutter') || input.includes('downspout') || input.includes('drainage')) {
      return "🌧️ GUTTER SERVICES:\n\n• Seamless gutter installation\n• Gutter guard systems\n• Downspout repairs & extensions\n• Gutter cleaning & maintenance\n• Ice dam prevention\n• Proper drainage solutions\n\nProtect your roof with proper drainage! Call 720-360-8546";
    }
    
    // Contact and Scheduling
    if (input.includes('contact') || input.includes('call') || input.includes('phone') || input.includes('schedule') || input.includes('appointment')) {
      return "📞 READY TO GET STARTED?\n\n🏠 Spencer Roofing Solutions\n📱 Call/Text: 720-360-8546\n📧 Email: mattkspencer@gmail.com\n📍 Location: Englewood, Colorado\n\n✅ FREE estimates & inspections\n✅ Licensed, bonded & insured\n✅ A+ BBB rating\n✅ Local Denver metro specialists\n\nWe typically respond within 24 hours!";
    }
    
    // Greeting responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.length < 10) {
      return "Hello and welcome! 👋 I'm your Spencer Roofing assistant, here to help with all your roofing questions.\n\nI can provide information about:\n• Repair vs replacement decisions\n• Material options & costs\n• Insurance claim assistance\n• Emergency services\n• Maintenance tips\n\nWhat roofing question can I answer for you today?";
    }
    
    // Enhanced default response with clear guidance
    return "Thanks for reaching out! 🏠 I have detailed information on roofing materials, costs, insurance claims, maintenance, and repair services.\n\nFor personalized advice about your specific roofing needs, our Spencer Roofing experts can provide professional guidance.\n\n📞 Call 720-360-8546 for a FREE consultation!\n\nTry asking about: materials, costs, repairs, maintenance, or insurance claims.";
  };

  return (
    <div 
      id="chat-widget" 
      className={`chat-widget fixed bottom-6 left-6 z-40 w-72 bg-white rounded-lg shadow-lg transition-all ${isExpanded ? 'h-[480px]' : 'h-[60px]'} flex flex-col`}
    >
      <div 
        id="chat-header" 
        className="bg-primary p-4 flex justify-between items-center cursor-pointer flex-shrink-0"
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
      
      {isExpanded && (
        <>
          <div 
            id="chat-body" 
            className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0"
          >
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start ${msg.isUser ? 'justify-end' : ''}`}>
                  <div className={`${msg.isUser ? 'bg-gray-200' : 'bg-primary text-white'} rounded-lg py-2 px-4 max-w-xs ${msg.isUser ? 'ml-auto' : ''}`}>
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div 
            id="chat-footer" 
            className="flex-shrink-0 p-4 border-t bg-white"
          >
            <div className="mb-2">
              <div className="flex flex-wrap gap-1 mb-2">
                <button 
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                  onClick={() => setInputValue("What materials do you recommend?")}
                >
                  Materials
                </button>
                <button 
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                  onClick={() => setInputValue("How much does a new roof cost?")}
                >
                  Costs
                </button>
                <button 
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                  onClick={() => setInputValue("I need help with insurance claim")}
                >
                  Insurance
                </button>
                <button 
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                  onClick={() => setInputValue("Schedule free estimate")}
                >
                  Estimate
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input 
                type="text" 
                id="chat-input" 
                placeholder="Ask about materials, costs, repairs, insurance..." 
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button 
                id="chat-send" 
                className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                onClick={sendMessage}
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatWidget;
