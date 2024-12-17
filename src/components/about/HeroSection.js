import React from "react";

function HeroSection({ banner, blok }) {
  return (
    <div>
      <div className="relative ">
        <img
          src={banner.banner_image.filename}
          alt="Hero image"
          className="w-full absolute object-fill h-full"
        />
        <div className="relative  bg-[#1963AC] bg-opacity-70 z-30">
          <div className="tailwind-container mx-auto  flex justify-start items-center">
            <div className=" mt-28 md:mt-40 lg:mt-48 xl:mt-60">
              <p className="text-white text-2xl font-semibold sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-[65px] pb-10 md:pb-16 lg:pb-20 xl:pb-24">
                {banner.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About content */}
      <div className="py-4 pt-10 md:pt-14 tailwind-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 xl:gap-14 justify-center items-center">
          {/* First column with image */}
          <img
            src={blok.image.filename}
            alt="Hands holding pills"
            className="w-full object-fill h-full"
          />
          {/* Second column with text content */}{" "}
          <div className="flex flex-col justify-center items-start gap-3 md:gap-1 lg:gap-2">
            <h3 className="text-xl md:text-sm lg:text-xl xl:text-2xl font-semibold xl:font-bold  text-[#1963AC] pt-8 md:pt-0">
              {blok.sectionTitle}
            </h3>
            <h2 className="text-3xl font-bold text-[#000127] md:text-xl lg:text-3xl xl:text-4xl    xl:leading-[45px] 2xl:text-5xl 2xl:leading-[55px]">
              {blok.title}
            </h2>
            <span className="text-[#646C7F] pt-2 whitespace-pre-line md:text-xs lg:text-sm xl:text-base 2xl:text-xl ">
              {blok.rightDescription}
            </span>
          </div>
        </div>
        <div className=" mx-auto  md:py-12">
          <span className="text-[#646C7F] whitespace-pre-line">
            {blok.bottomDescription}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
