
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  CalendarDays,
  Phone,
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Digital Dentistry", path: "/digital-dentistry" },
  { label: "Why ZiaDent", path: "/why-ziadent" },
  { label: "Contact Us", path: "/contact" },
];

const products = [
  { label: "Zirconia Crowns & Bridges", path: "/products/zirconia" },
  { label: "PFM Crowns & Bridges", path: "/products/pfm" },
  { label: "Metal Crowns", path: "/products/metal-crowns" },
  { label: "Temporary PMMA Crowns", path: "/products/pmma" },
  { label: "Implant Crowns", path: "/products/implant-crowns" },
  { label: "Complete Dentures", path: "/products/complete-dentures" },
  { label: "Removable Partial Dentures", path: "/products/partial-dentures" },
  { label: "Flexible Dentures", path: "/products/flexible-dentures" },
  { label: "Digital Zirconia Milling", path: "/products/digital-milling" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="zc-header">
      <div className="zc-navbar">

        {/* LOGO */}

        <Link to="/" className="zc-brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Ziadent Care"
            className="zc-brand-logo"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="zc-desktop-nav">

          {navLinks.slice(0, 2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `zc-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* PRODUCTS DROPDOWN */}

          <div className="zc-nav-dropdown">

            <button
              className="zc-nav-link zc-dropdown-trigger"
              type="button"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products & Services
              <ChevronDown
                size={17}
                className={productsOpen ? "zc-chevron-open" : ""}
              />
            </button>

            <div className="zc-dropdown-menu">
              <div className="zc-dropdown-heading">
                <span>Our Products & Services</span>
                <p>Explore our dental solutions</p>
              </div>

              {products.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className="zc-dropdown-item"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} />
                </Link>
              ))}
            </div>

          </div>

          {navLinks.slice(2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `zc-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

        {/* RIGHT ACTIONS */}

        <div className="zc-navbar-actions">

          <Link
            to="/schedule-call"
            className="zc-call-info"
          >
            <span className="zc-call-icon">
              <Phone size={20} />
            </span>

            <span>Request a Call</span>
          </Link>

          <Link
            to="/schedule-call"
            className="zc-navbar-cta"
          >
            <CalendarDays size={18} />
            <span>Schedule a Call with Our Team</span>
            <ArrowUpRight size={17} />
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className="zc-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* MOBILE MENU */}

      <div className={`zc-mobile-menu ${menuOpen ? "show" : ""}`}>

        {navLinks.slice(0, 2).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `zc-mobile-link ${isActive ? "active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <div className="zc-mobile-products">

          <button
            type="button"
            className="zc-mobile-link zc-mobile-product-toggle"
            onClick={() => setProductsOpen(!productsOpen)}
            aria-expanded={productsOpen}
          >
            Products & Services
            <ChevronDown
              size={18}
              className={productsOpen ? "zc-chevron-open" : ""}
            />
          </button>

          {productsOpen && (
            <div className="zc-mobile-product-list">
              {products.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

        </div>

        {navLinks.slice(2).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `zc-mobile-link ${isActive ? "active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <Link
          to="/schedule-call"
          className="zc-mobile-cta"
          onClick={closeMenu}
        >
          <CalendarDays size={19} />
          Schedule a Call with Our Team
          <ArrowUpRight size={18} />
        </Link>

      </div>

      {menuOpen && (
        <button
          type="button"
          className="zc-mobile-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}

    </header>
  );
}

export default Navbar;
