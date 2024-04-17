import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function FeaturesNewSec() {
  return (
    <div>
     <section className="max-w-[1440px]  w-full md:mx-auto flex justify-center md:items-center  flex-col md:flex-row  gap-[21px] pt-[59px] pb-[33px] tab:pt-[18px]  tab:pb-[34px]  md:pt-[18px] md:pr-[104px] md:pb-[34px] md:pl-[70px]">
  {/* 1 */}
  <div className="flex flex-col-reverse md:flex-col w-full md:max-w-[545px] pl-[38px] pr-6 tab:pl-[57px] md:pl-0 md:mt-[-70px]">
    <div className="">
      <div className="flex justify-center items-center md:items-start md:justify-start">
        <img
          src="/images/Feedback.png"
          alt=""
          className="w-[431px] md:w-auto"
        />
      </div>
    </div>
    <div className="mt-5 ">
      <div className="flex tab:justify-center md:justify-start items-center gap-[10px]">
        <div className="w-[22px] h-[2px] rounded-[30px] bg-[#4A3AFF]" />
        <span className="text-[#4A3AFF] tab:text-center md:text-start text-lg tab:text-xl tab:tracking-[0.8pxs] font-DMSans font-bold leading-5 tracking-[0.72px] uppercase">
          Submit your feedback
        </span>
      </div>
      <h3 className="text-[#170F49] text-[28px] tab:max-w-[490px] md:max-w-[544px] tab:text-3xl tab:font-bold tab:leading-[42px] py-[18px] md:text-[50px]  font-DMSans font-semibold leading-9  md:leading-[62px]">
        Fill the form to submit your feedback
      </h3>
      <p className="text-[#6F6C90] text-sm tab:text-base md:text-lg tab:max-w-[346px] font-DMSans font-normal leading-[30px] ">
        Your feedback is instrumental in shaping and enhancing the Activ
        experience for you and our entire community.
      </p>
    </div>
  </div>
  {/* 2 */}
  <div className="px-[30px] tab:px-[90px] md:px-0">
    <div
      className="md:max-w-[660px] w-full bg-white"
      style={{
        boxShadow:
          "0px 98px 66px 0px rgba(19, 18, 66, 0.02), 1px 4px 104px 0px rgba(20, 20, 43, 0.04), 0px 54px 54px 0px rgba(74, 58, 255, 0.02)"
      }}
    >
      <form className="py-[55px] pl-[19px] pr-[9px] tab:px-[60px] tab:pt-[31px] tab:pb-5 md:pt-[70px] md:py-[76px] md:px-12">
        {/* name */}
        <div className="flex flex-col gap-11 ">
          <div className="flex flex-col md:flex-row gap-[22px] pr-[107px] tab:pr-[76px] md:pr-0">
            <div className="relative group">
              <label
                htmlFor="name"
                className="block  text-[#170F49] text-sm tab:text-lg font-DMSans font-bold leading-5 mb-[18px]"
              >
                Name
              </label>
              <div className=" absolute inset-[83px] start-[226px] tab:inset-[22px] tab:start-[223px] flex items-end">
              <FontAwesomeIcon
                icon={faUser}
                className="hidden md:block fa-regular fa-envelope text-[23px] text-[#A0A3BD] group-hover:text-[#4A3AFF]"
                />
              </div>
              <input
                type="text"
                name="floating_first_name"
                id="name"
                className="block text-base tab:text-lg font-DMSans font-medium leading-[30px] pl-5 pr-5 tab:pr-12 border border-[#EFF0F6] rounded-[46px] w-full h-11 tab:h-[66px] md:w-auto  md:h-[66px]  focus:border-2  dark:focus:border-[#4A3AFF]  focus:placeholder-[#4A3AFF] focus:outline-none focus:ring-0"
                style={{ boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)" }}
                placeholder="John Carter"
                required=""
              />
            </div>
            {/* email */}
            <div className="relative group">
              <label
                htmlFor="email"
                className="block  text-[#170F49] text-sm tab:text-lg font-DMSans font-bold leading-5 mb-[18px]"
              >
                Email
              </label>
              <div className="absolute inset-[22px] start-[223px] flex items-end">
              <FontAwesomeIcon
icon={faEnvelope}
className="hidden md:block fa-regular fa-envelope text-[23px] text-[#A0A3BD] group-hover:text-[#4A3AFF]"
/>
              </div>
              <input
                type="email"
                id="email"
                className=" text-base tab:text-lg font-DMSans font-medium leading-[30px] pl-5 pr-5 tab:pr-12 border border-[#EFF0F6] rounded-[46px] w-full h-11  tab:h-[66px] md:w-auto md:h-[66px] focus:border-2  dark:focus:border-[#4A3AFF] focus:placeholder-[#4A3AFF] focus:outline-none focus:ring-0"
                style={{ boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)" }}
                placeholder="Email address"
                required=""
              />
            </div>
          </div>
          {/* phone*/}
          <div className="flex flex-col md:flex-row gap-[22px] pr-[107px] tab:pr-[76px] md:pr-0">
            <div className="relative group">
              <label
                htmlFor="phone"
                className="block  text-[#170F49] text-sm tab:text-lg font-DMSans font-bold leading-5 mb-4"
              >
                Phone Number
              </label>
              <div className="absolute inset-[22px] tab:start-[312px] md:start-[223px] start-[223px] flex items-end">
              <FontAwesomeIcon
icon={faMobileAlt}
className="hidden md:block fa-regular fa-envelope text-[23px] text-[#A0A3BD] group-hover:text-[#4A3AFF]"
/>
             

              </div>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block text-base tab:text-lg font-DMSans font-medium leading-[30px] pl-5 pr-5 tab:pr-12 border border-[#EFF0F6] rounded-[46px] w-full h-11 tab:h-[66px] md:w-auto  md:h-[66px] focus:border-2  dark:focus:border-[#4A3AFF] focus:placeholder-[#4A3AFF] focus:outline-none focus:ring-0"
                style={{ boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)" }}
                placeholder="(123) 456-7890 "
                required=""
              />
            </div>
            {/* company*/}
            <div className="relative group">
              <label
                htmlFor="company"
                className="block  text-[#170F49] text-sm tab:text-lg font-DMSans font-bold leading-5 mb-4"
              >
                Company
              </label>
              <div className="absolute inset-[22px] start-[223px] flex items-end">
              <FontAwesomeIcon
                icon={faBuilding}
                className="hidden md:block fa-regular fa-envelope text-[23px] text-[#A0A3BD] group-hover:text-[#4A3AFF]"
                />
              </div>
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block text-base tab:text-lg font-DMSans font-medium leading-[30px] pl-5 pr-5 tab:pr-12 border border-[#EFF0F6] rounded-[46px] w-full h-11  tab:h-[66px] md:w-auto  md:h-[66px] focus:border-2  dark:focus:border-[#4A3AFF] focus:placeholder-[#4A3AFF] focus:outline-none focus:ring-0"
                style={{ boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)" }}
                placeholder="Company name"
                required=""
              />
            </div>
          </div>
        </div>
        {/* rating */}
        <div className="flex flex-col gap-[33px] pt-[38px]">
          <div className="">
            <div className="">
              <h5 className="text-[#170F49] text-lg tab:text-xl md:text-lg font-DMSans font-bold leading-5">
                Your service rating
              </h5>
            </div>
            <div className="mt-5">
           
                  <FontAwesomeIcon
                  icon={solidStar}
                  className="text-5xl text-[#FFD029]"
                  />
                  <FontAwesomeIcon
                  icon={solidStar}
                  className="text-5xl text-[#FFD029]"
                  />
                  <FontAwesomeIcon
                  icon={solidStar}
                  className="text-5xl text-[#FFD029]"
                  />
                  <FontAwesomeIcon
                  icon={regularStar}
                  className="text-5xl text-[#EFF0F7]"
                  />
                  <FontAwesomeIcon
                  icon={regularStar}
                  className="text-5xl text-[#EFF0F7]"
                  />
            </div>
          </div>
          {/* feedback */}
          <div className="pr-2 tab:pr-[14px] md:pr-0">
            <label
              htmlFor="message"
              className="block text-[#170F49] text-sm tab:text-lg font-DMSans font-bold leading-5 mb-[17px]"
            >
              Additional feedback
            </label>
            <textarea
              id="message"
              rows={4}
              className="block text-sm tab:text-lg font-DMSans font-medium leading-[30px] border border-[#EFF0F6] rounded-[20px] w-full tab:h-[168px] pt-7 pl-5 pr-11 focus:border-2  dark:focus:border-[#4A3AFF] focus:placeholder-[#4A3AFF] focus:outline-none focus:ring-0"
              placeholder="If you have any additional feedback, please type it in here..."
              style={{ boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)" }}
              defaultValue={""}
            />
          </div>
        </div>
        {/* checkbox */}
        <div className="flex items-start mt-[23px] mb-7">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-[21px] h-[21px] bg-white border border-[#D9DBE9] rounded"
              style={{
                boxShadow: "0px -3px 7px 0px rgba(31, 29, 121, 0.10) inset"
              }}
              required=""
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-3 text-[#6F6C90] text-sm tab:text-sm font-DMSans font-normal leading-5 tracking-[0.28px] "
          >
            I have read and accept the Privacy Policy.
          </label>
        </div>
        {/* submit */}
        <div className="text-center md:text-start">
          <button
            type="submit"
            className="w-[170px] h-[55px] tab:w-[250px] tab:h-[76px] rounded-[86px] bg-[#4A3AFF] hover:bg-[#0c68d8]  text-white  text-sm tab:text-lg font-DMSans font-bold leading-5"
            style={{ boxShadow: "0px 8px 22px 0px rgba(74, 58, 255, 0.26)" }}
          >
            Submit feedback
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

    </div>
  );
}

export default FeaturesNewSec;








