export default async function MainContent({ data }) {
  const mainContent = {
    sectiontitle: data.aboutSection.fields.sectionTitle,
    title: data.aboutSection.fields.title,
    rightdescription: data.aboutSection.fields.rightDescription,
    image: "https:" + data.aboutSection.fields.image.fields.file.url,
    bottomdescription: data.aboutSection.fields.bottomDescription
  }
  return (
    <section className="main-content">
      <h1>{mainContent.title}</h1>
      <h2>{mainContent.sectiontitle}</h2>
      <img src={mainContent.image} alt="mainContent" />
      <p>{mainContent.rightdescription}</p>
      <p>{mainContent.bottomdescription}</p>
    </section>
  );
}
