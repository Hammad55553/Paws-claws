import {
  Scissors,
  Sparkles,
  ShoppingBag,
  Home,
  Syringe,
  ScanLine,
  Bone,
  FlaskConical,
  Bug,
  Sun,
  Car,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export const CLINIC = {
  name: "Paws & Claws Animal Hospital",
  phone: "0325-6036198",
  phoneHref: "tel:+923256036198",
  email: "pawsandclawsah199@gmail.com",
  emailHref: "mailto:pawsandclawsah199@gmail.com",
  address: "West Canal Road, Near Canal Garden, Faisalabad",
  city: "Faisalabad, Pakistan",
  mapQuery: "West Canal Road, Near Canal Garden, Faisalabad, Pakistan",
} as const;

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapQuery)}`;

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  { title: "Surgery", description: "Soft-tissue and routine surgical procedures in a sterile theatre.", icon: Scissors },
  { title: "Grooming", description: "Bathing, trimming, nail care and coat care for dogs and cats.", icon: Sparkles },
  { title: "Pet Accessories", description: "Collars, leashes, bowls, bedding and everyday pet essentials.", icon: ShoppingBag },
  { title: "Boarding", description: "Comfortable, supervised stays while you are away from home.", icon: Home },
  { title: "Vaccination", description: "Core and booster vaccinations with a documented schedule.", icon: Syringe },
  { title: "Ultrasound", description: "Non-invasive imaging to support accurate diagnosis.", icon: ScanLine },
  { title: "Pet Food", description: "Quality dog and cat food, including diet-specific options.", icon: Bone },
  { title: "Laboratory", description: "On-site sample testing for faster clinical decisions.", icon: FlaskConical },
  { title: "Deworming", description: "Internal and external parasite control for pets of all ages.", icon: Bug },
  { title: "Day Care", description: "Daytime care and monitoring for pets that need company.", icon: Sun },
  { title: "Home Visit", description: "Veterinary consultation at your doorstep on request.", icon: Car },
  { title: "Microchipping", description: "Permanent identification to help reunite lost pets.", icon: Cpu },
];

export type Doctor = { name: string; credentials: string[] };

export const DOCTORS: Doctor[] = [
  { name: "Dr. Haris Rizwan", credentials: ["DVM (LHR)", "RVMP (ISB)"] },
  { name: "Dr. Abdur Rafay", credentials: ["DVM (LHR)", "RVMP (ISB)"] },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Contact", to: "/contact" },
] as const;
