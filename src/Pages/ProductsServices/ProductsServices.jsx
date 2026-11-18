
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Crown,
  Layers3,
  ShieldCheck,
  Gem,
  Zap,
  Clock3,
  Bone,
  Smile,
  Leaf,
  Settings,
  Headset,
  Check,
} from "lucide-react";

import "./ProductsServices.css";

import image1 from '../../assets/home/serviceSection/image1.jpg' 
import image2 from '../../assets/home/serviceSection/image2.jpg'
import image3 from '../../assets/home/serviceSection/image3.jpg'
import image4 from '../../assets/home/serviceSection/image4.jpg'
import image5 from '../../assets/home/serviceSection/image5.jpg'

import image6 from '../../assets/home/serviceSection/image6.jpg'
import image7 from '../../assets/home/serviceSection/image7.jpg'
import image8 from '../../assets/home/serviceSection/image8.jpg'
import image9 from '../../assets/home/serviceSection/image9.jpg'

import hero from "../../assets/product/hero.png";
import cta from "../../assets/product/cta.png";

import { getProductPath } from "../../data/productsData";

const products = [
  {
    number: "01",
    slug: "zirconia-crowns-bridges",
    title: "Zirconia Crowns & Bridges",
    description:
      "Zirconia restorations designed for strength, aesthetics and natural looking results.",
    image: image1,
    icon: Crown,
  },
  {
    number: "02",
    slug: "pfm-crowns-bridges",
    title: "PFM Crowns & Bridges",
    description:
      "Porcelain fused to metal restorations combining a metal substructure with ceramic aesthetics.",
    image: image2,
    icon: Layers3,
  },
  {
    number: "03",
    slug: "metal-crowns",
    title: "Metal Crowns",
    description:
      "Metal restorations for suitable clinical requirements.",
    image: image3,
    icon: Layers3,
  },
  {
    number: "04",
    slug: "temporary-pmma-crowns",
    title: "Temporary PMMA Crowns",
    description:
      "Provisional restorations designed for temporary protection and aesthetics.",
    image: image4,
    icon: Clock3,
  },
  {
    number: "05",
    slug: "implant-crowns",
    title: "Implant Crowns",
    description:
      "Implant supported prosthetic restorations made to individual case requirements.",
    image: image5,
    icon: Bone,
  },
  {
    number: "06",
    slug: "complete-dentures",
    title: "Complete Dentures",
    description:
      "Full arch removable prosthetic solutions.",
    image: image6,
    icon: Smile,
  },
  {
    number: "07",
    slug: "removable-partial-dentures",
    title: "Removable Partial Dentures",
    description:
      "Partial dentures for patients with missing teeth.",
    image: image7,
    icon: Smile,
  },
  {
    number: "08",
    slug: "flexible-dentures",
    title: "Flexible Dentures",
    description:
      "Flexible removable prosthetic solutions.",
    image: image8,
    icon: Leaf,
  },
  {
    number: "09",
    slug: "digital-zirconia-milling",
    title: "Digital Zirconia Milling",
    description:
      "CAD/CAM based milling of zirconia restorations.",
    image: image9,
    icon: Settings,
  },
];

const benefits = [
  "Comprehensive prosthetic solutions",
  "Digital zirconia milling capabilities",
  "Fixed and removable prosthetics",
  "Professional communication",
  "Focus on precision and consistent quality",
  "Professional laboratory support",
];

export default function ProductsServices() {
  return (
    <main className="zs-page">

      {/* HERO */}

      <section className="zs-hero">
        <div className="zs-hero-inner">

          <div className="zs-hero-copy">

            <div className="zs-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Products & Services</span>
            </div>

            <h1>
              Products & <span>Services</span>
            </h1>

            <div className="zs-heading-underline" />

            <p className="zs-hero-description">
              A comprehensive range of dental prosthetic solutions
              to support your clinical requirements.
            </p>

            <div className="zs-feature-chips">

              <div className="zs-feature-chip">
                <Bone />
                <span>
                  Precision
                  <br />
                  Fabrication
                </span>
              </div>

              <div className="zs-feature-chip">
                <ShieldCheck />
                <span>
                  Professional
                  <br />
                  Support
                </span>
              </div>

              <div className="zs-feature-chip">
                <Gem />
                <span>
                  Dental
                  <br />
                  Aesthetics
                </span>
              </div>

              <div className="zs-feature-chip">
                <Zap />
                <span>
                  Digital
                  <br />
                  Dentistry
                </span>
              </div>

            </div>

          </div>

          <div className="zs-hero-media">
            <img
              src={hero}
              alt="Zirconia crowns and bridge restorations"
              fetchPriority="high"
            />
          </div>

          <div className="zs-hero-curve" />

        </div>
      </section>


      {/* PRODUCTS AND SERVICES */}

      <section className="zs-offerings">

        <div className="zs-section-heading">

          <span className="zs-eyebrow">
            Our Offerings
          </span>

          <h2>
            Our Complete Range of Dental Solutions
          </h2>

          <p>
            From individual crowns to full arch prosthetic solutions,
            explore our range of laboratory services for dental professionals.
          </p>

        </div>

        <div className="zs-product-grid">

          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                className="zs-product-card"
                key={product.slug}
              >

                <div className="zs-product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>

                <div className="zs-product-info">

                  <Icon className="zs-product-icon" />

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <Link
                    to={getProductPath(product.slug)}
                    className="zs-learn-button"
                    aria-label={`Learn more about ${product.title}`}
                  >
                    Learn More
                    <ArrowRight />
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* WHY CHOOSE ZIADENT */}

      <section className="zs-why-section">

        <div className="zs-why-panel">

          <div className="zs-why-image">
            <img
              src={cta}
              alt="ZiaDent dental restoration solutions"
              loading="lazy"
            />
          </div>

          <div className="zs-why-heading">

            <h2>
              Why Choose Our
              <span> Dental Laboratory?</span>
            </h2>

          </div>

          <div className="zs-why-divider" />

          <div className="zs-benefit-list">

            {benefits.map((benefit, index) => (
              <div
                className="zs-benefit-item"
                key={index}
              >
                <span className="zs-check">
                  <Check />
                </span>

                <span>{benefit}</span>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="zs-bottom-cta">

        <div className="zs-cta-wave" />

        <div className="zs-cta-inner">

          <div className="zs-cta-left">

            <div className="zs-headset-icon">
              <Headset />
            </div>

            <div className="zs-cta-text">

              <h2>
                Have a Specific Case in Mind?
              </h2>

              <p>
                Discuss your requirements with our team and explore
                suitable laboratory solutions for your practice.
              </p>

            </div>

          </div>

          <Link
            to="/contact"
            className="zs-cta-button"
          >
            <CalendarDays />

            <span>
              Schedule a Call with Our Team
            </span>

            <ArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}
