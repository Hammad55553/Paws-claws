import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-pets.jpg";

const POINTS = [
  "Consultation, diagnosis and treatment by DVM-qualified veterinarians",
  "On-site laboratory and ultrasound to support clinical decisions",
  "Grooming, boarding and day care in a calm, supervised environment",
  "Pet food and accessories so you can restock during a visit",
  "Home visits on request across Faisalabad",
];

export function AboutSection() {
  return (
    <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <div className="relative">
          <div className="animate-blob absolute -left-6 -top-6 h-40 w-40 rounded-full bg-ocean/20 blur-2xl" />
          <img
            src={aboutImage}
            alt="A golden retriever and a tabby cat resting together"
            loading="lazy"
            width={1200}
            height={912}
            className="relative w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </Reveal>

      <Reveal delay={120}>
        <ul className="space-y-4">
          {POINTS.map((point) => (
            <li
              key={point}
              className="group flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full gradient-brand text-brand-foreground transition-transform duration-300 group-hover:scale-110">
                <Check className="size-3.5" aria-hidden />
              </span>
              <span className="text-sm font-medium leading-relaxed text-navy/85">{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
