import React, { useEffect } from 'react'

function Calling_Resposive() {

    
  return (
    <>
     {/*interest-open */}
     <div className="">
              <div className="w-10 tab:w-16 h-10 tab:h-[55px] rounded-[7px] bg-[#007AFF] flex justify-center items-center">
                <button
                  data-modal-target="open_interest"
                  data-modal-toggle="open_interest"
                  className="block"
                  type="button"
                >
                  <img
                    src="/images/icons/emoji-happy.svg"
                    alt=""
                    className="w-6 tab:w-auto"
                  />
                </button>
                <div
                  id="open_interest"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full contents">
                    <div className="relative">
                      <div className="absolute bottom-[-255px] left-[-170px]">
                        {/* popup */}
                        <div
                          className="max-w-[354px] h-[126px] rounded-[10px] pt-4 pb-[23px] px-2 overflow-y-scroll"
                          style={{
                            background: "rgba(255, 255, 255, 0.50)",
                            boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(25px)"
                          }}
                        >
                          <div className="flex flex-col gap-3 font-Assistant max-w-[620px]">
                            {/* checkbox */}
                            <ul className="flex flex-wrap justify-center items-center gap-3">
                              {/* 1 */}
                              <li className="inline-block">
                                <input
                                  type="checkbox"
                                  id="mobmyCheckbox1"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="mobmyCheckbox1"
                                  className="
                                                          w-[82px] h-9 relative flex justify-center items-center bg-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[82px]  before:h-9 before:duration-[.4s] before:scale-0"
                                >
                                  <i className=" fa-solid fa-plus text-[#484848] text-xs tab:text-lg mr-[10px]" />
                                  <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                    🎨 Art
                                  </span>
                                </label>
                              </li>
                              {/* 2 */}
                              <li className="inline-block">
                                <input
                                  type="checkbox"
                                  id="mobmyCheckbox2"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="mobmyCheckbox2"
                                  className="
                                                        w-[99px] h-9 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[99px]   before:h-9 before:duration-[.4s] before:scale-0"
                                >
                                  <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                  <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                    🖌️ Poetry
                                  </span>
                                </label>
                              </li>
                              {/* 3*/}
                              <li className="inline-block">
                                <input
                                  type="checkbox"
                                  id="mobmyCheckbox3"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="mobmyCheckbox3"
                                  className="
                                                        w-[95px]  h-[35px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[95px] before:h-[35px] before:duration-[.4s] before:scale-0"
                                >
                                  <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                  <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                    😜 Jokes
                                  </span>
                                </label>
                              </li>
                            </ul>
                            <ul className="flex flex-wrap tab:flex-nowrap justify-center items-center gap-3">
                              {/* 1 */}
                              <li className="inline-block">
                                <input
                                  type="checkbox"
                                  id="mobmyCheckbox4"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="mobmyCheckbox4"
                                  className="
                                                       w-[97px]  h-[30px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[97px]  before:h-[30px] before:duration-[.4s] before:scale-0"
                                >
                                  <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                  <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                    🍿 Cinema
                                  </span>
                                </label>
                              </li>
                              {/* 2 */}
                              <li className="inline-block">
                                <input
                                  type="checkbox"
                                  id="mobmyCheckbox5"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="mobmyCheckbox5"
                                  className="
                                                         w-[101px] h-8 relative  flex justify-center items-center z-10 bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[101px]  before:h-8 before:duration-[.4s] before:scale-0"
                                >
                                  <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                  <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                    💃🏻 Dance
                                  </span>
                                </label>
                              </li>
                              {/* 3*/}
                              <li className="inline-block">
                                <input
                                  type="checkbox"
                                  id="mobmyCheckbox6"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="mobmyCheckbox6"
                                  className="
                                                           w-[104px]  h-8 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[104px] before:h-8 before:duration-[.4s] before:scale-0"
                                >
                                  <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                  <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                    🎮 Gaming
                                  </span>
                                </label>
                              </li>
                            </ul>
                          </div>
                          {/* popup */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*interest-close */}
    </>
  )
}

export default Calling_Resposive
