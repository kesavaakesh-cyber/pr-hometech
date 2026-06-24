import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden text-white">
      <div className="mesh-bg" />
      <section className="relative mx-auto grid max-w-[1180px] gap-8 px-5 py-14 md:grid-cols-4">
        <div>
          <h2 className="text-3xl text-[var(--amber-light)]">PR Home Tech</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Washing Machine, Fridge, TV and AC repair service in Coimbatore and Pollachi.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Services</h3>
          <p className="mt-4 text-slate-300">Washing Machine Repair</p>
          <p className="text-slate-300">Fridge Repair</p>
          <p className="text-slate-300">TV Repair</p>
          <p className="text-slate-300">AC Service</p>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <a href="tel:+919999999999" className="mt-4 flex items-center gap-2 text-slate-300 hover:text-white">
            <Phone size={17} /> +91 99999 99999
          </a>
          <a href="mailto:prhometech@gmail.com" className="mt-2 flex items-center gap-2 text-slate-300 hover:text-white">
            <Mail size={17} /> prhometech@gmail.com
          </a>
          <p className="mt-2 flex items-center gap-2 text-slate-300">
            <MapPin size={17} /> Coimbatore &amp; Pollachi
          </p>
        </div>

        <div>
          <h3 className="font-bold">Book Now</h3>
          <a href="https://wa.me/919999999999" className="btn-primary mt-5">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </section>

      <p className="relative border-t border-white/10 py-5 text-center text-sm text-slate-400">
        &copy; 2026 PR Home Tech. All rights reserved.
      </p>
    </footer>
  );
}
