"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

function Header({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleDivisions, setToggleDivisions] = useState(false);

  return (
    <section className="tailwind-container mx-auto">
      <div className="relative flex justify-center">
        <div className="absolute z-50 bg-white  w-full top-5 sm:top-7 md:top-14 xl:top-16 flex items-center justify-between rounded-sm">
          <div className="w-14 pl-1 md:w-[88px] lg:w-28 xl:w-32 opacity-100">
            <Link href="/">
              <img src={data?.fields?.image?.fields.file.url} alt="Default Logo" />
            </Link>
          </div>
          <div className="text-blue-600 md:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
          </div>

          <div
            className={`md:hidden absolute z-50 bg-white top-[60px] w-full rounded-sm p-4 shadow-lg transition-all duration-500 ease-in-out transform ${isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
              }`}
          >
            <ul className="w-full">
              {data?.fields?.navbar?.length > 0 &&
                data.fields.navbar.map((item, index) => (
                  <li
                    key={item.fields.title || item.fields.link || index}
                    className="p-3 w-full font-normal text-[#444444] text-sm cursor-pointer"
                  >

                    {item.fields.title === "Divisions" ? (
                      <div onClick={() => setToggleDivisions(!toggleDivisions)} className="flex justify-between items-center w-full">
                        <p
                          className="hover:text-blue-600"

                        >
                          Divisions
                        </p>
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-all duration-500 ${toggleDivisions ? "rotate-180" : ""
                            }`}
                        >
                          <path
                            d="M8.825 0.158447L5 3.97511L1.175 0.158447L0 1.33345L5 6.33345L10 1.33345L8.825 0.158447Z"
                            fill="#A0A0A0"
                          />
                        </svg>
                      </div>
                    ) : (
                      <Link
                        onClick={() => {
                          setToggleDivisions(false);
                          setIsOpen(false);
                        }}
                        className="hover:text-blue-600"
                        href={item?.fields?.link || "/"}
                      >
                        {item.fields.title}
                      </Link>
                    )}
                    {item.fields.title === "Divisions" && item?.fields.dropdownLinks && (
                      <ul
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleDivisions ? "opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        {item?.fields?.dropdownLinks?.map((value, index) => (
                          <li
                            key={`${value.fields.title}-${index}`}
                            className="px-2 pt-4 text-[13px]"
                            onClick={() => setToggleDivisions(!toggleDivisions)}
                          >
                            <Link
                              href={value?.fields?.link || "/"}
                              onClick={() => setIsOpen(false)}
                            >
                              {value?.fields?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          <ul className="hidden md:flex pr-4">
            {data?.fields?.navbar?.length > 0 &&
              data.fields.navbar.map((item, index) => (
                <li
                  key={`${item.fields.title}-${index}`}
                  className="relative p-3 font-normal text-[#444444] text-[10px] md:font-semibold lg:text-sm lg:font-bold hover:text-blue-600 cursor-pointer group"
                >
                  {item.fields.title === "Divisions" ? (
                    <div className="relative ">
                      <p className="tooltip-parent">Divisions</p>
                      {item?.fields?.dropdownLinks && (
                        <ul className="absolute top-8 right-0 w-max bg-[#BCD9F0] shadow-lg border border-[#BCD9F0] text-[#45466A] rounded hidden group-hover:block transition-opacity duration-300 z-10 py-4">
                          {item.fields.dropdownLinks.map((value, index) => (
                            <li
                              key={`${value.fields.title}-${index}`}
                              className="text-xs hover:bg-[#d6e5f1]">
                              <svg
                                className="absolute top-[-10px] right-7"
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
                              <Link
                                className="block w-full px-8 py-3 "
                                href={value?.fields?.link || "/"}
                              >
                                {value.fields.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div
                      onClick={() => setToggleDivisions(false)}
                    >
                      <Link
                        href={item?.fields?.link || "/"}
                      >
                        {item.fields.title}
                      </Link>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
