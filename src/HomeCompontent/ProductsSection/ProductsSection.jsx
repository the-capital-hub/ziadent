
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import {
  FaTooth,
  FaLayerGroup,
  FaTeeth,
  FaTeethOpen,
  FaCubes,
  FaLaptop,
} from "react-icons/fa";
import image1 from '../../assets/home/serviceSection/image1.jpg' 
import image2 from '../../assets/home/serviceSection/image2.jpg'
import image3 from '../../assets/home/serviceSection/image3.jpg'
import image4 from '../../assets/home/serviceSection/image4.jpg'
import image5 from '../../assets/home/serviceSection/image5.jpg'

import image6 from '../../assets/home/serviceSection/image6.jpg'
import image7 from '../../assets/home/serviceSection/image7.jpg'
import image8 from '../../assets/home/serviceSection/image8.jpg'
import image9 from '../../assets/home/serviceSection/image9.jpg'
import "./ProductsSection.css";

const products = [
  {
    id: 1,
    title: "Zirconia",
    subtitle: "Crowns & Bridges",
    description:
      "Zirconia crown and bridge solutions for dental professionals.",
    image: image1,
    path: "/products/zirconia",
    icon: FaTooth,
  },
  {
    id: 2,
    title: "PFM",
    subtitle: "Crowns & Bridges",
    description:
      "Porcelain fused to metal crowns and bridge restorations.",
    image: image2,
    path: "/products/pfm",
    icon: FaTooth,
  },
  {
    id: 3,
    title: "Metal",
    subtitle: "Crowns",
    description:
      "Metal crown solutions for dental restoration cases.",
    image: image3,
    path: "/products/metal-crowns",
    icon: FaLayerGroup,
  },
  {
    id: 4,
    title: "Temporary",
    subtitle: "PMMA Crowns",
    description:
      "Temporary PMMA crown solutions for dental cases.",
    image: image4,
    path: "/products/pmma",
    icon: FaCubes,
  },
  {
    id: 5,
    title: "Implant",
    subtitle: "Crowns",
    description:
      "Implant crown restorations for implant supported cases.",
    image: image5,
    path: "/products/implant-crowns",
    icon: FaTooth,
  },
  {
    id: 6,
    title: "Complete",
    subtitle: "Dentures",
    description:
      "Complete denture solutions for dental professionals.",
    image: image6,
    path: "/products/complete-dentures",
    icon: FaTeeth,
  },
  {
    id: 7,
    title: "Removable Partial",
    subtitle: "Dentures (RPD)",
    description:
      "Removable partial denture solutions for dental cases.",
    image: image7,
    path: "/products/partial-dentures",
    icon: FaTeethOpen,
  },
  {
    id: 8,
    title: "Flexible",
    subtitle: "Dentures",
    description:
      "Flexible denture solutions for dental professionals.",
    image: image8,
    path: "/products/flexible-dentures",
    icon: FaTeeth,
  },
  {
    id: 9,
    title: "Digital",
    subtitle: "Zirconia Milling",
    description:
      "Digital zirconia milling as part of our laboratory services.",
    image: image9,
    path: "/products/digital-milling",
    icon: FaLaptop,
  },
];

function ProductsSection() {
  return (
    <section className="zc-products-section">

      {/* BACKGROUND DECORATION */}

      <div className="zc-products-bg-glow" />
      <div className="zc-products-tooth-decoration">
        <FaTooth />
      </div>

      <div className="zc-products-container">

        {/* SECTION HEADING */}

        <div className="zc-products-heading">

          <div className="zc-products-eyebrow">
            <FaTooth />
            <span>Our Products & Services</span>
          </div>

          <h2>
            Comprehensive Dental Laboratory
            <span> Solutions</span>
          </h2>

          <p>
            Explore our range of fixed prosthetics, removable
            prosthetics, implant restorations and digital
            zirconia milling solutions.
          </p>

        </div>

        {/* PRODUCT GRID */}

        <div className="zc-products-grid">

          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                className="zc-product-card"
                key={product.id}
                style={{ "--card-index": index }}
              >

                {/* PRODUCT CONTENT */}

                <div className="zc-product-content">

                  <div className="zc-product-title-row">

                    <div className="zc-product-icon">
                      <Icon />
                    </div>

                    <div className="zc-product-title">
                      <h3>{product.title}</h3>
                      <h4>{product.subtitle}</h4>
                    </div>

                  </div>

                  <p className="zc-product-description">
                    {product.description}
                  </p>

                  <Link
                    to={product.path}
                    className="zc-product-link"
                    aria-label={`Explore ${product.title} ${product.subtitle}`}
                  >
                    <span>Explore Details</span>

                    <span className="zc-product-link-icon">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>

                </div>

                {/* PRODUCT IMAGE */}

                <div className="zc-product-image-wrap">
                  <div className="zc-product-image-glow" />

                  <img
                    src={product.image}
                    alt={`${product.title} ${product.subtitle}`}
                    className="zc-product-image"
                    loading="lazy"
                  />

                  <div className="zc-product-image-shine" />
                </div>

                <div className="zc-product-card-number">
                  {String(product.id).padStart(2, "0")}
                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <div className="zc-products-bottom">

          <div className="zc-products-bottom-text">
            <span className="zc-products-bottom-icon">
              <Sparkles size={20} />
            </span>

            <p>
              Looking for a dental laboratory partner?
            </p>
          </div>

          <Link
            to="/schedule-call"
            className="zc-products-bottom-cta"
          >
            Schedule a Call with Our Team
            <ChevronRight size={19} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProductsSection;
