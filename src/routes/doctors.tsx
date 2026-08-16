import { createFileRoute } from "@tanstack/react-router";
import { DoctorsSection } from "@/components/site/DoctorsSection";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Our Doctors | Paws & Claws Animal Hospital, Faisalabad";
const description =
  "Meet the veterinarians at Paws & Claws Animal Hospital, Faisalabad: Dr. Haris Rizwan (DVM, RVMP) and Dr. Abdur Rafay (DVM, RVMP).";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Doctors"
        title="Qualified veterinarians you can talk to"
        description="Your pet is examined and treated by registered veterinary professionals."
      />
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <DoctorsSection />
      </section>
      <CtaBand />
    </>
  );
}
