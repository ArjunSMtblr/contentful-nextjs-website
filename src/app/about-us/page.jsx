import { getAboutUsContent } from "@/lib/contentful";
import TopSection from "@/components/TopSection";
import MainContent from "@/components/MainContent";
import VisionMission from "@/components/VisionMission";

export default async function aboutUsPage() {
  const data = await getAboutUsContent();
  return (
    <html lang="en">
      <body>
        <TopSection />
        <MainContent />
        <VisionMission />
      </body>
    </html>
  );
}