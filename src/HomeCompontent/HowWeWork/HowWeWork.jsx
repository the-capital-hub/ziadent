
import {
  Headset,
  ClipboardList,
  Monitor,
  Settings,
  PackageCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./HowWeWork.css";
import connect from '../../assets/home/process/connect-team.jpg'
import share from '../../assets/home/process/share-requirements.jpg'
import coordination from '../../assets/home/process/case-coordination.jpg'
import manufacturing from '../../assets/home/process/manufacturing.jpg'
import dispatch from '../../assets/home/process/dispatch.jpg'

const processSteps = [
  {
    number: "01",
    title: "Connect with",
    subtitle: "Our Team",
    description: "Dental clinic connects with the Ziadent team.",
    image: connect,
    icon: Headset,
  },
  {
    number: "02",
    title: "Share Case",
    subtitle: "Requirements",
    description: "Share the dental case requirements.",
    image: share,
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Case",
    subtitle: "Coordination",
    description: "Discuss and coordinate the case.",
    image: coordination,
    icon: Monitor,
  },
  {
    number: "04",
    title: "Manufacturing",
    subtitle: "",
    description: "Dental laboratory manufacturing stage.",
    image: manufacturing,
    icon: Settings,
  },
  {
    number: "05",
    title: "Dispatch &",
    subtitle: "Follow Up",
    description: "Dispatch and follow up with the clinic.",
    image: dispatch,
    icon: PackageCheck,
  },
];

function HowWeWork() {
  return (
    <section className="zc-process-section">

      {/* BACKGROUND DECORATION */}

      <div className="zc-process-glow zc-process-glow-one" />
      <div className="zc-process-glow zc-process-glow-two" />

      <div className="zc-process-container">

        {/* SECTION HEADER */}

        <div className="zc-process-header">

          <div className="zc-process-eyebrow">
            <span className="zc-process-eyebrow-icon">
              <Sparkles size={19} />
            </span>

            <span>Our Process</span>
          </div>

          <h2 className="zc-process-heading">
            How We Work at
            <span> Ziadent Care</span>
          </h2>

          <p className="zc-process-intro">
            A simple, collaborative and transparent process
            for dental prosthetic solutions from case
            discussion to final delivery.
          </p>

        </div>

        {/* PROCESS TIMELINE */}

        <div className="zc-process-timeline">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                className="zc-process-item"
                key={step.number}
              >

                {/* CONNECTING LINE */}

                {index !== 0 && (
                  <div className="zc-process-connector">
                    <span />
                    <ArrowRight size={23} />
                  </div>
                )}

                {/* CARD */}

                <article className="zc-process-card">

                  {/* CIRCULAR IMAGE */}

                  <div className="zc-process-image-wrap">

                    <img
                      src={step.image}
                      alt={`${step.title} ${step.subtitle}`}
                      className="zc-process-image"
                      loading="lazy"
                    />

                    <div className="zc-process-image-overlay" />

                    <div className="zc-process-number">
                      {step.number}
                    </div>

                  </div>

                  {/* STEP CONTENT */}

                  <div className="zc-process-card-content">

                    <div className="zc-process-card-icon">
                      <Icon size={18} />
                    </div>

                    <h3>
                      {step.title}
                      {step.subtitle && (
                        <>
                          <br />
                          {step.subtitle}
                        </>
                      )}
                    </h3>

                    <span className="zc-process-card-line" />

                    <p>{step.description}</p>

                  </div>

                </article>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default HowWeWork;
