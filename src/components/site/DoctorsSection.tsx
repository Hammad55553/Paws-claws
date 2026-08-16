import { Stethoscope, GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, DOCTORS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function DoctorsSection() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {DOCTORS.map((doc, i) => (
        <Reveal key={doc.name} delay={i * 120}>
          <article className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-32 surface-soft" />
            <span className="relative mx-auto flex size-24 items-center justify-center rounded-full gradient-brand text-brand-foreground shadow-glow transition-transform duration-500 group-hover:scale-105">
              <Stethoscope className="size-11" aria-hidden />
            </span>
            <h3 className="relative mt-6 text-xl font-extrabold text-navy">{doc.name}</h3>
            <ul className="relative mt-3 flex flex-wrap justify-center gap-2">
              {doc.credentials.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground"
                >
                  <GraduationCap className="size-3.5" aria-hidden /> {c}
                </li>
              ))}
            </ul>
            <p className="relative mt-4 text-sm text-muted-foreground">
              Veterinary consultation and treatment for dogs and cats.
            </p>
            <Button asChild variant="heroOutline" size="lg" className="relative mt-6 rounded-full">
              <a href={CLINIC.phoneHref}>
                <Phone /> Call to consult
              </a>
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
