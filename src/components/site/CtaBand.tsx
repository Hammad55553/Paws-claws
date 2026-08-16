import { Link } from "@tanstack/react-router";
import { Phone, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/site-data";
import { PawParticles } from "./PawParticles";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] gradient-brand px-6 py-14 text-center shadow-glow sm:px-12">
          <PawParticles count={9} />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-brand-foreground sm:text-4xl">
              Your pet deserves gentle, professional care
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-foreground/90">
              Call us or send an appointment request — we will help you plan the next visit for your
              dog or cat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="xl" className="rounded-full bg-background text-navy hover:bg-background/90">
                <a href={CLINIC.phoneHref}>
                  <Phone /> Call {CLINIC.phone}
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                className="rounded-full border-2 border-brand-foreground/50 bg-transparent text-brand-foreground hover:bg-brand-foreground/10"
              >
                <Link to="/contact" hash="appointment">
                  <CalendarHeart /> Book an Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
