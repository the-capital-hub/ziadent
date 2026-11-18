
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Headset,
  ShieldCheck,
  Users,
  Monitor,
  
  Layers3,
  Settings,
  FileText,
  PackageCheck,
  Target,
  MessageCircle,
  Box,
  BadgeCheck,
  BriefcaseMedical,
} from "lucide-react";


import prosthetics from "../../assets/why-ziadent/prosthetics.png";
import milling from "../../assets/why-ziadent/milling.png";


import hero from "../../assets/about/hero.png";
import lab from "../../assets/about/lab.png";
import crowns from "../../assets/about/crowns.png";

import "./AboutUs.css";
import { FaTooth } from "react-icons/fa";

const services = [
  {
    icon: <FaTooth />,
    title: "Fixed Prosthetics",
    description: "Crowns, bridges and related restorations.",
    image: crowns,
  },
  {
    icon: <Layers3 />,
    title: "Removable Prosthetics",
    description: "Complete and partial denture solutions.",
    image: prosthetics,
  },
  {
    icon: <BriefcaseMedical />,
    title: "Implant Restorations",
    description: "Implant supported prosthetic solutions.",
    image: crowns,
  },
  {
    icon: <Monitor />,
    title: "Digital Zirconia Milling",
    description: "CAD/CAM based milling of zirconia restorations.",
    image: milling,
  },
];

const approaches = [
  {
    icon: <Target />,
    title: "Precision",
    description: "Attention to detail in every case.",
  },
  {
    icon: <Users />,
    title: "Communication",
    description: "Professional and clear coordination.",
  },
  {
    icon: <Layers3 />,
    title: "Case Coordination",
    description: "Restorations based on your specifications.",
  },
];

const workflow = [
  {
    icon: <Headset />,
    title: "Connect with Our Team",
    description: "Discuss your laboratory requirements.",
  },
  {
    icon: <FileText />,
    title: "Share Case Requirements",
    description: "Discuss material and specifications.",
  },
  {
    icon: <Layers3 />,
    title: "Case Coordination",
    description: "Coordinate scans and case information.",
  },
  {
    icon: <Settings />,
    title: "Manufacturing",
    description: "Process the restoration to agreed specifications.",
  },
  {
    icon: <PackageCheck />,
    title: "Dispatch & Follow Up",
    description: "Coordinate delivery and follow up with the clinic.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">

          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>

          <span className="about-eyebrow">
            ABOUT ZIADENT DENTAL LAB
          </span>

          <h1>
            About <span>Us</span>
          </h1>

          <div className="about-title-line" />

          <p className="about-hero-description">
            A modern dental laboratory in Hoskote, Karnataka,
            focused on quality, precision and professional support
            for dental practices.
          </p>

          <div className="about-hero-features">
            <div className="about-feature">
              <FaTooth />
              <span>Dental<br />Laboratory</span>
            </div>

            <div className="about-feature">
              <ShieldCheck />
              <span>Precision<br />Focused</span>
            </div>

            <div className="about-feature">
              <Users />
              <span>Professional<br />Support</span>
            </div>

            <div className="about-feature">
              <Monitor />
              <span>Digital<br />Capabilities</span>
            </div>
          </div>
        </div>

        <div className="about-hero-image">
          <img src={hero} alt="Dental technician examining a restoration" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story section-padding">
        <div className="about-story-image">
          <img src={lab} alt="Dental laboratory workspace" />
        </div>

        <div className="about-story-content">
          <span className="about-label">Our Story</span>

          <h2>
            Established in 2025
            <br />
            in Hoskote, Karnataka
          </h2>

          <div className="about-title-line" />

          <p>
            ZiaDent Dental Lab was established in 2025 in Hoskote,
            Karnataka with a focus on providing reliable and
            precision driven dental laboratory solutions to
            dental professionals.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-who section-padding">
        <div className="about-who-content">
          <span className="about-label">Who We Are</span>

          <h2>
            A Professional
            <br />
            Dental Laboratory
          </h2>

          <div className="about-title-line" />

          <p>
            ZiaDent is a dental laboratory that works with dental
            practices to deliver high quality restorations with
            attention to precision, aesthetics and case requirements.
          </p>
        </div>

        <div className="about-who-image">
          <img src={crowns} alt="Dental crown restorations" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-services section-padding">
        <div className="about-section-heading">
          <span className="about-label">What We Do</span>

          <h2>
            Our Laboratory <span>Services</span>
          </h2>

          <p>
            A comprehensive range of dental prosthetic solutions
            for your practice.
          </p>
        </div>

        <div className="about-services-grid">
          {services.map((service, index) => (
            <div className="about-service-card" key={index}>
              <div className="about-service-heading">
                <div className="about-service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
              </div>

              <p>{service.description}</p>

              <div className="about-service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach section-padding">
        <div className="about-approach-heading">
          <span className="about-label">Our Approach</span>

          <h2>
            How We <span>Work</span>
          </h2>

          <p>
            A focused approach to deliver reliable laboratory solutions.
          </p>
        </div>

        <div className="about-approach-list">
          {approaches.map((item, index) => (
            <div className="about-approach-item" key={index}>
              <div className="about-approach-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="about-workflow section-padding">
        <div className="about-section-heading">
          <span className="about-label">Our Laboratory Workflow</span>

          <h2>From Case Discussion to Final Restoration</h2>

          <p>
            A simple and coordinated process designed for your practice.
          </p>
        </div>

        <div className="about-workflow-grid">
          {workflow.map((item, index) => (
            <React.Fragment key={index}>
              <div className="about-workflow-item">
                <div className="about-workflow-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              {index !== workflow.length - 1 && (
                <div className="about-workflow-arrow">
                  <ArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-cta">
        <div className="about-cta-icon">
          <FaTooth />
        </div>

        <div className="about-cta-content">
          <h2>Let's Work Together</h2>

          <p>
            Partner with ZiaDent Dental Lab for your laboratory
            requirements and explore reliable restoration solutions
            for your practice.
          </p>
        </div>

        <Link to="/contact" className="about-cta-button">
          <CalendarDays />
          <span>Schedule a Call with Our Team</span>
          <ArrowRight />
        </Link>
      </section>

    </div>
  );
};

export default AboutUs;
