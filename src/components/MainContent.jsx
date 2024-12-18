export default async function MainContent({ data }) {
  const mainContent = {
    sectiontitle: data.aboutSection.fields.sectionTitle,
    title: data.aboutSection.fields.title,
    rightdescription: data.aboutSection.fields.rightDescription,
    image: "https:" + data.aboutSection.fields.image.fields.file.url,
    bottomdescription: data.aboutSection.fields.bottomDescription
  }
  return (<div className="py-4 pt-10 md:pt-14 tailwind-container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 xl:gap-14 justify-center items-center">
      {/* First column with image */}
      <img
        src={mainContent.image}
        alt="Hands holding pills"
        className="w-full object-fill h-full"
      />
      {/* Second column with text content */}{" "}
      <div className="flex flex-col justify-center items-start gap-3 md:gap-1 lg:gap-2">
        <h3 className="text-xl md:text-sm lg:text-xl xl:text-2xl font-semibold xl:font-bold  text-[#1963AC] pt-8 md:pt-0">
          {mainContent.sectiontitle}
        </h3>
        <h2 className="text-3xl font-bold text-[#000127] md:text-xl lg:text-3xl xl:text-4xl    xl:leading-[45px] 2xl:text-5xl 2xl:leading-[55px]">
          {mainContent.title}
        </h2>
        <span className="text-[#646C7F] pt-2 whitespace-pre-line md:text-xs lg:text-sm xl:text-base 2xl:text-xl ">
          {mainContent.rightdescription}
        </span>
      </div>
    </div>
    <div className=" mx-auto  md:py-12">
      <span className="text-[#646C7F] whitespace-pre-line">
        {mainContent.bottomdescription}
      </span>
    </div>
  </div>
  );
}
