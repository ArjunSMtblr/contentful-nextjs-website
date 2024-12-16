import { getAboutUsContent } from "@/lib/contentful";

export default async function VisionMission({ images }) {
  const data = await getAboutUsContent();

  const visionMission = {
    leftimage: data.visionMission.fields.leftImage.fields.file.url,
    lefttitle: data.visionMission.fields.leftTitle,
    leftdescription: data.visionMission.fields.leftDescription,
    rightimage: data.visionMission.fields.rightImage.fields.file.url,
    righttitle: data.visionMission.fields.rightTitle,
    rightdescription: data.visionMission.fields.rightDescription
  }
  return (
    <section className="visionMission">
      <div>{visionMission.leftimage}</div>
      <h1>{visionMission.lefttitle}</h1>
      <p>{visionMission.leftdescription}</p>
      <div>{visionMission.rightimage}</div>
      <h2>{visionMission.righttitle}</h2>
      <p>{visionMission.rightdescription}</p>
    </section>
  )
}