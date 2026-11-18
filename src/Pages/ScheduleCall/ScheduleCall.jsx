
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Headset,
  ShieldCheck,
  Users,
  Settings,
  Network,
  Handshake,
  UserRound,
  Building2,
  Phone,
  Mail,
  LockKeyhole,
  ChevronLeft,
  ChevronRight,
  
  Clock,
} from "lucide-react";

import hero from "../../assets/schedule/hero.png";
import crowns from "../../assets/about/crowns.png";
import "./ScheduleCall.css";
import { FaTooth } from "react-icons/fa";

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

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "04:00 PM",
  "04:30 PM",
];

const benefits = [
  {
    icon: <CalendarDays />,
    title: "Personalized Discussion",
    description: "Discuss your specific case and requirements.",
  },
  {
    icon: <Settings />,
    title: "Service Guidance",
    description: "Get guidance about the right laboratory solution.",
  },
  {
    icon: <Network />,
    title: "Workflow Support",
    description: "Understand case submission and coordination.",
  },
  {
    icon: <Handshake />,
    title: "Partnership Enquiry",
    description: "Explore collaboration and ongoing case support.",
  },
];

const ScheduleCall = () => {
  const today = new Date();
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    doctorName: "",
    clinicName: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const monthName = visibleMonth.toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1
  ).getDay();

  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0
  ).getDate();

  const dateKey = (year, month, day) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };

  const isPastDate = (day) => {
    const date = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth(),
      day
    );

    const current = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return date < current;
  };

  const changeMonth = (direction) => {
    setVisibleMonth(
      new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth() + direction,
        1
      )
    );
    setSelectedDate("");
    setSelectedTime("");
  };

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage("");

    const requestData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      timezone: "Asia/Kolkata",
    };

    try {
      // Replace this endpoint with your actual booking API.
      const response = await fetch("/api/booking/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Booking request could not be submitted.");
      }

      setSubmitMessage(
        "Your request has been submitted. Our team will contact you after checking availability."
      );

    } catch (error) {
      setSubmitMessage(
        "Booking service is not connected yet. Please connect the scheduling API before accepting requests."
      );
    }
  };

  return (
    <div className="schedule-page">

      {/* HERO */}

      <section className="schedule-hero">

        <div className="schedule-hero-content">

          <div className="schedule-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Schedule a Call</span>
          </div>

          <span className="schedule-eyebrow">
            CONNECT WITH ZIADENT
          </span>

          <h1>
            Schedule a Call
            <br />
            with <span>Our Team</span>
          </h1>

          <div className="schedule-title-line" />

          <p>
            Book a convenient time to discuss your case
            requirements, workflow or partnership needs.
          </p>

        </div>

        <div className="schedule-hero-image">
          <img
            src={hero}
            alt="ZiaDent team member assisting with an appointment"
          />
        </div>

      </section>

      {/* BOOKING AREA */}

      <section className="schedule-main">

        {/* LEFT INFORMATION */}

        <aside className="schedule-sidebar">

          <h2>Why Schedule a Call?</h2>

          <div className="schedule-benefits">

            {benefits.map((item, index) => (
              <div className="schedule-benefit" key={index}>

                <div className="schedule-benefit-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </div>
            ))}

          </div>

          <div className="schedule-sidebar-image">
            <img
              src={crowns}
              alt="Ceramic dental crowns"
            />
          </div>

        </aside>

        {/* BOOKING FORM */}

        <div className="schedule-form-card">

          <div className="schedule-form-heading">
            <span className="schedule-label">
              APPOINTMENT REQUEST
            </span>

            <h2>Book Your Appointment</h2>

            <p>
              Share your details, choose a preferred date
              and time, and our team will connect with you.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* PERSONAL DETAILS */}

            <div className="schedule-fields">

              <div className="schedule-field">
                <label htmlFor="doctorName">
                  Doctor Name <span>*</span>
                </label>

                <div className="schedule-input-wrap">
                  <UserRound />
                  <input
                    id="doctorName"
                    name="doctorName"
                    placeholder="Enter doctor name"
                    value={formData.doctorName}
                    onChange={updateField}
                    required
                  />
                </div>
              </div>

              <div className="schedule-field">
                <label htmlFor="clinicName">
                  Clinic Name
                </label>

                <div className="schedule-input-wrap">
                  <Building2 />
                  <input
                    id="clinicName"
                    name="clinicName"
                    placeholder="Enter clinic name"
                    value={formData.clinicName}
                    onChange={updateField}
                  />
                </div>
              </div>

              <div className="schedule-field">
                <label htmlFor="mobile">
                  Mobile Number <span>*</span>
                </label>

                <div className="schedule-input-wrap">
                  <Phone />
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter mobile number"
                    pattern="[0-9+\s]{10,15}"
                    value={formData.mobile}
                    onChange={updateField}
                    required
                  />
                </div>
              </div>

              <div className="schedule-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="schedule-input-wrap">
                  <Mail />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={updateField}
                  />
                </div>
              </div>

              <div className="schedule-field full-width">
                <label htmlFor="service">
                  Interested Service <span>*</span>
                </label>

                <div className="schedule-input-wrap">
                  <FaTooth />

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={updateField}
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
              </div>

            </div>

            {/* DATE AND TIME */}

            <div className="schedule-selection">

              <div className="schedule-calendar-area">

                <label>
                  Select a Date <span>*</span>
                </label>

                <div className="schedule-calendar">

                  <div className="calendar-heading">

                    <button
                      type="button"
                      onClick={() => changeMonth(-1)}
                      disabled={
                        visibleMonth.getFullYear() === today.getFullYear() &&
                        visibleMonth.getMonth() === today.getMonth()
                      }
                      aria-label="Previous month"
                    >
                      <ChevronLeft />
                    </button>

                    <strong>{monthName}</strong>

                    <button
                      type="button"
                      onClick={() => changeMonth(1)}
                      aria-label="Next month"
                    >
                      <ChevronRight />
                    </button>

                  </div>

                  <div className="calendar-grid">

                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <span className="calendar-weekday" key={day}>
                          {day}
                        </span>
                      )
                    )}

                    {Array.from({ length: firstDay }).map((_, index) => (
                      <span
                        className="calendar-empty"
                        key={`empty-${index}`}
                      />
                    ))}

                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const day = index + 1;
                      const value = dateKey(
                        visibleMonth.getFullYear(),
                        visibleMonth.getMonth(),
                        day
                      );

                      const disabled = isPastDate(day);

                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={disabled}
                          className={
                            selectedDate === value
                              ? "calendar-day selected"
                              : "calendar-day"
                          }
                          onClick={() => {
                            setSelectedDate(value);
                            setSelectedTime("");
                            setSubmitMessage("");
                          }}
                        >
                          {day}
                        </button>
                      );
                    })}

                  </div>

                </div>

              </div>

              <div className="schedule-time-area">

                <label>
                  Select a Time Slot <span>*</span>
                </label>

                <div className="schedule-time-grid">

                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      className={
                        selectedTime === time
                          ? "schedule-time selected"
                          : "schedule-time"
                      }
                      onClick={() => {
                        setSelectedTime(time);
                        setSubmitMessage("");
                      }}
                      aria-pressed={selectedTime === time}
                    >
                      {time}
                    </button>
                  ))}

                </div>

                <p className="schedule-time-note">
                  <Clock />
                  Time zone: India Standard Time
                </p>

              </div>

            </div>

            {/* MESSAGE */}

            <div className="schedule-field schedule-message">
              <label htmlFor="message">
                Additional Requirements (Optional)
              </label>

              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Tell us about your case, requirements or questions."
                value={formData.message}
                onChange={updateField}
              />
            </div>

            {/* SUBMIT */}

            <div className="schedule-submit-row">

              <button
                type="submit"
                className="schedule-submit"
                disabled={!selectedDate || !selectedTime}
              >
                <CalendarDays />
                Book a Call
                <ArrowRight />
              </button>

              <div className="schedule-privacy">
                <LockKeyhole />
                <span>
                  Your information will only be used
                  to coordinate your call.
                </span>
              </div>

            </div>

            {submitMessage && (
              <p className="schedule-status" role="status">
                {submitMessage}
              </p>
            )}

          </form>

        </div>

      </section>

      {/* TRUST STRIP */}

      <section className="schedule-trust">

        <div className="schedule-trust-item">
          <div className="schedule-trust-icon">
            <Headset />
          </div>

          <div>
            <h3>Quick Response</h3>
            <p>Our team will review your request.</p>
          </div>
        </div>

        <div className="schedule-trust-item">
          <div className="schedule-trust-icon">
            <ShieldCheck />
          </div>

          <div>
            <h3>Secure & Private</h3>
            <p>Your details are handled responsibly.</p>
          </div>
        </div>

        <div className="schedule-trust-item">
          <div className="schedule-trust-icon">
            <Users />
          </div>

          <div>
            <h3>Expert Team</h3>
            <p>Discuss your restoration requirements.</p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default ScheduleCall;
