import React from 'react'

function AboutPrivacySection() {
  return (
    <div>

<>
  {/* privacy-first */}
  <section>
  <div className="tab:mt-[103px] md:mt-[69px] ">
    <div className="flex flex-wrap flex-col-reverse gap-0 md:gap-[84px] tab:gap-20 font-gestura  items-center tab:items-start md:items-start tab:grid md:grid tab:grid-cols-1 md:grid-cols-2 w-full max-w-[1300px] mx-auto tab:px-[7%] md:pl-[3%] md:pr-0">
      <div className="tab:flex tab:order-2 md:order-none">
        <div className="pt-8 pb-[50px] px-[42px] tab:pt-0 md:pb-[111px]  tab:px-0 md:pt-0 md:pb-p md:px-0">
          <span className="text-black text-sm md:text-[16px] font-medium md:font-normal leading-[18px] md:leading-[21px]  uppercase">
            The most secure platform for you
          </span>
          <h3 className=" text-black text-[40px] tab:text-5xl md:text-7xl font-medium md:font-normal tab:pt-[2px]">
            Privacy First
          </h3>
          <p className="max-w-[733px]  pt-[17px] md:pt-[79px]  text-black font-gestura  md:font-Nunito text-[17px] font-normal md:font-light leading-[24.336px] md:leading-6">
            Your privacy is our priority. Unlike other social platforms that may
            inundate you with complicated sign-up processes and personal data
            collection,
          </p>
          <p className="max-w-[733px]  pt-[17px] md:pt-[25px]  text-black font-gestura  md:font-Nunito text-[17px] font-normal md:font-light leading-[24.336px] md:leading-6">
            Activ eliminates the need for any registration. We believe that your
            journey on Activ should be solely about discovering new friends,
            engaging in exciting conversations, and embracing the real vibes
            without compromising your privacy.
          </p>
          <div className="flex  pt-[31px] md:pt-[84px]">
            <button
              className="flex justify-center items-center w-[164px] h-[52.44px] tab:w-[154px] tab:h-[41px] md:w-[164px] md:h-[52px] tab:py-[21px] md:px-[25px] border border-black  rounded-[200px] text-lg bg-black text-white font-Nunito font-normal text-center"
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
        <div className="stranger-img order-first">
          <img
            src="/images/privacy-first.png"
            alt=""
            className="tab:w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>





  <>
  {/* join-us */}
  <section className="bg-cover bg-no-repeat join-us bg-black">
  <div className="flex flex-col justify-center items-center text-center pt-[74px] pb-[68px] tab:pt-[152px] tab:pb-[149px] font-gestura">
    <h3 className=" text-white text-[40px] tab:text-5xl md:text-7xl font-light">
      Why join us?
    </h3>
    <p className="max-w-[341px] tab:max-w-[732px] pt-4 md:pt-[31px] md:pb-[31px]  text-white text-sm tab:text-sm md:text-lg font-light leading-[18.928px] tab:leading-6 opacity-70 tab:opacity-80">
      We believe in a world where online interactions go beyond the superficial,
      where friendships are meaningful, and where diversity is celebrated..
    </p>
    <button
      className="flex justify-center items-center w-[164px] h-[52.44px] tab:w-[154px] tab:h-[41px] md:w-[164px] md:h-[52px] tab:py-[21px] md:px-[25px]  rounded-[200px] text-lg bg-white text-black font-Nunito font-normal text-center"
      style={{
        marginTop: 21,
        boxShadow: "0px 4px 8px 0px rgba(114, 114, 114, 0.25)"
      }}
    >
      <a href="" className="">
        Read more
      </a>
    </button>
  </div>
</section>

</>

</>

      
    </div>
  )
}

export default AboutPrivacySection
