
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

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
  {
    label: "Zirconia Crowns & Bridges",
    path: "/products/zirconia-crowns-bridges",
  },
  {
    label: "PFM Crowns & Bridges",
    path: "/products/pfm-crowns-bridges",
  },
  {
    label: "Metal Crowns",
    path: "/products/metal-crowns",
  },
  {
    label: "Temporary PMMA Crowns",
    path: "/products/temporary-pmma-crowns",
  },
  {
    label: "Implant Crowns",
    path: "/products/implant-crowns",
  },
  {
    label: "Complete Dentures",
    path: "/products/complete-dentures",
  },
  {
    label: "Removable Partial Dentures",
    path: "/products/removable-partial-dentures",
  },
  {
    label: "Flexible Dentures",
    path: "/products/flexible-dentures",
  },
  {
    label: "Digital Zirconia Milling",
    path: "/products/digital-zirconia-milling",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const isProductPage = location.pathname.startsWith("/products");

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close menus whenever route changes
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  return (
    <header className="zc-header">

      <div className="zc-navbar">

        {/* LOGO */}

        <Link to="/" className="zc-brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="ZiaDent Care"
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

          {/* PRODUCTS & SERVICES */}

          <div className="zc-nav-dropdown" ref={dropdownRef}>

            <div className="zc-dropdown-trigger">

              <Link
                to="/products"
                className={`zc-nav-link ${
                  isProductPage ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Products & Services
              </Link>

              <button
                type="button"
                className="zc-dropdown-arrow"
                aria-label="Open products dropdown"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((prev) => !prev)}
              >
                <ChevronDown
                  size={16}
                  className={productsOpen ? "zc-chevron-open" : ""}
                />
              </button>

            </div>

            <div
              className={`zc-dropdown-menu ${
                productsOpen ? "zc-dropdown-visible" : ""
              }`}
            >

              <div className="zc-dropdown-heading">
                <span>Our Products & Services</span>
                <p>Explore our dental solutions</p>
              </div>

              <Link
                to="/products"
                className="zc-dropdown-all"
                onClick={closeMenu}
              >
                Explore All Products & Services
                <ArrowUpRight size={16} />
              </Link>

              {products.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `zc-dropdown-item ${isActive ? "active" : ""}`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} />
                </NavLink>
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
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setProductsOpen(false);
          }}
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

        {/* MOBILE PRODUCTS */}

        <div className="zc-mobile-products">

          <Link
            to="/products"
            className={`zc-mobile-link zc-mobile-products-main ${
              isProductPage ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <span>Products & Services</span>
            <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            className="zc-mobile-link zc-mobile-product-toggle"
            onClick={() => setProductsOpen((prev) => !prev)}
            aria-expanded={productsOpen}
          >
            <span>Browse Products</span>

            <ChevronDown
              size={18}
              className={productsOpen ? "zc-chevron-open" : ""}
            />
          </button>

          {productsOpen && (
            <div className="zc-mobile-product-list">

              {products.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {item.label}
                </NavLink>
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
          <span>Schedule a Call with Our Team</span>
          <ArrowUpRight size={18} />
        </Link>

      </div>

      {/* MOBILE BACKDROP */}

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
