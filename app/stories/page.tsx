import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const storyList = [
  {
    title: "The Liu family",
    snippet:
      "Returned to the office after parental leave — their new nanny handled both baby-led weaning and light meal prep, freeing evenings for play.",
    takeaway: "Favourite detail: daily photo updates and shared lullaby playlists.",
  },
  {
    title: "Nisha, beauty caregiver",
    snippet:
      "Hosts a Thursday \"calm club\" for parents needing pick-me-up manicures before big presentations.",
    takeaway: "GentleCare helps me keep a steady flow of respectful clients who value hygiene and rest.",
  },
  {
    title: "River Valley roommates",
    snippet:
      "Three entrepreneurs split a cleaning + cooking package so their co-living loft stays inspiring.",
    takeaway: "Our cook leaves herbal tea concentrates labeled for each of us.",
  },
];

export default function StoriesPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-5xl space-y-10 px-4">
        <SectionHeader
          eyebrow="Stories"
          title="Tiny glimpses from the community"
          description="Every household is unique. These stories capture how people weave caregivers into their everyday rituals."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {storyList.map((story) => (
            <Card key={story.title} className="bg-shell/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
                {story.title}
              </p>
              <p className="mt-3 text-base text-ink">{story.snippet}</p>
              <p className="mt-4 text-sm text-muted">{story.takeaway}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
