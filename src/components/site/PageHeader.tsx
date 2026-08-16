import { PawPrint } from "lucide-react";
import { Blobs } from "./Blobs";
import { PawParticles } from "./PawParticles";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden surface-soft">
      <Blobs />
      <PawParticles count={8} />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
            <PawPrint className="size-3.5 animate-wag" aria-hidden /> {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
