import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Services | Paws & Claws Animal Hospital, Faisalabad";
const description =
  "Surgery, grooming, pet accessories, boarding, vaccination, ultrasound, pet food, laboratory, deworming, day care, home visits and microchipping for dogs and cats.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Twelve services for dogs and cats"
        description="From surgery and diagnostics to grooming, boarding and pet supplies — everything your companion needs under one roof."
      />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <ServicesGrid />
      </section>
      <CtaBand />
    </>
  );
}
