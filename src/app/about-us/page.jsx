import { getAboutUsContent } from "@/lib/contentful";
import TopSection from "@/components/TopSection";
import MainContent from "@/components/MainContent";
import VisionMission from "@/components/VisionMission";

export default async function aboutUsPage() {
  const data = await getAboutUsContent();
  console.log("Contentful Data:", data);

  return (
    <div>
      <TopSection data={data} />
      <MainContent data={data} />
      <VisionMission data={data} />
    </div>
  );
}