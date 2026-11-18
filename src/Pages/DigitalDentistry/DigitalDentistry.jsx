
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Monitor,
  Layers3,
  Target,
  
  Scan,
  Settings,
  PackageCheck,
  ShieldCheck,
  Gem,
  FileText,
  ClipboardCheck,
  Cog,
} from "lucide-react";

import hero from "../../assets/digital/hero.png";
import milling from "../../assets/digital/milling.png";
import design from "../../assets/digital/design.png";

import "./DigitalDentistry.css";
import { FaTooth } from "react-icons/fa";

const workflow = [
  {
    icon: <Scan />,
    title: "Digital Scan",
    subtitle: "(Intraoral or Model)",
  },
  {
    icon: <Monitor />,
    title: "Digital Design",
    subtitle: "(CAD)",
  },
  {
    icon: <Settings />,
    title: "Precision Milling",
    subtitle: "(CAM)",
  },
  {
    icon: <FaTooth />,
    title: "Finishing &",
    subtitle: "Quality Check",
  },
  {
    icon: <PackageCheck />,
    title: "Delivery to",
    subtitle: "Your Clinic",
  },
];

const benefits = [
  {
    icon: <Target />,
    title: "High Precision",
    description: "Accurate fit and consistent results.",
  },
  {
    icon: <ShieldCheck />,
    title: "Predictable Outcomes",
    description: "Digital planning for better case control.",
  },
  {
    icon: <Layers3 />,
    title: "Consistent Quality",
    description: "Standardized and reliable workflow.",
  },
  {
    icon: <Gem />,
    title: "Aesthetic Restorations",
    description: "Natural looking and durable results.",
  },
];

const process = [
  {
    number: "01",
    icon: <Monitor />,
    title: "Share Your Scan",
    description: "Send intraoral or lab scan with case details.",
  },
  {
    number: "02",
    icon: <ClipboardCheck />,
    title: "Review & Coordinate",
    description: "We review requirements and confirm case details.",
  },
  {
    number: "03",
    icon: <Cog />,
    title: "Manufacturing",
    description: "Digital design, milling and finishing as per plan.",
  },
  {
    number: "04",
    icon: <PackageCheck />,
    title: "Dispatch",
    description: "Coordinate delivery with your clinic.",
  },
];

const DigitalDentistry = () => {
  return (
    <div className="digital-page">

      {/* HERO SECTION */}

      <section className="digital-hero">

        <div className="digital-hero-content">

          <div className="digital-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Digital Dentistry</span>
          </div>

          <span className="digital-eyebrow">
            DIGITAL DENTISTRY AT ZIADENT
          </span>

          <h1>
            Digital <span>Dentistry</span>
          </h1>

          <div className="digital-title-line" />

          <p className="digital-hero-description">
            Advanced digital workflows, CAD/CAM technology
            and zirconia milling for precise, consistent
            and aesthetic restorations.
          </p>

          <div className="digital-hero-features">

            <div className="digital-feature">
              <Monitor />
              <span>CAD CAM<br />Technology</span>
            </div>

            <div className="digital-feature">
              <Layers3 />
              <span>Digital<br />Workflow</span>
            </div>

            <div className="digital-feature">
              <Target />
              <span>High<br />Precision</span>
            </div>

            <div className="digital-feature">
              <FaTooth />
              <span>Aesthetic<br />Results</span>
            </div>

          </div>

        </div>

        <div className="digital-hero-image">
          <img
            src={hero}
            alt="Digital dental design workstation"
          />
        </div>

      </section>

      {/* CAD CAM TECHNOLOGY */}

      <section className="digital-technology section-padding">

        <div className="digital-technology-image">
          <img
            src={milling}
            alt="Dental CAD CAM milling machine"
          />
        </div>

        <div className="digital-technology-content">

          <span className="digital-label">
            Our Technology
          </span>

          <h2>
            CAD CAM
            <br />
            Technology
          </h2>

          <div className="digital-title-line" />

          <p>
            A modern digital workflow that combines digital
            design and precision milling to deliver high quality,
            consistent and reliable restorations.
          </p>

        </div>

      </section>

      {/* DIGITAL WORKFLOW */}

      <section className="digital-workflow section-padding">

        <div className="digital-section-heading">

          <span className="digital-label">
            Digital Workflow
          </span>

          <h2>
            The Digital Dentistry Workflow
          </h2>

          <p>
            A seamless and coordinated process from digital scan
            to final restoration.
          </p>

        </div>

        <div className="digital-workflow-grid">

          {workflow.map((item, index) => (
            <React.Fragment key={index}>

              <div className="digital-workflow-item">

                <div className="digital-workflow-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <span>{item.subtitle}</span>

              </div>

              {index !== workflow.length - 1 && (
                <div className="digital-workflow-arrow">
                  <ArrowRight />
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

      </section>

      {/* DIGITAL ZIRCONIA MILLING */}

      <section className="digital-zirconia section-padding">

        <div className="digital-zirconia-image">
          <img
            src={design}
            alt="Digital zirconia restoration design"
          />
        </div>

        <div className="digital-zirconia-content">

          <span className="digital-label">
            Digital Zirconia Milling
          </span>

          <h2>
            Digital Zirconia Milling
          </h2>

          <div className="digital-title-line" />

          <p>
            CAD/CAM based milling of zirconia restorations
            that offer strength, biocompatibility and
            natural looking aesthetics.
          </p>

        </div>

        <div className="digital-zirconia-discs">
          <img
            src="/images/products/09-digital-zirconia-milling.jpg"
            alt="Zirconia milling materials"
          />
        </div>

      </section>

      {/* BENEFITS */}

      <section className="digital-benefits section-padding">

        <div className="digital-benefits-heading">

          <span className="digital-label">
            Key Benefits
          </span>

          <h2>
            Why Choose
            <br />
            <span>Digital Dentistry?</span>
          </h2>

        </div>

        <div className="digital-benefits-list">

          {benefits.map((item, index) => (
            <div className="digital-benefit-item" key={index}>

              <div className="digital-benefit-icon">
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

      {/* HOW IT WORKS */}

      <section className="digital-process section-padding">

        <div className="digital-section-heading">

          <span className="digital-label">
            How It Works
          </span>

          <h2>
            A Simple Process for Your Practice
          </h2>

          <p>
            Share your digital case and let our team
            coordinate the process.
          </p>

        </div>

        <div className="digital-process-grid">

          {process.map((item, index) => (
            <React.Fragment key={index}>

              <div className="digital-process-item">

                <div className="digital-process-visual">

                  <span className="digital-process-number">
                    {item.number}
                  </span>

                  <div className="digital-process-icon">
                    {item.icon}
                  </div>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              {index !== process.length - 1 && (
                <div className="digital-process-arrow">
                  <ArrowRight />
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="digital-final-cta">

        <div className="digital-cta-icon">
          <FaTooth />
        </div>

        <div className="digital-cta-content">

          <h2>
            Let's Explore Digital Solutions
          </h2>

          <p>
            Discuss your digital dentistry requirements
            and zirconia milling needs with the ZiaDent team.
          </p>

        </div>

        <Link
          to="/contact"
          className="digital-cta-button"
        >
          <CalendarDays />
          <span>Schedule a Call with Our Team</span>
          <ArrowRight />
        </Link>

      </section>

    </div>
  );
};

export default DigitalDentistry;
