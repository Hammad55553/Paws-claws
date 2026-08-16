import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, PawPrint } from "lucide-react";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/site-data";
import logo from "@/assets/LOGOfinal.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-navy text-white/80">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={`${CLINIC.name} logo`} loading="lazy" className="h-20 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Veterinary care for dogs and cats in Faisalabad — clinical services, grooming, boarding
            and everyday pet essentials under one roof.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-base font-bold text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold text-white">Services</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title} className="flex items-center gap-1.5">
                <PawPrint className="size-3 text-brand" aria-hidden />
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="font-display text-base font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={CLINIC.phoneHref} className="flex items-start gap-2 hover:text-brand">
                <Phone className="mt-0.5 size-4 text-brand" aria-hidden /> {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={CLINIC.emailHref} className="flex items-start gap-2 break-all hover:text-brand">
                <Mail className="mt-0.5 size-4 text-brand" aria-hidden /> {CLINIC.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden /> {CLINIC.address}
            </li>
          </ul>
        </address>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} Asper InfoTech Private Limited. All rights reserved.
      </div>
    </footer>
  );
}
