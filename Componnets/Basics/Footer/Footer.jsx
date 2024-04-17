import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
  
 <>
  <div
    className=" tab:hidden  h-[10px] mt-[62px]"
    style={{
      background: "linear-gradient(90deg, #000 0%, #D0F46C 0.01%, #F1487F 100%)"
    }}
  />
  <div
    style={{ filter: "drop-shadow(5px 5px 250px rgba(0, 0, 0, 0))" }}
    className="tab:hidden md:block bg-[#fff] md:mt-[109px]"
  >
    <footer className="pt-5 tab:pb-[50px]  max-w-[1240px] mx-auto tab:m-auto md:m-auto text-center px-[22px] tab:px-[7%] md:px-0">
      {/* bjcxb */}
      <div className=" tab:hidden flex flex-wrap flex-col justify-center items-center">
        <div className="flex flex-col gap-6 items-center mt-4">
          <img
            className="w-[135px] h-[47px] text-left cursor-pointer"
            src="./images/logo(1).png"
            alt=""
          />
          <div className="text-[#484848] text-[11px] md:text-[15.5px] font-Nunito font-light leading-6 pt-6 md:pt-[23px] text-center">
            Connect, Chat, and Video Meet: Embrace Serendipity on Our Free
            Platform! Discover New Friends and Vibes in Real-Time.
          </div>
        </div>
        <div className="flex items-center text-[12px] text-[#9ca3af] pt-[14px]">
          <a className=" ml-[31px] md:ml-8" href="#">
            <img src="/images/icons/facebook logo.svg" alt="" />
          </a>
          <a className=" ml-[27px] md:ml-8" href="#">
            <img src="/images/icons/Twitter logo.svg" alt="" />
          </a>
          <a className="ml-[27px] md:ml-8" href="#">
            <img src="/images/icons/linkedin logo.svg" alt="" />
          </a>
          <a className="ml-[27px] md:ml-8" href="#">
            <img src="/images/icons/instagram logo.svg" alt="" />
          </a>
        </div>
        <div className="flex gap-4 pt-[37px] text-[15px] text-black font-Nunito font-bold">
          <a href="#">Terms and Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      {/* hovdv */}
      <div className="hidden md:block px-[22px] tab:px-[7%] md:px-0">
        <div className=" flex flex-col-reverse items-center md:items-start gap-[98px] max-w-[1190px] mx-auto mt-[69px] md:flex-row">
          <div className="flex flex-col items-start gap-5 md:gap-10 w-[30%] md:mt-[10px]">
            <div className="flex flex-col items-start gap-6">
              <img
                className="h-10 text-left cursor-pointer md:w-[135px] md:h-[49px]"
                src="./images/logo(1).png"
                alt=""
              />
              <div className="text-[#484848] text-[15.5px] font-Nunito font-light leading-6 pt-[35px] md:pt-0 text-left">
                Connect, Chat, and Video Meet: Embrace Serendipity on Our Free
                Platform! Discover New Friends and Vibes in Real-Time.
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[70%]">
            <div className=" flex flex-col md:flex-row gap-[50px] justify-between items-start w-full">
              <div className="max-w-[122px] flex flex-col justify-between items-start gap-4 md:gap-3">
                <h3 className="text-black text-[32px]  font-gestura font-bold">
                  Pages
                </h3>
                <ul className="flex flex-col items-start gap-2 text-left list-none">
                  <li className="text-[#333] text-[20px] font-normal pt-2">
                    <a href="#">Home it work</a>
                  </li>
                  <li className="text-[#333] text-[20px] font-normal  pt-2">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="text-[#333] text-[20px] font-normal  pt-2">
                    <a href="#">Blog</a>
                  </li>
                  <li className="text-[#333] text-[20px] font-normal  pt-2">
                    <a href="#">Demo</a>
                  </li>
                </ul>
              </div>
              <div className="max-w-[121px] flex flex-col justify-between items-start gap-4 md:gap-3">
                <h3 className="text-black text-[32px]  font-gestura font-bold">
                  Services
                </h3>
                <ul className="flex flex-col items-start gap-2 text-left list-none">
                  <li className="text-[#333] text-[20px] font-normal pt-2">
                    <a href="#">Video Calling</a>
                  </li>
                  <li className="text-[#333] text-[20px] font-normal pt-2">
                    <a href="#">Free Chat</a>
                  </li>
                  <li className="text-[#333] text-[20px] font-normal pt-2">
                    <a href="#">Interaction</a>
                  </li>
                  <li className="text-[#333] text-[20px] font-normal pt-2">
                    <a href="#">Demo</a>
                  </li>
                </ul>
              </div>
              <div className="max-w-[260px] flex flex-col justify-between items-start">
                <h3 className="text-black text-[32px] font-gestura  font-bold">
                  Contact
                </h3>
                <div className="flex flex-col items-start gap-2 text-left list-none text-[#333] text-[20px] font-normal py-[22px]">
                  <span>(406) 555-0120</span>
                  <span>mangcoding123@gmail.com</span>
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                  <div className="mt-2">
                    <div className="flex justify-between items-center w-[277px] h-[56px] border border-[#67707E] rounded-[40px] py-[10px] pr-[17px] pl-5">
                      <input
                        type="text"
                        placeholder="message..."
                        className="w-[77px] h-[18px] p-0 border-none text-[#BFBFBF] focus:outline-[#bfbfbf] text-[15px] font-normal font-Inter"
                      />
                      <a
                        className="flex justify-center items-center w-[63px] h-9 rounded-[40px] bg-[#0B78FF]"
                        href="#"
                      >
                        <img
                          src="/images/icons/lets-icons_send-duotone.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-center  mx-auto  tab:border-t  tab:border-black pt-[27px]">
          <div className="flex items-start text-[15.5px] gap-1 font-Nunito text-black font-light">
            Copyright @2023 all right reserved. if any problem read privacy
            policies
            <a className="text-[#0B78FF] font-semibold " href="#">
              privacy policy
            </a>
          </div>
          <div className="flex items-start text-[12px] text-[#9ca3af]">
            <a className="ml-8" href="#">
              <img src="/images/icons/facebook logo.svg" alt="" />
            </a>
            <a className="ml-8" href="#">
              <img src="/images/icons/Twitter logo.svg" alt="" />
            </a>
            <a className="ml-8" href="#">
              <img src="/images/icons/linkedin logo.svg" alt="" />
            </a>
            <a className="ml-8" href="#">
              <img src="/images/icons/instagram logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</>

<div className=" bg-[#333] text-white px-[22px] tab:px-[7%] md:px-[3%]">
  <div className="md:hidden mt-[42px]">
    <div className="flex justify-center items-center py-[6px] px-[17px] ">
      <div className="flex text-[10px] font-Nunito font-bold leading-[14px]">
        © Activ.click <span className="font-normal ml-1">2023 ,</span>
        <p className="font-light">Proudly Created by Shivam Thakur</p>
      </div>
    </div>
  </div>
</div>

</>

  )
}

export default Footer
