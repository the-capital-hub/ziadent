
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  CirclePlay,
  Clock3,
  Gem,
  Laptop,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import "./Hero.css";
import hero1 from '../../assets/home/hero1.png'
import hero2 from '../../assets/home/hero2.png'
import hero3 from '../../assets/home/hero3.png'
import image1 from '../../assets/home/service/image1.jpg'
import image2 from '../../assets/home/service/image2.jpg'
import image3 from '../../assets/home/service/image3.jpg'
import image4 from '../../assets/home/service/image4.jpg'
import image5 from '../../assets/home/service/image5.jpg'
import image6 from '../../assets/home/service/image6.jpg'
import image7 from '../../assets/home/service/image7.jpg'

const slides = [
  {
    id: 1,
    eyebrow: "Dental Laboratory Partner for Clinics",
    title: "Precision Dental Solutions for",
    highlight: "Better Patient Smiles",
    description:
      "Comprehensive crowns, bridges, dentures and implant restorations for dental professionals.",
    image: hero1,
    imageAlt: "Zirconia dental crowns and bridges",
    label: "Zirconia",
    labelDetail: "Crowns & Bridges",
  },
  {
    id: 2,
    eyebrow: "Restorative Solutions for Dental Professionals",
    title: "Supporting Modern",
    highlight: "Implant Restorations",
    description:
      "Explore our implant crown and prosthetic solutions designed for professional dental practices.",
    image: hero2,
    imageAlt: "Dental implant crown restoration",
    label: "Implant",
    labelDetail: "Crowns",
  },
  {
    id: 3,
    eyebrow: "Digital Dentistry Solutions",
    title: "Digital Precision for",
    highlight: "Modern Dentistry",
    description:
      "Explore digital zirconia milling and our range of dental laboratory solutions.",
    image: hero3,
    imageAlt: "Digital zirconia milling machine",
    label: "Digital",
    labelDetail: "Zirconia Milling",
  },
];

const features = [
  {
    icon: Gem,
    title: "Comprehensive",
    detail: "Prosthetic Solutions",
  },
  {
    icon: ShieldCheck,
    title: "Fixed & Removable",
    detail: "Prosthetics",
  },
  {
    icon: UsersRound,
    title: "Professional",
    detail: "Clinic Support",
  },
];

const services = [
  {
    title: "Zirconia",
    detail: "Crowns & Bridges",
    image: image1,
    path: "/products/zirconia",
  },
  {
    title: "Implant",
    detail: "Crowns",
    image: image2,
    path: "/products/implant-crowns",
  },
  {
    title: "Metal",
    detail: "Crowns",
    image: image3,
    path: "/products/metal-crowns",
  },
  {
    title: "Complete",
    detail: "Dentures",
    image: image4,
    path: "/products/complete-dentures",
  },
  {
    title: "RPD",
    detail: "Dentures",
    image: image5,
    path: "/products/partial-dentures",
  },
  {
    title: "Flexible",
    detail: "Dentures",
    image: image6,
    path: "/products/flexible-dentures",
  },
  {
    title: "Digital",
    detail: "Zirconia Milling",
    image: image7,
    path: "/products/digital-milling",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="zc-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="zc-hero-background-glow" />
      <div className="zc-hero-grid-pattern" />

      <div className="zc-hero-main">

        {/* LEFT CONTENT */}

        <div className="zc-hero-content" key={currentSlide.id}>

          <div className="zc-hero-eyebrow">
            <Sparkles size={17} />
            <span>{currentSlide.eyebrow}</span>
          </div>

          <h1>
            {currentSlide.title}
            <br />
            <span>{currentSlide.highlight}</span>
          </h1>

          <p className="zc-hero-description">
            {currentSlide.description}
          </p>

          <div className="zc-hero-benefits">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className="zc-hero-benefit" key={feature.title}>
                  <div className="zc-hero-benefit-icon">
                    <Icon size={27} />
                  </div>

                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="zc-hero-actions">
            <Link
              to="/schedule-call"
              className="zc-hero-primary"
            >
              <CalendarDays size={19} />
              <span>Schedule a Call with Our Team</span>
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/products"
              className="zc-hero-secondary"
            >
              <CirclePlay size={21} />
              <span>Explore Our Services</span>
            </Link>
          </div>

        </div>

        {/* RIGHT VISUAL */}

        <div className="zc-hero-visual">

          <div className="zc-hero-orbit orbit-one" />
          <div className="zc-hero-orbit orbit-two" />

          <div className="zc-hero-image-scene" key={currentSlide.id}>

            <div className="zc-hero-image-glow" />

            <div className="zc-hero-image-frame">
              <img
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                className="zc-hero-main-image"
              />
            </div>

            <div className="zc-hero-platform">
              <div className="zc-hero-platform-top" />
              <div className="zc-hero-platform-light" />
            </div>

          </div>

          <div className="zc-hero-floating-label">
            <span className="zc-hero-floating-icon">
              <Gem size={24} />
            </span>

            <div>
              <strong>{currentSlide.label}</strong>
              <span>{currentSlide.labelDetail}</span>
            </div>
          </div>

          {/* SLIDE NUMBERS */}

          <div className="zc-hero-slide-numbers">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={activeSlide === index ? "active" : ""}
                aria-label={`Show slide ${index + 1}`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* SLIDER ARROWS */}

          <div className="zc-hero-arrows">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <ArrowLeft size={21} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight size={21} />
            </button>
          </div>

        </div>

      </div>

      {/* SLIDER PAGINATION */}

      <div className="zc-hero-pagination">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={activeSlide === index ? "active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* BOTTOM SERVICE CAROUSEL */}

      <div className="zc-hero-service-strip">

        {services.map((service, index) => (
          <Link
            to={service.path}
            className={`zc-hero-service-card ${
              index === 0 ? "featured" : ""
            }`}
            key={service.title}
          >
            <div className="zc-hero-service-image">
              <img src={service.image} alt="" />
            </div>

            <div>
              <strong>{service.title}</strong>
              <span>{service.detail}</span>
            </div>

            <ChevronRight size={16} />
          </Link>
        ))}

      </div>

    </section>
  );
}

export default Hero;
