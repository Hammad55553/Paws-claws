import { ShieldCheck, Stethoscope, HeartHandshake, PawPrint } from "lucide-react";
import { SERVICES, DOCTORS } from "@/lib/site-data";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: Stethoscope,
    title: "Qualified veterinarians",
    text: "Consultation and treatment led by DVM-qualified, registered vets.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical + everyday care",
    text: "Diagnostics, surgery and vaccination alongside grooming and boarding.",
  },
  {
    icon: HeartHandshake,
    title: "Gentle handling",
    text: "A calm, pet-first approach for nervous dogs and cats.",
  },
  {
    icon: PawPrint,
    title: "Dogs & cats welcome",
    text: "Care tailored to the needs of both companions, at every life stage.",
  },
];

export function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 90}>
            <div className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-primary transition-all duration-500 group-hover:gradient-brand group-hover:text-brand-foreground">
                <b.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 grid gap-6 rounded-3xl surface-soft p-8 sm:grid-cols-3">
          {[
            { value: SERVICES.length, suffix: "", label: "Services offered" },
            { value: DOCTORS.length, suffix: "", label: "Veterinary doctors" },
            { value: 2, suffix: "", label: "Species cared for: dogs & cats" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-gradient-brand">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm font-semibold text-navy/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
