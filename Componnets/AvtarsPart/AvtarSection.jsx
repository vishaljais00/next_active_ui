import React, { useEffect } from "react";
// import $ from 'jquery';
import dynamic from "next/dynamic";
const MySlider = dynamic(
  () => import("./Myslider"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
  { ssr: false }
);

function AvtarSection() {
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   // Your client-side code here
    // }
  }, []); // Run the effect only once when the component mounts
  return (
    <div>
      <section className="max-w-[1440px] m-auto mt-[100px] ">
      <div className="flex flex-col gap-5 mb-7">
  <div className="flex flex-col justify-center items-center tab:gap-5 text-black text-center">
    <h3 className="text-[40px] tab:text-5xl font-Nunito font-medium md:font-bold capitalize">
      Select Your Avatar
    </h3>
    <div className="hidden tab:block md:hidden">
      <div className="flex gap-[11px] mt-[30px] mb-[50px]">
        <p
          className="text-[#333] font-Nunito text-[32px] font-light"
          style={{
            background:
              "linear-gradient(90deg, #333 0%, rgba(0, 0, 0, 0.00) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Category
        </p>
        <p className="text-[#333] font-Nunito text-[32px] font-light">
          Category
        </p>
        <p
          className="text-[#333] font-Nunito text-[32px] font-light"
          style={{
            background:
              "linear-gradient(90deg, #333 0%, rgba(0, 0, 0, 0.00) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Category
        </p>
      </div>
    </div>
    <span className="tab:block  md:hidden text-xl tab:text-2xl font-Nunito font-medium mb-[40px] md:mb-5">
      Choose from these variants
    </span>
    <span className="hidden md:block text-sm tab:text-xl font-Nunito">
      😉🌈 Your Avatar Should Reflect Your Inner beauty ✨
    </span>
  </div>
</div>

        {/* slider */}
        <MySlider />
      </section>
    </div>
  );
}

export default AvtarSection;
