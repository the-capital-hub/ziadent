
import { Link } from "react-router-dom";

import {
  CalendarDays,
  Phone,
  ArrowRight,
  Sparkles,
  Layers3,
  Activity,
  Tooth,
} from "lucide-react";

import cta from "../../assets/home/cta.png";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="zc-final-cta">

      {/* BACKGROUND DECORATION */}

      <div className="zc-cta-blue-glow" />
      <div className="zc-cta-light-orb" />

      <div className="zc-cta-container">

        {/* LEFT CONTENT */}

        <div className="zc-cta-content">

          <div className="zc-cta-eyebrow">
            <span className="zc-cta-eyebrow-icon">
              <CalendarDays size={21} />
            </span>

            <span>Schedule a Call</span>
          </div>

          <h2 className="zc-cta-title">
            Let’s Discuss Your
            <br />
            Next <span>Dental Case</span>
          </h2>

          <p className="zc-cta-description">
            Have a case in mind? Connect with our team to
            discuss your requirements, explore the right
            solution and plan the next steps together.
          </p>

          <Link
            to="/schedule-call"
            className="zc-cta-button"
          >
            <span className="zc-cta-phone-icon">
              <Phone size={23} fill="currentColor" />
            </span>

            <span className="zc-cta-button-text">
              Schedule a Call with Our Team
            </span>

            <span className="zc-cta-arrow">
              <ArrowRight size={24} />
            </span>
          </Link>

        </div>

        {/* RIGHT VISUAL */}

        <div className="zc-cta-visual">

          {/* DECORATIVE ORBIT */}

          <div className="zc-cta-orbit">

            <div className="zc-cta-orbit-icon zc-cta-tooth">
              <Tooth size={29} />
            </div>

            <div className="zc-cta-orbit-icon zc-cta-bridge">
              <Layers3 size={27} />
            </div>

            <div className="zc-cta-orbit-icon zc-cta-implant">
              <Activity size={27} />
            </div>

          </div>

          {/* IMAGE BACKGROUND */}

          <div className="zc-cta-image-glow" />

          {/* IMAGE PLATFORM */}

          <div className="zc-cta-image-platform" />

          {/* CURVED IMAGE FRAME */}

          <div className="zc-cta-image-frame">

            <img
              src={cta}
              alt="Dental crowns and bridge restorations"
              className="zc-cta-main-image"
              loading="lazy"
            />

          </div>

          {/* FLOATING DETAIL */}

          <div className="zc-cta-floating-detail">
            <Sparkles size={20} />
          </div>

        </div>

      </div>

      {/* BOTTOM WAVE */}

      <div className="zc-cta-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 65 C260 175 410 125 670 95 C950 62 1110 42 1440 0 L1440 150 L0 150 Z"
            fill="#43A6C8"
          />

          <path
            d="M0 95 C270 185 490 130 730 95 C1000 60 1200 70 1440 20 L1440 150 L0 150 Z"
            fill="#087B9B"
          />
        </svg>
      </div>

    </section>
  );
}

export default FinalCTA;
