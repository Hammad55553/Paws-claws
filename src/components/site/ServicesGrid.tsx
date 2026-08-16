import { SERVICES } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";

export function ServicesGrid() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service, i) => (
        <Reveal key={service.title} delay={i * 60}>
          <Link 
            to="/services/$serviceId" 
            params={{ serviceId: service.id }}
            className="group relative block h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow"
          >
            <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 transition-transform duration-500 group-hover:scale-150" />
            <span className="relative inline-flex size-14 items-center justify-center rounded-2xl gradient-brand text-brand-foreground transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <service.icon className="size-7" aria-hidden />
            </span>
            <h3 className="relative mt-5 text-lg font-bold text-navy">{service.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
