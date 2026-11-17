
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Phone,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import "./Navbar.css";


const productLinks = [
  {
    title: "Zirconia Crowns & Bridges",
    path: "/products/zirconia",
  },
  {
    title: "PFM Crowns & Bridges",
    path: "/products/pfm",
  },
  {
    title: "Metal Crowns",
    path: "/products/metal-crowns",
  },
  {
    title: "Temporary PMMA Crowns",
    path: "/products/pmma",
  },
  {
    title: "Implant Crowns",
    path: "/products/implant-crowns",
  },
  {
    title: "Complete Dentures",
    path: "/products/complete-dentures",
  },
  {
    title: "Removable Partial Dentures (RPD)",
    path: "/products/partial-dentures",
  },
  {
    title: "Flexible Dentures",
    path: "/products/flexible-dentures",
  },
  {
    title: "Digital Zirconia Milling",
    path: "/products/digital-milling",
  },
];

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Digital Dentistry", path: "/digital-dentistry" },
  { title: "About Us", path: "/about" },
  { title: "Why ZiaDent", path: "/why-ziadent" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="zd-header">
        <div className="zd-navbar">

          {/* BRAND LOGO */}

          <Link to="/" className="zd-brand">
            <div className="zd-logo-mark">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 7C25 7 20 12 15 10C8 7 5 14 7 23L14 50C16 58 22 59 26 50L32 37L38 50C42 59 48 58 50 50L57 23C59 14 56 7 49 10C44 12 39 7 32 7Z"
                  stroke="#0B5F8A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M17 30C25 20 38 17 48 12C43 22 34 29 24 35"
                  stroke="#F47721"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="zd-brand-text">
              <span>ZIADENT</span>
              <small>DENTAL LAB</small>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="zd-navigation">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `zd-nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            {/* PRODUCTS DROPDOWN */}

            <div
              className={`zd-products-menu ${
                productsOpen ? "open" : ""
              }`}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`zd-nav-link zd-dropdown-trigger ${
                  location.pathname.startsWith("/products")
                    ? "active"
                    : ""
                }`}
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
                aria-label="Open products menu"
              >
                Products & Services
                <ChevronDown size={16} />
              </button>

              <div className="zd-dropdown">
                <div className="zd-dropdown-heading">
                  <span>OUR PRODUCTS</span>
                  <p>Precision crafted dental solutions</p>
                </div>

                <div className="zd-dropdown-grid">
                  {productLinks.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="zd-dropdown-item"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="zd-dropdown-icon">
                        <ArrowUpRight size={17} />
                      </span>

                      <span>{product.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `zd-nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.title}
              </NavLink>
            ))}

          </nav>

          {/* RIGHT ACTIONS */}

          <div className="zd-nav-actions">

            <a
              href="tel:"
              className="zd-phone"
              aria-label="Call ZiaDent"
            >
              <span className="zd-phone-icon">
                <Phone size={20} />
              </span>

              <span className="zd-phone-text">
                <small>Call Our Team</small>
                <strong>Get In Touch</strong>
              </span>
            </a>

            <Link
              to="/schedule-call"
              className="zd-schedule-btn"
            >
              <CalendarDays size={19} />
              <span>Schedule a Call</span>
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* MOBILE TOGGLE */}

          <button
            className="zd-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </header>

      {/* MOBILE NAVIGATION */}

      <div
        className={`zd-mobile-overlay ${
          mobileOpen ? "show" : ""
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`zd-mobile-panel ${
          mobileOpen ? "show" : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="zd-mobile-header">

          <Link to="/" className="zd-brand">
            <div className="zd-logo-mark">
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 7C25 7 20 12 15 10C8 7 5 14 7 23L14 50C16 58 22 59 26 50L32 37L38 50C42 59 48 58 50 50L57 23C59 14 56 7 49 10C44 12 39 7 32 7Z"
                  stroke="#0B5F8A"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M17 30C25 20 38 17 48 12"
                  stroke="#F47721"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="zd-brand-text">
              <span>ZIADENT</span>
              <small>DENTAL LAB</small>
            </div>
          </Link>

          <button
            className="zd-mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <X size={23} />
          </button>

        </div>

        <nav className="zd-mobile-navigation">

          <NavLink to="/" end className="zd-mobile-link">
            Home
          </NavLink>

          <div className="zd-mobile-products">
            <button
              className="zd-mobile-link zd-mobile-product-trigger"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products & Services
              <ChevronDown
                size={18}
                className={productsOpen ? "rotated" : ""}
              />
            </button>

            {productsOpen && (
              <div className="zd-mobile-submenu">
                {productLinks.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    onClick={() => setMobileOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="zd-mobile-link"
            >
              {link.title}
            </NavLink>
          ))}

        </nav>

        <div className="zd-mobile-bottom">

          <div className="zd-mobile-contact">
            <Phone size={19} />
            <span>Connect with our team</span>
          </div>

          <Link
            to="/schedule-call"
            className="zd-schedule-btn mobile-cta"
          >
            <CalendarDays size={19} />
            Schedule a Call
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </aside>
    </>
  );
};

export default Navbar;
