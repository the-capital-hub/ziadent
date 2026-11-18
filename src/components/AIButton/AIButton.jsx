
import { useState } from "react";

import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  CalendarDays,
  Package,
  MessageCircle,
} from "lucide-react";

import "./AIButton.css";

function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const quickPrompts = [
    "Explore your dental services",
    "Tell me about zirconia crowns",
    "How can I schedule a call?",
  ];

  const handleSend = (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) return;

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        text: trimmedMessage,
        sender: "user",
      },
      {
        id: Date.now() + 1,
        text: "Thank you for contacting Ziadent Care. Our AI assistant will be connected soon. You can schedule a call with our team for assistance.",
        sender: "bot",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="zc-ai-widget">

      {/* CHAT WINDOW */}

      <div className={`zc-ai-panel ${isOpen ? "open" : ""}`}>

        {/* HEADER */}

        <div className="zc-ai-header">

          <div className="zc-ai-header-info">

            <div className="zc-ai-avatar">
              <Sparkles size={23} />
            </div>

            <div>
              <h3>Ziadent AI Assistant</h3>

              <span>
                <span className="zc-ai-online-dot" />
                Here to help you
              </span>
            </div>

          </div>

          <button
            className="zc-ai-close"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI assistant"
          >
            <X size={21} />
          </button>

        </div>

        {/* CHAT BODY */}

        <div className="zc-ai-body">

          <div className="zc-ai-welcome">

            <div className="zc-ai-welcome-icon">
              <Bot size={28} />
            </div>

            <h4>Hello! Welcome to Ziadent Care</h4>

            <p>
              I can help you explore our dental laboratory
              services and guide you towards the right information.
            </p>

          </div>

          {/* QUICK PROMPTS */}

          {messages.length === 0 && (
            <div className="zc-ai-quick-prompts">

              <span className="zc-ai-suggestion-label">
                QUICK QUESTIONS
              </span>

              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                >
                  {prompt}
                  <Sparkles size={15} />
                </button>
              ))}

            </div>
          )}

          {/* MESSAGES */}

          {messages.map((item) => (
            <div
              key={item.id}
              className={`zc-ai-message ${item.sender}`}
            >
              <span className="zc-ai-message-icon">
                {item.sender === "bot" ? (
                  <Bot size={16} />
                ) : (
                  <User size={16} />
                )}
              </span>

              <p>{item.text}</p>
            </div>
          ))}

        </div>

        {/* CHAT INPUT */}

        <form
          className="zc-ai-input-area"
          onSubmit={(event) => {
            event.preventDefault();
            handleSend();
          }}
        >

          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Ask us anything..."
            aria-label="Write your message"
          />

          <button
            type="submit"
            disabled={!message.trim()}
            aria-label="Send message"
          >
            <Send size={19} />
          </button>

        </form>

        <div className="zc-ai-footer-note">
          Powered by Ziadent Care
        </div>

      </div>

      {/* FLOATING BUTTON */}

      <button
        type="button"
        className={`zc-ai-float-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >

        {isOpen ? (
          <X size={27} />
        ) : (
          <Sparkles size={27} />
        )}

        {!isOpen && (
          <>
            <span className="zc-ai-pulse" />
            <span className="zc-ai-tooltip">
              Ask Ziadent AI
            </span>
          </>
        )}

      </button>

    </div>
  );
}

export default AIFloatingButton;
