import Link from 'next/link'
import React from 'react'

function AboutHead() {
  return (
    <div>
        <>
  {/* about-us */}
  <section>
  <div className="tab:px-[7%] md:px-[10%]">
    <div className="flex  tab:text-left tab:justify-center tab:items-center flex-col-reverse tab:grid tab:grid-cols-1  md:grid md:grid-cols-2  gap-[13px] tab:gap-[107px]  max-w-[1514px] mx-[27px] tab:m-auto tab:mt-[82px] m-auto  ">
      <div className="">
        <div className="your-vibe">
          <h2 className="text-5xl tab:text-[7-px] md:text-[72px] text-black font-normal font-gestura pt-4 md:pt-[23px]">
            About US
          </h2>
          <p className="text-sm md:text-lg text-black font-normal font-Nunito pt-4 md:pt-[33px] leading-[18.928px]">
            Activ stands out in the crowded world of social platforms by
            offering you a hassle-free and privacy-centric experience. Unlike
            other platforms, we believe in simplicity and the power of authentic
            connections.
          </p>
        </div>
        <div className="flex justify-center tab:justify-start items-center gap-[11px] tab:gap-6 pt-8 tab:pt-[33px] md:pt-[72px] mb-0 tab:mb-[68px]">
          <button
            className="flex justify-center items-center w-[135px] h-[45px] tab:w-[154px] tab:h-[41px] md:w-[164px] md:h-[57px] md:py-[21px] md:px-[25px]  rounded-[200px] text-lg bg-black text-white font-Nunito font-normal text-center"
            style={{ boxShadow: "0px 4px 8px 0px rgba(114, 114, 114, 0.25)" }}
          >
            <a href="" className="opacity-[.7]">
              Connect now
            </a>
          </button>
          <button
            className="flex justify-center items-center w-[135px] h-[45px] tab:w-[154px] tab:h-[41px] md:w-[164px] md:h-[57px] tab:py-[21px] md:px-[25px] border border-black  rounded-[200px] text-lg bg-[#F4F4F4] text-black font-Nunito font-normal text-center"
            style={{ boxShadow: "0px 4px 8px 0px rgba(114, 114, 114, 0.25)" }}
          >
            <a href="" className="">
              Read more
            </a>
          </button>
        </div>
        <div
          className=" tab:border-t"
          style={{ borderColor: "rgba(151, 151, 151, 0.60)" }}
        >
          <div className=" flex justify-center tab:justify-start items-center gap-[14px] tab:gap-[11px]  md:gap-[10px] pt-9 tab:pt-[31px]">
            <div className="flex tab:items-center md:items-start gap-[7px] tab:gap-2 md:gap-[11px] text-start">
              <img
                src="images/aboutusimg/icon/register.svg"
                alt=""
                className="w-7 tab:w-[42px] h-8 md:w-[47px] md:h-[47px]"
              />
              <span className="text-[14px] md:text-[20px] font-ABeeZee font-medium md:font-normal md:w-[76px] md:mr-[60px]">
                No Registration
              </span>
            </div>
            <div className="flex tab:items-center md:items-start gap-[7px] tab:gap-[22px] text-start">
              <img
                src="images/aboutusimg/icon/users.svg"
                alt=""
                className="w-[23px] tab:w-[42px] h-8  md:w-[45px] md:h-[48px]"
              />
              <span className="text-[14px] md:text-[20px] font-ABeeZee font-medium md:font-normal md:w-[76px]">
                10k + Users
              </span>
            </div>
            <div className="flex tab:items-center md:items-start gap-[7px] tab:gap-[22px] text-start">
              <img
                src="images/aboutusimg/icon/chatforfree.svg"
                alt=""
                className="w-6 tab:w-[42px] h-8 md:w-12 md:h-12"
              />
              <span className="text-[14px] md:text-[20px] font-ABeeZee font-medium md:font-normal md:w-[76px]">
                Chat for free
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-20 tab:pt-0 tab:order-first">
        <div className="hidden tab:block new-friends">
          <img
            src="/images/about-img1.png"
            alt=""
            className="tab:w-full md:w-auto"
          />
        </div>
        <div className="tab:hidden new-friends">
          <img src="/images/sm-about-img.png" alt="" className="w-auto" />
        </div>
      </div>
    </div>
  </div>
</section>

</>

      
    </div>
  )
}

export default AboutHead
