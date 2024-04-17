import Link from "next/link";
import React from "react";

function Navbar() {

  function RouteHome(){
    console.log("bjs")
    


  }
  return (
    <div>
      <div className="max-w-[1270px] m-auto   text-center px-[22px] tab:px-[4%] md:px-[3%]">
        <nav className="">
          <div className="flex flex-wrap justify-between pt-[13px] tab:pt-0 w-full h-[100px]">
            <div className="tab:flex tab:justify-center tab:items-center md:flex md:flex-col md:justify-end md:items-end">
              <Link href='/'>
                <img
                  src="images/logo(1).png"
                  className="w-[89px] h-[33px] tab:w-[135px] tab:h-12"
                  alt=""
                />
              </Link>
            </div>
            <div className=" flex tab:justify-end tab:items-end md:justify-start md:items-start tab:pt-[18px] md:w-auto">
              <div className=" flex">
                <div
                  className="items-center hidden w-full tab:relative md:block tab:block tab:w-auto tab:order-1"
                  id="navbar-sticky"
                >
                  <ul className="ms-auto tab:flex tab:items-center bg-white w-full tab:w-auto tab:py-0 py-4 tab:pl-0 pl-7 tab:opacity-90 opacity-0 top-[400px] transition-all ease-in duration-500">
                    <li className="my-6 md:my-0">
                      <Link href='/Aboutpage'
                        className="text-xs text-black font-ABeeZee font-light mr-[30px] leading-[14px]"
                        
                      >
                        About us
                      </Link>
                    </li>
                    <li className="my-6 md:my-0">
                      <Link href='/TermsAndServices'
                        className="text-xs text-black font-ABeeZee font-light mr-6 leading-[14px]"
                        
                      >
                        Terms or service
                      </Link>
                    </li>
                    <li className="my-6 md:my-0">
                      <Link href='/Privacy'
                        className="text-xs text-black font-ABeeZee font-light mr-6 leading-[14px]"
                        
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <button
                      className="block tab:w-[108px] md:w-40 h-8 md:h-10   rounded-lg bg-[#D0F46C]"
                      style={{ boxShadow: "0px 12px 46px 0px rgba(0, 0, 0, 0.15)" }}
                    >
                      {" "}
                      <Link href='/Avtar'
                        className="tab:text-xs md:text-sm text-[#333] font-Nunito font-normal  leading-6"
                        
                      >
                        GET STARTED
                      </Link>
                    </button>
                  </ul>
                </div>
              </div>
              <div className="">
                <button
                  className="block tab:hidden w-[100px] h-8   rounded-lg bg-[#D0F46C]"
                  style={{ boxShadow: "0px 12px 46px 0px rgba(0, 0, 0, 0.15)" }}
                >
                  {" "}
                  <Link href="/Avtar"
                    className="text-[11px] text-[#333] font-normal  leading-6"
                  >
                    GET STARTED
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
