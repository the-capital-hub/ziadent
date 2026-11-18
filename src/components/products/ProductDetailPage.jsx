
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Crown,
  ShieldCheck,
  Gem,
  Target,
  Layers3,
  Clock3,
  Smile,
  Heart,
  Monitor,
  Settings,
  ScanLine,
  PackageCheck,
  Headset,
  Sparkles,
  Check,
} from "lucide-react";

import { productsData, getProductPath } from "../../data/productsData";
import "./ProductDetailPage.css";

const iconMap = {
  crown: Crown,
  shield: ShieldCheck,
  gem: Gem,
  target: Target,
  layers: Layers3,
  clock: Clock3,
  smile: Smile,
  heart: Heart,
  monitor: Monitor,
  settings: Settings,
};

const workflow = [
  {
    icon: ScanLine,
    title: "Connect with Our Team",
    description: "Discuss your laboratory requirements.",
  },
  {
    icon: Monitor,
    title: "Share Case Requirements",
    description: "Discuss material and specifications.",
  },
  {
    icon: Layers3,
    title: "Case Coordination",
    description: "Coordinate scans and case information.",
  },
  {
    icon: Settings,
    title: "Manufacturing",
    description: "Process the restoration to agreed specifications.",
  },
  {
    icon: PackageCheck,
    title: "Dispatch & Follow Up",
    description: "Coordinate delivery and follow up with the clinic.",
  },
];

export default function ProductDetailPage({ product }) {
  const relatedProducts = product.related
    .map((slug) => ({
      slug,
      ...productsData[slug],
    }))
    .filter((item) => item.title);

  return (
    <main className="pdp-page">

      {/* HERO */}

      <section className="pdp-hero">

        <div className="pdp-hero-inner">

          <div className="pdp-hero-content">

            <div className="pdp-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products">Products & Services</Link>
              <span>›</span>
              <span>{product.title}</span>
            </div>

            <div className="pdp-eyebrow">
              ZIADENT RESTORATION SOLUTIONS
            </div>

            <h1>{product.title}</h1>

            <div className="pdp-title-line" />

            <p className="pdp-hero-description">
              {product.subtitle}
            </p>

            <div className="pdp-hero-features">

              <div className="pdp-feature">
                <Crown />
                <span>Dental<br />Solutions</span>
              </div>

              <div className="pdp-feature">
                <Gem />
                <span>Restoration<br />Aesthetics</span>
              </div>

              <div className="pdp-feature">
                <ShieldCheck />
                <span>Case Based<br />Solutions</span>
              </div>

              <div className="pdp-feature">
                <Target />
                <span>Professional<br />Support</span>
              </div>

            </div>

          </div>

          <div className="pdp-hero-image">
            <img
              src={product.heroImage}
              alt={product.title}
            />
          </div>

          <div className="pdp-hero-curve" />

        </div>

      </section>


      {/* OVERVIEW */}

      <section className="pdp-overview">
        <div className="pdp-container pdp-overview-grid">

          <div className="pdp-overview-image">
            <img
              src={product.overviewImage}
              alt={product.overviewTitle}
              loading="lazy"
            />
          </div>

          <div className="pdp-overview-content">

            <span className="pdp-label">
              Service Overview
            </span>

            <h2>{product.overviewTitle}</h2>

            <p>{product.description}</p>

            <p>{product.overview}</p>

            <Link to="/contact" className="pdp-text-link">
              Discuss Your Case
              <ArrowRight />
            </Link>

          </div>

        </div>
      </section>


      {/* BENEFITS */}

      <section className="pdp-benefits">
        <div className="pdp-container">

          <div className="pdp-heading">

            <span className="pdp-label">
              Key Benefits
            </span>

            <h2>
              Explore <span>{product.shortTitle}</span>
            </h2>

          </div>

          <div className="pdp-benefit-grid">

            {product.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Sparkles;

              return (
                <article className="pdp-benefit-card" key={index}>

                  <div className="pdp-benefit-icon">
                    <Icon />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* APPLICATIONS */}

      <section className="pdp-applications">
        <div className="pdp-container">

          <div className="pdp-application-panel">

            <div className="pdp-application-content">

              <span className="pdp-label">
                Service Scope
              </span>

              <h2>
                Explore Our
                <span> Solutions</span>
              </h2>

              <p>
                Discuss your specific restoration requirements
                with the ZiaDent laboratory team.
              </p>

              <div className="pdp-application-list">

                {product.applications.map((item, index) => (
                  <div className="pdp-application-item" key={index}>
                    <span><Check /></span>
                    {item}
                  </div>
                ))}

              </div>

            </div>

            <div className="pdp-application-image">
              <img
                src={product.applicationImage}
                alt={`${product.title} service`}
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* WORKFLOW */}

      <section className="pdp-workflow">
        <div className="pdp-container">

          <div className="pdp-heading">

            <span className="pdp-label">
              Our Laboratory Workflow
            </span>

            <h2>
              From Case Discussion to Final Restoration
            </h2>

            <p>
              A coordinated process focused on your
              laboratory requirements.
            </p>

          </div>

          <div className="pdp-workflow-grid">

            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={index}>

                  <div className="pdp-workflow-step">

                    <div className="pdp-workflow-icon">
                      <Icon />
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>

                  </div>

                  {index !== workflow.length - 1 && (
                    <div className="pdp-workflow-arrow">
                      <ArrowRight />
                    </div>
                  )}

                </React.Fragment>
              );
            })}

          </div>

        </div>
      </section>


      {/* RELATED SERVICES */}

      <section className="pdp-related">
        <div className="pdp-container">

          <div className="pdp-related-panel">

            <div className="pdp-related-heading">

              <span className="pdp-label">
                Related Services
              </span>

              <h2>
                Explore More
                <span> Dental Solutions</span>
              </h2>

              <Link to="/products" className="pdp-text-link">
                View All Services
                <ArrowRight />
              </Link>

            </div>

            <div className="pdp-related-grid">

              {relatedProducts.map((item) => (
                <Link
                  to={getProductPath(item.slug)}
                  className="pdp-related-card"
                  key={item.slug}
                >

                  <div className="pdp-related-image">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="pdp-related-info">

                    <h3>{item.title}</h3>

                    <span>
                      <ArrowRight />
                    </span>

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="pdp-cta">

        <div className="pdp-cta-wave" />

        <div className="pdp-container pdp-cta-inner">

          <div className="pdp-cta-left">

            <div className="pdp-cta-icon">
              <Headset />
            </div>

            <div>
              <h2>Discuss Your Next Case</h2>

              <p>
                Share your requirements with our team and
                explore suitable laboratory solutions for
                your dental practice.
              </p>
            </div>

          </div>

          <Link to="/contact" className="pdp-cta-button">
            <CalendarDays />
            <span>Schedule a Call with Our Team</span>
            <ArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}
