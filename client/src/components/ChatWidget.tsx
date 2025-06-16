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
      text: "Hi there! 👋 I'm your Spencer Roofing assistant. I can help you with:\n\n• Roofing materials & costs\n• Insurance claims\n• Emergency repairs\n• Maintenance tips\n• Scheduling estimates\n\nWhat can I help you with today?",
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

  // Enhanced emergency detection with expanded keywords
  const detectEmergency = (input: string): boolean => {
    const emergencyKeywords = [
      'leak', 'leaking', 'water damage', 'emergency', 'urgent', 'storm damage', 
      'tree fell', 'tree on roof', 'hole in roof', 'flooding', 'water coming in',
      'collapsed', 'caved in', 'immediate', 'asap', 'help now', 'right now'
    ];
    
    return emergencyKeywords.some(keyword => input.includes(keyword));
  };

  // Enhanced bot response system with comprehensive knowledge base
  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Emergency/Urgent Issues - Enhanced Detection
    if (detectEmergency(input)) {
      return "🚨 THIS SOUNDS URGENT! For immediate emergency roofing service, call us NOW at 720-360-8546.\n\n✅ 24/7 Emergency Response\n✅ Typically arrive within 2-4 hours\n✅ Serving entire Denver metro area\n✅ Licensed emergency contractors\n\nDon't wait - roof emergencies can cause extensive damage quickly!";
    }
    
    // Roofing Materials - Colorado-Appropriate Options
    if (input.includes('material') || input.includes('shingle') || input.includes('metal') || input.includes('tile') || input.includes('type') || input.includes('recommend')) {
      return "🏠 COLORADO-APPROPRIATE ROOFING MATERIALS:\n\n• Impact-Resistant Shingles ($10-18/sq ft) - Class 4 hail protection, insurance discounts\n• Metal Roofing ($15-25/sq ft) - Superior hail/wind resistance, 50+ year lifespan\n• Concrete Tile ($12-20/sq ft) - Excellent for Colorado climate, fire/wind resistant\n• Synthetic Materials ($14-22/sq ft) - Modern composites, extreme weather protection\n\nFor Colorado conditions, we recommend Class 4 impact-resistant materials. Call 720-360-8546 for personalized recommendations";
    }
    
    // Signs You Need Roof Work
    if (input.includes('sign') || input.includes('replace') || input.includes('when') || input.includes('need new') || input.includes('old')) {
      return "⚠️ SIGNS YOU NEED ROOF ATTENTION:\n\n• Missing, cracked, or curling shingles\n• Granules accumulating in gutters\n• Sagging or uneven roof lines\n• Water stains on interior ceilings\n• Roof age over 20 years\n• Increasing energy bills\n• Moss or algae growth\n\nSpotting any of these? Get a FREE inspection: 720-360-8546";
    }
    
    // Colorado-Specific Weather Issues
    if (input.includes('hail') || input.includes('hail damage')) {
      return "🌨️ COLORADO HAIL DAMAGE EXPERTS:\n\nColorado's severe hail season (April-July) causes extensive roof damage. We specialize in:\n✅ Hail damage assessment & documentation\n✅ Insurance claim assistance (95% approval rate)\n✅ Impact-resistant materials for future protection\n✅ Fast repairs before next storm season\n\nHail damage can be invisible to untrained eyes. FREE inspection: 720-360-8546";
    }
    
    if (input.includes('wind') || input.includes('wind damage') || input.includes('missing shingle')) {
      return "💨 COLORADO WIND DAMAGE SPECIALISTS:\n\nColorado's high winds (especially chinook winds) frequently cause:\n• Missing or loose shingles\n• Lifted roof edges\n• Gutter damage\n• Flashing issues\n\nWind damage can lead to leaks if not addressed quickly. Emergency repairs available! Call 720-360-8546";
    }
    
    if (input.includes('snow') || input.includes('ice dam') || input.includes('winter')) {
      return "❄️ COLORADO WINTER ROOF PROTECTION:\n\nColorado's heavy snow loads and freeze-thaw cycles create:\n• Ice dams blocking proper drainage\n• Snow load stress on roof structure\n• Icicle formation damaging gutters\n• Rapid temperature changes causing expansion/contraction\n\nPrevent winter damage with proper insulation and ventilation. Call 720-360-8546";
    }
    
    if (input.includes('sun') || input.includes('uv') || input.includes('fading') || input.includes('altitude')) {
      return "☀️ HIGH ALTITUDE UV PROTECTION:\n\nColorado's high altitude means 25% more UV exposure than sea level:\n• Accelerated shingle aging and fading\n• Faster material deterioration\n• Increased cooling costs\n• Premium UV-resistant materials essential\n\nProtect your investment with Colorado-appropriate materials. Call 720-360-8546";
    }

    // Insurance Claims Process - Enhanced for Colorado
    if (input.includes('insurance') || input.includes('claim') || input.includes('adjuster')) {
      return "💼 COLORADO INSURANCE CLAIMS EXPERTS:\n\nSpecializing in Colorado weather damage claims:\n✅ Hail damage documentation & assessment\n✅ Wind damage evaluations\n✅ Meet with insurance adjusters\n✅ Negotiate fair settlements for Colorado conditions\n✅ Handle all paperwork and permits\n✅ Know Colorado insurance requirements\n\n95% claim approval rate! Call 720-360-8546 for FREE claim assistance.";
    }
    
    // Costs and Pricing Information - Colorado-Specific
    if (input.includes('cost') || input.includes('price') || input.includes('quote') || input.includes('estimate') || input.includes('$') || input.includes('expensive')) {
      return "💰 COLORADO ROOFING INVESTMENT GUIDE:\n\n• Emergency repairs: $300-1,200\n• Hail damage repairs: $500-3,000\n• Wind damage repairs: $400-1,500\n• Asphalt shingle roof: $15,000-28,000\n• Impact-resistant shingles: $18,000-32,000\n• Metal roof (hail-resistant): $22,000-38,000\n• Tile roof: $20,000-35,000\n\nColorado prices reflect weather-resistant materials. FREE detailed estimates! Call 720-360-8546";
    }
    
    // Warranty Information
    if (input.includes('warranty') || input.includes('guarantee') || input.includes('coverage')) {
      return "🛡️ COMPREHENSIVE WARRANTY PROTECTION:\n\n• Labor Warranty: 10 years on all installation work\n• Material Warranty: 20-50 years (manufacturer dependent)\n• Workmanship Guarantee: 100% satisfaction promise\n• Storm Damage: Lifetime repair guarantee\n\nAll warranties are transferable to new homeowners. Questions? 720-360-8546";
    }
    
    // Maintenance Tips and Care
    if (input.includes('maintenance') || input.includes('care') || input.includes('tips') || input.includes('prevent')) {
      return "🔧 ROOF MAINTENANCE ESSENTIALS:\n\n• Clean gutters spring & fall\n• Trim tree branches away from roof\n• Remove debris and leaves regularly\n• Check for loose or missing shingles\n• Clear moss and algae immediately\n• Schedule annual professional inspections\n\n📅 We offer maintenance plans starting at $99/year! Call 720-360-8546";
    }
    
    // Timeline and Scheduling - Colorado Weather Considerations
    if (input.includes('time') || input.includes('long') || input.includes('schedule') || input.includes('quick') || input.includes('fast') || input.includes('how long')) {
      return "⏰ COLORADO PROJECT TIMELINES:\n\n• Emergency repairs: Same day/24 hours\n• Storm damage repairs: 1-3 days\n• Residential reroof: 2-5 days (weather permitting)\n• Commercial projects: 3-10 days\n• Insurance claims: 2-6 weeks (total process)\n• Hail damage season: Book early (April-July busy)\n\nColorado weather can affect scheduling. We monitor forecasts closely. Call 720-360-8546 to discuss your timeline.";
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
      return "📞 READY TO GET STARTED?\n\n🏠 Spencer Roofing\n📱 Call/Text: 720-360-8546\n📧 Email: mattkspencer@gmail.com\n📍 Location: Englewood, Colorado\n\n✅ FREE estimates & inspections\n✅ Licensed, bonded & insured\n✅ A+ BBB rating\n✅ Local Denver metro specialists\n\nWe typically respond within 24 hours!";
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
      className={`chat-widget fixed bottom-4 left-4 z-40 transition-all ${isExpanded ? 'w-80 bg-white rounded-lg shadow-lg h-[400px] md:h-[600px] lg:h-[800px] min-h-[350px] md:min-h-[500px] lg:min-h-[700px]' : 'w-[100px] md:w-[140px] lg:w-[180px] h-[40px] md:h-[50px] lg:h-[60px] bg-primary rounded-full shadow-lg hover:scale-105'} flex flex-col`}
    >
      <div 
        id="chat-header" 
        className={`cursor-pointer flex-shrink-0 flex items-center ${isExpanded ? 'bg-primary p-4 justify-between' : 'h-full w-full justify-center'}`}
        onClick={toggleChat}
      >
        {isExpanded ? (
          <>
            <div className="flex items-center">
              <i className="fas fa-comment-dots text-white mr-2"></i>
              <h4 className="text-white font-semibold">Roofing Assistant</h4>
            </div>
            <button 
              id="chat-toggle" 
              className="text-white focus:outline-none"
              aria-label="Minimize chat"
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </>
        ) : (
          <div className="flex items-center space-x-1 text-white">
            <span className="text-xs md:text-sm lg:text-base font-medium">Assistant</span>
            <span className="text-xs md:text-sm">💬</span>
          </div>
        )}
      </div>
      
      {isExpanded && (
        <>
          <div 
            id="chat-body" 
            className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0 max-h-[300px] md:max-h-[450px] lg:max-h-[600px]"
          >
            <div className="space-y-4 pb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start ${msg.isUser ? 'justify-end' : ''}`}>
                  <div className={`${msg.isUser ? 'bg-gray-200 text-gray-900' : 'bg-blue-800 text-white'} rounded-lg py-3 px-4 max-w-[280px] ${msg.isUser ? 'ml-auto' : ''}`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
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
                  className="text-xs bg-red-200 hover:bg-red-300 px-2 py-1 rounded-full text-red-900 font-medium border border-red-900"
                  onClick={() => setInputValue("Emergency roof repair")}
                >
                  🚨 Emergency
                </button>
                <button 
                  className="text-xs bg-blue-200 hover:bg-blue-300 px-2 py-1 rounded-full text-blue-900 border border-blue-900"
                  onClick={() => setInputValue("Schedule free roof inspection")}
                >
                  Free Inspection
                </button>
                <button 
                  className="text-xs bg-green-200 hover:bg-green-300 px-2 py-1 rounded-full text-green-900 border border-green-900"
                  onClick={() => setInputValue("Hail damage assessment")}
                >
                  Hail Damage
                </button>
                <button 
                  className="text-xs bg-purple-200 hover:bg-purple-300 px-2 py-1 rounded-full text-purple-900 border border-purple-900"
                  onClick={() => setInputValue("Insurance claim help")}
                >
                  Insurance Claims
                </button>
                <button 
                  className="text-xs bg-orange-200 hover:bg-orange-300 px-2 py-1 rounded-full text-orange-900 border border-orange-900"
                  onClick={() => setInputValue("Colorado roofing materials")}
                >
                  Materials
                </button>
                <button 
                  className="text-xs bg-yellow-200 hover:bg-yellow-300 px-2 py-1 rounded-full text-yellow-900 border border-yellow-900"
                  onClick={() => setInputValue("Roofing costs Colorado")}
                >
                  Pricing
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
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-r-md transition-colors"
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
