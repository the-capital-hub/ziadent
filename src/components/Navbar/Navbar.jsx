
import { useState, useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  CalendarDays,
  Phone,
} from "lucide-react";

import logo from "../../assets/logo.png";
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
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const desktopDropdownRef = useRef(null);

  const isProductPage = location.pathname.startsWith("/products");

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDesktopProductsOpen(false);
    setMobileProductsOpen(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((previous) => !previous);
    setMobileProductsOpen(false);
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen((previous) => !previous);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDesktopProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close menus after route navigation
  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  // Close menus using Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="zc-header">

      <div className="zc-navbar">

        {/* LOGO */}

        <Link
          to="/"
          className="zc-brand"
          onClick={closeAllMenus}
          aria-label="ZiaDent Home"
        >
          <img
            src={logo}
            alt="ZiaDent Dental Lab"
            className="zc-brand-logo"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          className="zc-desktop-nav"
          aria-label="Main navigation"
        >

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

          {/* DESKTOP PRODUCTS DROPDOWN */}

          <div
            className="zc-nav-dropdown"
            ref={desktopDropdownRef}
          >

            <div className="zc-dropdown-trigger">

              <NavLink
                to="/products"
                className={() =>
                  `zc-nav-link ${
                    isProductPage ? "active" : ""
                  }`
                }
              >
                Products & Services
              </NavLink>

              <button
                type="button"
                className="zc-dropdown-arrow"
                aria-label="Toggle products menu"
                aria-expanded={desktopProductsOpen}
                onClick={() =>
                  setDesktopProductsOpen((previous) => !previous)
                }
              >
                <ChevronDown
                  size={17}
                  className={
                    desktopProductsOpen ? "zc-chevron-open" : ""
                  }
                />
              </button>

            </div>

            <div
              className={`zc-dropdown-menu ${
                desktopProductsOpen ? "zc-dropdown-visible" : ""
              }`}
            >

              <div className="zc-dropdown-heading">
                <span>Our Products & Services</span>
                <p>Explore our dental solutions</p>
              </div>

              <Link
                to="/products"
                className="zc-dropdown-all"
                onClick={closeAllMenus}
              >
                <span>Explore All Products & Services</span>
                <ArrowUpRight size={16} />
              </Link>

              {products.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeAllMenus}
                  className={({ isActive }) =>
                    `zc-dropdown-item ${
                      isActive ? "active" : ""
                    }`
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

        {/* DESKTOP ACTIONS */}

        <div className="zc-navbar-actions">

          <Link
            to="/schedule-call"
            className="zc-call-info"
          >
            <span className="zc-call-icon">
              <Phone size={19} />
            </span>

            <span>Request a Call</span>
          </Link>

          <Link
            to="/schedule-call"
            className="zc-navbar-cta"
          >
            <CalendarDays size={18} />
            <span>Schedule a Call</span>
            <ArrowUpRight size={17} />
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className="zc-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="zc-mobile-navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}

      <nav
        id="zc-mobile-navigation"
        className={`zc-mobile-menu ${menuOpen ? "show" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >

        {navLinks.slice(0, 2).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={closeAllMenus}
            tabIndex={menuOpen ? 0 : -1}
            className={({ isActive }) =>
              `zc-mobile-link ${isActive ? "active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* MOBILE PRODUCTS ACCORDION */}

        <div className="zc-mobile-products">

          <button
            type="button"
            className={`zc-mobile-link zc-mobile-product-toggle ${
              isProductPage ? "active" : ""
            }`}
            onClick={toggleMobileProducts}
            aria-expanded={mobileProductsOpen}
            aria-controls="zc-mobile-product-submenu"
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>Products & Services</span>

            <ChevronDown
              size={19}
              className={
                mobileProductsOpen ? "zc-chevron-open" : ""
              }
            />
          </button>

          <div
            id="zc-mobile-product-submenu"
            className={`zc-mobile-product-list ${
              mobileProductsOpen ? "open" : ""
            }`}
            aria-hidden={!mobileProductsOpen}
          >

            <NavLink
              to="/products"
              onClick={closeAllMenus}
              tabIndex={menuOpen && mobileProductsOpen ? 0 : -1}
              className={({ isActive }) =>
                `zc-mobile-product-all ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span>Explore All Products & Services</span>
              <ArrowUpRight size={15} />
            </NavLink>

            {products.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeAllMenus}
                tabIndex={menuOpen && mobileProductsOpen ? 0 : -1}
                className={({ isActive }) =>
                  `zc-mobile-product-item ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowUpRight size={14} />
              </NavLink>
            ))}

          </div>

        </div>

        {navLinks.slice(2).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeAllMenus}
            tabIndex={menuOpen ? 0 : -1}
            className={({ isActive }) =>
              `zc-mobile-link ${isActive ? "active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* MOBILE CTA */}

        <Link
          to="/schedule-call"
          className="zc-mobile-cta"
          onClick={closeAllMenus}
          tabIndex={menuOpen ? 0 : -1}
        >
          <CalendarDays size={19} />
          <span>Schedule a Call with Our Team</span>
          <ArrowUpRight size={18} />
        </Link>

      </nav>

      {/* MOBILE BACKDROP */}

      {menuOpen && (
        <button
          type="button"
          className="zc-mobile-backdrop"
          aria-label="Close navigation menu"
          onClick={closeAllMenus}
        />
      )}

    </header>
  );
}

export default Navbar;
