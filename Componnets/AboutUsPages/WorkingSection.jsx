import React from 'react'

function WorkingSection() {
  return (
    <div>
      <>
  {/* what we do */}
  <section className="px-[27px] tab:px-0 md:px-0">
  <div className="relative md:flex md:justify-center z-0 tab:px-[7%] md:px-[10%] mt-[103px] ">
    <div
      className="flex flex-wrap flex-col gap-0 md:gap-[84px] tab:gap-20 bg-white  items-center tab:items-start md:items-start tab:grid md:grid tab:grid-cols-1 md:grid-cols-2 w-full max-w-[1514px] m-auto tab:p-10 md:py-[76px] md:px-[98px]"
      style={{ boxShadow: "10px 10px 250px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="flex tab:flex-col tab:order-2 md:flex-row md:order-none">
        <div className="pt-[63px] pb-[26px] px-4 tab:pt-0 tab:pb-p tab:px-0 md:pt-0 md:pb-0 md:px-0">
          <span className="text-black text-[16px] font-gestura font-normal md:font-light  uppercase leading-[21.632px] tab:leading-5">
            Who we are
          </span>
          <h3 className="hidden md:block text-black text-5xl tab:text-5xl md:text-7xl font-gestura font-light pt-[22px] tab:pt-0">
            What we do
          </h3>
          <h3 className="md:hidden text-black text-5xl tab:text-5xl md:text-7xl font-gestura font-normal pt-4 tab:pt-0">
            About us
          </h3>
          <p className="hidden tab:block max-w-[521px] pt-4 md:pt-[54px]  text-black  font-Nunito text-sm  tab:text-sm font-light leading-6">
            Activ was born from the vision of Shivam Thakur, a determined and
            ambitious young man hailing from a middle-class family. Driven by
            his dreams, Shivam founded Activ to provide a platform where young
            individuals can come together, break the barriers of traditional
            online interactions, and find real connections. We aim to foster a
            vibrant and inclusive community that celebrates diversity and
            encourages meaningful friendships.
          </p>
          <p className="tab:hidden max-w-[521px] pt-4 md:pt-[54px]  text-black  font-Nunito text-sm tab:text-[8.5px] md:text-sm font-light leading-6">
            Activ was born from the vision of Shivam Thakur, a determined and
            ambitious young man hailing from a middle-class family. Driven by
            his dreams, Shivam founded Activ to provide a platform where young
            individuals can come together, break the barriers of traditional
            online interactions, and find real connections..ips.{" "}
          </p>
          <div className="flex pt-[13px] tab:pt-10 md:pt-[74px]">
            <button
              className="flex justify-center items-center w-[164px] h-[52.44px] tab:w-[154px] tab:h-[41px] md:w-[164px] md:h-[52px] tab:py-[21px] md:px-[25px] border border-black  rounded-[200px] text-lg bg-black text-white font-gestura font-normal leading-[45px] text-center"
              style={{ boxShadow: "0px 4px 8px 0px rgba(114, 114, 114, 0.25)" }}
            >
              <a href="" className="opacity-[.7]">
                Read more
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="stranger-img">
          <img
            src="/images/we-do.png"
            alt=""
            className="tab:w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>

</>

    </div>
  )
}

export default WorkingSection
