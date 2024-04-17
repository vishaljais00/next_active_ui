import React from 'react'

function Findfriend() {
  return (
    <div>

<>

<>
  {/* find-friends */}
  <section className="myclass tab:hidden md:block find-friends  tab:m-0 md:mt-[209px]">
  <div className="relative tab:hidden md:block max-w-[1240px] mx-auto tab:m-auto md:m-auto flex flex-col mt-[150px] px-[22px] tab:px-[7%] md:px-0">
    <div
      className="absolute top-[-39px] md:top-[-70px] left-[15%] md:left-[3%] flex justify-center items-center w-[100px] h-[100px] tab:w-[162px] md:h-[159px] rounded-[10px]"
      style={{
        background: "var(--white-100, #FFF)",
        boxShadow: "5px 5px 55px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src="images/icons/6-sec.icon1.svg"
          alt=""
          className="w-[39px] h-[39px] md:w-16 md:h-16"
        />
        <h5 className="text-xs md:text-lg font-Nunito font-extrabold">
          Find Friends
        </h5>
      </div>
    </div>
    <div
      className="absolute top-[-70px] right-[15%] md:top-[-70px] md:right-[344px] flex justify-center items-center w-[100px] h-[100px] md:w-[162px] md:h-[159px] rounded-[10px]"
      style={{
        background: "var(--white-100, #FFF)",
        boxShadow: "5px 5px 55px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src="images/icons/6-sec.icon_2.svg"
          alt=""
          className="w-[39px] h-[39px] md:w-16 md:h-16"
        />
        <h5 className="text-xs md:text-lg font-Nunito font-extrabold">
          Make Relation
        </h5>
      </div>
    </div>
    <div
      className="absolute top-[108px] md:top-[88px] left-[16%] md:left-[28%] flex md:flex justify-center items-center w-[100px] h-[100px] md:w-[162px] md:h-[159px] rounded-[10px]"
      style={{
        background: "var(--white-100, #FFF)",
        boxShadow: "5px 5px 55px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="flex flex-col items-center text-center gap-[3px]">
        <img
          src="images/icons/6-sec.icon-3.svg"
          alt=""
          className="w-[39px] h-[39px] md:w-16 md:h-16"
        />
        <h5 className="text-xs md:text-lg font-Nunito font-extrabold">
          Have Fun
        </h5>
      </div>
    </div>
    <div
      className="absolute top-[71px] md:top-[88px] right-[16%] md:right-[3%] flex justify-center items-center md:items-end w-[100px] h-[100px] md:w-[162px] md:h-[135px] rounded-[10px] md:pb-2"
      style={{
        background: "var(--white-100, #FFF)",
        boxShadow: "5px 5px 55px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="flex flex-col items-center text-center gap-[3px]">
        <img
          src="images/icons/6-sec.icon_4.svg"
          alt=""
          className="w-[39px] h-[39px] md:w-16 md:h-16"
        />
        <h5 className="text-xs md:text-xl font-Nunito font-extrabold">
          Search More
        </h5>
      </div>
    </div>
  </div>
</section>

  {/* form section */}
  <div className="flex flex-col tab:flex-row-reverse tab:justify-center tab:gap-20 md:gap-[149px]  items-center md:items-start md:grid grid-cols-1 md:grid-cols-2 max-w-[1240px] m-auto mt-[106px] tab:mt-0 md:mt-20 pl-[7%] pr-[10%] tab:px-[7%] md:px-0 ">
  <div
    className=" tab:hidden md:block w-[315px] tab:w-[525px] tab:h-[548px] rounded-3xl md:rounded-none"
    style={{
      background: "var(--white-100, #FFF)",
      strokeWidth: 1,
      stroke: "rgba(0, 0, 0, 0.20)",
      filter: "drop-shadow(5px 5px 250px rgba(0, 0, 0, 0.25))"
    }}
  >
    <form className="pt-[46px] pl-[30px] tab:pt-[125px]  tab:pl-28 tab:pr-[90px] mx-auto">
      <label
        htmlFor="name"
        className="block mb-0 text-[#333] font-Nunito text-sm md:text-[20px] font-bold"
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        className="block w-[92%]  tab:w-full bg-transparent p-0 border-b-[1.5px] border-t-0 border-x-0 border-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="Email"
        className="block mb-0 text-[#333] font-Nunito text-sm md:text-[20px] font-bold pt-6 md:pt-[37px]"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        className="block w-[92%]  tab:w-full bg-transparent p-0 border-b-[1.5px] border-t-0 border-x-0 border-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="message"
        className="block mb-2 text-sm md:text-[20px] font-Nunito font-bold text-[#484848] pt-4 md:pt-9"
      >
        Message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block w-[92%] tab:w-full p-0 border-b-[1.5px] border-t-0 border-x-0 bg-transparent border-black  dark:focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=""
        defaultValue={""}
      />
      <div className="flex justify-center items-center text-center pt-[22px] md:pt-[42px] mb-4 md:mb-0 mr-5">
        <button
          type="submit"
          className="w-52 h-[45px] md:w-[240px] md:h-[60px] border border-white rounded-[40px] md:rounded-[70px] bg-[#252525] text-sm md:text-2xl font-normal font-Inter text-white"
          style={{ boxShadow: "5px 5px 20px 0px rgba(0, 0, 0, 0.25)" }}
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  {/* sm,md-screen */}
  <div className="tab:hidden md:block pl-[5%] tab:pl-0 md:pl-0">
    <div className="flex justify-center flex-col tab:mt-[68px] md:mt-[130px] h-full">
      <h3 className="max-w-[480px] text-black text-[32px] tab:text-lg md:text-[32px] font-gestura tab:font-Nunito md:font-gestura font-normal pt-[55px] tab:pt-0 md:pt-0 tab:pb-0 pb-[21px] md:pb-[21px]">
        CONTACT US{" "}
      </h3>
      <span className="text-[#86A923] tab:text-black text-[20px] tab:text-[13px] md:text-[20px] md:text-[#86A923] font-Nunito font-light tab:pt-[13px] pt-0 md:pt-5">
        Reach out for support and guidan
      </span>
      <p className="md:max-w-[433px] text-[#333] text-[15px] tab:text-[11px] md:text-[20px] font-Nunito font-light left-5 tab:leading-5 md:leading-[35px] pt-[11px]">
        We'd love to hear from you! If you have any questions, suggestions, or
        just want to say hello, don't hesitate to reach out. Our dedicated team
        is here to assist you in any way we can.
      </p>
    </div>
  </div>
  {/* tabscreen */}
  <div
    className="hidden md:hidden tab:block w-[288px] h-[400px] rounded-[12px] mt-[249px] px-[22px] tab:px-0 md:px-[3%]"
    style={{
      background: "var(--white-100, #FFF)",
      boxShadow: "0px 8px 32px 15px rgba(0, 0, 0, 0.15)"
    }}
  >
    <form className=" pt-[43px] pb-3 px-[14px] mx-auto">
      <label
        htmlFor="name"
        className="block  text-black font-Nunito text-[14px] font-normal h-[15px]"
      >
        Your Name...
      </label>
      <input
        type="text"
        name="name"
        className="block  w-full bg-transparent  p-0 border-b-[1.5px] border-t-0 border-x-0 border-[#DBDBDB]  dark:focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="Email"
        className="block mb-2 text-black font-Nunito text-[14px] font-normal pt-5 h-6"
      >
        Your Email...
      </label>
      <input
        type="email"
        name="email"
        className="block  w-full bg-transparent p-0 border-b-[1.5px] border-t-0 border-x-0 border-[#DBDBDB]   dark:focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="message"
        className="block mb-2 text-black font-Nunito text-[14px] font-normal pt-[15px]"
      >
        Share Your Thoughts
      </label>
      <textarea
        id="message"
        rows={3}
        className="block w-full p-0 border-b-[1.5px] border-t-0 border-x-0 bg-transparent border-[#DBDBDB]  dark:focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=""
        defaultValue={""}
      />
      <div className="flex justify-center items-center">
        <div
          className="flex items-center justify-center w-[176px] h-16 bg-[#B3D062] rounded-xl font-Inter text-black mt-[45px]  mb-[38px]"
          style={{ boxShadow: "5px 5px 20px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <button
            type="submit"
            className="w-[170px] h-[52px] rounded-xl bg-[#F8F8F5] border border-[#DBDBDB] text-[13px] font-Nunito font-normal py-4 px-1"
          >
            SHARE YOUR FEEDBACK
          </button>
        </div>
      </div>
    </form>
  </div>
  {/* tabscreen */}
  <div className="hidden tab:block md:hidden">
    <div className="flex justify-center flex-col tab:mt-[68px] md:mt-0 h-full">
      <h3 className="max-w-[480px] text-black text-[32px] tab:text-lg md:text-[32px] font-gestura tab:font-Nunito md:font-gestura font-normal pt-[55px] tab:pt-0 md:pt-0 tab:pb-0 pb-[21px] md:pb-[21px]">
        CONTACT US{" "}
      </h3>
      <div className="w-[117px] h-[1px] bg-[#d1cbcb] mt-[7px]" />
      <span className="text-[#86A923] tab:text-black text-[20px] tab:text-[13px] md:text-[20px] md:text-[#86A923] font-Nunito font-light tab:pt-[13px] pt-0 md:pt-5">
        Reach out for support and guidan
      </span>
      <p className="tab:max-w-[297px] text-[#333] text-[15px] tab:text-[11px] md:text-[20px] font-Nunito font-light left-5 tab:leading-5 md:leading-[35px] pt-[11px]">
        We'd love to hear from you! If you have any questions, suggestions, or
        just want to say hello, don't hesitate to reach out. Our dedicated team
        is here to assist you in any way we can. Whether it's regarding our
        products, services, or any other inquiries, we are ready to provide
        prompt and helpful responses. Feel free to use the contact form below,
        or connect with us via email or phone. We look forward to connecting
        with you!
      </p>
    </div>
  </div>
</div>

</>

</>

      
    </div>
  )
}

export default Findfriend
