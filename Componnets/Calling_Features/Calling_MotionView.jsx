import Script from 'next/script'
import React, { useEffect, useState } from 'react'

const Calling_MotionView = () => {
  const [openIntentest, setOpenInterst]  = useState(false)
  const [openAvatar, setOpenAvatar]  = useState(false)
  const [videoicon, setVideoIcon]  = useState(false)
  const [threeDot, setThreeDot]  = useState(false)

  const hadndleAvatarFunc = (name='openIntentest', value) =>{
    if(name === 'openIntentest'){
      setOpenInterst(!value)
      setOpenAvatar(false)
    }else{
      setOpenInterst(false)
      setOpenAvatar(!value)
    }
  }

  return (
    <>
    {/* <!-- responsive-chat-screen-with-v--open --> */}
      <div
  id="videochat"
  className={`${videoicon? 'hidden': ''} ${threeDot? 'hidden' : ''} videocall flex flex-col gap-[22px] md:hidden w-full max-w-[1440px] h-screen rounded-[20px] bg-white pt-3 tab:pt-5 pl-3 tab:pl-[22px] pb-[10px] pr-[11px] tab:pr-6`}
>
  <div
    className="flex flex-col justify-between h-screen md:ml-[66px] rounded-[10px] bg-no-repeat pt-[10px] tab:pt-5 pr-[15px] pl-[18px] tab:pl-[31px] tab:pr-[33px] pb-[14px] tab:pb-[30px]"
    style={{
      backgroundImage: "url(/images/chat-with-v-call.png)",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}
  >
    <div className="flex flex-col">
      <div className="flex justify-end">
        <a
          href="#"
          className=" w-[30px] tab:w-[51px] h-[30px] tab:h-[51px] bg-white rounded-full flex items-center justify-center"
        >
          {" "}
          <img
            onClick={()=> setThreeDot(true)}
            src="/images/icons/pepicons-pop_dots-y.svg"
            alt=""
            className="threedot relative z-50 w-6 tab:w-auto"
          />
        </a>
      </div>
      <div className="mt-[-28px] tab:mt-[-38px]">
        <img
          src="/images/v call-logo.png"
          alt=""
          className="w-[88px] tab:w-auto"
        />
      </div>
    </div>
    <div className="flex justify-end">
      <div className="flex flex-col justify-end">
        <img
          src="/images/v call-img.png"
          alt=""
          className="w-[79px] h-[83px] tab:w-auto tab:h-auto"
        />
      </div>
    </div>
  </div>
  <div className=" flex flex-col justify-between pt-[17px] tab:pt-[31px] tab:pr-5 tab:pb-8">
    <div className="text-center mb-[97px]">
      <div className="flex  items-center">
        <div className="flex ml-[-10px] tab:ml-[-15px]">
          <a href="#">
            <img
              src="/images/chat-screen-prev.png"
              alt=""
              className="w-[47px] tab:w-[87px]"
            />
          </a>
        </div>
        <div className="w-[47px] tab:w-[73px] tab:h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
          <img src="/images/screen-avt.png" alt="" className="rounded-[73px]" />
        </div>
        <div className="ms-auto">
          <p
            onClick={()=>setVideoIcon(true)}
            className=" bg-[#EEE] p-[9px] flex items-center justify-center rounded-[100px]"
          >
            <img
              id="videoScreen"
              src="/images/fluent_video.png"
              alt=""
              className="video-icon w-[30px] tab:w-auto"
            />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[39px]">
        <div className="flex justify-between gap-4 mt-[41px]">
          <div className="">
            <img
              src="/images/pro 2 3.png"
              alt=""
              className="rounded-full w-[56px] tab:w-[94px]"
            />
          </div>
          <div className="flex flex-col w-[237px] tab:w-[530px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
            <div className="flex justify-between">
              <div className="text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                you
              </div>
              <div className="tab:hidden text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                9:44
              </div>
              <div className="hidden tab:block text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                9:20
              </div>
            </div>
            <div className="max-w-[493px] h-[55px] text-justify text-xs tab:text-base font-Nunito font-normal text-white opacity-70">
              Hii! I am Ria fro Mumbai it’s nice to meet you
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-[9.94px] tab:gap-8">
          <div
            className="flex flex-col w-[183.529px] tab:w-[404px] bg-white gap-[3.1px] rounded-[6.195px] px-[12.39px] py-[6.195px] tab:pt-[6.2px]  tab:pr-[12.39px] tab:pb-[6.969px]"
            style={{ boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)" }}
          >
            <div className="flex justify-between">
              <div className="tab:hidden text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                9:20
              </div>
              <div className="hidden tab:block text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                9:44
              </div>
              <div className="text-[9.293px] tab:text-base text-[#176DEE] font-normal font-Nunito opacity-80">
                Amir
              </div>
            </div>
            <div
              className="text-justify text-[9.293px] tab:text-[13.29px] font-Nunito font-normal text-[#020F21] pr-[10px]"
              style={{
                boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
              }}
            >
              Hii Ria, Well how’s the weather in Mumbai?{" "}
            </div>
          </div>
          <div className="">
            <img
              src="/images/amir.png"
              alt=""
              className="rounded-full w-12 tab:w-[94px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-end w-full">
      <div className="w-full  h-16 flex py-[14px] tab:px-[10px] rounded-[10px] bg-white">
        <div className="flex gap-1 mr-[5px] tab:mr-[29px]">
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
        <div
          className="w-[1px] h-[38px]"
          style={{ background: "rgba(51, 51, 51, 0.35)" }}
        />
        <form
          className="flex justify-between tab:gap-10 w-full ml-[5px]"
          role="search"
        >
          <div className="contents">
            <input
              type="search"
              aria-label="search"
              placeholder="Write a message..."
              className="w-[80%] tab:w-full border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
            />
          </div>
          <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
            <a href="#">
              <img
                src="/images/icons/message-send.svg"
                alt=""
                className="fa-rocket"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
      </div>


        <>
  {/* responsive-chat-screen-with-v-call-close */}
  {/* responsive-chat-screen-open */}
        <div
        id="fullChatScreen"
        className={`${threeDot ? 'flex': 'hidden'} targetDiv w-full max-w-[1440px] h-screen rounded-[20px] bg-white`}
      >
        <div className="w-full h-screen flex flex-col justify-between pt-[17px] pr-[14px]  tab:pt-[31px] pl-6 tab:pr-5 tab:pb-8">
          <div className="text-center">
            <div className="flex  items-center">
              <div className="flex">
                <p onClick={()=>setThreeDot(false)}>
                  <img
                    src="/images/chat-screen-prev.png"
                    alt=""
                    className="fullChatScreen w-[47px] tab:w-[87px]"
                  />
                </p>
              </div>
              <div className="w-[47px] tab:w-[73px] tab:h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
                <img src="/images/screen-avt.png" alt="" className="rounded-[73px]" />
              </div>
              <div className="ms-auto">
                <a href="#">
                  <img
                    src="/images/fluent_video.png"
                    alt=""
                    className="w-[30px] tab:w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[70px]">
              <div className="flex justify-between gap-4 mt-[93px]">
                <div className="">
                  <img
                    src="/images/pro 2 3.png"
                    alt=""
                    className="rounded-full w-[56px] tab:w-[94px]"
                  />
                </div>
                <div className="flex flex-col w-[237px] tab:w-[530px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
                  <div className="flex justify-between">
                    <div className="text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                      you
                    </div>
                    <div className="tab:hidden text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                      9:44
                    </div>
                    <div className="hidden tab:block text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                      9:20
                    </div>
                  </div>
                  <div className="max-w-[493px] h-[55px] text-justify text-xs tab:text-base font-Nunito font-normal text-white opacity-80">
                    Hii! I am Ria fro Mumbai it’s nice to meet you
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-[9.94px] tab:gap-8">
                <div
                  className="flex flex-col w-[183.529px] tab:w-[404px] bg-white gap-[3.1px] rounded-[6.195px] px-[12.39px] py-[6.195px] tab:pt-[6.2px]  tab:pr-[12.39px] tab:pb-[6.969px]"
                  style={{ boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)" }}
                >
                  <div className="flex justify-between">
                    <div className="tab:hidden text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                      9:20
                    </div>
                    <div className="hidden tab:block text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                      9:44
                    </div>
                    <div className="text-[9.293px] tab:text-base text-[#176DEE] font-normal font-Nunito opacity-80">
                      Amir
                    </div>
                  </div>
                  <div className="text-justify text-[9.293px] tab:text-[13.29px] font-Nunito font-normal text-[#020F21] pr-[10px]">
                    Hii Ria, Well how’s the weather in Mumbai?{" "}
                  </div>
                </div>
                <div className="">
                  <img
                    src="/images/amir.png"
                    alt=""
                    className="rounded-full w-12 tab:w-[94px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end w-full">
            <div className="w-full  h-16 flex py-[14px] tab:px-[10px] rounded-[10px] bg-white">
              <div className="flex gap-1 mr-[5px] tab:mr-[29px]">
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
              <div
                className="w-[1px] h-[38px]"
                style={{ background: "rgba(51, 51, 51, 0.35)" }}
              />
              <form
                className="flex justify-between tab:gap-10 w-full ml-[5px]"
                role="search"
              >
                <div className="contents">
                  <input
                    type="search"
                    aria-label="search"
                    placeholder="Write a message..."
                    className="w-[80%] tab:w-full border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                  />
                </div>
                <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                  <a href="#">
                    <img
                      src="/images/icons/message-send.svg"
                      alt=""
                      className="fa-rocket"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

        </>

        {/* <!-- responsive-chat-screen-close --> */}
        <section className=" max-w-[1440px]  md:h-screen flex items-center md:block mx-auto bg-black md:bg-white">
  {/* responsive-video-calling-open */}
  <div
    id="fullScreen"
    className={`${videoicon ? '': 'hidden'} targetDiv md:hidden w-full md:h-screen items-center flex flex-col justify-end bg-cover bg-no-repeat bg-center tab:pb-[1.5px]`}
    style={{ backgroundImage: "url(/images/v-call-bg.png)" }}
  >
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="py-[22px] px-[18px] tab:p-[53px]">
        <img
          src="/images/v call-logo.png"
          alt=""
          className="w-[88px] tab:w-auto"
        />
      </div>
      <div className=" flex flex-col justify-end ">
        <div className="flex justify-between pr-[14px] tab:pr-[34px]  rounded-[20px]">
          <div>
            {/* intesrest */}
            <div
              className={`${openIntentest ? '' : 'hidden' }  tab:mt-20 mt-[15px] tab:ml-10 ml-5`}
              id="twoShow"
            >
              {/* popup */}
              <div
                className=" h-[126px] rounded-[10px] pt-4 pb-[23px] px-2 overflow-y-scroll"
                style={{
                  width: '14rem',
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
                                          w-[65px] tab:w-[82px] h-9 relative flex justify-center items-center bg-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[65px] tab:before:w-[82px] before:h-9 before:duration-[.4s] before:scale-0"
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
                                        w-[85px] tab:w-[99px] h-9 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px] tab:before:w-[99px]   before:h-9 before:duration-[.4s] before:scale-0"
                      >
                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                        <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                          🖌️ Poetry
                        </span>
                      </label>
                    </li>
                    
                  </ul>
                  <ul className="flex flex-wrap  justify-center items-center gap-3">
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
                                           w-[85px] tab:w-[104px]  h-8 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px]  tab:before:w-[104px] before:h-8 before:duration-[.4s] before:scale-0"
                      >
                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                        <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                          🎮 Gaming
                        </span>
                      </label>
                    </li>
                    {/* 4 */}
                    <li className="inline-block">
                      <input
                        type="checkbox"
                        id="mobmyCheckbox4"
                        className="hidden"
                      />
                      <label
                        htmlFor="mobmyCheckbox4"
                        className="
                                          w-[85px] tab:w-[97px]  h-[30px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px] tab:before:w-[97px]  before:h-[30px] before:duration-[.4s] before:scale-0"
                      >
                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                        <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                          🍿 Cinema
                        </span>
                      </label>
                    </li>
              
                  </ul>

                  <ul className="flex flex-wrap  justify-center items-center gap-3">
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
                                          w-[85px] tab:w-[101px] h-8 relative  flex justify-center items-center z-10 bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px] tab:before:w-[101px]  before:h-8 before:duration-[.4s] before:scale-0"
                      >
                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                        <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                          💃🏻 Dance
                        </span>
                      </label>
                    </li>
                   
                  </ul>
                </div>
                {/* popup */}
              </div>
            </div>
            {/* avatar */}
            <div
              className={`${openAvatar ? '' : 'hidden' } tab:mt-20 mt-[15px] tab:ml-10 ml-5`}
              id="oneShow"
            >
              <div
                className="h-[126px] flex flex-col gap-[5px] rounded-[10px] pt-[6px] px-5 overflow-y-scroll"
                
                style={{
                  width: '14rem',
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
          <img
            onClick={()=>setVideoIcon(false)}
            src="/images/v call-img.png"
            alt=""
            className="fullScreen w-[140px] h-[147px] tab:w-[224px] tab:h-[225px]"
          />
        </div>
        <div
          className="bg-cover  bg-no-repeat md:bg-transparent"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)"
          }}
        >
          <div className="flex justify-center items-center mt-[34px] mb-[2px] tab:mb-[35px] tab:mt-[52px] px-[5px] tab:px-[30px] calling ">
            <div className="flex gap-[5px] tab:gap-16">
              <div className="redButton w-12 h-12 tab:w-[65px] tab:h-[66px] rounded-[50%] bg-white flex justify-center items-center">
                <img
                  src="/images/icons/small-video-slash.svg"
                  alt=""
                  className="img w-6 tab:w-auto"
                />
              </div>
              <div className="mute w-12 h-12 tab:w-[65px] tab:h-[66px] rounded-[50%] bg-white flex justify-center items-center">
                <img
                  src="/images/icons/small-microphone-2.svg"
                  alt=""
                  className="muteimg w-6 tab:w-auto"
                />
              </div>
            </div>
            <div className="hang-up w-[150px] h-12 tab:w-[159px] tab:h-[63px] bg-[#F1414F] rounded-[28px] mx-[5px] tab:ml-[74px] tab:mr-16 flex justify-center items-center">
              <img
                src="/images/icons/small-hang-up-48 1.svg"
                alt=""
                className="hangimg w-auto"
              />
            </div>
            <div className="flex items-end gap-[10px] tab:gap-[58px]">
              {/*interest-button */}
              <div className="">
                <div className="w-10 tab:w-16 h-10 tab:h-[55px] rounded-[7px] bg-[#007AFF] flex justify-center items-center">
                  <button id="two" className="block" type="button"  onClick={()=>hadndleAvatarFunc('openIntentest',openIntentest)}>
                    <img
                      src="/images/icons/emoji-happy.svg"
                      alt=""
                      className="w-6 tab:w-auto"
                    />
                  </button>
                </div>
              </div>
              {/*interest-button-close */}
              {/* avatar-button-open*/}
              <div className="">
                <div className="flex items-end ">
                  <button id="one" className="block" type="button"  onClick={()=>hadndleAvatarFunc('openAvatar',openAvatar)}>
                    <img
                      src="/images/icons/small-light.svg"
                      alt=""
                      className="w-9 h-9 tab:w-[67px] tab:h-[55px]"
                    />
                  </button>
                </div>
              </div>
              {/*avatar-button-close */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* responsive-video-calling-close */}
  {/* desktop-video-calling-open */}
  <div className="hidden md:flex flex-col md:flex-row gap-20 pt-4 md:pl-[18px] md:px-[75px]">
    <div className="w-full md:w-[900px] md:h-[679px] rounded-[20px] bg-[#F9FAFB]">
      <div className="">
        <div className="flex justify-between max-w-[843px] pt-[15px] md:ml-[66px]">
          <div className="w-[30px] h-[80px]">
            <div className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
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
        <div className="flex flex-col gap-3 mt-[10px]">
          <div className="max-w-[843px] h-[244px] rounded-[20px] flex justify-center items-center md:ml-[66px] md:mt-0 bg-black">
            <div className="flex flex-col">
              <div
                className="w-[86px] h-[86px] flex flex-col gap-[10px] opacity-90 border border-[#DBDBDB] rounded-full bg-cover bg-no-repeat bg-center bg-white mt-[-18px]"
                style={{ backgroundImage: "url(/images/connecting-avt.png)" }}
              >
                <div className="flex justify-center items-center p-6">
                  <img
                    src="/images/icons/material-symbols_question-mark.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-center text-center text-white text-2xl font-Nunito font-normal lead-[45px]">
                  Connecting...
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden max-w-[843px] h-[244px] md:ml-[66px] rounded-[20px]  bg-no-repeat"
            style={{
              backgroundImage: "url(/images/screen-bg.jpg)",
              backgroundPosition: "0,-115px",
              backgroundSize: "858px 421px"
            }}
          >
            <div className="flex justify-end pt-[30px] pr-[30px]">
              <a href="#">
                <img src="/images/icons/fullscreen.svg" alt="" />
              </a>
            </div>
            <div className="flex justify-end">
              {/* interest */}
              <div className={`${openIntentest ? 'connectedShow' : '' } connectedHide  md:mr-[15px] md:mt-5`} id="fourShow">
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
              {/* avatar */}
              <div
                className={`${openAvatar ? 'connectedShow2' : '' } connectedHide2 md:mr-[15px] md:mt-5`}
                id="threeShow"
              >
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
        <div className="flex justify-center items-end mt-7 tab:mt-[23px]">
          <div className="flex gap-6">
            <div className="redButton w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] bg-white flex justify-center items-center">
              <img
                src="/images/icons/video-slash.svg"
                alt=""
                className="img w-[18px] tab:w-auto"
              />
            </div>
            <div className="mute w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] bg-white flex justify-center items-center">
              <img
                src="/images/icons/microphone-2.png"
                alt=""
                className="muteimg"
              />
            </div>
          </div>
          <div className="hang-up w-[70px] tab:w-[150px] h-[30px] tab:h-12 bg-[#F1414F] rounded-[28px] ml-6 mr-[43px] flex justify-center items-center">
            <img
              src="/images/icons/icons8-hang-up-48 1.svg"
              alt=""
              className="hangimg w-6 tab:w-auto"
            />
          </div>
          <div className="flex gap-[37px]">
            {/*interest-button-open */}
            <div className="">
              <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px] bg-[#007AFF] flex justify-center items-center ">
                <button id="four" className="block" type="button"  onClick={()=>hadndleAvatarFunc('openIntentest',openIntentest)}>
                  <img
                    src="/images/icons/emoji-happy.svg"
                    alt=""
                    className="w-6 tab:w-auto"
                  />
                </button>
              </div>
            </div>
            {/*interest-button-close */}
            {/* avatar-button-open*/}
            <div className="">
              <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px]  flex justify-center items-center ">
                <button id="three" className="block" type="button"  onClick={()=>hadndleAvatarFunc('openAvatar',openAvatar)}>
                  <img
                    src="/images/icons/light_interests.svg"
                    alt=""
                    className="w-6 tab:w-auto"
                  />
                </button>
              </div>
            </div>
            {/*avatar-button-close */}
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-[357px]  h-[679px] rounded-[20px] bg-[#F9FAFB]">
      <div className="flex flex-col justify-between h-[678px]">
        <div className="text-center pt-6 px-5">
          <div className="">
            <div className="flex">
              <button
                className=""
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
              >
                <img src="/images/icons/screen-message.svg" alt="" />
              </button>
            </div>
            {/* drawer component */}
            <div
              id="drawer-navigation"
              className="fixed top-0 left-0 z-40 max-w-[1536px] h-screen  transition-transform -translate-x-full"
              tabIndex={-1}
              aria-labelledby="drawer-navigation-label"
            >
              <div className="w-full  h-[100vh] bg-white flex gap-5 py-5 pl-[34px]">
                {/* md-screen-open */}
                <div className=" flex gap-5">
                  <div className="flex gap-5">
                    <div className="w-[103px] h-[669px] bg-[#F9FAFB] flex gap-5 flex-col rounded-[20px]">
                      <div className="flex flex-col items-center pt-[15px]">
                        <div className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB] hover:border-[3px] hover:border-[#0b78ff]">
                          <img
                            src="/images/screen-avt.png"
                            alt=""
                            className="rounded-[73px]"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <button
                            type="button"
                            data-drawer-hide="drawer-navigation"
                            aria-controls="drawer-navigation"
                            className="inline-flex items-center"
                          >
                            <a href="#">
                              <img
                                src="/images/icons/refresh-button.svg"
                                alt=""
                              />
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-[455px]  h-[669px] pt-10 px-5 rounded-[20px] bg-white"
                      style={{
                        boxShadow: "10px 10px 50px 0px rgba(0, 0, 0, 0.10)"
                      }}
                    >
                      <div className="flex flex-col justify-between">
                        {/* tab */}
                        <div className="mb-4 border-b border-gray-200 ">
                          <ul
                            className="flex flex-wrap justify-between mb-px text-sm font-medium text-center"
                            id="default-tabs"
                            data-tabs-toggle="#default-tabs-contents"
                            role="tablist"
                          >
                            <li className="me-2" role="presentation">
                              <button
                                className="inline-block p-4 border-b-2 rounded-t-lg"
                                id="chatprofile-tab"
                                data-tabs-target="#chatprofile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Recent Chats
                              </button>
                            </li>
                            <li className="me-2 mr-12" role="presentation">
                              <button
                                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                id="chatdashboard-tab"
                                data-tabs-target="#chatdashboard"
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected="false"
                              >
                                Friends
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div id="default-tabs-contents">
                          {/* profile-open */}
                          <div
                            className=" p-4 rounded-lg  "
                            id="chatprofile"
                            role="tabpanel"
                            aria-labelledby="chatprofile-tab"
                          >
                            <ul className="max-w-md divide-y ">
                              <li className="pb-3 sm:pb-4 border-b-transparent">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="relative flex-shrink-0 ">
                                    <img
                                      className="w-[51px] h-[50px]rounded-full"
                                      src="/images/f-1.png"
                                      alt="Neil image"
                                    />
                                    <img
                                      src="/images/online.png"
                                      alt=""
                                      className="absolute bottom-0 right-0 object-cover"
                                    />
                                  </div>
                                  <div className="relative flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black">
                                      Aura margaret
                                    </h6>
                                    <div className="px-[5px] rounded-full bg-[#C9A7A7] text-[10px] font-Nunito font-normal absolute top-0 start-[45%]">
                                      1
                                    </div>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      hai,how are you today?
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center ">
                                    <a href="#">
                                      <img
                                        src="/images/Add user.png"
                                        alt=""
                                        className=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-2.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                      jaehyuk nim
                                      <a href="#">
                                        <img
                                          src="/images/Add user.png"
                                          alt=""
                                          className="w-[17px] h-[17px]"
                                        />
                                      </a>
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      I will start working on it tonight too
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center ">
                                    <a href="#">
                                      <img
                                        src="/images/Add user.png"
                                        alt=""
                                        className=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-3.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                      Kristian bastian
                                      <a href="#">
                                        <img
                                          src="/images/Add user.png"
                                          alt=""
                                          className="w-[17px] h-[17px]"
                                        />
                                      </a>
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      I ask again if something is not clear
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center ">
                                    <a href="#">
                                      <img
                                        src="/images/Add user.png"
                                        alt=""
                                        className=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="relative flex-shrink-0 ">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-4.png"
                                      alt="Neil image"
                                    />
                                    <img
                                      src="/images/online.png"
                                      alt=""
                                      className="absolute bottom-0 right-0 object-cover"
                                    />
                                  </div>
                                  <div className="relative flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-[18px]">
                                      Kristian bastian
                                      <a href="#">
                                        <img
                                          src="/images/Add user.png"
                                          alt=""
                                          className="w-[17px] h-[17px]"
                                        />
                                      </a>
                                    </h6>
                                    <div className="px-[5px] rounded-full bg-[#C9A7A7] text-[10px] font-Nunito font-normal absolute top-[2px] start-[49%]">
                                      2
                                    </div>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      Science, science, or science is a....
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center ">
                                    <a href="#">
                                      <img
                                        src="/images/Add user.png"
                                        alt=""
                                        className=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="pt-3 pb-0 sm:pt-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-5.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                      Aldo andrian
                                      <a href="#">
                                        <img
                                          src="/images/Add user.png"
                                          alt=""
                                          className="w-[17px] h-[17px]"
                                        />
                                      </a>
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      if there is a problem during the
                                      process...
                                    </p>
                                  </div>
                                  <div className="inline-flex items-center ">
                                    <a href="#">
                                      <img
                                        src="/images/Add user.png"
                                        alt=""
                                        className=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* profile-close */}
                          {/* friends-open */}
                          <div
                            className="p-4 rounded-lg"
                            id="chatdashboard"
                            role="tabpanel"
                            aria-labelledby="chatdashboard-tab"
                          >
                            <ul className="max-w-md divide-y ">
                              <li className="pb-3 sm:pb-4 border-b-transparent">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="relative flex-shrink-0 ">
                                    <img
                                      className="w-[51px] h-[50px]rounded-full"
                                      src="/images/f-1.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="relative flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black">
                                      Aura margaret
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      hai,how are you today?
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-2.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                      jaehyuk nim
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      I will start working on it tonight too
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-3.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                      Kristian bastian
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      I ask again if something is not clear
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="relative flex-shrink-0 ">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-4.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="relative flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-[18px]">
                                      Kristian bastian
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      Science, science, or science is a....
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="pt-3 pb-0 sm:pt-4">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="w-[51px] h-[50px] rounded-full"
                                      src="/images/f-5.png"
                                      alt="Neil image"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                      Aldo andrian
                                    </h6>
                                    <p className="text-[13px] font-Nunito font-normal text-black">
                                      if there is a problem during the
                                      process...
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* friends-close */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full md:w-[906px]  h-[669px] rounded-[20px] bg-[#F9FAFB]">
                  <div className="flex flex-col justify-between h-[667px] pt-6 pl-6 pr-[34px] pb-8">
                    <div className="text-center">
                      <div className="flex justify-between items-baseline">
                        <div className="flex">
                          <button
                            type="button"
                            data-drawer-hide="drawer-navigation"
                            aria-controls="drawer-navigation"
                            className="inline-flex items-center"
                          >
                            <a href="#">
                              {" "}
                              <img
                                src="/images/icons/screen-message.svg"
                                alt=""
                              />
                            </a>
                          </button>
                        </div>
                        <div className="">
                          <div className="mt-[-20px]">
                            <span className="text-[#020F21] text-2xl font-Nunito font-semibold text-center">
                              Messages
                            </span>
                          </div>
                          <p className="md:max-w-[317px] text-[#818A98] text-xs font-Nunito font-normal text-center pt-[7px] opacity-90">
                            You can chat here with other members during the
                            meeting and they will be deleted after the meeting.
                          </p>
                        </div>
                        <div className="">
                          <a href="#">
                            <img src="/images/Add user.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[37px]">
                        <div className="flex gap-4 mt-[42px]">
                          <div className="">
                            <img
                              src="/images/pro 2 3.png"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col max-w-[237px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
                            <div className="flex justify-between">
                              <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                you
                              </div>
                              <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                9:44
                              </div>
                            </div>
                            <div className="text-justify text-xs font-Nunito font-normal text-white opacity-80">
                              Hii! I am Ria fro Mumbai it’s nice to meet you
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-[12.39px]">
                          <div
                            className="flex flex-col max-w-[183.529px] bg-white gap-[3.1px] rounded-[6.195px] pt-[6.2px] px-[12.39px] pb-[6.969px]"
                            style={{
                              boxShadow:
                                "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                            }}
                          >
                            <div className="flex justify-between">
                              <div className="text-[9.293px] text-[#B9BEC6] font-normal font-Nunito opacity-80">
                                9:20
                              </div>
                              <div className="text-xs text-[#176DEE] font-normal font-Nunito opacity-80">
                                Amir
                              </div>
                            </div>
                            <div className="text-justify text-[9.293px] font-Nunito font-normal text-[#020F21] pr-[10px]">
                              Hii Ria, Well how’s the weather in Mumbai?{" "}
                            </div>
                          </div>
                          <div className="">
                            <img
                              src="/images/amir.png"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="w-full md:max-w-[850px] mx-auto h-16 flex py-[14px] px-[10px] rounded-[10px] bg-white">
                        <div className="flex gap-1 mr-[29px]">
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
                        <div
                          className="w-[1px] h-[38px]"
                          style={{ background: "rgba(51, 51, 51, 0.35)" }}
                        />
                        <form
                          className="flex justify-between gap-10 w-full ml-[5px]"
                          role="search"
                        >
                          <div className="contents">
                            <input
                              type="search"
                              aria-label="search"
                              placeholder="Write a message..."
                              className="w-full md:w-[152px] border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                            />
                          </div>
                          <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                            <a href="#">
                              <img
                                src="/images/icons/message-send.svg"
                                alt=""
                                className="fa-rocket"
                              />
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* md-screen-close */}
            </div>
          </div>
          {/*  */}
          <div className="mt-[-20px]">
            <span className="text-[#020F21] text-2xl font-Nunito font-semibold text-center">
              Messages
            </span>
          </div>
          <p className="text-[#818A98] text-xs font-Nunito font-normal text-center pt-[7px] opacity-90">
            You can chat here with other members during the meeting and they
            will be deleted after the meeting.
          </p>
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
              className="flex gap-10 md:gap-[10px] border-l border-[#9DA4AF] pl-[19px] w-full"
              role="search"
            >
              <div className="contents">
                <input
                  type="search"
                  aria-label="search"
                  placeholder="Write a message..."
                  className="w-full md:w-[80%] border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                />
              </div>
              <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                <a href="#">
                  <img
                    src="/images/icons/message-send.svg"
                    alt=""
                    className="fa-rocket"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* desktop-video-calling-close */}
        </section>




    </>
  )
}

export default Calling_MotionView