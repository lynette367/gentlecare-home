export type ServiceCategory = "nanny" | "tutoring" | "cleaning" | "cooking" | "beauty";

export interface Caregiver {
  id: string;
  name: string;
  role: string;
  city: string;
  area: string;
  experience: number;
  about: string;
  story: string;
  services: ServiceCategory[];
  tags: string[];
  availability: string;
  rate: string;
  languages: string[];
}

export const caregivers: Caregiver[] = [
  {
    id: "taylor-brooks",
    name: "Taylor Brooks",
    role: "Nanny & Household Assistant",
    city: "Irvine",
    area: "Woodbridge",
    experience: 7,
    about:
      "Taylor keeps Irvine families on rhythm with calm after-school routines, light meal prep, and bedtime notes left on the counter.",
    story:
      "Helped a Woodbridge family transition to two working parents by building a weekly schedule with school pickups and laundry folded before dinner.",
    services: ["nanny", "cleaning"],
    tags: ["Infant care", "Homework support", "Light housekeeping", "CPR certified"],
    availability: "Weekdays 8am-6pm · Select Saturday evenings",
    rate: "$32-38 / hour",
    languages: ["English", "Bilingual"],
  },
  {
    id: "mia-ramirez",
    name: "Mia Ramirez",
    role: "House Cleaner",
    city: "Irvine",
    area: "Northwood",
    experience: 9,
    about:
      "Detail-oriented cleaner who favors eco products and tidy systems so every Irvine room feels calm.",
    story:
      "Reset a Northwood four-bedroom after a move, organizing closets and setting a weekly rotation the family still follows.",
    services: ["cleaning"],
    tags: ["Move-in/out", "Laundry & folding", "Eco products", "Organization"],
    availability: "Weekdays 9am-4pm · Occasional Sundays",
    rate: "$30-36 / hour",
    languages: ["English", "Spanish"],
  },
  {
    id: "noah-clark",
    name: "Noah Clark",
    role: "Babysitter & Date-Night Nanny",
    city: "Irvine",
    area: "Irvine Spectrum",
    experience: 5,
    about:
      "College sitter who brings board games, calm bedtime routines, and clear check-ins after each visit.",
    story:
      "Supports a Quail Hill family with Friday date nights, arriving early to finish dinner dishes before stories and lights out.",
    services: ["nanny"],
    tags: ["Date nights", "Bedtime routines", "Homework help", "Park outings"],
    availability: "Weeknights 5pm-10pm · Weekends flexible",
    rate: "$25-32 / hour",
    languages: ["English"],
  },
  {
    id: "lauren-hayes",
    name: "Lauren Hayes",
    role: "Housekeeper & Organizer",
    city: "Irvine",
    area: "Quail Hill",
    experience: 11,
    about:
      "Former hotel housekeeper known for layered deep cleans, fridge resets, and tidy laundry systems for busy Irvine families.",
    story:
      "Prepped two nurseries in Turtle Ridge with hypoallergenic products and organized weekly refresh checklists for the parents.",
    services: ["cleaning"],
    tags: ["Deep cleans", "Pantry resets", "Laundry systems", "Weekly upkeep"],
    availability: "Weekdays 7am-3pm",
    rate: "$34-40 / hour",
    languages: ["English"],
  },
  {
    id: "sienna-park",
    name: "Sienna Park",
    role: "Nanny & Mother's Helper",
    city: "Irvine",
    area: "University Park",
    experience: 8,
    about:
      "Sienna supports infants through preschoolers with gentle sleep transitions, stroller walks around Mason Park, and light tidying.",
    story:
      "Partnered with an Irvine Company resident family to ease the return-to-office shift, keeping bottles prepped and play corners organized.",
    services: ["nanny", "cleaning"],
    tags: ["Infant routines", "Meal prep", "Tidy-up help", "Preschool activities"],
    availability: "Weekdays 8am-5pm · Select Sundays",
    rate: "$30-37 / hour",
    languages: ["English", "Bilingual"],
  },
];

export function getCaregiverById(id: string) {
  return caregivers.find((caregiver) => caregiver.id === id);
}

export const serviceFilters: Record<ServiceCategory, string> = {
  nanny: "Nanny & Babysitting",
  tutoring: "Homework Tutoring",
  cleaning: "Home Cleaning",
  cooking: "Home Cooking",
  beauty: "Beauty & Manicure",
};
