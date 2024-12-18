"use client";
import Link from "next/link";
import React from "react";

function Footer({ data }) {
  console.log("footer", data)
  return (
    <div className="bg-[#1D2A4D] text-white pt-4 pb-2 md:py-0">
      <div className="tailwind-container px-4 lg:px-0 mx-auto md:py-0 flex flex-col-reverse md:flex-row md:justify-between gap-6">
        <div className="flex justify-center md:py-6 md:pt-7">
          <span className="text-sm text-white text-opacity-60">
            {data?.fields?.copyright}
          </span>
        </div>

        <div className="flex justify-between md:gap-5">
          {data?.fields?.navbar?.map((item, index) => (
            <div
              key={index}
              className="text-[#EBEBEB] hover:text-white md:py-6 group"
            >
              {item?.fields?.title === "Divisions" ? (
                <div className="relative group">
                  <span className="tooltip-parent cursor-pointer">Divisions</span>

                  {item?.fields?.dropDownLinks && (
                    <ul className="absolute bottom-10 right-[-50px] sm:right-0 w-max bg-[#BCD9F0] shadow-md border border-[#BCD9F0] text-[#45466A] rounded hidden group-hover:block transition-opacity duration-300 z-10 py-4">
                      <svg
                        className="absolute bottom-[-10px] right-20 sm:right-8 rotate-180"
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 0L13.9282 12H0.0717969L7 0Z"
                          fill="#BCD9F0"
                        />
                      </svg>
                      {item.fields.dropDownLinks.map((value, index) => (
                        <li key={index} className="text-[13px] hover:bg-[#d6e5f1] rounded-sm">
                          <Link
                            href={value?.fields.link || "/"}
                            className="block w-full px-8 py-3"
                          >
                            {value.fields.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  onClick={() => setToggleDivisions(false)}
                  href={item?.fields?.link || "/"}
                >
                  {item.fields.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
