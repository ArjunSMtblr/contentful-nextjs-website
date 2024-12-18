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
    <div className="bg-[#BCD9F0] py-10 2xl:py-20">
      <div className="mx-auto w-full relative z-10 tailwind-container">
        <div className="md:flex -mx-3 flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="text-left">
              <figure className="mb-8">
                <img src={visionMission.leftimage} />
              </figure>
              <div>
                <p className="my-4  font-bold text-3xl">{visionMission.lefttitle}</p>
                <span className="mt-2 mb-0 opacity-70 text-base">
                  {visionMission.leftdescription}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <figure className="mb-8">
              <img src={visionMission.rightimage} />
            </figure>
            <p className="my-4 text-3xl font-bold">{visionMission.righttitle}</p>
            <span className="mt-2 mb-0 opacity-70 text-base">
              {visionMission.rightdescription}
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}