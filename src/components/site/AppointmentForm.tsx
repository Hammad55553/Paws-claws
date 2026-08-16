import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CalendarHeart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/site-data";

/**
 * Front-end only for now. Submissions are not stored yet — wiring this to a
 * backend (and an admin panel to review requests) is the next step.
 */
export function AppointmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const owner = formData.get("owner")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const pet = formData.get("pet")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    try {
      // Using FormSubmit.co for free emails without signup (AJAX mode)
      const response = await fetch("https://formsubmit.co/ajax/pawsandclawsah199@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: owner,
          Phone: phone,
          "Pet Name": pet,
          Service: service || "Not specified",
          Message: message,
          _subject: `New Appointment Request from ${owner}`,
          _captcha: "false", // Disables the captcha so user stays on site
        }),
      });

      if (response.ok) {
        toast.success("Request sent successfully!", {
          description: "We have received your details and will contact you shortly.",
        });
        (e.target as HTMLFormElement).reset();
        setService("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Could not send your request. Please call us instead.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="owner">Your name</Label>
        <Input id="owner" name="owner" required autoComplete="name" placeholder="Full name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="03xx-xxxxxxx"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="pet">Pet name &amp; type</Label>
        <Input id="pet" name="pet" placeholder="e.g. Simba — Cat" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Service needed</Label>
        <Select value={service} onValueChange={setService} name="service">
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.title} value={s.title}>
                {s.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us briefly about your pet's condition or preferred time."
        />
      </div>
      <Button
        type="submit"
        variant="hero"
        size="xl"
        disabled={submitting}
        className="sm:col-span-2"
      >
        {submitting ? <Loader2 className="animate-spin" /> : <CalendarHeart />}
        {submitting ? "Sending…" : "Request Appointment"}
      </Button>
      <p className="text-xs text-muted-foreground sm:col-span-2">
        Appointment requests are confirmed over the phone. For anything urgent, please call us
        directly.
      </p>
    </form>
  );
}
