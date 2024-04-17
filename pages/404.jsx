// pages/404.js
import Link from 'next/link';
import React from 'react';

function Custom404() {
  return (
    <div>
<section className="max-w-[1440px]  h-screen  m-auto  flex justify-center items-center px-0 tab:px-0">
  <div
    className="w-[360px] tab:w-[730px] ipad:w-[864px] md:w-[925px] h-[254px] tab:h-[45vh] md:h-[661px] mt-[30px] md:mt-0 bg-no-repeat bg-cover"
    style={{ backgroundImage: "url(/images/Oopsbgback.png)" }}
  >
    <div className="flex flex-col gap-20 ipad:gap-[8rem] md:gap-[18px] justify-center items-center  mt-[-40px] md:mt-0 md:h-[602px]">
      <div className="text-black text-center mt-[-68px] md:mt-[-45px]">
        <h5 className="text-5xl tab:text-[64px] font-Nunito font-extrabold italic md:mt-[-130px] mb-2 tab:mb-[55px] md:mb-[19px]">
          Oops!
        </h5>
        <span className="text-lg tab:text-2xl font-Nunito font-bold">
          Welcome to 70's
        </span>
      </div>
      <img
        src="/images/Oops!.png"
        alt=""
        className="w-56 tab:w-[456px] md:w-[527px]"
      />
    </div>
    <div className="flex flex-col justify-center items-center mt-[148px]  tab:mt-44 ipad:mt-[16rem] md:mt-0">
      <div className="max-w-[148px] tab:max-w-[317px]  flex gap-2 items-center ">
        <img
          src="/images/icons/go-home.svg"
          alt=""
          className=" tab:w-[78px] tab:h-16"
        />
        <a
          href="#"
          className="contents w-24 h-[29px] text-lg tab:text-[26px] font-Nunito font-normal capitalize text-black"
        >
          go home
        </a>
      </div>
      <div className="w-[124px] md:w-[184px]   tab:w-[272px] ipad:w-[184px] ipad:ml-6 tab:ml-28 md:ml-[18px] h-[2px] bg-black" />
    </div>
  </div>
</section>




    </div>
  );
}

export default Custom404;
