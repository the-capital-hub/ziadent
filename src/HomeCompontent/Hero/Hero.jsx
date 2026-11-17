
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  CalendarDays,
  Layers3,
  Target,
  Laptop,
  Award,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";
import hero from '../../assets/home/hero.png'
import "./Hero.css";

const features = [
  {
    icon: Target,
    title: "High Precision",
    subtitle: "Restorations",
  },
  {
    icon: Laptop,
    title: "Digital",
    subtitle: "Workflow",
  },
  {
    icon: Award,
    title: "Consistent",
    subtitle: "Quality",
  },
  {
    icon: UsersRound,
    title: "Dedicated",
    subtitle: "Clinic Support",
  },
];

function Hero() {
  return (
    <section className="zd-hero">

      {/* BACKGROUND DECORATION */}

      <div className="zd-hero-bg-circle" />
      <div className="zd-hero-blue-shape" />

      <div className="zd-hero-container">

        {/* LEFT CONTENT */}

        <div className="zd-hero-content">

          <div className="zd-hero-badge">
            <ShieldCheck size={21} />
            <span>Professional Dental Laboratory</span>
          </div>

          <h1>
            Precision Dental
            <br />
            Restorations for
            <br />
            Modern <span>Dental Practices</span>
          </h1>

          <p className="zd-hero-description">
            A trusted dental laboratory partner for fixed
            restorations, removable prosthetics and digital
            dentistry solutions.
          </p>

          {/* CTA BUTTONS */}

          <div className="zd-hero-actions">

            <Link
              to="/schedule-call"
              className="zd-hero-primary-btn"
            >
              <CalendarDays size={21} />
              <span>Schedule a Call with Our Team</span>
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/products"
              className="zd-hero-secondary-btn"
            >
              <Layers3 size={22} />
              <span>Explore Our Products</span>
            </Link>

          </div>

          {/* FEATURE HIGHLIGHTS */}

          <div className="zd-hero-features">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  className="zd-hero-feature"
                  key={feature.title}
                >
                  <div className="zd-hero-feature-icon">
                    <Icon size={35} strokeWidth={1.8} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                </div>
              );
            })}

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="zd-hero-visual">

          <div className="zd-hero-image-frame">

            <img
              src={hero}
              alt="Dental zirconia crowns and digital dental laboratory milling"
              className="zd-hero-image"
            />

            <div className="zd-hero-image-overlay" />

            

          </div>

        </div>

      </div>

      {/* BOTTOM CURVE */}

      <div className="zd-hero-bottom-wave">
        <div className="zd-hero-wave-orange" />
        <div className="zd-hero-wave-blue" />
      </div>

    </section>
  );
}

export default Hero;
