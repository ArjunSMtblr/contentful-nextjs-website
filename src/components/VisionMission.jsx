export default async function VisionMission({ data }) {

  const visionMission = {
    leftimage: "https:" + data.visionMission.fields.leftImage.fields.file.url,
    lefttitle: data.visionMission.fields.leftTitle,
    leftdescription: data.visionMission.fields.leftDescription,
    rightimage: "https:" + data.visionMission.fields.rightImage.fields.file.url,
    righttitle: data.visionMission.fields.rightTitle,
    rightdescription: data.visionMission.fields.rightDescription
  }
  return (
    <section className="visionMission">
      <div>
        <img src={visionMission.leftimage} alt="leftImage" />
        <h1>{visionMission.lefttitle}</h1>
        <p>{visionMission.leftdescription}</p>
      </div>
      <div>
        <img src={visionMission.rightimage} alt="rightImage" />
        <h2>{visionMission.righttitle}</h2>
        <p>{visionMission.rightdescription}</p>
      </div>
    </section>
  )
}