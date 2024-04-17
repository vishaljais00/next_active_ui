import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function handleRedirect() {
  window.location.href = "/Connnet_Call";
}

function IntSec() {
  return (
    <div>
   <section className="max-w-[1440px] h-screen flex items-center m-auto">
  <div className="hidden md:block px-[22px] max-w-[870px] mx-auto  flex-col gap-[45px]">
    <div className="flex flex-col justify-center items-center gap-5 text-black text-center">
      <h3 className="text-3xl tab:text-5xl font-Nunito font-bold capitalize">
        Choose Your Interest
      </h3>
      <span className="text-sm tab:text-xl font-Nunito">
        🎮🌿Discover Your Passion in the Land of Hobbies! 🌟🎨
      </span>
    </div>
    <div className="flex flex-col gap-3 font-Nunito mt-[45px]">
      {/* checkbox */}
      <ul className="flex flex-wrap justify-center items-center gap-3">
        {/* 1 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox1" className="hidden" />
          <label
            htmlFor="myCheckbox1"
            className="
             w-[157px] tab:w-[208px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[157px] tab:before:w-[208px] before:h-12 before:duration-[.4s] before:scale-0"
          >
           <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Adventure Seeker 🌍
            </span>
          </label>
        </li>
        {/* 2 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox2" className="hidden" />
          <label
            htmlFor="myCheckbox2"
            className="
            w-[148px] tab:w-[197px] h-12 relative flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[148px] tab:before:w-[197px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Bookworm Bliss 📚
            </span>
          </label>
        </li>
        {/* 3*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox3" className="hidden" />
          <label
            htmlFor="myCheckbox3"
            className="
                w-[165px] tab:w-[218px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[165px] tab:before:w-[218px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Mindfulness Maven 🧘‍♂️
            </span>
          </label>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-3">
        {/* 1 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox4" className="hidden" />
          <label
            htmlFor="myCheckbox4"
            className="
            w-[150px] tab:w-[195px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[150px] tab:before:w-[195px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Tech Enthusiast 💻
            </span>
          </label>
        </li>
        {/* 2 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox5" className="hidden" />
          <label
            htmlFor="myCheckbox5"
            className="
            w-[145px] tab:w-[188px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[145px] tab:before:w-[188px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Fitness Fanatic 💪
            </span>
          </label>
        </li>
        {/* 3*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox6" className="hidden" />
          <label
            htmlFor="myCheckbox6"
            className="
                w-[155px] tab:w-[204px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[155px] tab:before:w-[204px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Culinary Explorer 🍲
            </span>
          </label>
        </li>
        {/* 4*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox7" className="hidden" />
          <label
            htmlFor="myCheckbox7"
            className="
                w-[140px] tab:w-[184px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[140px] tab:before:w-[184px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Music Maestro 🎵
            </span>
          </label>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-3">
        {/* 1 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox8" className="hidden" />
          <label
            htmlFor="myCheckbox8"
            className="
            w-[134px] tab:w-[177px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[134px] tab:before:w-[177px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Gaming Guru 🎮
            </span>
          </label>
        </li>
        {/* 2 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox9" className="hidden" />
          <label
            htmlFor="myCheckbox9"
            className="
            w-[146px] tab:w-[196px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[146px] tab:before:w-[196px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Nature Nurturer 🌱
            </span>
          </label>
        </li>
        {/* 3*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox10" className="hidden" />
          <label
            htmlFor="myCheckbox10"
            className="
                w-32 tab:w-[168px] h-12 relative  flex justify-center items-center gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-32 tab:before:w-[168px] before:h-12 before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                icon={faPlus}
                className="text-[#484848] text-xs tab:text-lg mr-[2px]"
              />
            <span className="text-sm tab:text-[17px] font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
              Artistic Soul 🎨
            </span>
          </label>
        </li>
      </ul>
    </div>
    <div className="flex justify-center items-center mt-10">
      <button className="w-[145px] h-[46px] border rounded-[35px] bg-[#0E7AFF] hover:bg-[#0c68d8] text-white">
        <p onClick={handleRedirect} className="text-lg font-Nunito font-extrabold">
          Next
        </p>
      </button>
    </div>
  </div>
  <div className=" md:hidden px-[10px] tab:px-[22px] max-w-[660px] mx-auto flex flex-col items-center gap-7">
    <div className="max-w-[267px] tab:max-w-[279px] flex justify-center items-center gap-[26px] rounded-[30px]  bg-white">
      <div className="active border-[7px] border-[#0B78FF] rounded-[279px]">
        <img
          src="/images/avatar_Three.png"
          alt=""
          className="w-40 h-40 tab:w-[246px] tab:h-[246px] rounded-full"
        />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-[17px] text-black text-center tab:mt-[5px]">
      <h3 className="text-2xl tab:text-[28px] font-Nunito font-normal">
        Choose your interest
      </h3>
      <span className="text-sm tab:text-[19px] font-normal font-Nunito max-w-[480px]">
        {" "}
        Tailor your experience and connect with like-minded individuals by
        selecting your interests below.
      </span>
    </div>
    <div className="tab:max-w-[586px] flex flex-col gap-3 font-Nunito mt-[5px] tab:mt-[10px]">
      {/* checkbox */}
      <ul className="flex flex-wrap justify-center items-center gap-[7px] tab:gap-3">
        {/* 1 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox1" className="hidden" />
          <label
            htmlFor="myCheckbox1"
            className="
            py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border-[0.621px] tab:border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[6.214px] tab:before:rounded-[10px]  tab:before:w-[208px]  tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Adventure Seeker 🌍
            </span>
          </label>
        </li>
        {/* 2 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox2" className="hidden" />
          <label
            htmlFor="myCheckbox2"
            className="
            py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[197px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Bookworm Bliss 📚
            </span>
          </label>
        </li>
        {/* 3*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox3" className="hidden" />
          <label
            htmlFor="myCheckbox3"
            className="
                py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0  before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[218px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Mindfulness Maven 🧘‍♂️
            </span>
          </label>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-[7px] tab:gap-3">
        {/* 1 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox4" className="hidden" />
          <label
            htmlFor="myCheckbox4"
            className="
            py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0  before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[195px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Tech Enthusiast 💻
            </span>
          </label>
        </li>
        {/* 2 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox5" className="hidden" />
          <label
            htmlFor="myCheckbox5"
            className="
            py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0  before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[188px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Fitness Fanatic 💪
            </span>
          </label>
        </li>
        {/* 3*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox6" className="hidden" />
          <label
            htmlFor="myCheckbox6"
            className="
                py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0   before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[204px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Culinary Explorer 🍲
            </span>
          </label>
        </li>
        {/* 4*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox7" className="hidden" />
          <label
            htmlFor="myCheckbox7"
            className="
                py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0   before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[184px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Music Maestro 🎵
            </span>
          </label>
        </li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center gap-[7px] tab:gap-3">
        {/* 1 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox8" className="hidden" />
          <label
            htmlFor="myCheckbox8"
            className="
            py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0  before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[177px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Gaming Guru 🎮
            </span>
          </label>
        </li>
        {/* 2 */}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox9" className="hidden" />
          <label
            htmlFor="myCheckbox9"
            className="
            py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0  before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:w-[196px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Nature Nurturer 🌱
            </span>
          </label>
        </li>
        {/* 3*/}
        <li className="inline-block">
          <input type="checkbox" id="myCheckbox10" className="hidden" />
          <label
            htmlFor="myCheckbox10"
            className="
      py-[8.0278px] px-[12.427px] tab:px-5 tab:py-[13px] relative  flex justify-center items-center gap-[6.214px] tab:gap-[7px] z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[6.214px] tab:rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0   before:w-32 before:rounded-[6.214px] tab:before:rounded-[10px] tab:before:h-12 before:py-[8.0278px] before:px-[12.427px] before:duration-[.4s] before:scale-0"
          >
            {" "}
             <FontAwesomeIcon
                    icon={faPlus}
                    className="text-[#484848] text-xs tab:text-lg mr-[2px]"
                  />
            <span className="text-[10.563px] tab:text-[17px] font-semibold leading-[13.67px] tab:leading-[22px]  tab:tracking-[-0.408px] z-[-1]">
              Artistic Soul 🎨
            </span>
          </label>
        </li>
      </ul>
    </div>
    <div className="flex justify-center items-center">
      <button className="w-32 h-[38px] tab:w-[150px] tab:h-12 border rounded-[35px] bg-[#0E7AFF] hover:bg-[#0c68d8] text-white">
        <p onClick={handleRedirect} className="text-sm tab:text-lg font-Nunito font-extrabold">
          Next
        </p>
      </button>
    </div>
  </div>
</section>

    </div>
  );
}

export default IntSec;
