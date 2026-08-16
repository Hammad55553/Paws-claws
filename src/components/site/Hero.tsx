import { Link } from "@tanstack/react-router";
import { Phone, CalendarHeart, PawPrint, HeartPulse, Cat, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/site-data";
import { Blobs } from "./Blobs";
import { PawParticles } from "./PawParticles";
import heroImage from "@/assets/hero-vet.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden surface-soft">
      <Blobs />
      <PawParticles count={14} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
            <PawPrint className="size-3.5 animate-wag" aria-hidden /> Faisalabad · Dogs &amp; Cats
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Trusted pet care from a team that{" "}
            <span className="text-gradient-brand">loves animals</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Paws &amp; Claws Animal Hospital brings clinical treatment, grooming, boarding and pet
            essentials together on West Canal Road — so your dog or cat gets everything in one calm,
            friendly place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href={CLINIC.phoneHref}>
                <Phone /> Call Now
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contact" hash="appointment">
                <CalendarHeart /> Book an Appointment
              </Link>
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: Dog, label: "Dog care" },
              { icon: Cat, label: "Cat care" },
              { icon: HeartPulse, label: "Diagnostics & surgery" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="size-5 text-primary" aria-hidden />
                <dt className="sr-only">Focus</dt>
                <dd className="text-sm font-semibold text-navy">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="animate-float relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-glow">
            <img
              src={heroImage}
              alt="Veterinarian examining a puppy and a cat at Paws & Claws Animal Hospital"
              width={1408}
              height={1408}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="animate-float absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-soft backdrop-blur sm:-left-8"
            style={{ animationDelay: "-2s" }}
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl gradient-brand text-brand-foreground">
              <PawPrint className="size-5" aria-hidden />
            </span>
            <span className="text-sm font-bold text-navy">
              12 services
              <span className="block text-xs font-medium text-muted-foreground">
                under one roof
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
