import React from 'react'

function Review() {
  return (
    <div>
<section
  className="w-full h-screen mx-auto flex justify-center items-center "
  style={{
    background: "url(/images/review-bg.png), lightgray 50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }}
>
  <div className="">
    <div className="relative">
      {/*header */}
      <div
        className="flex  md:justify-start items-center w-[305px] tab:w-[496px] h-[46px] md:w-[649px] rounded-t-[20px]"
        style={{ background: "rgba(40, 40, 40, 0.80)" }}
      >
        <h3 className="text-xl md:text-2xl font-Nunito font-bold text-white text-center tab:text-start  md:text-center pl-[57px] tab:pl-[53px]  md:pl-[163px] py-[11px]">
          Tell us your experience
        </h3>
        <button
          type="button"
          className=" inline-flex justify-center items-center  absolute top-[-9px] right-[-27px] tab:top-[-26px] tab:right-[-53px] opacity-0 md:opacity-100"
          data-modal-hide="default-modal"
        >
          <img
            src="/images/icons/close.svg"
            alt=""
            className="w-[22px] tab:w-auto"
          />
        </button>
      </div>
      {/*body */}
      <div
        className="w-[305px] h-[228px] tab:w-[496px] tab:h-[372px] md:w-[649px] md:h-[245px] rounded-b-[20px] pt-[37px] pb-[53px] pl-[6px] pr-[14px] tab:px-5 tab:pt-[94px] tab:pb-[119px] tab:pl-[61px] tab:pr-[70px] md:pt-[13px] md:pb-[18px] md:pr-[49px] md:pl-[50px]"
        style={{
          background: "var(--white-40, rgba(255, 255, 255, 0.40))",
          boxShadow: "10px 10px 60px 0px rgba(0, 0, 0, 0.08)"
        }}
      >
        <div className="flex tab:gap-[31px] md:gap-0 ">
          <div className="flex flex-col tab:gap-[30px] md:gap-0">
            <img
              src="/images/bad.png"
              alt=""
              className="w-[96px] h-[96px] tab:w-[104px] md:w-[185px] md:h-[185px]"
            />
            <span className="text-black text-2xl font-Nunito font-bold text-center">
              Bad
            </span>
          </div>
          <div className="flex flex-col tab:gap-[30px] md:gap-0">
            <img
              src="/images/good.png"
              alt=""
              className="w-[96px] h-[96px] tab:w-[104px] md:w-[185px] md:h-[185px]"
            />
            <span className="text-black text-2xl font-Nunito font-bold text-center">
              Good
            </span>
          </div>
          <div className="flex flex-col tab:gap-[30px] md:gap-0">
            <img
              src="/images/great.png"
              alt=""
              className="w-[96px] h-[96px] tab:w-[104px] md:w-[185px] md:h-[185px]"
            />
            <span className="text-black text-2xl font-Nunito font-bold text-center">
              Great
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Review
