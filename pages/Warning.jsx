import React from 'react'

function Warning() {
  return (
    <div>


<section className="tab:max-w-[1576px] h-screen tab:h-[65vh] md:h-screen flex justify-center items-center m-auto bg-no-repeat  tab:bg-center  warning">
  <div className="hidden tab:block md:hidden">
    <img src="/images/warning-bg.png" alt="" />
  </div>
  <div className="h-[75px] w-full tab:h-[31vh]  md:max-w-[1576px] md:h-[295px] mx-auto mt-[106px] md:translate-[0,-34%] tab:mt-0 md:mt-0 relative tab:absolute md:absolute  md:bottom-[12%] tab:bottom-[150px]">
    <div className="flex flex-col justify-center items-center gap-0 tab:gap-[22px] md:gap-0 bg-[#DD1805] pt-0  md:pt-[10px] pb-9 tab:pt-[5px]">
      <img src="/images/icons/warning.svg" alt="" className="w-[100px]" />
      <div className="max-w-[402px] tab:max-w-[441px] text-center">
        <h4 className="text-[32px] tab:text-[28px] md:text-[32px] font-gestura font-normal text-white">
          You are restricted
        </h4>
        <p className="text-base tab:text-xl font-Nunito font-normal text-center text-[#FFE2E2] pt-4 tab:pt-[17px] md:pt-0 opacity-[.8]">
          You have voilated the user policies several time and that’s why you
          are restricted
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center gap-4 tab:gap-[43px] mt-[27px] tab:mt-[43px]  md:mt-[22px]">
      <button className="block w-[151px] h-[43px]  md:w-[192px]  md:h-[53px]  rounded-[110px] bg-[#DD1805] text-white text-2xl  md:text-2xl font-Nunito font-normal">
        Okay
      </button>
      <button
        className="block w-[151px] h-[43px] md:w-[191px] md:h-[53px]  rounded-[110px] bg-white text-black text-2xl  md:text-2xl font-Nunito font-normal"
        style={{ boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.10)" }}
      >
        Retry
      </button>
    </div>
  </div>
</section>



    </div>
  )
}

export default Warning
