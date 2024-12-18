export default function TopSection({ data }) {

  const topSection = {
    title: data.topSection.fields.title,
    bannerimage: "https:" + data.topSection.fields.bannerImage.fields.file.url,
  }
  return (
    <section className="relative top-section">
      <img
        src={topSection.bannerimage}
        alt="Hero image"
        className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="relative  bg-[#1963AC] bg-opacity-70 z-30">
        <div className="tailwind-container mx-auto  flex justify-start items-center">
          <div className=" mt-28 md:mt-40 lg:mt-48 xl:mt-60">
            <p className="text-white text-2xl font-semibold sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-[65px] pb-10 md:pb-16 lg:pb-20 xl:pb-24">
              {topSection.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
