
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FaLocationDot,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { MdOutlineCalendarMonth } from "react-icons/md";

import "./Footer.css";

const quickLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Products & Services", path: "/products" },
  { title: "Digital Dentistry", path: "/digital-dentistry" },
  { title: "Why ZiaDent", path: "/why-ziadent" },
  { title: "Contact Us", path: "/contact" },
];

const products = [
  { title: "Zirconia Crowns & Bridges", path: "/products/zirconia" },
  { title: "PFM Crowns & Bridges", path: "/products/pfm" },
  { title: "Metal Crowns", path: "/products/metal-crowns" },
  { title: "Temporary PMMA Crowns", path: "/products/pmma" },
  { title: "Implant Crowns", path: "/products/implant-crowns" },
  { title: "Complete Dentures", path: "/products/complete-dentures" },
  { title: "Removable Partial Dentures (RPD)", path: "/products/partial-dentures" },
  { title: "Flexible Dentures", path: "/products/flexible-dentures" },
  { title: "Digital Zirconia Milling", path: "/products/digital-milling" },
];

const socialLinks = [
  { name: "Instagram", icon: FaInstagram },
  { name: "Facebook", icon: FaFacebookF },
  { name: "LinkedIn", icon: FaLinkedinIn },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="zd-footer">

      <div className="zd-footer-orb zd-orb-one" />
      <div className="zd-footer-orb zd-orb-two" />

      <div className="zd-footer-container">

        {/* MAIN FOOTER */}

        <div className="zd-footer-main">

          {/* BRAND COLUMN */}

          <div className="zd-footer-brand">

            <Link to="/" className="zd-footer-logo">

              <div className="zd-footer-logo-mark">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 6C25 6 20 12 14 10C7 8 4 15 7 25L14 50C16 58 22 59 26 50L32 36L38 50C42 59 48 58 50 50L57 25C60 15 56 8 50 10C44 12 39 6 32 6Z"
                    stroke="white"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 28C25 19 37 15 49 12"
                    stroke="#F47721"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="zd-footer-logo-copy">
                <span>ZIADENT</span>
                <small>DENTAL LAB</small>
              </div>

            </Link>

            <p className="zd-footer-description">
              Crafting Precision. Creating Confident Smiles.
              Your professional dental laboratory partner for
              fixed restorations, removable prosthetics and
              digital zirconia milling.
            </p>

            <div className="zd-footer-social-area">
              <h4>Connect With Us</h4>

              <div className="zd-footer-socials">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <span
                      className="zd-social-icon"
                      key={social.name}
                      role="img"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon />
                    </span>
                  );
                })}
              </div>
            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="zd-footer-column">

            <div className="zd-footer-title">
              <h3>Quick Links</h3>
              <span />
            </div>

            <ul className="zd-footer-list">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <FaArrowRight />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* PRODUCTS */}

          <div className="zd-footer-column zd-footer-product-column">

            <div className="zd-footer-title">
              <h3>Products & Services</h3>
              <span />
            </div>

            <ul className="zd-footer-list">
              {products.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <FaArrowRight />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* CONTACT */}

          <div className="zd-footer-column zd-footer-contact">

            <div className="zd-footer-title">
              <h3>Get in Touch</h3>
              <span />
            </div>

            <div className="zd-footer-location">

              <div className="zd-footer-location-icon">
                <FaLocationDot />
              </div>

              <div className="zd-footer-location-content">
                <small>Our Location</small>
                <p>Hoskote, Karnataka, India</p>
              </div>

            </div>

            <div className="zd-footer-contact-copy">
              Have a case to discuss? Our team is ready to
              connect with your dental practice.
            </div>

            <Link
              to="/schedule-call"
              className="zd-footer-booking"
            >
              <MdOutlineCalendarMonth />
              <span>Schedule a Call with Our Team</span>
              <FaArrowUpRightFromSquare />
            </Link>

            <div className="zd-footer-trust-note">
              <span />
              Professional Dental Laboratory Support
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="zd-footer-bottom">

          <p>
            © {currentYear} ZiaDent Dental Lab. All Rights Reserved.
          </p>

          <div className="zd-footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="zd-bottom-separator" />
            <Link to="/contact">Enquiries</Link>
          </div>

          <button
            type="button"
            className="zd-back-top"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth",
            })}
          >
            Back to Top
            <FaArrowUpRightFromSquare />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
