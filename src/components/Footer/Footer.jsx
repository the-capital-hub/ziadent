
import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import logo from '../../assets/logo.png'
import {
  MapPin,
  Mail,
  Phone,
  CalendarDays,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  UsersRound,
  Smile,
} from "lucide-react";

import "./Footer.css";

// Add only verified business contact details.
const contact = {
  phone: "",
  email: "",
  whatsapp: "",
};

// Add verified social profile URLs here.
const socialLinks = {
  linkedin: "",
  instagram: "",
  youtube: "",
  whatsapp: "",
};

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products & Services", path: "/products" },
  { label: "Digital Dentistry", path: "/digital-dentistry" },
  { label: "Why ZiaDent", path: "/why-ziadent" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  { label: "Zirconia Crowns & Bridges", path: "/products/zirconia" },
  { label: "PFM Crowns & Bridges", path: "/products/pfm" },
  { label: "Metal Crowns", path: "/products/metal-crowns" },
  { label: "Temporary PMMA Crowns", path: "/products/pmma" },
  { label: "Implant Crowns", path: "/products/implant-crowns" },
  { label: "Complete Dentures", path: "/products/complete-dentures" },
  { label: "Removable Partial Dentures (RPD)", path: "/products/partial-dentures" },
  { label: "Flexible Dentures", path: "/products/flexible-dentures" },
  { label: "Digital Zirconia Milling", path: "/products/digital-milling" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "LinkedIn",
      url: socialLinks.linkedin,
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      url: socialLinks.instagram,
      icon: FaInstagram,
    },
    {
      name: "YouTube",
      url: socialLinks.youtube,
      icon: FaYoutube,
    },
    {
      name: "WhatsApp",
      url: socialLinks.whatsapp,
      icon: FaWhatsapp,
    },
  ].filter((item) => item.url);

  return (
    <footer className="zc-footer">

      {/* DECORATIVE BACKGROUND */}

      <div className="zc-footer-glow" />
      <div className="zc-footer-wave zc-footer-wave-top" />
      <div className="zc-footer-wave zc-footer-wave-bottom" />

      <div className="zc-footer-container">

        {/* BRAND COLUMN */}

        <div className="zc-footer-brand">

          <Link to="/" className="zc-footer-logo">
            <img
              src={logo}
              alt="Ziadent Care"
            />
          </Link>

          <p className="zc-footer-description">
            Your dental laboratory partner for fixed restorations,
            implant prosthetics, removable dentures and digital
            zirconia milling.
          </p>

          <div className="zc-footer-highlights">

            <div className="zc-footer-highlight">
              <span className="zc-footer-highlight-icon">
                <Smile size={27} />
              </span>
              <p>Precision<br />Craftsmanship</p>
            </div>

            <div className="zc-footer-highlight">
              <span className="zc-footer-highlight-icon">
                <ShieldCheck size={27} />
              </span>
              <p>Consistent<br />Quality</p>
            </div>

            <div className="zc-footer-highlight">
              <span className="zc-footer-highlight-icon">
                <UsersRound size={27} />
              </span>
              <p>Dedicated<br />Clinic Support</p>
            </div>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="zc-footer-column">

          <h3 className="zc-footer-heading">
            Quick Links
          </h3>

          <span className="zc-footer-heading-line" />

          <ul className="zc-footer-links">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  <ChevronRight size={17} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* SERVICES */}

        <div className="zc-footer-column zc-footer-services">

          <h3 className="zc-footer-heading">
            Our Services
          </h3>

          <span className="zc-footer-heading-line" />

          <ul className="zc-footer-links">
            {services.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  <ChevronRight size={17} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* CONTACT */}

        <div className="zc-footer-column zc-footer-contact">

          <h3 className="zc-footer-heading">
            Get in Touch
          </h3>

          <span className="zc-footer-heading-line" />

          <div className="zc-footer-contact-list">

            <div className="zc-footer-contact-item">
              <span className="zc-footer-contact-icon">
                <MapPin size={21} />
              </span>

              <p>Hoskote, Karnataka, India</p>
            </div>

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="zc-footer-contact-item"
              >
                <span className="zc-footer-contact-icon">
                  <Mail size={21} />
                </span>
                <p>{contact.email}</p>
              </a>
            )}

            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="zc-footer-contact-item"
              >
                <span className="zc-footer-contact-icon">
                  <Phone size={21} />
                </span>
                <p>Request a Call</p>
              </a>
            )}

            <Link
              to="/schedule-call"
              className="zc-footer-contact-item"
            >
              <span className="zc-footer-contact-icon">
                <CalendarDays size={21} />
              </span>
              <p>Schedule a Call with Our Team</p>
            </Link>

          </div>

          {/* SOCIAL MEDIA */}

          {socials.length > 0 && (
            <div className="zc-footer-socials">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="zc-footer-bottom">

        <div className="zc-footer-bottom-container">

          <p className="zc-footer-copyright">
            © {currentYear} Ziadent Care. All Rights Reserved.
          </p>

          <div className="zc-footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
