import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRouter } from 'next/router';



const Myslider = () => {
    const route = useRouter()

    const Responsive = {
        0: {
            items: 1,
            margin: 10
        },
        768: {
            items: 2.5,
            margin: 10
        },
        1024: {
            items: 4,
            margin: 10,
            
        }
    }


    function HandleRoute(){

        route.push('/Interest')

        
    }
    return (
        <section >
            <OwlCarousel
                loop={true}
                items={4}
                responsiveRefreshRate={0}
                autoPlay={true}
                autoplayTimeout={3000}
                autoplayHoverPause={true}
                nav={true}
                responsive={Responsive}
                navText={[
                   "<div class='hidden bottom-[268px] right-0 z-10 customPreviousBtn'><svg class='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 1 1 5l4 4'/></svg></div>",
                    "<div class='hidden bottom-[268px] left-0 z-10 customNextBtn'><svg class='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4'/></svg></div>"
                ]}
                center={true}
                dots={true}
                margin={18}
            >
                <div class="item">
                    <div className="slider">
                        <div className="mt-[4px]">
                            <div
                                className="w-full tab:w-[326px] md:w-[326px] h-[352px] flex justify-center items-center gap-[26px]  rounded-[30px]  bg-white"
                                style={{ boxShadow: "10px 10px 54px 0px rgba(0, 0, 0, 0.10)" }}
                                onClick={HandleRoute}
                            >
                                <div className="active border-[0.5px] border-[#DBDBDB] hover:border-2 hover:border-[#0B78FF] rounded-[246px]">
                                    <img
                                        src="/images/avatar_one.png"
                                        alt=""
                                        className="w-[246px] h-[246px] rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div className="slider">
                    <div className="mt-[4px]">
                            <div
                                className="w-full tab:w-[326px] md:w-[326px] h-[352px] flex justify-center items-center gap-[26px] rounded-[30px]  bg-white"
                                style={{ boxShadow: "10px 10px 54px 0px rgba(0, 0, 0, 0.10)" }}
                                onClick={HandleRoute}
                            >
                                <div className="active border-[0.5px] border-[#DBDBDB] hover:border-2 hover:border-[#0B78FF] rounded-[246px]">
                                    <img
                                        src="/images/avtar_Two.png"
                                        alt=""
                                        className="w-[246px] h-[246px] rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div className="slider">
                    <div className="mt-[4px]">
                            <div
                                className="w-full tab:w-[326px] md:w-[326px] h-[352px] flex justify-center items-center gap-[26px] rounded-[30px]  bg-white"
                                style={{ boxShadow: "10px 10px 54px 0px rgba(0, 0, 0, 0.10)" }}
                                onClick={HandleRoute}
                            >
                                <div className="active border-[0.5px] border-[#DBDBDB] hover:border-2 hover:border-[#0B78FF] rounded-[246px]">
                                    <img
                                        src="/images/avatar_Three.png"
                                        alt=""
                                        className="w-[246px] h-[246px] rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div className="slider">
                    <div className="mt-[4px]">
                            <div
                                className="w-full tab:w-[326px] md:w-[326px] h-[352px] flex justify-center items-center gap-[26px] rounded-[30px]  bg-white"
                                style={{ boxShadow: "10px 10px 54px 0px rgba(0, 0, 0, 0.10)" }}
                                onClick={HandleRoute}
                            >
                                <div className="active border-[0.5px] border-[#DBDBDB] hover:border-2 hover:border-[#0B78FF] rounded-[246px]">
                                    <img
                                        src="/images/avatar_Four.png"
                                        alt=""
                                        className="w-[246px] h-[246px] rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div className="slider">
                    <div className="mt-[4px]">
                            <div
                                className="w-full tab:w-[326px] md:w-[326px] h-[352px] flex justify-center items-center gap-[26px] rounded-[30px]  bg-white"
                                style={{ boxShadow: "10px 10px 54px 0px rgba(0, 0, 0, 0.10)" }}
                                onClick={HandleRoute}
                            >
                                <div className="active border-[0.5px] border-[#DBDBDB] hover:border-2 hover:border-[#0B78FF] rounded-[246px]">
                                    <img
                                        src="/images/avatar_Five.png"
                                        alt=""
                                        className="w-[246px] h-[246px] rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>

    )
}

export default Myslider
