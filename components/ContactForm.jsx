"use client";

import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    appliance: "Washing Machine",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.location.trim()) {
      setError("Please fill name, phone number and location.");
      return;
    }
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");

    const text = encodeURIComponent(
      `New Service Enquiry\nName: ${form.name}\nPhone: ${form.phone}\nAppliance: ${form.appliance}\nLocation: ${form.location}\nProblem: ${form.message || "Not specified"}`
    );

    // No backend yet — routes the enquiry straight to WhatsApp so leads are never lost.
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="section">
        <div className="glass-panel p-10 text-center">
          <CheckCircle2 className="mx-auto text-[var(--amber-dark)]" size={48} />
          <h2 className="mt-4 text-3xl font-bold">Enquiry sent!</h2>
          <p className="mt-2 text-[var(--ink-soft)]">
            We&apos;ve opened WhatsApp with your details. Our technician will call you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-dark mt-6"
          >
            Submit another enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section">
      <div className="glass-panel grid gap-8 p-8 md:grid-cols-2 md:p-12">
        <div>
          <span className="eyebrow">Book Service</span>

          <h2 className="mt-5 text-4xl font-bold">
            Need appliance repair?
          </h2>

          <p className="mt-4 text-[var(--ink-soft)] leading-8">
            Fill the form and our technician will call you shortly.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+919999999999" className="flex items-center gap-3">
              <Phone />
              <b>+91 99999 99999</b>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle />
              <b>WhatsApp Support</b>
            </a>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--glass-border-light)] bg-white/50 p-4 backdrop-blur-sm"
              placeholder="Your Name"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--glass-border-light)] bg-white/50 p-4 backdrop-blur-sm"
              placeholder="Phone Number"
              type="tel"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="appliance" className="sr-only">
              Appliance
            </label>
            <select
              id="appliance"
              name="appliance"
              value={form.appliance}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--glass-border-light)] bg-white/50 p-4 backdrop-blur-sm"
            >
              <option>Washing Machine</option>
              <option>Fridge</option>
              <option>TV</option>
              <option>AC</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--glass-border-light)] bg-white/50 p-4 backdrop-blur-sm"
              placeholder="Location"
              autoComplete="address-level2"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Describe the problem
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="h-32 w-full rounded-xl border border-[var(--glass-border-light)] bg-white/50 p-4 backdrop-blur-sm"
              placeholder="Describe the problem"
            />
          </div>

          {error && <p className="text-sm font-bold text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--amber)] py-4 font-bold text-white transition hover:bg-[var(--amber-dark)]"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}