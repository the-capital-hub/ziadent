
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Smile,
  ExternalLink,
  CheckCircle2,
  Clock,
} from "lucide-react";

import hero from "../../assets/contact/hero.png";
import lab from "../../assets/contact/lab.png";

import "./ContactUs.css";

const services = [
  "Zirconia Crowns & Bridges",
  "PFM Crowns & Bridges",
  "Metal Crowns",
  "Temporary PMMA Crowns",
  "Implant Crowns",
  "Complete Dentures",
  "Removable Partial Dentures (RPD)",
  "Flexible Dentures",
  "Digital Zirconia Milling",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    clinicName: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your backend API here before enabling live enquiries.
    setFormMessage(
      "The enquiry form is ready. Please connect the backend to receive submissions."
    );
  };

  const contactItems = [
    {
      icon: <Phone />,
      title: "Phone",
      description: "Phone details will be added soon.",
    },
    {
      icon: <MessageCircle />,
      title: "WhatsApp",
      description: "WhatsApp contact details will be added soon.",
    },
    {
      icon: <Mail />,
      title: "Email",
      description: "Email address will be added soon.",
    },
    {
      icon: <MapPin />,
      title: "Location",
      description: "Hoskote, Karnataka, India.",
    },
  ];

  return (
    <div className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <div className="contact-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact Us</span>
          </div>

          <span className="contact-eyebrow">
            GET IN TOUCH WITH ZIADENT
          </span>

          <h1>
            Let's Connect with
            <br />
            <span>ZiaDent</span>
          </h1>

          <div className="contact-title-line" />

          <p>
            Have a case, question or partnership enquiry?
            Our team is here to help you.
          </p>

        </div>

        <div className="contact-hero-image">
          <img
            src={hero}
            alt="Dental restorations in a professional laboratory"
          />
        </div>

      </section>

      {/* CONTACT AND FORM */}

      <section className="contact-main section-padding">

        <div className="contact-information">

          <span className="contact-label">
            Contact Information
          </span>

          <h2>Get in Touch</h2>

          <p className="contact-info-intro">
            Reach out to our team for case support,
            service enquiries or collaboration.
          </p>

          <div className="contact-methods">

            {contactItems.map((item, index) => (
              <div className="contact-method" key={index}>

                <div className="contact-method-icon">
                  {item.icon}
                </div>

                <div className="contact-method-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowRight className="contact-method-arrow" />

              </div>
            ))}

          </div>

        </div>

        {/* ENQUIRY FORM */}

        <div className="contact-form-card">

          <div className="contact-form-heading">
            <span className="contact-label">
              Send an Enquiry
            </span>

            <h2>Enquiry Form</h2>

            <p>
              Share a few details and our team can understand
              your requirements.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-grid">

              <div className="contact-form-group">
                <label htmlFor="doctorName">
                  Doctor Name <span>*</span>
                </label>

                <input
                  id="doctorName"
                  name="doctorName"
                  type="text"
                  placeholder="Enter doctor name"
                  value={formData.doctorName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="clinicName">
                  Clinic Name
                </label>

                <input
                  id="clinicName"
                  name="clinicName"
                  type="text"
                  placeholder="Enter clinic name"
                  value={formData.clinicName}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="mobile">
                  Mobile Number <span>*</span>
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9+\s]{10,15}"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-group full-width">
                <label htmlFor="service">
                  Interested Service <span>*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form-group full-width">
                <label htmlFor="message">
                  Message (Optional)
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your requirements"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button type="submit" className="contact-submit">
              <Send />
              Send Enquiry
              <ArrowRight />
            </button>

            {formMessage && (
              <p className="contact-form-status" role="status">
                {formMessage}
              </p>
            )}

          </form>

        </div>

      </section>

      {/* SERVICE CATEGORIES */}

      <section className="contact-services section-padding">

        <div className="contact-services-heading">
          <h2>Explore Our Services</h2>
          <p>Discuss your requirements with our team.</p>
        </div>

        <div className="contact-services-list">

          {services.map((service, index) => (
            <Link
              to="/products"
              className="contact-service-item"
              key={service}
            >
              <div className="contact-service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <span>{service}</span>

              <ArrowRight />
            </Link>
          ))}

        </div>

      </section>

      {/* LOCATION */}

      <section className="contact-location section-padding">

        <div className="contact-location-image">
          <img
            src={lab}
            alt="Dental laboratory interior"
          />
        </div>

        <div className="contact-location-content">

          <span className="contact-label">
            Find Us
          </span>

          <h2>Our Location</h2>

          <div className="contact-title-line" />

          <p>
            ZiaDent Dental Lab
            <br />
            Hoskote, Karnataka, India
          </p>

          <div className="contact-location-note">
            <MapPin />
            <span>Laboratory location details will be updated soon.</span>
          </div>

        </div>

        <div className="contact-map-placeholder">
          <MapPin />
          <h3>Hoskote, Karnataka</h3>
          <span>Exact map location to be added</span>
        </div>

      </section>

      {/* FINAL CTA */}

      <section className="contact-final-cta">

        <div className="contact-cta-icon">
          <Smile />
        </div>

        <div className="contact-cta-content">

          <h2>Schedule a Call with Our Team</h2>

          <p>
            Discuss your case requirements, workflow
            or partnership needs with our laboratory team.
          </p>

        </div>

        <Link
          to="/schedule-call"
          className="contact-cta-button"
        >
          <CalendarDays />
          <span>Schedule a Call</span>
          <ArrowRight />
        </Link>

      </section>

    </div>
  );
};

export default ContactUs;
