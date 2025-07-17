import React, { useState, useEffect, useRef } from 'react';
import { Send, Rocket, Star, TrendingUp, DollarSign, Award, Users, Building, Bot, MessageSquare, ArrowLeft, Code, Globe, BookOpen, Target, Briefcase, Lightbulb, Shield, Heart, Leaf, Smartphone, Camera } from 'lucide-react';

const iStartChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const messagesEndRef = useRef(null);

  const welcomeText = "Welcome to iStart Rajasthan";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < welcomeText.length) {
        setTypewriterText(welcomeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Expanded keywords data with icons and answers
  const keywordData = {
    "Additional Booster": {
      icon: <Rocket className="w-5 h-5" />,
      answer: "Additional Booster is extra help or support given by iStart if your startup performs well, like more funding, mentorship, or visibility."
    },
    "Booster": {
      icon: <Star className="w-5 h-5" />,
      answer: "A booster refers to extra help provided to strong startups—such as additional funding, expedited support, or specialized guidance — to help them grow rapidly."
    },
    "Performance Booster": {
      icon: <TrendingUp className="w-5 h-5" />,
      answer: "Performance Booster is extra money or support given by iStart if your startup is doing well, like growing fast, getting a better QRate, or hiring more people."
    },
    "Investment": {
      icon: <DollarSign className="w-5 h-5" />,
      answer: "Investment means giving money to a business to help it grow, usually in return for a share (equity) or profit later."
    },
    "Grant": {
      icon: <Award className="w-5 h-5" />,
      answer: "Free money given by the government to support your startup (no need to return)."
    },
    "Mentoring": {
      icon: <Users className="w-5 h-5" />,
      answer: "Getting guidance and advice from an expert to grow your startup."
    },
    "Employment Booster": {
      icon: <Building className="w-5 h-5" />,
      answer: "Employment Booster is extra support given to startups that create more jobs, especially for youth, women, or in rural areas."
    },
    "Patent": {
      icon: <Shield className="w-5 h-5" />,
      answer: "Legal right to protect your invention so others can't copy it."
    },
    "Networking": {
      icon: <Users className="w-5 h-5" />,
      answer: "Networking means meeting and connecting with people who can help your business, like investors, mentors, other startups, or customers."
    },
    "Startup Funding": {
      icon: <DollarSign className="w-5 h-5" />,
      answer: "Startup funding is money provided to help start and grow a new business. It can come from government grants, investors, or loans."
    },
    "Incubation": {
      icon: <Lightbulb className="w-5 h-5" />,
      answer: "Incubation is a program that helps new startups grow by providing office space, mentorship, funding, and business support."
    },
    "Technology": {
      icon: <Code className="w-5 h-5" />,
      answer: "Technology refers to tools, software, and digital solutions that help businesses operate more efficiently and reach customers."
    },
    "Digital Marketing": {
      icon: <Globe className="w-5 h-5" />,
      answer: "Digital marketing is promoting your business online through websites, social media, emails, and digital advertisements."
    },
    "Business Plan": {
      icon: <BookOpen className="w-5 h-5" />,
      answer: "A business plan is a detailed document that explains your business idea, target market, financial projections, and growth strategy."
    },
    "Market Research": {
      icon: <Target className="w-5 h-5" />,
      answer: "Market research is studying your potential customers and competitors to understand what people want and need."
    },
    "Entrepreneurship": {
      icon: <Briefcase className="w-5 h-5" />,
      answer: "Entrepreneurship is the process of starting and running your own business, taking risks to create something new and valuable."
    },
    "Healthcare Tech": {
      icon: <Heart className="w-5 h-5" />,
      answer: "Healthcare technology involves using digital tools and innovations to improve medical services, patient care, and health outcomes."
    },
    "AgriTech": {
      icon: <Leaf className="w-5 h-5" />,
      answer: "AgriTech uses technology to improve farming methods, crop yields, and agricultural processes for better food production."
    },
    "Mobile Apps": {
      icon: <Smartphone className="w-5 h-5" />,
      answer: "Mobile apps are software applications designed to run on smartphones and tablets, helping businesses reach customers directly."
    },
    "Media Production": {
      icon: <Camera className="w-5 h-5" />,
      answer: "Media production involves creating content like videos, graphics, animations, and multimedia for entertainment or marketing purposes."
    }
  };

  // All keywords with their answers for search functionality
  const allKeywords = {
    "additional booster": "Additional Booster is extra help or support given by iStart if your startup performs well, like more funding, mentorship, or visibility.",
    "booster": "A booster refers to extra help provided to strong startups—such as additional funding, expedited support, or specialized guidance — to help them grow rapidly.",
    "performance booster": "Performance Booster is extra money or support given by iStart if your startup is doing well, like growing fast, getting a better QRate, or hiring more people.",
    "employment booster": "Employment Booster is extra support given to startups that create more jobs, especially for youth, women, or in rural areas.",
    "thrust booster": "Thrust Booster is a special support given to startups working in important focus areas like health, education, agriculture, or the environment.",
    "investment": "Investment means giving money to a business to help it grow, usually in return for a share (equity) or profit later.",
    "startup funding": "Startup funding is money provided to help start and grow a new business. It can come from government grants, investors, or loans.",
    "aif": "AIF stands for Alternative Investment Fund. It is a pool of money collected from investors and used to invest in startups, real estate, or other special projects.",
    "intellectual": "Intellectual Property (IP) means your original ideas, creations, or inventions—like a logo, app design, product, or brand name—that you legally own.",
    "quality": "Quality means how good, useful, and reliable a product or service is.",
    "certification": "Certification is an official proof that something (like a product, person, or company) meets certain rules or standards.",
    "infrastructure": "Infrastructure means the basic physical things needed to run a place or business, like roads, buildings, electricity, internet, and offices.",
    "networking": "Networking means meeting and connecting with people who can help your business, like investors, mentors, other startups, or customers.",
    "exemptions": "Exemptions mean you don't have to follow certain rules or pay some fees or taxes for a limited time.",
    "exposure": "Exposure means your startup gets seen or noticed by more people, like investors, customers, or media.",
    "corporate": "Corporate means a big company or business that is officially registered and usually has many employees and departments.",
    "venture": "A venture is a new business or project, usually started with an idea, some risk, and the hope of earning a profit.",
    "venture capitalist": "A Venture Capitalist (VC) is a person or company that gives money to startups with big growth potential, in return for a share in the business.",
    "partnership": "A partnership is a type of business where two or more people work together, share the work, and divide the profit or loss.",
    "talent": "Talent means a natural skill or ability to do something well, like coding, designing, speaking, or solving problems.",
    "patent": "Legal right to protect your invention so others can't copy it.",
    "mentoring": "Getting guidance and advice from an expert to grow your startup.",
    "upskills": "Learning new or better skills to improve your work.",
    "skills": "Your ability or talent to do a specific task well.",
    "ambassador program": "People who promote a program or brand in schools, colleges, or online.",
    "procurement": "When the government or companies buy products/services from startups.",
    "evaluation": "Checking and judging the quality or progress of something.",
    "nominee": "A person chosen or named to represent or receive something.",
    "grant": "Free money given by the government to support your startup (no need to return).",
    "pre-seeds": "The very early stage of a startup, before earning money or getting big funding.",
    "revenue": "Total money earned by selling your product or service.",
    "ebazar": "An online marketplace to sell or buy products, often run by government/startup portals.",
    "enterprise": "Another word for business or company.",
    "annual turnover": "Total sales or income of a company in one year.",
    "stakeholder": "A person or group who is affected by or interested in a business (e.g. customer, founder, investor).",
    "avgc-xr": "Short for Animation, Visual Effects, Gaming, Comics, and Extended Reality (like AR/VR)—a creative tech field.",
    "workshops": "Short training programs to learn or improve skills.",
    "robotics": "Making and using robots to do tasks or solve problems.",
    "ceo": "The top leader of a company who makes the big decisions.",
    "multimedia": "Using text, images, video, sound, and animation together to share ideas or stories.",
    "vfx": "Computer-made effects are used in movies or games to show things that can't be filmed in real life.",
    "cloud": "Storing and using data or apps online instead of on your computer.",
    "msme": "MSME is short for Micro, Small, and Medium Enterprise. Small businesses that run with limited money and staff.",
    "logistics parks": "Big spaces with storage, transport, and delivery facilities to help move goods faster and cheaper.",
    "incubation": "Incubation is a program that helps new startups grow by providing office space, mentorship, funding, and business support.",
    "technology": "Technology refers to tools, software, and digital solutions that help businesses operate more efficiently and reach customers.",
    "digital marketing": "Digital marketing is promoting your business online through websites, social media, emails, and digital advertisements.",
    "business plan": "A business plan is a detailed document that explains your business idea, target market, financial projections, and growth strategy.",
    "market research": "Market research is studying your potential customers and competitors to understand what people want and need.",
    "entrepreneurship": "Entrepreneurship is the process of starting and running your own business, taking risks to create something new and valuable.",
    "healthcare tech": "Healthcare technology involves using digital tools and innovations to improve medical services, patient care, and health outcomes.",
    "agritech": "AgriTech uses technology to improve farming methods, crop yields, and agricultural processes for better food production.",
    "mobile apps": "Mobile apps are software applications designed to run on smartphones and tablets, helping businesses reach customers directly.",
    "media production": "Media production involves creating content like videos, graphics, animations, and multimedia for entertainment or marketing purposes.",
    "artificial intelligence": "AI is technology that makes machines think and learn like humans to solve problems and make decisions.",
    "machine learning": "A type of AI where computers learn from data to make predictions or decisions without being specifically programmed.",
    "blockchain": "A secure digital ledger technology that records transactions across multiple computers, making them transparent and tamper-proof.",
    "fintech": "Financial technology that uses digital innovations to improve banking, payments, lending, and other financial services.",
    "edtech": "Educational technology that uses digital tools to enhance learning and teaching experiences.",
    "e-commerce": "Buying and selling products or services online through websites or mobile apps.",
    "startup ecosystem": "The network of startups, investors, mentors, government support, and resources that help new businesses grow.",
    "pitch deck": "A presentation that explains your business idea to potential investors or partners in a clear and compelling way.",
    "mvp": "Minimum Viable Product - the simplest version of your product that you can launch to test with real customers.",
    "scalability": "The ability of a business to grow and handle more customers or sales without major changes to its structure."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeywordClick = (keyword) => {
    setShowWelcome(false);
    const userMessage = {
      type: 'user',
      content: keyword,
      timestamp: new Date()
    };
    
    const botMessage = {
      type: 'bot',
      content: keywordData[keyword].answer,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleBackToStart = () => {
    setShowWelcome(true);
    setMessages([]);
    setInputText('');
    setIsTyping(false);
  };

  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Exact match
    if (allKeywords[input]) {
      return allKeywords[input];
    }
    
    // Partial match
    for (const [keyword, answer] of Object.entries(allKeywords)) {
      if (keyword.includes(input) || input.includes(keyword)) {
        return answer;
      }
    }
    
    // No match found
    return "I'm sorry, I don't have information about that topic. Please try asking about our available services like boosters, investment, grants, mentoring, or other startup-related topics.";
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setShowWelcome(false);
      setIsTyping(true);
      
      const userMessage = {
        type: 'user',
        content: inputText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      
      // Simulate typing delay
      setTimeout(() => {
        const botResponse = findBestMatch(inputText);
        const botMessage = {
          type: 'bot',
          content: botResponse,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="header-content">
          <div className="header-top">
            <h1 className="typewriter">{typewriterText}</h1>
            <div className="header-controls">
              {!showWelcome && (
                <button className="back-btn" onClick={handleBackToStart}>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div className="language-toggle">
                <span className="lang-btn active">EN</span>
                <span className="lang-btn">हि</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chatbot-body">
        {showWelcome ? (
          <div className="welcome-section">
            <div className="quick-help">
              <h3>Quick Help Topics:</h3>
              <div className="keyword-grid">
                {Object.entries(keywordData).map(([keyword, data]) => (
                  <button
                    key={keyword}
                    className="keyword-btn"
                    onClick={() => handleKeywordClick(keyword)}
                  >
                    {data.icon}
                    <span>{keyword}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.type === 'bot' && (
                  <div className="bot-avatar">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div className="message-content">
                  {message.content}
                </div>
                {message.type === 'user' && (
                  <div className="user-avatar">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="bot-avatar">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="chatbot-footer">
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="chat-input"
          />
          <button onClick={handleSendMessage} className="send-btn">
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="footer-text">Click on any topic above or type your question below.</p>
      </div>

      <style jsx>{`
        .chatbot-container {
          max-width: 500px;
          margin: 20px auto;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          height: 600px;
          display: flex;
          flex-direction: column;
        }

        .chatbot-header {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          padding: 20px;
          color: white;
          text-align: center;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-top h1 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .typewriter {
          border-right: 3px solid white;
          white-space: nowrap;
          overflow: hidden;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { border-color: white; }
          51%, 100% { border-color: transparent; }
        }

        .header-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .language-toggle {
          display: flex;
          gap: 5px;
        }

        .lang-btn {
          background: rgba(255, 255, 255, 0.2);
          padding: 5px 10px;
          border-radius: 15px;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .lang-btn.active {
          background: rgba(255, 255, 255, 0.3);
        }

        .chatbot-body {
          flex: 1;
          background: #f8fafc;
          overflow-y: auto;
          padding: 20px;
        }

        .welcome-section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .quick-help h3 {
          color: #374151;
          font-size: 16px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .keyword-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .keyword-btn {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border: none;
          padding: 12px 8px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
          text-align: center;
        }

        .keyword-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
        }

        .chat-messages {
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-height: 300px;
        }

        .message {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-content {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 18px;
          word-wrap: break-word;
          line-height: 1.4;
        }

        .message.bot .message-content {
          background: white;
          color: #374151;
          border-bottom-left-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border-bottom-right-radius: 6px;
        }

        .bot-avatar, .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bot-avatar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .user-avatar {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        .typing {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .typing span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing span:nth-child(1) { animation-delay: -0.32s; }
        .typing span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }

        .chatbot-footer {
          background: white;
          padding: 15px 20px;
          border-top: 1px solid #e5e7eb;
        }

        .input-container {
          display: flex;
          gap: 10px;
          margin-bottom: 8px;
        }

        .chat-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 25px;
          outline: none;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        .chat-input:focus {
          border-color: #4facfe;
          box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
        }

        .send-btn {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
        }

        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
        }

        .footer-text {
          text-align: center;
          color: #6b7280;
          font-size: 12px;
          margin: 0;
        }

        .chatbot-body::-webkit-scrollbar {
          width: 6px;
        }

        .chatbot-body::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        .chatbot-body::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .chatbot-body::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default iStartChatbot;