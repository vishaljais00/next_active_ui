import { useRouter } from 'next/router';
import React from 'react'

function Stangersections() {

  const router = useRouter()
  const handleButtonClick = () => {
    router.push('/Avtar');
  };
  
  return (
    <div>
      <>
      <>
  {/* stranger */}
  <section className="stranger">
  <div className="">
    <div className="flex flex-col-reverse gap-[22px] md:gap-[109px] tab:gap-20   tab:items-start md:items-start tab:grid md:grid tab:grid-cols-2 md:grid-cols-2  max-w-[1240px] mx-auto tab:pt-[115px] md:pt-[108px] pt-[53px] px-[21px] tab:px-[4%] md:px-[3%]">
      <div className="">
        <h3 className="text-[#010101] text-[22px] tab:text-[22px] md:text-4xl font-gestura font-bold tab:font-semibold ">
          CHAT WITH STRANGERS
        </h3>
        <h4 className="max-w-[504px] md:max-w-[504px] tab:max-w-[248px] text-[#333] font-Nunito text-sm tab:text-[10px] md:text-[20px] font-normal tab:font-medium leading-6 tab:leading-[25px] md:leading-8 pt-3 tab:pt-2 md:pt-[25px]">
          Discover New Connections: Embrace Serendipity on Our Free Chat and
          Video Meet Platform!
        </h4>
        <p className="max-w-[521px] pt-2 tab:pt-4 md:pt-[33px] mb-[30px] tab:mb-5 md:mb-0  md:pb-[39px] text-[#C0C0C0] tab:text-[#484848] font-Nunito text-xs tab:text-[8.5px] md:text-[15.5px] font-light leading-4 tab:leading-6">
          Connect, Chat, and Video Meet: Embrace Serendipity on Our Free
          Platform! Discover New Friends and Vibes in Real-Time. Join Thousands
          of Users and Experience the Joy of Meeting Strangers from Around the
          World. Start Engaging Conversations and Forge Lasting Connections.
          Your Next Unforgettable Encounter Awaits!
        </p>
        <div className="flex justify-center items-center tab:justify-start md:justify-start gap-6 tab:gap-7">
          <button className="w-[147px] h-8 tab:w-28 tab:h-[42px] md:w-[183px] md:h-[50px]  rounded-lg bg-[#B3D062] text-white text-[12px] md:text-lg font-Nunito font-normal leading-[14px] text-center border border-[#DBDBDB] opacity-90 tab:opacity-100 md:opacity-100 btn-shadow">
            Explore Now
          </button>
          <button className="w-[147px] h-8 tab:w-28 tab:h-[42px] md:w-[183px] md:h-[50px] rounded-lg bg-[#F1487F] text-white text-[12px] md:text-lg font-Nunito font-normal leading-[14px] text-center border border-[#DBDBDB] opacity-90 tab:opacity-100 md:opacity-100 btn-shadow">
            Chat Now
          </button>
        </div>
      </div>
      <div className="">
        <div className="stranger-img">
          <img src="images/img-2.png" alt="" className="w-full w-auto" />
        </div>
      </div>
    </div>
  </div>
</section>



</>

</>
    </div>
  )
}

export default Stangersections
