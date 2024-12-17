export default function TopSection({ data }) {

  const topSection = {
    title: data.topSection.fields.title,
    bannerimage: "https:" + data.topSection.fields.bannerImage.fields.file.url,
  }
  return (
    <section className="top-section">
      <h1>{topSection.title}</h1>
      <img src={topSection.bannerimage} alt="Top Banner" />
    </section>
  );
}
