
import { FaWhatsapp } from "react-icons/fa";

import "./WhatsAppButton.css";

function WhatsAppButton() {

  // Replace with the verified ZiaDent WhatsApp number.
  // Include country code without + or spaces.
  const whatsappNumber = "";

  const message =
    "Hello ZiaDent Team, I would like to know more about your dental laboratory services.";

  const whatsappURL = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;

  const handleWhatsAppClick = () => {
    if (!whatsappURL) {
      console.warn("Please add the verified ZiaDent WhatsApp number.");
      return;
    }

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="zd-whatsapp-wrapper">

      <div className="zd-whatsapp-tooltip">
        Chat with us on WhatsApp
      </div>

      <button
        type="button"
        className="zd-whatsapp-button"
        onClick={handleWhatsAppClick}
        aria-label="Chat with ZiaDent on WhatsApp"
      >
        <span className="zd-whatsapp-pulse" />

        <FaWhatsapp className="zd-whatsapp-icon" />
      </button>

    </div>
  );
}

export default WhatsAppButton;
