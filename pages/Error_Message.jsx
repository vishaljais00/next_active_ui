import React from 'react'

function Error_Message() {
  return (
    <div>
  <section
  className="max-w-[1061px] h-screen mx-auto px-[18px]  flex  justify-center items-center bg-no-repeat bg-cover"
  style={{ backgroundImage: "url(/images/error-message-bg.png)" }}
>
  <div className="max-w-[470px] h-[434px] tab:h-[450px] md:h-[420px] rounded-[45px] bg-white tab:pt-4 px-4 tab:px-8 pb-[47px]  shadow-2xl">
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <div className="">
        <img src="/images/Oops! 404 Error.png" alt="" />
      </div>
      <div className="text-black font-Nunito text-center mt-[-26px]">
        <p className="text-lg font-medium leading-[22px] md:leading-8">
          something went wrong... Please try again or contact Support at{" "}
          <span className="text-lg font-extrabold leading-[22px] md:leading-8">
            support@activ.click
          </span>
        </p>
      </div>
      <div className="pt-[17px] tab:pt-[30px] md:pt-0">
        <button className="w-[204px] h-[46px] rounded-[20px] bg-[#0E7AFF] text-white text-lg font-Nunito font-extrabold text-center">
          Try Again
        </button>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Error_Message
