import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site-data";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { CalendarHeart, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services_/$serviceId")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.id === params.serviceId);
    if (!service) {
      throw notFound();
    }
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} | Paws & Claws Animal Hospital` },
      { name: "description", content: loaderData.description },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const Icon = service.icon;

  return (
    <>
      <PageHeader
        eyebrow="Service Details"
        title={service.title}
        description={service.description}
      />
      
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8">
            <Button asChild variant="heroOutline" size="sm" className="rounded-full">
              <Link to="/services">
                <ArrowLeft className="mr-2 size-4" /> Back to Services
              </Link>
            </Button>
          </div>
          
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
            <div className="flex items-center gap-6 border-b border-border/60 bg-muted/30 p-8">
              <span className="inline-flex size-20 shrink-0 items-center justify-center rounded-2xl gradient-brand text-brand-foreground shadow-glow">
                <Icon className="size-10" aria-hidden />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold text-navy">{service.title}</h2>
              </div>
            </div>
            
            <div className="p-8 sm:p-12">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {service.detailedDescription}
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-border/60 pt-8">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto rounded-full">
                  <Link to="/contact" hash="appointment">
                    <CalendarHeart className="mr-2 size-5" /> Book an Appointment
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  Have questions about this service? Contact us for more details.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
