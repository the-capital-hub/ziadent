
import { useState } from "react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  Minimize2,
} from "lucide-react";

import "./AIButton.css";

function AIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const suggestions = [
    "Explore your dental products",
    "Tell me about digital dentistry",
    "How can I work with ZiaDent?",
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    // AI API will be connected in the backend phase
    console.log("User message:", message);

    setMessage("");
  };

  return (
    <div className="zd-ai-wrapper">

      {/* CHAT PANEL */}

      {isOpen && (
        <div className="zd-ai-panel">

          <div className="zd-ai-header">

            <div className="zd-ai-header-info">
              <div className="zd-ai-avatar">
                <Bot size={23} />
                <span />
              </div>

              <div>
                <h3>ZiaDent Assistant</h3>
                <p>Here to help you</p>
              </div>
            </div>

            <button
              className="zd-ai-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <X size={20} />
            </button>

          </div>

          <div className="zd-ai-chat-body">

            <div className="zd-ai-welcome">
              <div className="zd-ai-welcome-icon">
                <Sparkles size={22} />
              </div>

              <h3>Hello! Welcome to ZiaDent</h3>

              <p>
                I can help you explore our dental products,
                services and digital dentistry solutions.
              </p>
            </div>

            <div className="zd-ai-suggestions">
              <span>How can I help you?</span>

              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => setMessage(item)}
                >
                  {item}
                  <span>↗</span>
                </button>
              ))}
            </div>

          </div>

          <div className="zd-ai-input-area">

            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />

            <button
              onClick={handleSend}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>

          </div>

          <div className="zd-ai-footer-note">
            Powered by ZiaDent
          </div>

        </div>
      )}

      {/* FLOATING BUTTON */}

      <button
        className={`zd-ai-floating ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI assistant"
      >

        <span className="zd-ai-pulse" />

        <span className="zd-ai-floating-icon">
          {isOpen ? <X size={26} /> : <Sparkles size={26} />}
        </span>

        {!isOpen && (
          <span className="zd-ai-floating-label">
            Ask AI
          </span>
        )}

      </button>

    </div>
  );
}

export default AIButton;
