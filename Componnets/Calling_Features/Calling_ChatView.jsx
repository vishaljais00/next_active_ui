import React, { useEffect } from "react";

function Calling_ChatView() {

    useEffect(() => {
        // Load Flowbite script
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js';
        script.async = true;
    
        // Append the script to the document body
        document.body.appendChild(script);
    
        // Clean up function to remove the script when the component is unmounted
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div>
 <section className="max-w-[1440px]  h-screen flex items-center md:block mx-auto bg-white">
  <div className="hidden md:flex flex-col md:flex-row gap-20 pt-8 md:pl-[18px] md:px-[75px]">
    <div className="w-full md:w-[900px] md:h-[687px] rounded-[20px] bg-[#F9FAFB]">
      <div className="">
        <div className="flex justify-between max-w-[843px] pt-[15px] md:ml-[66px]">
          <div className="w-[100px] h-[102px]">
            <div className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]">
              <img
                src="/images/screen-avt.png"
                alt=""
                className="rounded-[73px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultValue=""
                className="sr-only peer"
                defaultChecked=""
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="max-w-[843px] h-[244px] md:ml-[66px] md:mt-[-13px]">
            <img
              src="/images/finiding-person..png"
              alt=""
              className="rounded-[20px] h-[33vh] w-full"
            />
          </div>
          <div
            className="max-w-[843px] h-[244px] md:ml-[66px] rounded-[20px] bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: "url(/images/screen-bg.jpg)",
                backgroundPosition: "0 -115px",
                backgroundSize: "858px 421px"
              }}
          >
            <div className="flex justify-between pt-[30px] pr-[30px]">
              <img
                src="/images/v call-logo.png"
                alt=""
                className=""
                style={{ marginLeft: 39 }}
              />
              <img src="/images/icons/fullscreen.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end mt-7 tab:mt-[23px]">
          <div className="flex gap-6">
            <div className="w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] bg-white flex justify-center items-center">
              <img
                src="/images/icons/video-slash.svg"
                alt=""
                className="w-[18px] tab:w-auto"
              />
            </div>
            <div className="w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] bg-white flex justify-center items-center">
              <img src="/images/icons/Video on button.svg" alt="" />
            </div>
          </div>
          <div className="w-[70px] tab:w-[150px] h-[30px] tab:h-12 bg-[#F1414F] rounded-[28px] ml-6 mr-[43px] flex justify-center items-center">
            <img
              src="/images/icons/icons8-hang-up-48 1.svg"
              alt=""
              className="w-6 tab:w-auto"
            />
          </div>
          <div className="flex gap-[37px]">
            {/*interest-open */}
            <div className="">
              <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px] bg-[#007AFF] flex justify-center items-center ">
                <button
                  data-modal-target="interest"
                  data-modal-toggle="interest"
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
                  id="interest"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full contents">
                    <div className="relative">
                      <div className="absolute bottom-[-240px] right-[-184px]">
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
            {/* avatar-open*/}
            <div className="">
              <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px]  flex justify-center items-center ">
                <button
                  data-modal-target="avatar"
                  data-modal-toggle="avatar"
                  className="block"
                  type="button"
                >
                  <img
                    src="/images/icons/light_interests.svg"
                    alt=""
                    className="w-6 tab:w-auto"
                  />
                </button>
                <div
                  hidden=""
                  id="avatar"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 start-3 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full contents">
                    <div className="relative">
                      <div className="absolute bottom-[-240px] right-[-115px]">
                        <div
                          className="max-w-[292px] h-[126px] flex flex-col gap-[5px] rounded-[10px] pt-[6px] pr-[11px] pl-[9px] overflow-y-scroll"
                          style={{
                            background: "rgba(255, 255, 255, 0.50)",
                            boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(25px)"
                          }}
                        >
                          <div className="flex gap-3">
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_one.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avtar_Two.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_Three.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_Four.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_Five.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_six.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_seven.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_eight.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_nine.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/avatar_ten.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/open-elavan.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/open-twelve.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/open-thirteen.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/open-fourtine.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                              <img
                                src="/images/open-elavan.png"
                                alt=""
                                className="rounded-[45px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*avatar-close */}
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-[357px] h-[689px] rounded-[20px] bg-[#F9FAFB]">
      <div className="flex flex-col justify-between h-[673px]">
        <div className="flex flex-col gap-[26px] pt-6 px-5">
          <div className="text-center">
            <div className="flex">
              <img src="/images/icons/screen-message.svg" alt="" />
            </div>
            <div className="mt-[-20px]">
              <span className="text-[#020F21] text-2xl font-poppins font-semibold text-center">
                Messages
              </span>
            </div>
            <p className="text-[#818A98] text-xs font-poppins font-normal text-center pt-[7px]">
              You can chat here with other members during the meeting and they
              will be deleted after the meeting.
            </p>
          </div>
          <div className="flex justify-between gap-4 mt-3">
            <div className="">
              <img src="/images/pro_message.png" alt="" className="rounded-full" />
            </div>
            <div className="max-w-[237px] flex flex-col items-start gap-2 py-2 px-4 rounded-lg bg-[#176DEE]">
              <div className="flex justify-between w-full">
                <div className="text-xs text-[#F9FAFB] font-poppins font-normal">
                  You
                </div>
                <div className="text-xs text-[#F9FAFB] font-poppins font-normal text-right">
                  9:44
                </div>
              </div>
              <div className="mt-1">
                <p className="text-xs text-white font-poppins font-normal">
                  Hii! I am Ria fro Mumbai it’s nice to meet you
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[239px] gap-[12.39px] flex justify-end text-start">
              <div
                className="max-w-[183px] flex flex-col gap-[6.195px] pt-[6.195px] pr-[12.39px] pb-[6.969px] pl-[12.39px] text-start rounded-[6.195px] bg-white"
                style={{
                  boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                }}
              >
                <div className="flex justify-between w-full">
                  <div className="text-[9.293px] text-[#B9BEC6] font-poppins font-normal text-right">
                    9.20
                  </div>
                  <div className="text-[9.293px] text-[#176DEE] font-poppins font-normal">
                    Amir
                  </div>
                </div>
                <div className="mt-[3.1px]">
                  <p className="text-[9.293px] text-[#020F21] font-poppins font-normal">
                    Hii Ria, Well how’s the weather in Mumbai?{" "}
                  </p>
                </div>
              </div>
              <div className="">
                <img src="/images/amir.png" alt="" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-full md:max-w-[338px] mx-auto h-16 flex py-[14px] px-[10px] bg-white">
            <div className="flex gap-1 mr-2">
              <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                <img
                  src="/images/icons/Happy.svg"
                  alt=""
                  className="w-[18px] tab:w-auto"
                />
              </div>
              <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                <img
                  src="/images/icons/microphone-2.png"
                  alt=""
                  className="w-[18px] tab:w-auto"
                />
              </div>
            </div>
            <form
              className="flex gap-2 border-l border-[#9DA4AF] pl-[19px] w-full"
              role="search"
            >
              <div className="contents">
                <input
                  type="search"
                  aria-label="search"
                  placeholder="Write a message..."
                  className="w-[165px] border-none focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                />
              </div>
              <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                <a href="#">
                  <img src="/images/icons/message-send.svg" alt="" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Calling_ChatView;
