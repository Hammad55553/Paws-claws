import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, PawPrint, Instagram } from "lucide-react";
import { CLINIC, NAV_LINKS, SERVICES, SOCIALS } from "@/lib/site-data";
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
          <div className="mt-6 flex gap-4">
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand transition-colors">
              <Instagram className="size-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" className="text-white/60 hover:text-brand transition-colors">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.39-3.37-3.38-5.74.02-2.3 1.34-4.5 3.32-5.65 1.25-.75 2.75-1.05 4.19-.94v4.06c-1.1-.14-2.22.12-3.07.82-.87.7-1.37 1.83-1.31 2.97.06 1.13.68 2.22 1.6 2.87.89.65 2.08.85 3.15.54 1.05-.31 1.91-1.12 2.3-2.14.24-.62.33-1.3.3-1.97-.07-4.99-.03-9.97-.04-14.95z"/>
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
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
                <Link to="/services/$serviceId" params={{ serviceId: s.id }} className="transition-colors hover:text-brand">
                  {s.title}
                </Link>
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
