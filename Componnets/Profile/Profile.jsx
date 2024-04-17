import React from 'react'

function Profile() {
  return (
    <div>
 <section className="max-w-[436px] tab:max-w-[691px]  tab:pt-0 tab:pb-0 md:max-w-[1440px] h-screen mx-auto px-[10px] flex justify-center  items-center bg-white  relative">
  <div className="flex flex-col items-center gap-[9px]">
    <div className="bg-[#0B78FF] p-[3px] w-[203px] tab:w-[331px] h-[203px]  tab:h-[331px] rounded-[50%]">
      <img
        src="/images/avatar_Three.png"
        alt=""
        className="object-cover rounded-[50%] border-[7px] border-white"
      />
    </div>
    <div className="text-center mt-2 tab:mt-10 md:mt-[18px]">
      <div className="max-w-[314px] tab:max-w-[737px] flex flex-col items-center gap-[54px] tab:gap-10">
        <div className="max-w-[436px] h-20  flex flex-col justify-center items-center text-center">
          <h4 className="text-[#3C3C3C] text-[40px] tab:text-[63.394px] md:text-[64px] font-Nunito font-medium">
            James Bruno
          </h4>
          <div className="text-[#3E3838] text-[32px] tab:text-[50.716px] md:text-[40px] font-Nunito font-medium">
            User12456
          </div>
        </div>
        <div className="flex flex-wrap justify-center  gap-6 tab:gap-10 tab:mt-[50px]">
          <div className="flex gap-5 tab:gap-10">
            <div className="flex flex-col tab:gap-4 font-Nunito text-black">
              <span className="text-base tab:text-[25.358px] md:text-[40px] font-normal">
                4586
              </span>
              <span className="text-sm tab:text-[22.188px] md:text-[32px] font-medium">
                Interaction
              </span>
            </div>
            <div className="flex order-3 md:order-none   flex-col tab:gap-4 font-Nunito text-black">
              <span className="text-base tab:text-[25.358px] md:text-[40px] font-normal">
                124
              </span>
              <span className="text-sm tab:text-[22.188px] md:text-[32px] font-medium">
                Friends
              </span>
            </div>
            <div className="flex order-4 md:order-none   flex-col tab:gap-4 font-Nunito text-black">
              <span className="text-base tab:text-[25.358px] md:text-[40px] font-normal">
                645
              </span>
              <span className="text-sm tab:text-[22.188px] md:text-[32px] font-medium">
                Chatting
              </span>
            </div>
            <div className="flex order-2 md:order-none    flex-col tab:gap-4 font-Nunito text-black">
              <span className="text-base tab:text-[25.358px] md:text-[40px] font-normal">
                28h
              </span>
              <span className="text-sm tab:text-[22.188px] md:text-[32px] font-medium">
                Time Spent
              </span>
            </div>
          </div>
        </div>
        <div className="font-Nunito text-center flex justify-center items-center flex-col md:flex-row  gap-7 tab:mt-[49px]">
          <button className="w-[180px] py-[5px] tab:h-[72.84px] tab:w-[285.275px] md:h-[58px] flex justify-center items-center gap-[10px] text-center rounded-[40px] tab:rounded-[63.394px] bg-[#0B78FF] text-white text-2xl tab:text-[38.037px] md:text-[32px] font-medium">
            Add Friend
          </button>
          <button className="w-[186px] py-[5px] tab:h-[72.84px] px-[60px] tab:w-[294.784px] md:h-[58px] flex justify-center  items-center gap-[10px] text-center rounded-[40px] tab:rounded-[63.394px] bg-white text-black text-2xl tab:text-[38.037px] md:text-[32px] font-medium border tab:border-[1.585px] border-black">
            Message
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Profile
