
import { Link } from "react-router-dom";

import {
  CalendarDays,
  ArrowRight,
  Sparkles,
  Monitor,
  UsersRound,
  HeartPulse,
  
} from "lucide-react";
import { FaTooth } from "react-icons/fa";
import about from '../../assets/home/about.png'
import "./AboutSection.css";

const features = [
  {
    icon: FaTooth,
    title: "Comprehensive",
    description: "Laboratory Solutions",
    type: "blue",
  },
  {
    icon: Monitor,
    title: "Digital",
    description: "Dentistry Support",
    type: "gold",
  },
  {
    icon: UsersRound,
    title: "Dedicated",
    description: "Clinic Partnership",
    type: "blue",
  },
];

function AboutSection() {
  return (
    <section className="zc-about-section">

      <div className="zc-about-container">

        {/* LEFT IMAGE AREA */}

        <div className="zc-about-image-area">

          <div className="zc-about-image-border">

            <img
              src={about}
              alt="Dental laboratory technician working on a dental restoration"
              className="zc-about-main-image"
            />

            <div className="zc-about-image-overlay" />

          </div>

          {/* ESTABLISHED BADGE */}

          <div className="zc-about-established">
            <span className="zc-about-calendar-icon">
              <CalendarDays size={25} />
            </span>

            <span>Established 2025</span>
          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="zc-about-content">
            

          {/* EYEBROW */}

          <div className="zc-about-eyebrow">
            <span className="zc-about-eyebrow-icon">
              <Sparkles size={18} />
            </span>

            <span>About Ziadent Care</span>
          </div>

          {/* HEADING */}

          <h2 className="zc-about-title">
            Your Trusted Dental
            <br />
            Laboratory <span>Partner</span>
          </h2>

          {/* DESCRIPTION */}

          <p className="zc-about-description">
            <strong>Ziadent Care</strong> is a dental laboratory
            established in 2025 in Hoskote, Karnataka, India.
            We work with dental professionals to provide fixed
            prosthetics, removable prosthetics, implant
            restorations and digital zirconia milling solutions.
          </p>

          {/* FEATURE CARDS */}

          <div className="zc-about-features">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className={`zc-about-feature-card ${feature.type}`}
                  key={feature.title}
                >

                  <div className="zc-about-feature-icon">
                    <Icon size={35} strokeWidth={1.8} />
                  </div>

                  <div className="zc-about-feature-divider" />

                  <div className="zc-about-feature-text">
                    <strong>{feature.title}</strong>
                    <span>{feature.description}</span>
                  </div>

                </div>
              );
            })}

          </div>

          {/* CTA */}

          <Link to="/about" className="zc-about-cta">

            <span>Know More About Us</span>

            <span className="zc-about-cta-icon">
              <ArrowRight size={22} />
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;
