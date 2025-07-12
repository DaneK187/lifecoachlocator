"use client";
import { useState, useRef, useEffect } from "react";

const demoCoach = {
  name: "Jane Doe",
  avatar: "https://randomuser.me/api/portraits/women/1.jpg",
};

const demoCoachReplies = [
  "Hi there! I'm Jane, your personal coach. I see you're feeling stuck—let's chat. What's on your mind today?",
  "That sounds tough, but you're not alone. Can you tell me a bit more about what's been most challenging?",
  "Thank you for sharing. Let's explore some small steps you could take this week."
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: intro, 1: finding, 2: consent, 3: chat, 4: end
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [coachMsgIdx, setCoachMsgIdx] = useState(0);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  // Simulate coach typing after user sends message
  useEffect(() => {
    if (step === 3 && messages.length && messages[messages.length - 1].from === "user" && coachMsgIdx < demoCoachReplies.length) {
      setTyping(true);
      const timeout = setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { from: "coach", text: demoCoachReplies[coachMsgIdx] },
        ]);
        setCoachMsgIdx((idx) => idx + 1);
        setTyping(false);
      }, 1500 + Math.random() * 1000);
      return () => clearTimeout(timeout);
    }
    if (coachMsgIdx === demoCoachReplies.length && step === 3) {
      // End after last coach message
      setTimeout(() => setStep(4), 2500);
    }
  }, [messages, coachMsgIdx, step]);

  const handleStart = () => setOpen(true);

  const handleCTA = () => {
    setStep(1);
    setTimeout(() => setStep(2), 2000 + Math.random() * 1000);
  };

  const handleConsent = () => {
    setStep(3);
    setMessages([
      { from: "coach", text: demoCoachReplies[0] },
    ]);
    setCoachMsgIdx(1);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: userInput.trim() },
    ]);
    setUserInput("");
  };

  return (
    <>
      {/* Floating chat bubble */}
      {!open && (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 hover:bg-blue-700 transition"
          onClick={handleStart}
          aria-label="Open live chat"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C6.477 3 2 6.805 2 11c0 1.61.67 3.13 1.89 4.44-.13.7-.47 2.13-.7 2.97-.1.36.25.68.6.57.86-.27 2.36-.75 3.04-.97C8.7 19.33 10.29 19.7 12 19.7c5.523 0 10-3.805 10-8.7S17.523 3 12 3Z"/></svg>
        </button>
      )}
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-4 right-4 w-96 max-w-full bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-blue-200">
          <div className="bg-blue-600 text-white px-6 py-4 font-bold text-lg flex items-center justify-between">
            <span>Live Coach Chat</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="ml-2 text-white hover:text-blue-200">×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" ref={chatRef} style={{ minHeight: 220, maxHeight: 350 }}>
            {step === 0 && (
              <>
                <div className="text-center text-lg font-semibold mb-2">Tell us what's going on—we'll find your perfect coach right now.</div>
                <div className="text-center text-gray-600 mb-4">No quizzes. No forms. Just speak or type what you're facing. We'll instantly connect you with a real coach who's ready to help.</div>
                <textarea
                  className="w-full border rounded-lg p-3 mb-3 text-black bg-white/90 focus:bg-white min-h-[70px]"
                  placeholder="e.g., I'm feeling stuck in my career. I've lost motivation and don't know what direction to take."
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleCTA(); } }}
                  autoFocus
                />
                <button
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={handleCTA}
                  disabled={!userInput.trim()}
                >
                  Chat With My Coach Now
                </button>
              </>
            )}
            {step === 1 && (
              <div className="flex flex-col items-center justify-center min-h-[180px]">
                <span className="text-2xl mb-2 animate-pulse">🔍</span>
                <div className="text-blue-700 font-semibold">Finding your perfect coach, one moment...</div>
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col items-center justify-center min-h-[180px]">
                <span className="text-3xl mb-2">✅</span>
                <div className="text-blue-700 font-semibold mb-2">Consent Required</div>
                <div className="text-gray-700 text-center mb-4 text-sm">
                  By continuing, you agree your anonymous message can be used to improve your chat experience. Nothing personal is saved or shared.
                </div>
                <button
                  className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
                  onClick={handleConsent}
                >
                  Agree & Start Chat
                </button>
              </div>
            )}
            {step === 3 && (
              <>
                <div className="text-center text-gray-500 text-xs mb-2">🎉 You're now connected with your life coach, Jane Doe! You have 5 minutes free to chat right now.</div>
                <div className="space-y-2">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] ${msg.from === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"} rounded-xl p-3 mb-1`}>{msg.text}</div>
                    </div>
                  ))}
                  {typing && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-xl p-3 italic opacity-70">Coach Jane is typing...</div>
                    </div>
                  )}
                </div>
              </>
            )}
            {step === 4 && (
              <div className="text-center text-blue-700 font-semibold py-8">
                Enjoying your session? <br />Keep chatting or schedule more time!
              </div>
            )}
          </div>
          {step === 3 && (
            <div className="p-3 border-t bg-gray-50 flex gap-2">
              <textarea
                className="flex-1 border rounded-lg p-2 text-black bg-white/90 focus:bg-white min-h-[38px] resize-none"
                placeholder="Type your message..."
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                autoFocus
              />
              <button
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={handleSend}
                disabled={!userInput.trim() || typing}
              >Send</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
