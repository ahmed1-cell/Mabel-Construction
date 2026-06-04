import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface QA {
  question: string;
  answer: string;
  icon?: string;
}

const predefinedQA: QA[] = [
  {
    question: "What services does Mabel Construction offer?",
    answer:
      "We offer residential, commercial, and industrial construction services including design, project management, and renovation.",
    icon: "🏗️",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach us via email at info@mabelconstruction.com or call us at 763-777-1962.",
    icon: "📞",
  },
  {
    question: "Do you provide free project estimates?",
    answer:
      "Yes! We provide free consultations and quotes based on your project requirements.",
    icon: "💰",
  },
  {
    question: "Where are you located?",
    answer:
      "Our head office is located in 10973 bluebird street Coon rapids mn 55433. We serve the surrounding areas — contact us for details.",
    icon: "📍",
  },
  {
    question: "What are your working hours?",
    answer: "We're open Monday to Saturday, from 9:00 AM to 6:00 PM.",
    icon: "⏰",
  },
];

export default function ChatBot(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<QA | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (selected) {
      setShowAnswer(false);
      setTyping(true);
      const timer = setTimeout(() => {
        setTyping(false);
        setShowAnswer(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selected]);

  const handleQuestionClick = (qa: QA) => {
    setSelected(qa);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelected(null);
      setShowAnswer(false);
    }, 300);
  };

  const handleBack = () => {
    setSelected(null);
    setShowAnswer(false);
  };

  return (
    <>
      {/* Floating Button with Pulse Animation */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-violet-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Chatbot toggle"
        >
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20"></div>
          
          {/* Icon */}
          <div className="relative z-10">
            {open ? (
              <X size={24} className="transition-transform duration-300" />
            ) : (
              <MessageCircle size={24} className="transition-transform duration-300 group-hover:rotate-12" />
            )}
          </div>
          
          {/* Notification Badge */}
          {!open && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              5
            </div>
          )}
        </button>
      </div>

      {/* Chat Window with Glassmorphism */}
      {open && (
        <div 
          className="fixed bottom-24 right-6 w-[300px] max-h-[70vh] z-50 animate-in slide-in-from-bottom-4 duration-300"
          style={{ animation: "slideUp 0.3s ease-out" }}
        >
          {/* Gradient Border Container */}
          <div className="p-[2px] bg-gradient-to-br from-purple-400 via-purple-500 to-violet-500 rounded-3xl shadow-2xl">
            <div className="bg-slate-900 rounded-3xl overflow-hidden backdrop-blur-xl">
              
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-3 relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-75"></div>
                </div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Sparkles className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">MabelBot</h3>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white/90 text-xs">Online</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                    aria-label="Close chat"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-3 bg-slate-900 min-h-[250px] max-h-[40vh] overflow-y-auto">
                {!selected ? (
                  <>
                    {/* Welcome Message */}
                    <div className="mb-3 animate-in fade-in duration-500">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-2.5 shadow-lg">
                        <p className="text-slate-200 text-xs leading-relaxed">
                          👋 Hi! I'm MabelBot. 
                          <span className="block mt-1 text-purple-400 font-medium">
                            How can I help?
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Question Cards */}
                    <div className="space-y-2">
                      {predefinedQA.map((qa, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuestionClick(qa)}
                          className="w-full group"
                          style={{ 
                            animation: `slideIn 0.3s ease-out ${i * 0.1}s backwards` 
                          }}
                        >
                          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 rounded-lg p-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="flex items-start gap-2">
                              <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {qa.icon}
                              </span>
                              <p className="text-slate-200 text-xs font-medium text-left group-hover:text-purple-400 transition-colors leading-relaxed">
                                {qa.question}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="space-y-2.5">
                    {/* User Question Bubble */}
                    <div className="flex justify-end animate-in slide-in-from-right duration-300">
                      <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl rounded-tr-sm p-2.5 max-w-[85%] shadow-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-base">{selected.icon}</span>
                          <p className="text-white text-xs font-medium">
                            {selected.question}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    {typing && (
                      <div className="flex justify-start">
                        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl rounded-tl-sm p-2.5 shadow-lg">
                          <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-75"></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bot Answer Bubble */}
                    {showAnswer && (
                      <div className="flex justify-start animate-in slide-in-from-left duration-300">
                        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl rounded-tl-sm p-2.5 max-w-[85%] shadow-lg">
                          <p className="text-slate-200 text-xs leading-relaxed">
                            {selected.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700/50 p-3">
                <div className="flex items-center justify-between gap-3">
                  {selected ? (
                    <button
                      onClick={handleBack}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors font-medium flex items-center gap-1">
                      ← Back
                    </button>
                  ) : (
                    <div className="text-xs text-slate-500">
                      Powered by AI
                    </div>
                  )}

                  <div className="flex gap-2">
                    <a
                      href="/contact"
                      className="text-xs bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 px-3 py-1.5 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </>
  );
}