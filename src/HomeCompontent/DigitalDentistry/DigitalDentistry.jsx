
import { Link } from "react-router-dom";

import {
  Monitor,
  ScanLine,
  PencilRuler,
  Settings,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Layers3,
} from "lucide-react";
import digital from '../../assets/home/digital.png'
import "./DigitalDentistry.css";

const workflow = [
  {
    id: "01",
    title: "Digital Scan",
    description: "Digital case information",
    icon: ScanLine,
  },
  {
    id: "02",
    title: "CAD Design",
    description: "Digital restoration design",
    icon: PencilRuler,
  },
  {
    id: "03",
    title: "Precision Milling",
    description: "Zirconia milling",
    icon: Settings,
  },
  {
    id: "04",
    title: "Final Restoration",
    description: "Dental restoration",
    icon: Layers3,
  },
];

function DigitalDentistry() {
  return (
    <section className="zc-digital-section">

      <div className="zc-digital-container">

        {/* LEFT IMAGE */}

        <div className="zc-digital-visual">

          <div className="zc-digital-image-frame">

            <img
              src={digital}
              alt="Digital zirconia milling equipment in a dental laboratory"
              className="zc-digital-main-image"
              loading="lazy"
            />

            <div className="zc-digital-image-shade" />

            <div className="zc-digital-image-caption">
              <span className="zc-digital-caption-icon">
                <Monitor size={21} />
              </span>

              <div>
                <strong>Digital Dentistry</strong>
                <span>Zirconia Milling Solutions</span>
              </div>
            </div>

          </div>

          {/* FLOATING DECORATION */}

          <div className="zc-digital-floating-card">
            <div className="zc-digital-floating-icon">
              <Sparkles size={24} />
            </div>

            <div>
              <strong>Digital</strong>
              <span>Technology</span>
            </div>
          </div>

          <div className="zc-digital-orbit" />

        </div>

        {/* RIGHT CONTENT */}

        <div className="zc-digital-content">

          {/* EYEBROW */}

          <div className="zc-digital-eyebrow">
            <span className="zc-digital-eyebrow-icon">
              <Monitor size={19} />
            </span>

            <span>Digital Dentistry</span>
          </div>

          {/* HEADING */}

          <h2 className="zc-digital-title">
            Advancing Dentistry
            <br />
            Through <span>Digital Precision</span>
          </h2>

          {/* DESCRIPTION */}

          <p className="zc-digital-description">
            Our <strong>Digital Zirconia Milling</strong> service
            is part of our dental laboratory solutions for
            dental professionals. Explore our digital
            dentistry capabilities and zirconia milling service.
          </p>

          {/* WORKFLOW */}

          <div className="zc-digital-workflow-heading">
            <span />
            <h3>Our Digital Workflow</h3>
            <span />
          </div>

          <div className="zc-digital-workflow">

            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  className="zc-digital-step-wrap"
                  key={step.id}
                >

                  <div className="zc-digital-step">

                    <div className="zc-digital-step-icon">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="zc-digital-step-number">
                      {step.id}
                    </span>

                    <h4>{step.title}</h4>

                    <p>{step.description}</p>

                  </div>

                  {index !== workflow.length - 1 && (
                    <div className="zc-digital-step-arrow">
                      <ArrowRight size={20} />
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* CTA */}

          <Link
            to="/digital-dentistry"
            className="zc-digital-cta"
          >
            <span>Explore Digital Dentistry</span>

            <span className="zc-digital-cta-icon">
              <ArrowUpRight size={23} />
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default DigitalDentistry;
