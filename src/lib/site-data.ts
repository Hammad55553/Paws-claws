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

export const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.6844696578373!2d73.1702935!3d31.4590132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226933278f0e19%3A0x60d507720f9ec48f!2sPaws%20And%20Claws%20Animal%20Hospital!5e1!3m2!1sen!2s!4v1786900189962!5m2!1sen!2s";
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapQuery)}`;

export const SOCIALS = {
  instagram: "https://www.instagram.com/paws_and_claws_animal_hospital/",
  tiktok: "https://www.tiktok.com/@paws.claws.animal7",
};

export type Service = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "surgery",
    title: "Surgery",
    description: "Soft-tissue and routine surgical procedures in a sterile theatre.",
    detailedDescription: "Our state-of-the-art surgical suite is equipped for a wide range of procedures. We provide both routine surgeries (like spaying and neutering) and complex soft-tissue surgeries. Your pet's safety and comfort are our top priorities, with comprehensive pain management and continuous monitoring throughout.",
    icon: Scissors,
  },
  {
    id: "grooming",
    title: "Grooming",
    description: "Bathing, trimming, nail care and coat care for dogs and cats.",
    detailedDescription: "Keep your pet looking and feeling their best with our professional grooming services. We offer gentle bathing, breed-specific haircuts, nail trimming, ear cleaning, and specialized coat treatments to ensure your pet is fresh and healthy from head to tail.",
    icon: Sparkles,
  },
  {
    id: "accessories",
    title: "Pet Accessories",
    description: "Collars, leashes, bowls, bedding and everyday pet essentials.",
    detailedDescription: "Discover our premium selection of pet accessories. From durable collars and comfortable leashes to stylish bowls and cozy bedding, we stock high-quality everyday essentials to make your pet's life enjoyable and comfortable.",
    icon: ShoppingBag,
  },
  {
    id: "boarding",
    title: "Boarding",
    description: "Comfortable, supervised stays while you are away from home.",
    detailedDescription: "Travel with peace of mind knowing your pet is in good hands. Our boarding facility offers a safe, clean, and comfortable environment with dedicated playtime, regular feeding, and around-the-clock supervision by our caring staff.",
    icon: Home,
  },
  {
    id: "vaccination",
    title: "Vaccination",
    description: "Core and booster vaccinations with a documented schedule.",
    detailedDescription: "Protect your pet against life-threatening diseases with our comprehensive vaccination programs. We provide core and lifestyle-specific booster shots, ensuring your dog or cat maintains a strong immune system throughout their life.",
    icon: Syringe,
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    description: "Non-invasive imaging to support accurate diagnosis.",
    detailedDescription: "Our advanced ultrasound technology allows for non-invasive, detailed imaging of your pet's internal organs. This essential diagnostic tool helps us quickly identify issues such as pregnancies, abdominal abnormalities, and heart conditions with precision.",
    icon: ScanLine,
  },
  {
    id: "pet-food",
    title: "Pet Food",
    description: "Quality dog and cat food, including diet-specific options.",
    detailedDescription: "Nutrition is the foundation of good health. We offer a curated selection of premium dog and cat food, including prescription diets and specialized nutrition tailored for pets with allergies, weight issues, or specific medical conditions.",
    icon: Bone,
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description: "On-site sample testing for faster clinical decisions.",
    detailedDescription: "Time is critical when your pet is sick. Our on-site diagnostic laboratory provides rapid results for blood work, urinalysis, and parasite screening, allowing our veterinarians to make accurate clinical decisions and start treatments immediately.",
    icon: FlaskConical,
  },
  {
    id: "deworming",
    title: "Deworming",
    description: "Internal and external parasite control for pets of all ages.",
    detailedDescription: "Parasites can cause severe health issues for your pets and your family. We offer comprehensive deworming and parasite control programs that effectively treat and prevent fleas, ticks, heartworms, and intestinal parasites.",
    icon: Bug,
  },
  {
    id: "day-care",
    title: "Day Care",
    description: "Daytime care and monitoring for pets that need company.",
    detailedDescription: "Don't leave your pet alone at home! Our pet day care services offer a safe and engaging environment where your pet can socialize, play, and receive attention from our trained staff while you are busy at work or running errands.",
    icon: Sun,
  },
  {
    id: "home-visit",
    title: "Home Visit",
    description: "Veterinary consultation at your doorstep on request.",
    detailedDescription: "We understand that bringing your pet to the clinic can sometimes be stressful or impractical. Our home visit service brings professional veterinary consultation and routine care directly to your doorstep for maximum convenience.",
    icon: Car,
  },
  {
    id: "microchipping",
    title: "Microchipping",
    description: "Permanent identification to help reunite lost pets.",
    detailedDescription: "Ensure your pet's safety with our microchipping service. A tiny, permanent identification chip is painlessly inserted under the skin, giving your pet the best chance of returning home if they ever become lost.",
    icon: Cpu,
  },
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
