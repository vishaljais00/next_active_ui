import Link from 'next/link'
import React from 'react'

function Headcontent() {
  return (
    <div>
      <section className="">
  <div className="flex justify-center items-center  text-center tab:text-left tab:justify-start flex-col-reverse tab:grid md:grid tab:grid-cols-2 md:grid-cols-2  max-w-[1240px] mx-auto tab:mt-[35px] tab:m-auto px-[22px] tab:px-[4%] md:px-[3%] md:mt-5">
    <div className="">
      <div className="your-vibe">
        <h4 className="hidden tab:block text-[32px] tab:text-lg md:text-[32px]  text-black font-Nunito font-normal">
          Find Your Vibe, Connect People
        </h4>
        <h4 className="tab:hidden text-sm text-black font-Nunito font-normal pt-3">
          Connect and Chat: Meet New Friends Online Now!
        </h4>
        <h3 className="text-2xl tab:text-[57px] md:text-[64px] text-black font-Nunito md:font-gestura font-black tab:font-bold my-[10px] tab:mt-[17px] md:mt-9 md:mb-[42px]">
          By being
        </h3>
        <h2 className="text-[32px] tab:text-[70px] md:text-7xl text-[#d24e30] font-Nunito md:font-gestura font-black tab:font-bold">
          Yourself
        </h2>
      </div>
      <div className="flex justify-center tab:justify-start items-center tab:gap-[14px] pt-9 tab:pt-0 md:pt-[72px]">
        <button
          className="w-[150px] h-10 tab:w-[154px] tab:h-[41px] md:w-[250px] md:h-[52px]  rounded-[48px] text-sm text-white font-Nunito tab:text-[13px] md:text-lg font-medium text-center opacity-70 tab:opacity-100 md:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, #890300 0.12%, #739C00 44.37%, #000 101.45%, rgba(33, 33, 33, 0.00) 101.46%)",
            boxShadow: "0px 12px 46px 15px rgba(0, 0, 0, 0.12)"
          }}
        >
          <a
            className="contents pt-[11px] pb-2 py-[22px] tab:py-[10px] tab:px-[21px] md:py-[13px] md:px-[56px]"
            href="#"
          >
            CONNECT NOW
          </a>
        </button>
        <div className="tab:mt-7 md:mt-10 tab:mr-[-65px]">
          <img
            className="hidden tab:block tab:w-[214px] ipad:w-[333px] md:w-[336px] tab:h-20"
            src="/images/Vector 1.png"
            alt=""
          />
        </div>
      </div>
      <div className="hidden tab:block">
        <div className=" flex gap-4 md:gap-0 tab:pt-[56px]  md:pt-[95px]">
          <div className="flex  gap-4 tab:gap-[11px] md:gap-4">
            <img
              src="images/icons/la_cash-register.svg"
              alt=""
              className="tab:w-[42px] h-8 md:w-[47px] md:h-[47px]"
            />
            <span className="text-[15px] md:text-[20px] font-Nunito tab:font-ABeeZee md:w-[76px] md:mr-[60px]">
              No Registration
            </span>
          </div>
          <div className="flex  gap-[34px] tab:gap-[11px] md:gap-[34px]">
            <img
              src="images/icons/countusers.svg"
              alt=""
              className="tab:w-[42px] h-8 md:w-[47px] md:h-[47px]"
            />
            <span className="text-[15px] md:text-[20px] font-Nunito tab:font-ABeeZee md:w-[76px]">
              10k + Users
            </span>
          </div>
          <div className="flex  gap-7 tab:gap-[11px] md:gap-7">
            <img
              src="images/icons/chat for me.svg"
              alt=""
              className="tab:w-[42px] h-8 md:w-[47px] md:h-[47px]"
            />
            <span className="text-[15px] md:text-[20px] font-Nunito tab:font-ABeeZee md:w-[76px]">
              Chat for free
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-0 tab:pt-0 tab:mt-[-98px] tab:ml-[-20px] md:mt-[95px] md:ml-0">
      <div className="tab:hidden md:block new-friends">
        <img
          src="images/img-1.png"
          alt=""
          className="w-auto tab:w-[305px] tab:h-[293px] md:w-[593px] md:h-[506px]"
        />
      </div>
      <div className="hidden tab:block md:hidden new-friends mt-[82px]">
        <img
          src="images/tab-img-1.png"
          alt=""
          className="w-auto tab:w-[318px] tab:h-[333px] ipad:w-[418px] ipad:h-[343px] md:w-[593px] md:h-[491px]"
        />
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Headcontent
