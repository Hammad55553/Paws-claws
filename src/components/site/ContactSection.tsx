import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, MAP_EMBED, MAP_LINK } from "@/lib/site-data";
import { AppointmentForm } from "./AppointmentForm";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      <Reveal>
        <div id="appointment" className="scroll-mt-28 rounded-3xl border border-border/70 bg-card p-6 shadow-soft sm:p-8">
          <h3 className="text-xl font-extrabold text-navy">Book an appointment</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Share a few details and we will get back to you to confirm a time.
          </p>
          <div className="mt-6">
            <AppointmentForm />
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="flex flex-col gap-6">
        <ul className="grid gap-4">
          {[
            { icon: Phone, label: "Phone", value: CLINIC.phone, href: CLINIC.phoneHref },
            { icon: Mail, label: "Email", value: CLINIC.email, href: CLINIC.emailHref },
            { icon: MapPin, label: "Address", value: CLINIC.address, href: MAP_LINK },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.label === "Address" ? "_blank" : undefined}
                rel={item.label === "Address" ? "noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words font-semibold text-navy">{item.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="overflow-hidden rounded-3xl border border-border/70 shadow-soft">
          <iframe
            title={`Map showing ${CLINIC.name} location`}
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0"
          />
        </div>

        <Button asChild variant="ocean" size="xl" className="rounded-full">
          <a href={MAP_LINK} target="_blank" rel="noreferrer">
            <Navigation /> Get directions
          </a>
        </Button>
      </Reveal>
    </div>
  );
}
