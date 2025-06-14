import { Router, Request, Response } from 'express';
import natural from 'natural';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Initialize Natural language processing tools
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

// In-memory conversation storage
const conversations = new Map();

// Enhanced knowledge base
const roofingKnowledge = {
  emergencyKeywords: [
    'leak', 'water damage', 'collapsed', 'emergency', 'urgent', 
    'storm damage', 'tree fell', 'hole', 'flooding', 'water coming in'
  ],
  
  problemTypes: {
    'missing_shingles': {
      urgency: 'medium',
      timeline: '2-4 weeks',
      costRange: '$300-800',
      seasonalFactors: ['wind damage', 'age deterioration'],
      questions: [
        'How many shingles are missing?',
        'Can you see the underlying roof deck?',
        'Has there been recent severe weather?'
      ]
    },
    'leak': {
      urgency: 'high',
      timeline: '24-48 hours',
      costRange: '$400-1500',
      seasonalFactors: ['ice dams', 'heavy rain', 'snow melt'],
      questions: [
        'Where exactly is the water coming from?',
        'Is it actively leaking now?',
        'How long has this been happening?'
      ]
    },
    'gutter_issues': {
      urgency: 'low',
      timeline: '1-3 months',
      costRange: '$200-1200',
      seasonalFactors: ['fall leaf blockage', 'ice formation'],
      questions: [
        'Are gutters overflowing or sagging?',
        'When were they last cleaned?',
        'Do you see any detachment points?'
      ]
    },
    'storm_damage': {
      urgency: 'high',
      timeline: '1-2 weeks',
      costRange: '$1000-5000+',
      seasonalFactors: ['hail', 'high winds', 'fallen trees'],
      questions: [
        'What type of storm occurred?',
        'When did the damage happen?',
        'Have you contacted your insurance company?'
      ]
    },
    'hail_damage': {
      urgency: 'medium',
      timeline: '2-6 weeks',
      costRange: '$5000-15000',
      seasonalFactors: ['Colorado hail season'],
      questions: [
        'What size was the hail?',
        'Do you see dents on metal surfaces?',
        'Has an adjuster inspected the damage?'
      ]
    }
  },

  responses: {
    greeting: [
      "Hello! I'm Spencer Roofing's AI assistant. I'm here to help with any roofing questions or concerns you might have. What brings you here today?",
      "Hi there! I'm here to help you with your roofing needs. I've assisted thousands of Denver area homeowners. What's going on with your roof today?",
      "Welcome! I'm Spencer Roofing's virtual assistant. Whether it's an emergency or routine maintenance, I'm here to help. How can I assist you?"
    ],
    
    emergency: "🚨 This sounds like an emergency! For immediate assistance, please call us at (720) 360-8546. Our emergency line is available 24/7. In the meantime, if there's active water intrusion, try to contain it with buckets and tarps if it's safe to do so.",
    
    appointment_confirmation: "Perfect! I'm connecting you with our scheduling team for a priority appointment. You should receive a call within the next 2 hours to confirm your appointment time."
  }
};



// Conversation state management
class ConversationManager {
  conversations = new Map();

  createConversation(sessionId: string) {
    const conversation = {
      id: sessionId,
      messages: [],
      state: {
        stage: 'greeting',
        customerInfo: {},
        problemDetails: {},
        urgency: 'normal',
        leadScore: 0,
        lastActivity: new Date()
      }
    };
    this.conversations.set(sessionId, conversation);
    return conversation;
  }

  getConversation(sessionId: string) {
    return this.conversations.get(sessionId);
  }

  updateConversation(sessionId: string, updates: any) {
    const conversation = this.conversations.get(sessionId);
    if (conversation) {
      conversation.state = { ...conversation.state, ...updates, lastActivity: new Date() };
      this.conversations.set(sessionId, conversation);
    }
    return conversation;
  }

  addMessage(sessionId: string, message: any) {
    const conversation = this.conversations.get(sessionId);
    if (conversation) {
      conversation.messages.push({
        id: uuidv4(),
        ...message,
        timestamp: new Date()
      });
      conversation.state.lastActivity = new Date();
      this.conversations.set(sessionId, conversation);
    }
  }
}

const conversationManager = new ConversationManager();

// AI Response Generator
class RoofingAI {
  knowledge = roofingKnowledge;

  analyzeMessage(text: string) {
    const tokens = tokenizer.tokenize(text.toLowerCase()) || [];
    const stems = tokens.map((token: string) => stemmer.stem(token));
    
    return {
      urgency: this.detectUrgency(text),
      problemType: this.identifyProblem(text),
      intent: this.detectIntent(stems),
      entities: this.extractEntities(text),
      sentiment: this.analyzeSentiment(text)
    };
  }

  detectUrgency(text: string) {
    const lowerText = text.toLowerCase();
    
    // Emergency detection
    const emergencyWords = this.knowledge.emergencyKeywords;
    if (emergencyWords.some(word => lowerText.includes(word))) {
      return 'emergency';
    }
    
    // High urgency indicators
    const highUrgencyWords = ['asap', 'soon', 'quickly', 'today', 'now'];
    if (highUrgencyWords.some(word => lowerText.includes(word))) {
      return 'high';
    }
    
    // Low urgency indicators
    const lowUrgencyWords = ['eventually', 'someday', 'planning', 'future'];
    if (lowUrgencyWords.some(word => lowerText.includes(word))) {
      return 'low';
    }
    
    return 'medium';
  }

  identifyProblem(text: string) {
    const lowerText = text.toLowerCase();
    
    for (const [problemKey, problemData] of Object.entries(this.knowledge.problemTypes)) {
      const keywords = problemKey.split('_');
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        return { type: problemKey, data: problemData };
      }
    }
    
    return null;
  }

  detectIntent(stems: string[]) {
    const intents = {
      schedule: ['schedul', 'appoint', 'meet', 'visit', 'inspect'],
      quote: ['cost', 'price', 'quot', 'estimat', 'much'],
      emergency: ['help', 'emerg', 'urgent', 'fix'],
      information: ['what', 'how', 'why', 'when', 'tell', 'explain']
    };

    for (const [intent, keywords] of Object.entries(intents)) {
      if (keywords.some(keyword => stems.includes(keyword))) {
        return intent;
      }
    }
    
    return 'general';
  }

  extractEntities(text: string) {
    const entities: any = {};
    
    // Extract potential addresses
    const addressRegex = /\d+\s+[A-Za-z\s]+(?:street|st|avenue|ave|road|rd|drive|dr|lane|ln|way|court|ct)/gi;
    const addresses = text.match(addressRegex);
    if (addresses) entities.address = addresses[0];
    
    // Extract phone numbers
    const phoneRegex = /(\d{3}[-.]?\d{3}[-.]?\d{4})/g;
    const phones = text.match(phoneRegex);
    if (phones) entities.phone = phones[0];
    
    // Extract time references
    const timeRegex = /(today|tomorrow|this week|next week|monday|tuesday|wednesday|thursday|friday|saturday|sunday)/gi;
    const timeRefs = text.match(timeRegex);
    if (timeRefs) entities.timePreference = timeRefs[0];
    
    return entities;
  }

  analyzeSentiment(text: string) {
    // Simple sentiment analysis
    const positiveWords = ['good', 'great', 'excellent', 'happy', 'satisfied', 'pleased'];
    const negativeWords = ['bad', 'terrible', 'awful', 'frustrated', 'angry', 'disappointed'];
    
    const lowerText = text.toLowerCase();
    const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
    const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
    
    if (positiveCount > negativeCount) return 'positive';
    if (negativeCount > positiveCount) return 'negative';
    return 'neutral';
  }

  generateResponse(analysis: any, conversationState: any) {
    const { urgency, problemType, intent, entities, sentiment } = analysis;
    
    // Handle emergency cases
    if (urgency === 'emergency') {
      return {
        text: this.knowledge.responses.emergency,
        options: [
          { text: "Call Now", action: "call", data: "7203608546" },
          { text: "I'll handle it myself for now", action: "continue" }
        ],
        updateState: { urgency: 'emergency', stage: 'emergency_handled' }
      };
    }

    // Handle specific problems
    if (problemType) {
      const problem = problemType.data;
      const response = `I understand you're dealing with ${problemType.type.replace('_', ' ')}. Based on my experience, this is typically a ${problem.urgency} priority issue. Here in Colorado, we usually recommend addressing this within ${problem.timeline}. The typical cost range is ${problem.costRange}.

Would you like me to help you schedule a free inspection, or do you have specific questions about the repair process?`;

      return {
        text: response,
        options: [
          { text: "Schedule Free Inspection", action: "schedule" },
          { text: "Learn about repair process", action: "explain_process", data: problemType.type },
          { text: "Get cost details", action: "cost_breakdown", data: problemType.type }
        ],
        updateState: { 
          problemDetails: problemType, 
          stage: 'problem_identified',
          leadScore: conversationState.leadScore + 20
        }
      };
    }

    // Handle scheduling intent
    if (intent === 'schedule') {
      return {
        text: "Great choice! Our free inspections are thorough and typically take 30-45 minutes. We'll provide you with a detailed report and photos. What's your address, and when would be a good time for you?",
        options: [
          { text: "This week", action: "schedule_timeframe", data: "this_week" },
          { text: "Next week", action: "schedule_timeframe", data: "next_week" },
          { text: "I'm flexible", action: "schedule_timeframe", data: "flexible" }
        ],
        updateState: { 
          stage: 'scheduling',
          leadScore: conversationState.leadScore + 30
        }
      };
    }

    // Handle quote requests
    if (intent === 'quote') {
      return {
        text: "I'd be happy to help you understand pricing! Roofing costs depend on several factors including size, materials, and complexity. To give you an accurate estimate, we'd need to do a free inspection. Would you like to learn about our different material options first, or shall we schedule an inspection?",
        options: [
          { text: "Learn about materials", action: "materials_info" },
          { text: "Schedule inspection for quote", action: "schedule" },
          { text: "Give me a rough estimate", action: "rough_estimate" }
        ],
        updateState: { 
          stage: 'pricing_discussion',
          leadScore: conversationState.leadScore + 15
        }
      };
    }

    // Default conversational responses based on stage
    switch (conversationState.stage) {
      case 'greeting':
        const greetings = this.knowledge.responses.greeting;
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        return {
          text: randomGreeting,
          options: [
            { text: "I see damage on my roof", action: "damage_report" },
            { text: "I need maintenance", action: "maintenance" },
            { text: "I want a roof replacement", action: "replacement" },
            { text: "I have questions about materials", action: "materials_info" }
          ],
          updateState: { stage: 'problem_identification' }
        };
        
      default:
        return {
          text: "Thanks for that information. To help you better, could you be more specific about the issue you're experiencing? For example, are you seeing any visible damage, leaks, or other concerns?",
          options: [
            { text: "There's visible damage", action: "damage_report" },
            { text: "I have a leak", action: "leak_report" },
            { text: "Just general maintenance", action: "maintenance" }
          ],
          updateState: { stage: 'problem_identification' }
        };
    }
  }
}

const roofingAI = new RoofingAI();

// Chat endpoint
router.post('/chat', async (req: Request, res: Response) => {
  try {
    const { message, sessionId } = req.body;
    
    if (!message || !sessionId) {
      return res.status(400).json({ error: 'Message and sessionId are required' });
    }

    // Get or create conversation
    let conversation = conversationManager.getConversation(sessionId);
    if (!conversation) {
      conversation = conversationManager.createConversation(sessionId);
    }

    // Add user message
    conversationManager.addMessage(sessionId, {
      type: 'user',
      text: message
    });

    // Analyze message and generate response
    const analysis = roofingAI.analyzeMessage(message);
    const response = roofingAI.generateResponse(analysis, conversation.state);

    // Update conversation state
    if (response.updateState) {
      conversationManager.updateConversation(sessionId, response.updateState);
    }

    // Add assistant response
    conversationManager.addMessage(sessionId, {
      type: 'assistant',
      text: response.text,
      options: response.options || []
    });

    res.json({
      response: response.text,
      options: response.options || [],
      conversationState: conversation.state,
      analysis: {
        urgency: analysis.urgency,
        intent: analysis.intent,
        entities: analysis.entities
      }
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get conversation history
router.get('/conversation/:sessionId', (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const conversation = conversationManager.getConversation(sessionId);
    
    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    res.json(conversation);
  } catch (error) {
    console.error('Conversation retrieval error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle action-based responses
router.post('/action', async (req: Request, res: Response) => {
  try {
    const { action, data, sessionId } = req.body;
    
    let conversation = conversationManager.getConversation(sessionId);
    if (!conversation) {
      conversation = conversationManager.createConversation(sessionId);
    }

    let response;
    
    switch (action) {
      case 'call':
        response = {
          text: "Perfect! Please call us at (720) 360-8546. Our team is standing by to help you with your roofing emergency.",
          options: []
        };
        break;
        
      case 'schedule':
        response = {
          text: "Excellent! I'm connecting you with our scheduling system. You should receive a call within 2 hours to confirm your appointment. In the meantime, is there anything else I can help you with?",
          options: [
            { text: "What should I expect during the inspection?", action: "inspection_info" },
            { text: "How do I prepare for the inspection?", action: "preparation_info" }
          ]
        };
        conversationManager.updateConversation(sessionId, { 
          stage: 'appointment_scheduled',
          leadScore: conversation.state.leadScore + 50
        });
        break;
        
      case 'materials_info':
        response = {
          text: "We offer several high-quality roofing materials perfect for Colorado's climate:\n\n• **Asphalt Shingles**: Most popular, great value, 20-30 year lifespan\n• **Metal Roofing**: Excellent for hail resistance, 40-70 year lifespan\n• **Tile Roofing**: Beautiful, durable, excellent for our climate\n• **Composite Materials**: Modern options combining durability and aesthetics\n\nWould you like details about any specific material?",
          options: [
            { text: "Tell me about metal roofing", action: "metal_info" },
            { text: "Asphalt shingle options", action: "asphalt_info" },
            { text: "What's best for my situation?", action: "material_recommendation" }
          ]
        };
        break;
        
      default:
        response = {
          text: "I understand. How else can I help you today?",
          options: [
            { text: "Schedule an inspection", action: "schedule" },
            { text: "Learn about our services", action: "services_info" },
            { text: "Get emergency help", action: "emergency_help" }
          ]
        };
    }

    // Add assistant response
    conversationManager.addMessage(sessionId, {
      type: 'assistant',
      text: response.text,
      options: response.options || []
    });

    res.json(response);

  } catch (error) {
    console.error('Action error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;