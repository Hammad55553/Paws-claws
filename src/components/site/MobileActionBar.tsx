import { Link } from "@tanstack/react-router";
import { Phone, CalendarHeart } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 p-2 backdrop-blur-xl lg:hidden">
      <div className="flex gap-2">
        <a
          href={CLINIC.phoneHref}
          className="animate-pulse-ring flex flex-1 items-center justify-center gap-2 rounded-full gradient-brand px-4 py-3 text-sm font-bold text-brand-foreground"
        >
          <Phone className="size-4" aria-hidden /> Call Now
        </a>
        <Link
          to="/contact"
          hash="appointment"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-background px-4 py-3 text-sm font-bold text-navy"
        >
          <CalendarHeart className="size-4 text-primary" aria-hidden /> Appointment
        </Link>
      </div>
    </div>
  );
}
