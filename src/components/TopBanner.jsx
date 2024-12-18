"use client";
import React from "react";

function TopBanner({ data }) {
  return (
    <section className="tailwind-container mx-auto">
      <div className="relative hidden md:flex justify-center">
        <div className=" absolute z-50 flex items-center justify-between w-full top-4">
          <div className="flex text-[10px] gap-1 xl:text-xs items-center text-[#ffffff]">
            <i>
              <svg
                className="w-4 xl:w-5"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 0C10.7277 0 5.5 4.67913 5.5 10.4528C5.5 16.225 10.2699 23.1165 16.5 33C22.7301 23.1165 27.5 16.225 27.5 10.4528C27.5 4.67913 22.2736 0 16.5 0ZM16.5 19.25C11.9433 19.25 8.25 15.5568 8.25 11C8.25 6.44325 11.9433 2.75 16.5 2.75C21.0568 2.75 24.75 6.44325 24.75 11C24.75 15.5568 21.0568 19.25 16.5 19.25Z"
                  fill="white"
                />
              </svg>
            </i>
            <a className="block">{data?.fields?.location}</a>
          </div>
          <div className="flex items-center justify-center gap-3 lg:gap-5 xl:gap-10">
            <div className="flex gap-2 items-center justify-center">
              <i>
                <svg
                  className="w-4 xl:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_563_378)">
                    <path
                      d="M19 9.06206C19 9.06206 13.812 8.72906 12 11.0001C14 6.10406 19 5.06206 19 5.06206V3.06206L24 7.06206L19 11.0811V9.06206ZM0.026 24.0001H23.973L12 12.3931L0.026 24.0001ZM1.699 10.0001L11.99 2.51206L15.043 4.73006C15.755 4.27106 16.434 3.92506 16.996 3.67606L11.99 0.0390625L0 8.76406V21.2401L7.352 14.1131L1.699 10.0001ZM17.452 14.8921L24 21.2401V9.62806L17.452 14.8921Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_563_378">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              <p className="text-[9px] xl:text-xs text-white">
                <span className="opacity-80">{data?.fields?.mail?.fields?.title}</span>
                <a
                  href={`mailto:${data?.fields?.mail?.fields?.description}`}
                  className="block text-[10px] xl:text-sm font-bold"
                >
                  {data?.fields?.mail?.fields?.description}
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i>
                <svg
                  className="w-4 xl:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.89 23.654C7.52302 27.021 -3.91198 4.794 3.28902 1.039L5.39602 0L8.88802 6.817L6.80602 7.843C4.61702 9.017 9.17602 17.923 11.415 16.837C11.506 16.796 13.472 15.83 13.479 15.826L17 22.621C16.992 22.625 15.011 23.599 14.89 23.654ZM13.352 10.245L16.269 11.115C16.492 10.368 16.429 9.536 16.029 8.798C15.63 8.059 14.967 7.551 14.221 7.329L13.352 10.245ZM15.156 4.187C16.707 4.649 18.082 5.703 18.912 7.238C19.743 8.774 19.872 10.501 19.41 12.051L17.615 11.516C17.94 10.425 17.848 9.21 17.263 8.129C16.68 7.048 15.712 6.307 14.62 5.983L15.156 4.187ZM16.106 1C18.471 1.705 20.569 3.312 21.835 5.656C23.104 7.999 23.301 10.634 22.596 13L20.756 12.452C21.32 10.557 21.162 8.446 20.148 6.57C19.132 4.693 17.452 3.405 15.557 2.841L16.106 1Z"
                    fill="white"
                  />
                </svg>
              </i>
              <p className="text-[9px] xl:text-xs text-white">
                <span className="opacity-80">{data?.fields?.contact?.fields?.title}</span>

                <a href={`tel:${data?.fields?.contact?.fields?.phoneNumber}`} className="block text-[10px] xl:text-sm 2xl:text-lg font-bold">
                  {data?.fields?.contact?.fields?.phoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
