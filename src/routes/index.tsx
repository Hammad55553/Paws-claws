import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { AboutSection } from "@/components/site/AboutSection";
import { DoctorsSection } from "@/components/site/DoctorsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";

const title = "Paws & Claws Animal Hospital | Veterinary Care in Faisalabad";
const description =
  "Veterinary hospital for dogs and cats on West Canal Road, Faisalabad. Surgery, vaccination, ultrasound, laboratory, grooming, boarding, pet food and home visits.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your pet needs, in one hospital"
          description="Twelve services covering clinical treatment, diagnostics and day-to-day pet care."
        />
        <ServicesGrid />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Why pet parents choose Paws & Claws"
          description="A friendly veterinary hospital in Faisalabad built around gentle handling and practical, honest care."
        />
        <AboutSection />
        <Reveal className="mt-10 text-center">
          <Button asChild variant="heroOutline" size="xl" className="rounded-full">
            <Link to="/about">
              Learn more about us <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Doctors"
          title="Meet the veterinarians"
          description="Your pet is seen by qualified, registered veterinary professionals."
        />
        <DoctorsSection />
      </section>

      <CtaBand />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Visit us on West Canal Road"
          description="Near Canal Garden, Faisalabad. Call us or send an appointment request."
        />
        <ContactSection />
      </section>
    </>
  );
}
