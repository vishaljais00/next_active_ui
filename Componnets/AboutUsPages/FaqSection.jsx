import React from 'react'

function FaqSection() {
  return (
    <div>
      <>
  {/* faq */}
  <section className="bg-white">
  <div className="flex flex-col justify-center items-center font-gestura gap-[53px] md:gap-[97px] pt-[53px] pb-[63px] md:pt-[96px] md:pb-[109px] px-[42px] tab:px-[7%] md:px-[3%]">
    <div className="text-black text-center">
      <h3 className="text-[40px] md:text-5xl font-normal">FAQ</h3>
      <p className="max-w-[238px] tab:max-w-[732px] pt-3 md:pt-[34px] text-lg font-normal leading-[24.336px]">
        Frequently asked questions about Activ
      </p>
    </div>
    <div className="max-w-[1080px] mx-auto">
      <div className="flex flex-col gap-[30px] border-l-[3px] border-black rounded-t-[2px] rounded-b-[2px] pl-[15px] md:pl-[39px]">
        <h5 className="text-base md:text-xl text-black font-normal opacity-90 tab:opacity-100">
          {" "}
          Do I need to register to use Activ?
        </h5>
        <p className="text-sm md:text-lg text-[#2E2E2E] font-normal leading-[15.3px] md:leading-[22px] opacity-90 tab:opacity-100">
          No, absolutely not!{" "}
        </p>
        <p className="text-sm md:text-lg text-[#2E2E2E] font-normal leading-[15.3px] md:leading-[22px] opacity-90 tab:opacity-100">
          One of the key principles that sets Activ apart is our commitment to
          simplicity and respect for your privacy.{" "}
        </p>
        <p className="text-sm md:text-lg text-[#2E2E2E] font-normal leading-[15.3px] md:leading-[22px] opacity-90 tab:opacity-100">
          We firmly believe in providing a hassle-free experience for our users,
          and that's why we've eliminated the need for any registration. You can
          jump right into the world of genuine connections without the burden of
          a complicated sign-up process.{" "}
        </p>
        <p className="text-sm md:text-lg text-[#2E2E2E] font-normal leading-[15.3px] md:leading-[22px] opacity-90 tab:opacity-100">
          Activ is all about making it easy for you to discover new friends and
          engage in meaningful conversations from the moment you land on our
          platform.{" "}
        </p>
        <p className="text-sm md:text-lg text-[#2E2E2E] font-normal leading-[15.3px] md:leading-[22px] md:pb-[30px] opacity-90 tab:opacity-100">
          Enjoy the freedom to connect without the barriers of traditional
          registration requirements!
        </p>
      </div>
      <div className="flex flex-col gap-[30px] text-base md:text-xl text-black font-normal mt-[39px] md:mt-[30px] opacity-90 tab:opacity-100">
        <h5 className="border-l-[3px] border-black rounded-t-[2px] rounded-b-[3px] pl-[15px] md:pl-[39px]">
          How does Activ prioritize user privacy?
        </h5>
        <h5 className="border-l-[3px] border-black rounded-t-[2px] rounded-b-[3px] pl-[15px] md:pl-[39px]">
          Who founded Activ, and what inspired its creation?
        </h5>
        <h5 className="border-l-[3px] border-black rounded-t-[2px] rounded-b-[3px] pl-[15px] md:pl-[39px]">
          {" "}
          What sets Activ apart from other video chat platforms?
        </h5>
        <h5 className="border-l-[3px] border-black rounded-t-[2px] rounded-b-[3px] pl-[15px] md:pl-[39px]">
          Does Activ have a community and inclusivity focus?
        </h5>
      </div>
    </div>
  </div>
</section>

</>

    </div>
  )
}

export default FaqSection
