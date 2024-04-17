import Link from "next/link";
import React from "react";

function PrivacyNav() {
  return (
    <div>
    <div className="max-w-[1138px] m-auto px-[35px] tab:px-[7%] md:px-[3%] w-full text-center">
  <nav className=" hidden md:block">
    <div className=" flex flex-wrap justify-between pt-[26px]">
      <div className="">
        <Link href='/'>
          <img src="images/logo(1).png" className="w-auto" alt="" />
        </Link>
      </div>
      <div className="w-full flex items-center md:w-auto">
        <div className=" flex">
          <div
            className="items-center hidden w-full tab:relative md:block tab:'flex' tab:w-auto tab:order-1"
            id="navbar-sticky"
          >
            <ul className="ms-auto tab:flex tab:items-center bg-white w-full tab:w-auto tab:py-0 py-4 tab:pl-0 pl-7 tab:opacity-90 opacity-0 top-[400px] transition-all ease-in duration-500">
              <li className="my-6 md:my-0">
                <Link href='/TermsAndServices'
                  className="text-xs text-black font-light font-Nunito mr-6 leading-[14px]"
                 
                >
                  Terms or service
                </Link>
              </li>
              <li className="my-6 md:my-0">
                <Link href='/Privacy'
                  className="text-xs text-black font-extrabold font-Nunito mr-[26px] leading-[14px]"
                 
                >
                  Privacy Policy
                </Link>
              </li>
              <button className="w-[160px] h-10 tab:w-40 tab:h-10  rounded-lg bg-[#F8F8F5]">
                {" "}
                
                <Link href='/Avtar'
                  className="text-sm text-[#333] font-normal font-Nunito leading-6"
                 
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

    </div>
  );
}

export default PrivacyNav;
