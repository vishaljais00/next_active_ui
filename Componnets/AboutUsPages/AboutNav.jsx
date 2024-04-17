import Link from 'next/link'
import React from 'react'

function AboutNav() {
  return (
    <div>
        <>
  {/* nav */}
  <div className="max-w-[1514px] m-auto tab:px-[7%] md:px-[10%]  w-full text-center">
  <nav className=" hidden md:block">
    <div className=" flex flex-wrap justify-between pt-[26px]">
      <div className="">
        <Link href='/'>
          <img src="images/about-active-logo.png" className="w-auto" alt="" />
        </Link>
      </div>
      <div className="w-full flex items-center md:w-auto">
        <div className=" flex">
          <div
            className="items-center hidden w-full tab:relative md:block tab:'flex' tab:w-auto tab:order-1"
            id="navbar-sticky"
          >
            <ul className="ms-auto tab:flex tab:items-center  w-full tab:w-auto tab:py-0 py-4 tab:pl-0 pl-7 tab:opacity-90 opacity-0 top-[400px] transition-all ease-in duration-500">
              <li className="my-6 md:my-0">
                <Link
                  className="text-xs text-black font-normal font-ABeeZee mr-[30px] leading-[14px]"
                  href='/aboutus'
                >
                  About us
                </Link>
              </li>
              <li className="my-6 md:my-0">
                <Link href='/TermsAndServices'
                  className="text-xs text-black font-normal font-ABeeZee mr-6 leading-[14px]"
                
                >
                  Terms or service
                </Link>
              </li>
              <li className="my-6 md:my-0">
                <Link href='/Privacy'
                  className="text-xs text-black font-normal font-ABeeZee mr-[26px] leading-[14px]"
                 
                >
                  Privacy Policy
                </Link>
              </li>
              <button
                className="w-[100px] h-8 tab:w-40 tab:h-10  rounded-lg bg-[#333]"
                style={{ boxShadow: "0px 12px 46px 0px rgba(0, 0, 0, 0.15)" }}
              >
                {" "}
                <Link href='/Avtar'
                  className="text-sm text-white font-normal font-Nunito leading-6"
                  
                >
                  GET STARTED
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>

</>

      
    </div>
  )
}

export default AboutNav
