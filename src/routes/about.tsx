import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AboutSection } from "@/components/site/AboutSection";
import { TrustBar } from "@/components/site/TrustBar";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";

const title = "About | Paws & Claws Animal Hospital, Faisalabad";
const description =
  "Learn about Paws & Claws Animal Hospital in Faisalabad — a veterinary hospital for dogs and cats offering clinical treatment, diagnostics, grooming and boarding.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Caring for Faisalabad's dogs and cats"
        description="Paws & Claws Animal Hospital combines veterinary treatment with everyday pet care so families have one dependable place to turn to."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Practical care, gently delivered"
          description="No guesswork and no pressure — just clear advice from qualified veterinarians."
        />
        <AboutSection />
      </section>
      <TrustBar />
      <CtaBand />
    </>
  );
}
