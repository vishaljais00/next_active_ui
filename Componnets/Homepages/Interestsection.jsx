import { useRouter } from 'next/router';
import React from 'react'

function Interestsection() {

const router = useRouter()
  const handleButtonClick = () => {
    router.push('/Avtar');
  };
  return (
    <div>
      <>
 
      <>
  {/* interst */}
  <section className="interst">
  <div className="">
    <div className="flex flex-wrap flex-col items-center tab:items-start md:items-start tab:grid md:grid tab:place-items-center md:place-items-center tab:grid-cols-2 md:grid-cols-2 gap-[30px]  max-w-[1240px] mx-auto tab:m-auto md:m-auto pt-[37px] tab:pt-[185px]  md:pt-[261px] px-[22px] tab:px-[7%] md:px-0">
      <div className="">
        <div className="stranger-img">
          <img
            src="images/img-4.png"
            alt=""
            className="tab:w-[312px] tab:h-[260px] md:w-auto md:h-auto"
          />
        </div>
      </div>
      <div className="">
        <div className="interst-text">
          <h3 className="text-[#010101] text-2xl tab:text-xl md:text-[32px] font-gestura font-bold">
            FIND WITH YOUR INTEREST
          </h3>
          <h4 className="max-w-[563px] text-[#333] text-sm tab:text-[11px] md:text-[19px] font-Nunito font-semibold tab:font-normal  leading-6  tab:leading-[27px] md:leading-[38px] pt-3 tab:pl-[5px] md:pl-0 md:pt-[31px]">
            Connect Seamlessly: Uncover Perfect Matches Based on Your Shared
            Interests with Our Chat &amp; Video Meet Platform!
          </h4>
          <p className="max-w-[521px] text-[#3E3E3E] md:text-[#484848]  text-xs  tab:text-[8.5px] tab:pl-[5px] md:pl-0 md:text-[15.5px] font-Nunito font-light leading-5 tab:leading-[18px] md:leading-6 pt-[14px] md:pt-5">
            You can discover like-minded individuals to chat and video meet,
            perfectly matching your vibe! With our unique feature, "Find with
            Your Interest," connecting with others who share your passions and
            activities has never been easier. Whether you're into sports, art,
            gaming, or any niche interest, we've got you covered. Embrace
            meaningful connections and unlock a world of exciting conversations.
            Your perfect match is just a click away!
          </p>
          <div className="pt-5 tab:pt-[10px] tab:pl-[5px] md:pl-0 md:pt-5 text-center tab:text-left">
            <button className="w-[120px] h-10 tab:w-[99px] tab:h-[33px] md:w-[160px] md:h-12 rounded-[5px] bg-[#333] text-white font-Inter text-[13px] tab:text-[8px] md:text-[15px] font-normal leading-[14px] text-center opacity-90 tab:opacity-100 md:opacity-100">
              FIND INTEREST
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

</>

  <>
  <>
  {/* video-calling */}
  <section className="video-calling">
  <div className="">
    <div className="max-w-[1520px] flex  flex-col-reverse items-center mx-auto tab:items-start md:items-start tab:grid md:grid tab:grid-cols-2 md:grid-cols-2 tab:place-items-end md:place-items-end   pt-[86px] tab:pt-[156px] md:pt-[275px]">
      <div className=" md:mb-[72px] pl-[10%] md:px-[3%] tab:mr-[-27px] md:mr-0 md:mt-[-27px]">
        <div className="video-content pt-11 ml-[-8px]  tab:ml-[-32px] md:ml-0 tab:pt-0 md:pt-0">
          <div className="text-[#C6436E] text-[15px] tab:text-sm md:text-[20px] font-medium tab:font-normal font-Nunito  md:ml-[-12px]">
            Enjoy Peace of Mind
          </div>
          <h3 className="text-black text-2xl tab:text-[23px] md:text-[40px] font-gestura font-semibold  tab:font-normal pt-0 tab:pt-0 md:pt-[9px]">
            A Safeguarded Video Calling Platform
          </h3>
        </div>
        <div className="flex flex-wrap flex-col gap-[11px] tab:gap-[10px] md:gap-12 pt-[43px] tab:pt-[41px] md:pt-[66px]">
          <div className="flex" style={{ display: "-webkit-box" }}>
            <div className="flex flex-wrap justify-center items-center w-7  h-7 tab:w-[30px] tab:h-[25px]  md:w-[43px] md:h-[43px] rounded-[10px] bg-[#F1487F] text-white">
              <img
                src="images/icons/end-to-end.svg"
                alt=""
                className="w-[18px] h-[18px] tab:w-5 tab:h-[17px] md:w-[27px] md:h-[27px]"
              />
            </div>
            <div className="ml-4 tab:ml-5">
              <h4 className="text-black font-Nunito text-[15px] tab:text-[17px] md:text-[20px] font-bold">
                End-to-End Encryption
              </h4>
              <p className="max-w-[234px] tab:max-w-[308px] md:max-w-[469px]  text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px] md:text-sm font-normal pt-1 tab:pt-0 md:pt-0">
                Ensure that all video calls are private and secure with
                state-of-the-art end-to-end encryption, protecting your
                conversations from prying eyes.
              </p>
            </div>
          </div>
          <div
            className="flex tab:mt-[5px] md:mt-0"
            style={{ display: "-webkit-box" }}
          >
            <div className="flex flex-wrap justify-center items-center w-7  h-7 tab:w-[30px] tab:h-[25px]  md:w-[43px] md:h-[43px] rounded-[10px] bg-[#F1487F] text-white">
              <img
                src="images/icons/end-to-end.svg"
                alt=""
                className="w-[18px] h-[18px] tab:w-5 tab:h-[17px] md:w-[27px] md:h-[27px]"
              />
            </div>
            <div className="ml-4 tab:ml-5">
              {/* tab */}
              <h4 className="hidden tab:block md:hidden text-black font-Nunito text-[15px] tab:text-[17px] md:text-[20px] font-bold">
                Real-Time Messaging:
              </h4>
              <p className="hidden tab:block md:hidden tab:max-w-[308px]  ipad:max-w-[404px] md:max-w-[469px] text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px] md:text-sm font-normal">
                Provide instant messaging capabilities, allowing users to send
                text, multimedia messages, and emoticons in real time.
              </p>
              {/* md */}
              <h4 className="tab:hidden md:block text-black font-Nunito text-[15px] tab:text-[15px] md:text-[20px] font-bold">
                End-to-End Encryption
              </h4>
              <p className="tab:hidden md:block max-w-[234px] tab:max-w-[308px]  ipad:max-w-[404px] md:max-w-[469px] text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px] md:text-sm font-normal pt-1 tab:pt-0 md:pt-0">
                Ensure that all video calls are private and secure with
                state-of-the-art end-to-end encryption, protecting your
                conversations from prying eyes.
              </p>
            </div>
          </div>
          <div
            className="flex tab:mt-[5px] md:mt-0"
            style={{ display: "-webkit-box" }}
          >
            <div className="flex flex-wrap justify-center items-center w-7  h-7 tab:w-[30px] tab:h-[25px]  md:w-[43px] md:h-[43px] rounded-[10px] bg-[#F1487F] text-white">
              <img
                src="images/icons/end-to-end.svg"
                alt=""
                className="w-[18px] h-[18px] tab:w-5 tab:h-[17px] md:w-[27px] md:h-[27px]"
              />
            </div>
            <div className="ml-4 tab:ml-5">
              {/* tab */}
              <h4 className="hidden tab:block md:hidden text-black font-Nunito text-[15px] tab:text-[17px] md:text-[20px] font-bold">
                Group Chats:
              </h4>
              <p className="hidden tab:block md:hidden tab:max-w-[308px]  ipad:max-w-[404px] md:max-w-[469px] text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px]  md:text-sm font-normal">
                Support group conversations, allowing multiple users to
                participate in a single chat thread.
              </p>
              {/* md */}
              <h4
                className="tab:hidden md:block
                                   text-black font-Nunito text-[15px] tab:text-[15px] md:text-[20px] font-bold"
              >
                End-to-End Encryption
              </h4>
              <p
                className="tab:hidden md:block max-w-[234px]
                                   tab:max-w-[308px]  ipad:max-w-[404px] md:max-w-[469px] text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px] tab:text-[11px]  md:text-sm font-normal pt-1 tab:pt-0 md:pt-0"
              >
                Ensure that all video calls are private and secure with
                state-of-the-art end-to-end encryption, protecting your
                conversations from prying eyes.
              </p>
            </div>
          </div>
          <div
            className="flex tab:mt-2 md:mt-0"
            style={{ display: "-webkit-box" }}
          >
            <div className="flex flex-wrap justify-center items-center w-7  h-7 tab:w-[30px] tab:h-[25px]  md:w-[43px] md:h-[43px] rounded-[10px] bg-[#F1487F] text-white">
              <img
                src="images/icons/end-to-end.svg"
                alt=""
                className="w-[18px] h-[18px] tab:w-5 tab:h-[17px] md:w-[27px] md:h-[27px]"
              />
            </div>
            <div className="ml-4 tab:ml-5">
              {/* tab */}
              <h4 className="hidden tab:block md:hidden text-black font-Nunito text-[15px] tab:text-[17px] md:text-[20px] font-bold">
                Cross-Platform Compatibility:
              </h4>
              <p className="hidden tab:block md:hidden tab:max-w-[308px]  ipad:max-w-[404px] md:max-w-[469px] text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px]  md:text-sm font-normal">
                Ensure the application works seamlessly across various devices
                and platforms, including web, mobile, and desktop.
              </p>
              {/* md */}
              <h4
                className="tab:hidden md:block
                               text-black font-Nunito text-[15px] tab:text-[15px] md:text-[20px] font-bold"
              >
                End-to-End Encryption
              </h4>
              <p
                className="tab:hidden md:block max-w-[234px]
                               tab:max-w-[308px]  ipad:max-w-[404px] md:max-w-[469px] text-[#6D6D6D] md:text-[#333] font-Nunito text-[10px]  md:text-sm font-normal pt-1 tab:pt-0 md:pt-0"
              >
                Ensure that all video calls are private and secure with
                state-of-the-art end-to-end encryption, protecting your
                conversations from prying eyes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-end">
          <img
            src="images/video-calling-..png"
            alt=""
            className="tab:w-[307px] tab:h-[387px] md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>

</>

</>

</>

    </div>
  )
}

export default Interestsection
