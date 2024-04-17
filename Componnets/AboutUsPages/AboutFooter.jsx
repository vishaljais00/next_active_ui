import React from 'react'

function AboutFooter() {
  return (
    <div>
      <>
  {/* footer */}
  <section className="bg-black">
  <footer className="hidden md:block bg-black pt-5 tab:pb-[50px]  max-w-[1080px] mx-auto text-center px-[22px] tab:px-[7%] md:px-0">
    <div className="hidden md:block">
      <div className=" flex flex-col-reverse items-center md:items-start gap-[98px] max-w-[1190px] mx-auto mt-[69px] pb-[25px] md:flex-row">
        <div className="flex flex-col items-start w-[25%]">
          <div className="flex flex-col items-start gap-[60px]">
            <div className="">
              <img
                className="text-left cursor-pointer md:w-[135px]"
                src="./images/about-active-logo.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="text-[#D0DAF5] text-sm font-Nunito font-light leading-normal text-left opacity-50">
                Hello, we are Activ. trying to make an effort to put the right
                people for you to get the best results. Just insight
              </div>
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img src="/images/aboutusimg/icon/Search.svg" alt="" />
                </span>
                <input
                  className="text-[#DBDBDB] placeholder:text-[#DBDBDB] placeholder:text-sm block bg-transparent w-full border border-[#DBDBDB]  py-2 pl-9 pr-3 shadow-sm focus:outline-none  focus:ring-1 sm:text-sm"
                  placeholder="Search"
                  type="text"
                  name="search"
                />
              </label>
            </div>
            <div className="flex items-center text-[12px] text-white pt-[14px]">
              <a className="" href="#">
                <img src="/images/icons/001-facebook-logo-button.svg" alt="" />
              </a>
              <a className="ml-[27px] md:ml-8" href="#">
                <img src="/images/icons/002-twitter.svg" alt="" />
              </a>
              <a className="ml-[27px] md:ml-8" href="#">
                <img src="/images/icons/004-vimeo-social-logo.svg" alt="" />
              </a>
              <a className="ml-[27px] md:ml-8" href="#">
                <img src="/images/icons/Combined Shape.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[75%]">
          <div className=" flex flex-col md:flex-row gap-[50px] justify-between items-start">
            <div className="max-w-[127px] flex flex-col justify-between items-start gap-4 md:gap-3">
              <h3 className="text-[#DBDBDB] text-[32px] font-gestura font-bold">
                Pages
              </h3>
              <ul className="flex flex-col items-start gap-2 text-left list-none text-[#DBDBDB] text-[20px] font-Nunito font-normal opacity-80">
                <li className="text-[#DBDBDB] text-[20px] font-Nunito font-normal pt-[22px]">
                  <a href="#">Home it work</a>
                </li>
                <li className="  pt-2">
                  <a href="#">Pricing</a>
                </li>
                <li className="  pt-2">
                  <a href="#">Blog</a>
                </li>
                <li className="  pt-2">
                  <a href="#">Demo</a>
                </li>
              </ul>
            </div>
            <div className="max-w-[129px] flex flex-col justify-between items-start gap-4 md:gap-3">
              <h3 className="text-[#DBDBDB] text-[32px] font-gestura font-bold">
                Services
              </h3>
              <ul className="flex flex-col items-start gap-2 text-left list-none text-[#DBDBDB] text-[20px] font-Nunito font-normal opacity-80">
                <li className=" pt-[22px]">
                  <a href="#">Video Calling</a>
                </li>
                <li className=" pt-2">
                  <a href="#">Free Chat</a>
                </li>
                <li className=" pt-2">
                  <a href="#">Interaction</a>
                </li>
                <li className=" pt-2">
                  <a href="#">Demo</a>
                </li>
              </ul>
            </div>
            <div className="max-w-[260px] flex flex-col justify-between items-start">
              <h3 className="text-[#DBDBDB] text-[32px] font-gestura font-bold">
                Contact
              </h3>
              <div className="flex flex-col items-start gap-2 text-left list-none text-[#DBDBDB] text-[20px] font-Nunito font-normal py-8 opacity-80">
                <span>(406) 555-0120</span>
                <span>mangcoding123@gmail.com</span>
                <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>

</>

    </div>
  )
}

export default AboutFooter
