import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Contact & Appointments | Paws & Claws Animal Hospital";
const description =
  "Call 0325-6036198 or email pawsandclawsah199@gmail.com. Visit Paws & Claws Animal Hospital at West Canal Road, Near Canal Garden, Faisalabad.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a visit for your pet"
        description="West Canal Road, Near Canal Garden, Faisalabad. Reach us by phone or email, or send an appointment request."
      />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <ContactSection />
      </section>
    </>
  );
}
