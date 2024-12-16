import { getAboutUsContent } from "@/lib/contentful";

export default async function TopSection() {
  const data = await getAboutUsContent();

  const topSection = {
    title: data.topSection.fields.title,
    bannerimage: data.topSection.fields.bannerImage.fields.file.url,
  }
  return (
    <section className="top-section">
      <h1>{topSection.title}</h1>
      <div>{topSection.bannerimage}</div>
    </section>
  );
}
