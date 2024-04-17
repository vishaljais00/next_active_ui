import React, { useEffect, useState } from 'react'

const Two_Avatar_View = () => {
    const [openIntentest, setOpenInterst] = useState(false)
    const [openAvatar, setOpenAvatar] = useState(false)
    const [thirdVar, setThirdVar] = useState("")
    const [videoIcon, setVideoIcon] = useState(false)
    const [microphone, setMicrophone] = useState(false)
    const [screenShow, setScreentShow] = useState("split")
    const [screenResShow, setScreentResShow] = useState("multiple")
    const [pepIconToggle, setPepIconToggle] = useState(false)

    const hadndleAvatarFunc = (name = 'openIntentest', value) => {
        if (!value) {
            setThirdVar(name)
        } else {
            setThirdVar("")
        }

        if (name === 'openIntentest') {
            setOpenInterst(!value)
            setOpenAvatar(false)

        } else {

            setOpenInterst(false)
            setOpenAvatar(!value)
        }

    }

    return (
        <div>
       
                <section className={ `${screenShow == 'split' ? 'md:block hidden': 'hidden'} `}>
                    <section
                        id="meetingScreen"
                        className={`fullScreen max-w-[1440px]  md:h-screen items-center  mx-auto bg-white`}
                    >
                        <div className="md:flex flex-col md:flex-row gap-20 md:pt-2 md:pl-[18px] md:px-[75px]">
                            <div className="hidden md:block w-full md:w-[900px] md:h-[687px] rounded-[20px] bg-[#F9FAFB]">
                                <div className="">
                                    <div className="flex justify-between max-w-[843px] pt-[15px] md:ml-[66px]">
                                        <div className="w-[100px] h-[102px]">
                                            <div onClick={() => setScreentShow('arrange')}
                                                className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
                                                <img
                                                    id="triggerArrangement"
                                                    src="/images/screen-avt.png"
                                                    alt=""
                                                    className="rounded-[73px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    defaultValue=""
                                                    className="sr-only peer"
                                                    defaultChecked=""
                                                />
                                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div
                                            className="max-w-[843px] h-[244px] md:ml-[66px] rounded-[20px] bg-no-repeat md:mt-[-13px]"
                                            style={{
                                                backgroundImage: "url(/images/screen-bg.1.jpeg)",
                                                backgroundPosition: "0,-115px",
                                                backgroundSize: "858px 421px"
                                            }}
                                        >
                                            <div className="pt-[30px]">
                                                <img
                                                    src="/images/v call-logo.png"
                                                    alt=""
                                                    className=""
                                                    style={{ marginLeft: 39 }}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="max-w-[843px] h-[244px] md:ml-[66px] rounded-[20px] bg-no-repeat overflow-hidden"
                                            style={{
                                                backgroundImage: "url(/images/screen-bg.jpg)",
                                                backgroundPosition: "0,-115px",
                                                backgroundSize: "858px 421px"
                                            }}
                                        >
                                            <div className="flex justify-between pt-[30px] pr-[30px]">
                                                <img
                                                    src="/images/v call-logo.png"
                                                    alt=""
                                                    className=""
                                                    style={{ marginLeft: 39 }}
                                                />
                                                <img
                                                    onClick={() => setScreentShow('full')}
                                                    src="/images/icons/fullscreen.svg"
                                                    className="triggerZoom"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                {/*interest-open */}
                                                <div
                                                    className={`${openAvatar ? 'connectedShow' : ''}    connectedHide md:mr-[15px] md:mt-5`}
                                                    id="fouravtarShow"
                                                >
                                                    {/* popup */}
                                                    <div className="max-w-[354px] h-[126px] rounded-[10px] pt-4 pb-[23px] px-2 overflow-y-scroll"
                                                        style={{
                                                            background: "rgba(255, 255, 255, 0.50)",
                                                            boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                                                            backdropFilter: "blur(25px)"
                                                        }}>
                                                        <div className="flex flex-col gap-3 font-Assistant max-w-[620px]">
                                                            {/* checkbox */}
                                                            <ul className="flex flex-wrap justify-center items-center gap-3">
                                                                {/* 1 */}
                                                                <li className="inline-block">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="mobmyCheckbox1"
                                                                        className="hidden"
                                                                    />
                                                                    <label
                                                                        htmlFor="mobmyCheckbox1"
                                                                        className="
                                                                w-[82px] h-9 relative flex justify-center items-center bg-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[82px]  before:h-9 before:duration-[.4s] before:scale-0"
                                                                    >
                                                                        <i className=" fa-solid fa-plus text-[#484848] text-xs tab:text-lg mr-[10px]" />
                                                                        <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                            🎨 Art
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                {/* 2 */}
                                                                <li className="inline-block">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="mobmyCheckbox2"
                                                                        className="hidden"
                                                                    />
                                                                    <label
                                                                        htmlFor="mobmyCheckbox2"
                                                                        className="
                                                                w-[99px] h-9 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[99px]   before:h-9 before:duration-[.4s] before:scale-0"
                                                                    >
                                                                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                        <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                            🖌️ Poetry
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                {/* 3*/}
                                                                <li className="inline-block">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="mobmyCheckbox3"
                                                                        className="hidden"
                                                                    />
                                                                    <label
                                                                        htmlFor="mobmyCheckbox3"
                                                                        className="
                                                                w-[95px]  h-[35px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[95px] before:h-[35px] before:duration-[.4s] before:scale-0"
                                                                    >
                                                                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                        <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                            😜 Jokes
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                            <ul className="flex flex-wrap tab:flex-nowrap justify-center items-center gap-3">
                                                                {/* 1 */}
                                                                <li className="inline-block">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="mobmyCheckbox4"
                                                                        className="hidden"
                                                                    />
                                                                    <label
                                                                        htmlFor="mobmyCheckbox4"
                                                                        className="
                                                            w-[97px]  h-[30px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[97px]  before:h-[30px] before:duration-[.4s] before:scale-0"
                                                                    >
                                                                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                        <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                            🍿 Cinema
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                {/* 2 */}
                                                                <li className="inline-block">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="mobmyCheckbox5"
                                                                        className="hidden"
                                                                    />
                                                                    <label
                                                                        htmlFor="mobmyCheckbox5"
                                                                        className="w-[101px] h-8 relative  flex justify-center items-center z-10 bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[101px]  before:h-8 before:duration-[.4s] before:scale-0"
                                                                    >
                                                                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                        <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                            💃🏻 Dance
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                {/* 3*/}
                                                                <li className="inline-block">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="mobmyCheckbox6"
                                                                        className="hidden"
                                                                    />
                                                                    <label
                                                                        htmlFor="mobmyCheckbox6"
                                                                        className="
                                                                w-[104px]  h-8 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[104px] before:h-8 before:duration-[.4s] before:scale-0"
                                                                    >
                                                                        <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                        <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                            🎮 Gaming
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* popup */}
                                                    </div>
                                                </div>
                                                {/*interest-open */}

                                                {/*avtar-open */}
                                                <div
                                                    className={`${openIntentest ? 'connectedShow2' : ''} ${thirdVar == "" || thirdVar == "openAvatar" ? 'hidden' : ''}    connectedHide2 md:mr-[15px] md:mt-5`}
                                                    id="threeinterestShow"
                                                >
                                                    <div
                                                        className="max-w-[292px] h-[126px] flex flex-col gap-[5px] rounded-[10px] pt-[6px] pr-[11px] pl-[9px] overflow-y-scroll"
                                                        style={{
                                                            background: "rgba(255, 255, 255, 0.50)",
                                                            boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                                                            backdropFilter: "blur(25px)"
                                                        }}
                                                    >
                                                        <div className="flex gap-3">
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_one.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avtar_Two.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_Three.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_Four.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_Five.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_six.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_seven.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_eight.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_nine.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/avatar_ten.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/open-elavan.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/open-twelve.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/open-thirteen.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/open-fourtine.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                            <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                <img
                                                                    src="/images/open-elavan.png"
                                                                    alt=""
                                                                    className="rounded-[45px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*interest-open */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-end mt-7 tab:mt-[23px]">
                                        <div className="flex gap-6">
                                            <div className={`${videoIcon ? 'bg-[#f1414f]': 'bg-white'} redButton w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] flex justify-center items-center`}>
                                            <img
                                                onClick={()=>setVideoIcon(!videoIcon)}
                                                src="/images/icons/video-slash.svg"
                                                alt=""
                                                className={`${videoIcon ? 'invert': ''} img w-[18px] tab:w-auto`}
                                            />
                                            </div>
                                            <div className={`${microphone ? 'bg-[#f1414f]': 'bg-white'} mute w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] flex justify-center items-center`}>
                                                <img  onClick={()=>setMicrophone(!microphone)} src="/images/icons/microphone-2.svg" alt=""
                                                className={`${microphone ? 'invert': ''}`}  />
                                            </div>
                                        </div>
                                        <div className="hang-up w-[70px] tab:w-[150px] h-[30px] tab:h-12 bg-[#F1414F] rounded-[28px] ml-6 mr-[43px] flex justify-center items-center">
                                            <img
                                            src="/images/icons/icons8-hang-up-48 1.svg"
                                            alt=""
                                            className="hangimg w-6 tab:w-auto"
                                            />
                                        </div>
                                       
                                        <div className="flex gap-[37px]">
                                            {/*interest-button-open */}
                                            <div className="">
                                                <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px] bg-[#007AFF] flex justify-center items-center " onClick={() => hadndleAvatarFunc('openAvatar', openAvatar)}>
                                                    <button id="fouravtar" className="block" type="button"  >
                                                        <img
                                                            src="/images/icons/emoji-happy.svg"
                                                            alt=""
                                                            className="w-6 tab:w-auto"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            {/*interest-button-close */}
                                            {/* avatar-button-open*/}
                                            <div className="">
                                                <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px]  flex justify-center items-center " onClick={() => hadndleAvatarFunc('openIntentest', openIntentest)}  >
                                                    <button id="threeinterest" className="block" type="button">
                                                        <img
                                                            src="/images/icons/light_interests.svg"
                                                            alt=""
                                                            className="w-6 tab:w-auto"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            {/*avatar-button-close */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block w-full md:w-[357px]  h-[687px] rounded-[20px] bg-[#F9FAFB]">
                                <div className="flex flex-col justify-between h-[680px]">
                                    <div className="text-center pt-6 px-5">
                                        <div className="">
                                            <div className="flex">
                                                <button
                                                    className=""
                                                    type="button"
                                                    data-drawer-target="drawer-navigation"
                                                    data-drawer-show="drawer-navigation"
                                                    aria-controls="drawer-navigation"
                                                >
                                                    <img src="/images/icons/screen-message.svg" alt="" />
                                                </button>
                                            </div>
                                            {/* drawer component */}
                                            <div
                                                id="drawer-navigation"
                                                className="fixed top-0 left-0  z-40 max-w-[1536px] h-screen  transition-transform -translate-x-full"
                                                tabIndex={-1}
                                                aria-labelledby="drawer-navigation-label"
                                                style={{
                                                    transition: '0.8s ease'
                                                }}
                                            >
                                                <div className="w-full  h-[100vh] bg-white flex gap-5 py-5 pl-[34px]">
                                                    {/* md-screen-open */}
                                                    <div className=" flex gap-5">
                                                        <div className="flex gap-5">
                                                            <div className="w-[103px] h-[669px] bg-[#F9FAFB] flex gap-5 flex-col rounded-[20px]">
                                                                <div className="flex flex-col items-center pt-[15px]">
                                                                    <button
                                                                        
                                                                        type="button"
                                                                        onClick={() => setScreentShow('arrange')}
                                                                        className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB] hover:border-[3px] hover:border-[#0b78ff]">
                                                                        <img
                                                                            src="/images/screen-avt.png"
                                                                            alt=""
                                                                            className="rounded-[73px]"
                                                                            data-drawer-hide="drawer-navigation"
                                                                            aria-controls="drawer-navigation"
                                                                        />
                                                                    </button>
                                                                    <div className="flex flex-col justify-center items-center">
                                                                        <button
                                                                            type="button"
                                                                            data-drawer-hide="drawer-navigation"
                                                                            aria-controls="drawer-navigation"
                                                                            className="inline-flex items-center"
                                                                        >
                                                                            <a href="#">
                                                                                <img
                                                                                    src="/images/icons/refresh-button.svg"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="w-full md:w-[455px]  h-[669px] pt-10 px-5 rounded-[20px] bg-white"
                                                                style={{
                                                                    boxShadow: "10px 10px 50px 0px rgba(0, 0, 0, 0.10)"
                                                                }}
                                                            >
                                                                <div className="flex flex-col justify-between">
                                                                    {/* tab */}
                                                                    <div className="mb-4 border-b border-gray-200 ">
                                                                        <ul
                                                                            className="flex flex-wrap justify-between mb-px text-sm font-medium text-center"
                                                                            id="default-tabs"
                                                                            data-tabs-toggle="#default-tabs-contents"
                                                                            role="tablist"
                                                                        >
                                                                            <li className="me-2" role="presentation">
                                                                                <button
                                                                                    className="inline-block p-4 border-b-2 rounded-t-lg"
                                                                                    id="chatprofile-tab"
                                                                                    data-tabs-target="#chatprofile"
                                                                                    type="button"
                                                                                    role="tab"
                                                                                    aria-controls="profile"
                                                                                    aria-selected="false"
                                                                                >
                                                                                    Recent Chats
                                                                                </button>
                                                                            </li>
                                                                            <li className="me-2 mr-12" role="presentation">
                                                                                <button
                                                                                    className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                                                                    id="chatdashboard-tab"
                                                                                    data-tabs-target="#chatdashboard"
                                                                                    type="button"
                                                                                    role="tab"
                                                                                    aria-controls="dashboard"
                                                                                    aria-selected="false"
                                                                                >
                                                                                    Friends
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div id="default-tabs-contents">
                                                                        {/* profile-open */}
                                                                        <div
                                                                            className=" p-4 rounded-lg  "
                                                                            id="chatprofile"
                                                                            role="tabpanel"
                                                                            aria-labelledby="chatprofile-tab"
                                                                        >
                                                                            <ul className="max-w-md divide-y ">
                                                                                <li className="pb-3 sm:pb-4 border-b-transparent">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px]rounded-full"
                                                                                                src="/images/f-1.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                            <img
                                                                                                src="/images/online.png"
                                                                                                alt=""
                                                                                                className="absolute bottom-0 right-0 object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black">
                                                                                                Aura margaret
                                                                                            </h6>
                                                                                            <div className="px-[5px] rounded-full bg-[#C9A7A7] text-[10px] font-Nunito font-normal absolute top-0 start-[45%]">
                                                                                                1
                                                                                            </div>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                hai,how are you today?
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-2.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                jaehyuk nim
                                                                                                <a href="">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I will start working on it tonight too
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-3.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Kristian bastian
                                                                                                <a href="">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I ask again if something is not clear
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-4.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                            <img
                                                                                                src="/images/online.png"
                                                                                                alt=""
                                                                                                className="absolute bottom-0 right-0 object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-[18px]">
                                                                                                Kristian bastian
                                                                                                <a href="">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <div className="px-[5px] rounded-full bg-[#C9A7A7] text-[10px] font-Nunito font-normal absolute top-[2px] start-[49%]">
                                                                                                2
                                                                                            </div>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                Science, science, or science is a....
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="pt-3 pb-0 sm:pt-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-5.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Aldo andrian
                                                                                                <a href="">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                if there is a problem during the
                                                                                                process...
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* profile-close */}
                                                                        {/* friends-open */}
                                                                        <div
                                                                            className="p-4 rounded-lg"
                                                                            id="chatdashboard"
                                                                            role="tabpanel"
                                                                            aria-labelledby="chatdashboard-tab"
                                                                        >
                                                                            <ul className="max-w-md divide-y ">
                                                                                <li className="pb-3 sm:pb-4 border-b-transparent">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px]rounded-full"
                                                                                                src="/images/f-1.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black">
                                                                                                Aura margaret
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                hai,how are you today?
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-2.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                jaehyuk nim
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I will start working on it tonight too
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-3.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Kristian bastian
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I ask again if something is not clear
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-4.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-[18px]">
                                                                                                Kristian bastian
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                Science, science, or science is a....
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="pt-3 pb-0 sm:pt-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-5.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Aldo andrian
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                if there is a problem during the
                                                                                                process...
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* friends-close */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" w-full md:w-[906px]  h-[669px] rounded-[20px] bg-[#F9FAFB]">
                                                            <div className="flex flex-col justify-between h-[667px] pt-6 pl-6 pr-[34px] pb-8">
                                                                <div className="text-center">
                                                                    <div className="flex justify-between items-baseline">
                                                                        <div className="flex">
                                                                            <button
                                                                                type="button"
                                                                                data-drawer-hide="drawer-navigation"
                                                                                aria-controls="drawer-navigation"
                                                                                className="inline-flex items-center"
                                                                            >
                                                                                <a href="#">
                                                                                    {" "}
                                                                                    <img
                                                                                        src="/images/icons/screen-message.svg"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </button>
                                                                        </div>
                                                                        <div className="">
                                                                            <div className="mt-[-20px]">
                                                                                <span className="text-[#020F21] text-2xl font-Nunito font-semibold text-center">
                                                                                    Messages
                                                                                </span>
                                                                            </div>
                                                                            <p className="md:max-w-[317px] text-[#818A98] text-xs font-Nunito font-normal text-center pt-[7px] opacity-90">
                                                                                You can chat here with other members during the
                                                                                meeting and they will be deleted after the
                                                                                meeting.
                                                                            </p>
                                                                        </div>
                                                                        <div className="">
                                                                            <img src="/images/Add user.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col gap-[37px]">
                                                                        <div className="flex gap-4 mt-[42px]">
                                                                            <div className="">
                                                                                <img
                                                                                    src="/images/pro 2 3.png"
                                                                                    alt=""
                                                                                    className="rounded-full"
                                                                                />
                                                                            </div>
                                                                            <div className="flex flex-col max-w-[237px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
                                                                                <div className="flex justify-between">
                                                                                    <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                                                        you
                                                                                    </div>
                                                                                    <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                                                        9:44
                                                                                    </div>
                                                                                </div>
                                                                                <div className="text-justify text-xs font-Nunito font-normal text-white opacity-80">
                                                                                    Hii! I am Ria fro Mumbai it’s nice to meet you
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-end gap-[12.39px]">
                                                                            <div
                                                                                className="flex flex-col max-w-[183.529px] bg-white gap-[3.1px] rounded-[6.195px] pt-[6.2px] px-[12.39px] pb-[6.969px]"
                                                                                style={{
                                                                                    boxShadow:
                                                                                        "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                                                                                }}
                                                                            >
                                                                                <div className="flex justify-between">
                                                                                    <div className="text-[9.293px] text-[#B9BEC6] font-normal font-Nunito opacity-80">
                                                                                        9:20
                                                                                    </div>
                                                                                    <div className="text-xs text-[#176DEE] font-normal font-Nunito opacity-80">
                                                                                        Amir
                                                                                    </div>
                                                                                </div>
                                                                                <div className="text-justify text-[9.293px] font-Nunito font-normal text-[#020F21] pr-[10px]">
                                                                                    Hii Ria, Well how’s the weather in Mumbai?{" "}
                                                                                </div>
                                                                            </div>
                                                                            <div className="">
                                                                                <img
                                                                                    src="/images/amir.png"
                                                                                    alt=""
                                                                                    className="rounded-full"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="w-full md:max-w-[751px] mx-auto h-16 flex py-[14px] px-[10px] rounded-[10px] bg-white">
                                                                        <div className="flex gap-1 mr-[29px]">
                                                                            <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                                                <img
                                                                                    src="/images/icons/Happy.svg"
                                                                                    alt=""
                                                                                    className="w-[18px] tab:w-auto"
                                                                                />
                                                                            </div>
                                                                            <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                                                <img
                                                                                    src="/images/icons/microphone-2.svg"
                                                                                    alt=""
                                                                                    className="w-[18px] tab:w-auto"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="w-[1px] h-[38px]"
                                                                            style={{ background: "rgba(51, 51, 51, 0.35)" }}
                                                                        />
                                                                        <form
                                                                            className="flex justify-between gap-10 w-full ml-[5px]"
                                                                            role="search"
                                                                        >
                                                                            <div className="contents">
                                                                                <input
                                                                                    type="search"
                                                                                    aria-label="search"
                                                                                    placeholder="Write a message..."
                                                                                    className="w-full md:w-full border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                                                                                />
                                                                            </div>
                                                                            <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                                                                                <a href="#">
                                                                                    <img
                                                                                        src="/images/icons/message-send.svg"
                                                                                        alt=""
                                                                                        className="fa-rocket"
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* md-screen-close */}
                                                </div>
                                            </div>
                                            {/*  */}
                                            <div className="mt-[-20px]">
                                                <span className="text-[#020F21] text-2xl font-Nunito font-semibold text-center">
                                                    Messages
                                                </span>
                                            </div>
                                            <p className="text-center text-[#818A98] text-xs font-Nunito font-normal pt-[7px]  opacity-90">
                                                You can chat here with other members during the meeting and they
                                                will be deleted after the meeting.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-[27px]  mt-[42px]">
                                            <div className="flex justify-between gap-4">
                                                <div className="">
                                                    <img
                                                        src="/images/pro 2 3.png"
                                                        alt=""
                                                        className="rounded-full"
                                                    />
                                                </div>
                                                <div className="max-w-[237px] flex flex-col items-start gap-2 py-2 px-4 rounded-lg bg-[#176DEE]">
                                                    <div className="flex justify-between w-full">
                                                        <div className="text-xs text-[#F9FAFB] font-Nunito font-normal  opacity-80">
                                                            You
                                                        </div>
                                                        <div className="text-xs text-[#F9FAFB] font-Nunito font-normal text-right  opacity-80">
                                                            9:44
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <p className="text-justify text-xs text-white font-Nunito font-normal  opacity-80">
                                                            Hii! I am Ria fro Mumbai it’s nice to meet you
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="max-w-[239px] gap-[12.39px] flex justify-end text-start">
                                                    <div
                                                        className="max-w-[183px] flex flex-col gap-[6.195px] pt-[6.195px] pr-[12.39px] pb-[6.969px] pl-[12.39px] text-start rounded-[6.195px] bg-white"
                                                        style={{
                                                            boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                                                        }}
                                                    >
                                                        <div className="flex justify-between w-full">
                                                            <div className="text-[9.293px] text-[#B9BEC6] font-Nunito font-normal text-right  opacity-80">
                                                                9.20
                                                            </div>
                                                            <div className="text-[9.293px] text-[#176DEE] font-Nunito font-normal  opacity-80">
                                                                Amir
                                                            </div>
                                                        </div>
                                                        <div className="mt-[3.1px]">
                                                            <p className="text-[9.293px] text-[#020F21] font-Nunito font-normal  opacity-80">
                                                                Hii Ria, Well how’s the weather in Mumbai?{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <img
                                                            src="/images/amir.png"
                                                            alt=""
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <div className="w-full md:max-w-[338px] mx-auto h-16 flex py-[14px] px-[10px] bg-white">
                                            <div className="flex gap-1 mr-2">
                                                <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                    <img
                                                        src="/images/icons/Happy.svg"
                                                        alt=""
                                                        className="w-[18px] tab:w-auto"
                                                    />
                                                </div>
                                                <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                    <img
                                                        src="/images/icons/microphone-2.svg"
                                                        alt=""
                                                        className="w-[18px] tab:w-auto"
                                                    />
                                                </div>
                                            </div>
                                            <form
                                                className="flex gap-[1.5rem] border-l border-[#9DA4AF] pl-[19px] w-full"
                                                role="search"
                                            >
                                                <div className="contents">
                                                    <input
                                                        type="search"
                                                        aria-label="search"
                                                        placeholder="Write a message..."
                                                        className="w-full md:w-[154px] border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                                                    />
                                                </div>
                                                <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                                                    <a href="#">
                                                        <img
                                                            src="/images/icons/message-send.svg"
                                                            alt=""
                                                            className="fa-rocket"
                                                        />
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            {/* full-screen-video-section-start */}
                <section className={ `${screenShow == 'full' ? 'md:block hidden': 'hidden '}  `}>
                    <div
                        id="fullScreen"
                        className="max-w-[1520px] h-screen  items-center  mx-auto bg-white bg-no-repeat bg-center bg-cover pt-[41px]"
                        style={{ backgroundImage: "url(/images/screen-bg.jpg)" }}
                    >
                        <div className="flex gap-[47px] pl-[70px] h-[10%]">
                            <div className="">
                                <p  id="backMeetingScreen">
                                    <svg
                                    onClick={()=>setScreentShow('split')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={37}
                                        height={37}
                                        viewBox="0 0 37 37"
                                        fill="none"
                                    >
                                        <g filter="url(#filter0_b_1_2337)">
                                            <path
                                                d="M0 6C0 2.68629 2.68629 0 6 0H31C34.3137 0 37 2.68629 37 6V31C37 34.3137 34.3137 37 31 37H6C2.68629 37 0 34.3137 0 31V6Z"
                                                fill="white"
                                            />
                                        </g>
                                        <path
                                            d="M21.9688 11.562L15.0312 18.4995L21.9688 25.437"
                                            stroke="black"
                                            strokeWidth={2}
                                        />
                                        <defs>
                                            <filter
                                                id="filter0_b_1_2337"
                                                x={-4}
                                                y={-4}
                                                width={45}
                                                height={45}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                                                <feComposite
                                                    in2="SourceAlpha"
                                                    operator="in"
                                                    result="effect1_backgroundBlur_1_2337"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_backgroundBlur_1_2337"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </p>
                            </div>
                            <div className="">
                                <img src="/images/v call-logo.png" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col  justify-end  h-[90%]">
                            <div className="flex justify-end h-[398px]">
                                <div
                                    id="triggerArrangement"
                                    className=" w-full md:w-[345px]  h-[420px] rounded-tl-[20px] bg-[#F9FAFB]"
                                >
                                    <div className="flex flex-col justify-end h-[436px] gap-3 pt-6 pl-6 pr-[34px] pb-8">
                                        <div className="text-center">
                                            <div className="flex flex-col gap-[37px]">
                                                <div className="flex gap-4 mt-[42px]">
                                                    <div className="">
                                                        <img
                                                            src="/images/pro 2 3.png"
                                                            alt=""
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col max-w-[237px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
                                                        <div className="flex justify-between">
                                                            <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                                you
                                                            </div>
                                                            <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                                9:44
                                                            </div>
                                                        </div>
                                                        <div className="text-justify text-xs font-Nunito font-normal text-white opacity-80">
                                                            Hii! I am Ria fro Mumbai it’s nice to meet you
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end gap-[12.39px]">
                                                    <div
                                                        className="flex flex-col max-w-[183.529px] bg-white gap-[3.1px] rounded-[6.195px] pt-[6.2px] px-[12.39px] pb-[6.969px]"
                                                        style={{
                                                            boxShadow:
                                                                "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                                                        }}
                                                    >
                                                        <div className="flex justify-between">
                                                            <div className="text-[9.293px] text-[#B9BEC6] font-normal font-Nunito opacity-80">
                                                                9:20
                                                            </div>
                                                            <div className="text-xs text-[#176DEE] font-normal font-Nunito opacity-80">
                                                                Amir
                                                            </div>
                                                        </div>
                                                        <div className="text-justify text-[9.293px] font-Nunito font-normal text-[#020F21] pr-[10px]">
                                                            Hii Ria, Well how’s the weather in Mumbai?{" "}
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <img
                                                            src="/images/amir.png"
                                                            alt=""
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-end">
                                            <div className="w-full md:max-w-[309px] mx-auto h-16 flex py-[14px] px-[10px] rounded-[10px] bg-white">
                                                <div className="flex gap-1">
                                                    <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                        <a href="#">
                                                            <img
                                                                src="/images/icons/iconoir_attachment.svg"
                                                                alt=""
                                                                className="w-[18px] tab:w-auto"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="w-[1px] h-[38px]"
                                                    style={{ background: "rgba(51, 51, 51, 0.35)" }}
                                                />
                                                <form
                                                    className="flex justify-between gap-10 w-full ml-[5px]"
                                                    role="search"
                                                >
                                                    <div className="contents">
                                                        <input
                                                            type="search"
                                                            aria-label="search"
                                                            placeholder="Write a message..."
                                                            className="w-full md:w-[152px] border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                                                        />
                                                    </div>
                                                    <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                                                        <a href="#">
                                                            <img
                                                                src="/images/icons/message-send.svg"
                                                                alt="fa-rocket"
                                                            />
                                                        </a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-end mt-7 tab:mt-[23px] bg-[#2C2C2C] pt-[21px] pb-[23px]">
                            <div className="flex gap-6">
                                            <div className={`${videoIcon ? 'bg-[#f1414f]': 'bg-white'} redButton w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] flex justify-center items-center`}>
                                            <img
                                                onClick={()=>setVideoIcon(!videoIcon)}
                                                src="/images/icons/video-slash.svg"
                                                alt=""
                                                className={`${videoIcon ? 'invert': ''} img w-[18px] tab:w-auto`}
                                            />
                                            </div>
                                            <div className={`${microphone ? 'bg-[#f1414f]': 'bg-white'} mute w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%]  flex justify-center items-center`}>
                                            <img  onClick={()=>setMicrophone(!microphone)} src="/images/icons/microphone-2.svg" 
                                            alt="" className={`${microphone ? 'invert': ''}`}  />
                                            </div>
                                        </div>
                                <div className="hang-up w-[70px] tab:w-[150px] h-[30px] tab:h-12 bg-[#F1414F] text-white rounded-[28px] ml-6 mr-6 flex justify-center items-center">
                                    <button className="text-sm font-Nunito font-normal hangimg">
                                        Leave Meeting
                                    </button>
                                </div>
                                <div className="flex gap-[27px]">
                                    <div className="">
                                        <div className="w-8 tab:w-12 h-8 tab:h-12  rounded-full bg-white flex justify-center items-center ">
                                            <img
                                                src="/images/icons/monitor.svg"
                                                alt=""
                                                className="w-6 tab:w-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-8 tab:w-12 h-8 tab:h-12 rounded-[7px] bg-[#007AFF] flex justify-center items-center ">
                                            <img
                                                src="/images/icons/emoji-happy.svg"
                                                alt=""
                                                className="w-6 tab:w-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* full-screen-video-section-close */}

            {/* Video Screen Arrangement V2-open */}
                <div className={ `${screenShow == 'arrange' ? 'md:block hidden': 'hidden '} `}>
                    <section
                        id="videoScreenArrangement"
                        className="vScreenArrangements targetDiv max-w-[1440px] h-screen flex items-center tab mx-auto bg-white"
                    >
                        <div className="targetDiv hidden md:flex flex-col md:flex-row gap-20 pt-2 md:pl-[18px] md:px-[75px]">
                            <div className="w-full md:w-[900px] md:h-[680px] rounded-[20px] bg-[#F9FAFB]">
                                <div className="">
                                    <div className="flex justify-between max-w-[843px] pt-[15px] md:ml-[66px]">
                                        <div className="w-[100px] h-[102px]">
                                            <div
                                                onClick={() => setScreentShow('split')}
                                                className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
                                                <img
                                                    src="/images/screen-avt.png"
                                                    alt=""
                                                    className="rounded-[73px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    defaultValue=""
                                                    className="sr-only peer"
                                                    defaultChecked=""
                                                />
                                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div
                                            className="w-[843px] h-[490px] md:ml-[66px] rounded-[20px] bg-no-repeat"
                                            style={{
                                                backgroundImage: "url(/images/screen-bg.jpg)",
                                                backgroundPosition: "center",
                                                backgroundSize: "827px 502px"
                                            }}
                                        >
                                            <div className="flex flex-col pt-[30px] pr-[30px]">
                                                <div className="flex justify-end">
                                                    <a href="#" className="triggerZooms">
                                                        {" "}
                                                        <img src="/images/icons/fullscreen.svg" alt="" onClick={() => setScreentShow('full')} />
                                                    </a>
                                                </div>
                                                <div className="">
                                                    <img
                                                        src="/images/v call-logo.png"
                                                        alt=""
                                                        className=""
                                                        style={{ marginLeft: 39 }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[344px] flex justify-end overflow-hidden">
                                                <div className="h-[344px] flex flex-col justify-end mr-[114px] absolute">
                                                    <img src="/images/v call-img.png" alt="" />
                                                </div>
                                                <div className="flex justify-end">
                                                    {/* interest */}
                                                    <div
                                                        className={`${openAvatar ? 'interestShow' : ''} interestHide md:mr-[15px] md:mt-5`}
                                                        id="videoavtarShow"
                                                    >
                                                        {/* popup */}
                                                        <div
                                                            className="max-w-[354px] h-[126px] rounded-[10px] pt-4 pb-[23px] px-2 overflow-y-scroll"
                                                            style={{
                                                                background: "rgba(255, 255, 255, 0.50)",
                                                                boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                                                                backdropFilter: "blur(25px)"
                                                            }}
                                                        >
                                                            <div className="flex flex-col gap-3 font-Assistant max-w-[620px]">
                                                                {/* checkbox */}
                                                                <ul className="flex flex-wrap justify-center items-center gap-3">
                                                                    {/* 1 */}
                                                                    <li className="inline-block">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="mobmyCheckbox1"
                                                                            className="hidden"
                                                                        />
                                                                        <label
                                                                            htmlFor="mobmyCheckbox1"
                                                                            className="
                                                        w-[82px] h-9 relative flex justify-center items-center bg-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[82px]  before:h-9 before:duration-[.4s] before:scale-0"
                                                                        >
                                                                            <i className=" fa-solid fa-plus text-[#484848] text-xs tab:text-lg mr-[10px]" />
                                                                            <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                                🎨 Art
                                                                            </span>
                                                                        </label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="inline-block">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="mobmyCheckbox2"
                                                                            className="hidden"
                                                                        />
                                                                        <label
                                                                            htmlFor="mobmyCheckbox2"
                                                                            className="
                                                    w-[99px] h-9 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[99px]   before:h-9 before:duration-[.4s] before:scale-0"
                                                                        >
                                                                            <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                            <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                                🖌️ Poetry
                                                                            </span>
                                                                        </label>
                                                                    </li>
                                                                    {/* 3*/}
                                                                    <li className="inline-block">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="mobmyCheckbox3"
                                                                            className="hidden"
                                                                        />
                                                                        <label
                                                                            htmlFor="mobmyCheckbox3"
                                                                            className="
                                                    w-[95px]  h-[35px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[95px] before:h-[35px] before:duration-[.4s] before:scale-0"
                                                                        >
                                                                            <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                            <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                                😜 Jokes
                                                                            </span>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                                <ul className="flex flex-wrap tab:flex-nowrap justify-center items-center gap-3">
                                                                    {/* 1 */}
                                                                    <li className="inline-block">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="mobmyCheckbox4"
                                                                            className="hidden"
                                                                        />
                                                                        <label
                                                                            htmlFor="mobmyCheckbox4"
                                                                            className="
                                                    w-[97px]  h-[30px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[97px]  before:h-[30px] before:duration-[.4s] before:scale-0"
                                                                        >
                                                                            <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                            <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                                🍿 Cinema
                                                                            </span>
                                                                        </label>
                                                                    </li>
                                                                    {/* 2 */}
                                                                    <li className="inline-block">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="mobmyCheckbox5"
                                                                            className="hidden"
                                                                        />
                                                                        <label
                                                                            htmlFor="mobmyCheckbox5"
                                                                            className="
                                                    w-[101px] h-8 relative  flex justify-center items-center z-10 bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[101px]  before:h-8 before:duration-[.4s] before:scale-0"
                                                                        >
                                                                            <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                            <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                                💃🏻 Dance
                                                                            </span>
                                                                        </label>
                                                                    </li>
                                                                    {/* 3*/}
                                                                    <li className="inline-block">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="mobmyCheckbox6"
                                                                            className="hidden"
                                                                        />
                                                                        <label
                                                                            htmlFor="mobmyCheckbox6"
                                                                            className="
                                                        w-[104px]  h-8 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px]  before:w-[104px] before:h-8 before:duration-[.4s] before:scale-0"
                                                                        >
                                                                            <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                            <span className="text-sm  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                                🎮 Gaming
                                                                            </span>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            {/* popup */}
                                                        </div>
                                                    </div>
                                                    {/* avatar */}
                                                    <div
                                                        className={`${openIntentest ? 'interestShow2' : ''} ${thirdVar == "" || thirdVar == "openAvatar" ? 'hidden' : ''}  interestHide2 md:mr-[15px] md:mt-5`}
                                                        id="videointerestShow"
                                                    >
                                                        <div
                                                            className="max-w-[292px] h-[126px] flex flex-col gap-[5px] rounded-[10px] pt-[6px] pr-[11px] pl-[9px] overflow-y-scroll"
                                                            style={{
                                                                background: "rgba(255, 255, 255, 0.50)",
                                                                boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                                                                backdropFilter: "blur(25px)"
                                                            }}
                                                        >
                                                            <div className="flex gap-3">
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_one.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avtar_Two.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_Three.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_Four.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_Five.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_six.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_seven.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_eight.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_nine.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/avatar_ten.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/open-elavan.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/open-twelve.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/open-thirteen.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/open-fourtine.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                                <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                                    <img
                                                                        src="/images/open-elavan.png"
                                                                        alt=""
                                                                        className="rounded-[45px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-end mt-7 tab:mt-[23px]">
                                        <div className="flex gap-6">
                                            <div className={`${videoIcon ? 'bg-[#f1414f]': 'bg-white'} redButton w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] flex justify-center items-center`}>
                                            <img
                                                onClick={()=>setVideoIcon(!videoIcon)}
                                                src="/images/icons/video-slash.svg"
                                                alt=""
                                                className={`${videoIcon ? 'invert': ''} img w-[18px] tab:w-auto`}
                                            />
                                            </div>
                                            <div className={`${microphone ? 'bg-[#f1414f]': 'bg-white'} mute w-[30px] tab:w-12 h-[30px] tab:h-12 rounded-[50%] flex justify-center items-center`}>
                                            <img  onClick={()=>setMicrophone(!microphone)} src="/images/icons/microphone-2.svg"
                                             alt="" className={`${microphone ? 'invert': ''}`}  />
                                            </div>
                                        </div>
                                        <div className="hang-up w-[70px] tab:w-[150px] h-[30px] tab:h-12 bg-[#F1414F] rounded-[28px] ml-6 mr-[43px] flex justify-center items-center">
                                            <img
                                                src="/images/icons/icons8-hang-up-48 1.svg"
                                                alt=""
                                                className="hangimg w-6 tab:w-auto"
                                            />
                                        </div>
                                        <div className="flex gap-[37px]">
                                            {/*interest-open */}
                                            <div className="">
                                                <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px] bg-[#007AFF] flex justify-center items-center ">
                                                    <button id="videoavtar" className="block" type="button" onClick={() => hadndleAvatarFunc('openIntentest', openIntentest)}>
                                                        <img
                                                            src="/images/icons/emoji-happy.svg"
                                                            alt=""
                                                            className="w-6 tab:w-auto"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            {/*interest-close */}
                                            {/* avatar-open*/}
                                            <div className="">
                                                <div className="w-8 tab:w-10 h-8 tab:h-10 rounded-[7px]  flex justify-center items-center ">
                                                    <button id="videointerest" className="block" type="button" onClick={() => hadndleAvatarFunc('openAvatar', openAvatar)}>
                                                        <img
                                                            src="/images/icons/light_interests.svg"
                                                            alt=""
                                                            className="w-6 tab:w-auto"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            {/*avatar-close */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[357px]  h-[680px] flex flex-col justify-between rounded-[20px] bg-[#F9FAFB]">
                                <div className="flex flex-col  h-[683px] pt-6 px-5">
                                    <div className="text-center">
                                        <div className="flex justify-between items-baseline">
                                            <div className="flex">
                                                <button
                                                    className=""
                                                    type="button"
                                                    data-drawer-target="videodrawer-navigation"
                                                    data-drawer-show="videodrawer-navigation"
                                                    aria-controls="videodrawer-navigation"
                                                >
                                                    <img src="/images/icons/screen-message.svg" alt="" />
                                                </button>
                                            </div>
                                            <div className="mt-[-20px]">
                                                <span className="text-[#020F21] text-2xl font-Nunito font-semibold text-center">
                                                    Messages
                                                </span>
                                            </div>
                                            <div className="">
                                                <a href="#">
                                                    <img src="/images/Add user.png" alt="" />
                                                </a>
                                            </div>
                                            {/* drawer component */}
                                            <div
                                                id="videodrawer-navigation"
                                                className="fixed top-0 left-0 z-40 max-w-[1536px] h-screen  transition-transform -translate-x-full"
                                                tabIndex={-1}
                                                aria-labelledby="videodrawer-navigation-label"
                                                style={{
                                                    transition: '0.8s ease'
                                                }}
                                            >
                                                <div className="w-full  h-[100vh] bg-white flex gap-5 py-5 pl-[34px]">
                                                    {/* md-screen-open */}
                                                    <div className=" flex gap-5">
                                                        <div className="flex gap-5">
                                                            <div className="w-[103px] h-[669px] bg-[#F9FAFB] flex gap-5 flex-col rounded-[20px]">
                                                                <div className="flex flex-col items-center pt-[15px]">
                                                                    <div className="w-[73px] h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB] hover:border-[3px] hover:border-[#0b78ff]">
                                                                        <img
                                                                            src="/images/screen-avt.png"
                                                                            alt=""
                                                                            className="rounded-[73px]"
                                                                        />
                                                                    </div>
                                                                    <div className="flex flex-col justify-center items-center">
                                                                        <button
                                                                            type="button"
                                                                            data-drawer-hide="videodrawer-navigation"
                                                                            aria-controls="videodrawer-navigation"
                                                                            className="inline-flex items-center"
                                                                        >
                                                                            <a href="#">
                                                                                <img
                                                                                    src="/images/icons/refresh-button.svg"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="w-full md:w-[455px]  h-[669px] pt-10 px-5 rounded-[20px] bg-white"
                                                                style={{
                                                                    boxShadow: "10px 10px 50px 0px rgba(0, 0, 0, 0.10)"
                                                                }}
                                                            >
                                                                <div className="flex flex-col justify-between">
                                                                    {/* tab */}
                                                                    <div className="mb-4 border-b border-gray-200 ">
                                                                        <ul
                                                                            className="flex flex-wrap justify-between mb-px text-sm font-medium text-center"
                                                                            id="default-tabs"
                                                                            data-tabs-toggle="#default-tabs-contents"
                                                                            role="tablist"
                                                                        >
                                                                            <li className="me-2" role="presentation">
                                                                                <button
                                                                                    className="inline-block p-4 border-b-2 rounded-t-lg"
                                                                                    id="videochatprofile-tab"
                                                                                    data-tabs-target="#videochatprofile"
                                                                                    type="button"
                                                                                    role="tab"
                                                                                    aria-controls="profile"
                                                                                    aria-selected="false"
                                                                                >
                                                                                    Recent Chats
                                                                                </button>
                                                                            </li>
                                                                            <li className="me-2 mr-12" role="presentation">
                                                                                <button
                                                                                    className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                                                                    id="videochatdashboard-tab"
                                                                                    data-tabs-target="#videochatdashboard"
                                                                                    type="button"
                                                                                    role="tab"
                                                                                    aria-controls="dashboard"
                                                                                    aria-selected="false"
                                                                                >
                                                                                    Friends
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div id="default-tabs-contents">
                                                                        {/* profile-open */}
                                                                        <div
                                                                            className=" p-4 rounded-lg  "
                                                                            id="videochatprofile"
                                                                            role="tabpanel"
                                                                            aria-labelledby="videochatprofile-tab"
                                                                        >
                                                                            <ul className="max-w-md divide-y ">
                                                                                <li className="pb-3 sm:pb-4 border-b-transparent">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px]rounded-full"
                                                                                                src="/images/f-1.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                            <img
                                                                                                src="/images/online.png"
                                                                                                alt=""
                                                                                                className="absolute bottom-0 right-0 object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black">
                                                                                                Aura margaret
                                                                                            </h6>
                                                                                            <div className="px-[5px] rounded-full bg-[#C9A7A7] text-[10px] font-Nunito font-normal absolute top-0 start-[45%]">
                                                                                                1
                                                                                            </div>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                hai,how are you today?
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="#">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-2.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                jaehyuk nim
                                                                                                <a href="#">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I will start working on it tonight too
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="#">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-3.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Kristian bastian
                                                                                                <a href="#">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I ask again if something is not clear
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-4.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                            <img
                                                                                                src="/images/online.png"
                                                                                                alt=""
                                                                                                className="absolute bottom-0 right-0 object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-[18px]">
                                                                                                Kristian bastian
                                                                                                <a href="#">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <div className="px-[5px] rounded-full bg-[#C9A7A7] text-[10px] font-Nunito font-normal absolute top-[2px] start-[49%]">
                                                                                                2
                                                                                            </div>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                Science, science, or science is a....
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="#">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="pt-3 pb-0 sm:pt-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-5.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Aldo andrian
                                                                                                <a href="#">
                                                                                                    <img
                                                                                                        src="/images/Add user.png"
                                                                                                        alt=""
                                                                                                        className="w-[17px] h-[17px]"
                                                                                                    />
                                                                                                </a>
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                if there is a problem during the
                                                                                                process...
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="inline-flex items-center ">
                                                                                            <a href="#">
                                                                                                <img
                                                                                                    src="/images/Add user.png"
                                                                                                    alt=""
                                                                                                    className=""
                                                                                                />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* profile-close */}
                                                                        {/* friends-open */}
                                                                        <div
                                                                            className="p-4 rounded-lg"
                                                                            id="videochatdashboard"
                                                                            role="tabpanel"
                                                                            aria-labelledby="videochatdashboard-tab"
                                                                        >
                                                                            <ul className="max-w-md divide-y ">
                                                                                <li className="pb-3 sm:pb-4 border-b-transparent">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px]rounded-full"
                                                                                                src="/images/f-1.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black">
                                                                                                Aura margaret
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                hai,how are you today?
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-2.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                jaehyuk nim
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I will start working on it tonight too
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-3.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Kristian bastian
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                I ask again if something is not clear
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="py-3 sm:py-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="relative flex-shrink-0 ">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-4.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="relative flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-[18px]">
                                                                                                Kristian bastian
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                Science, science, or science is a....
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="pt-3 pb-0 sm:pt-4">
                                                                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                                                        <div className="flex-shrink-0">
                                                                                            <img
                                                                                                className="w-[51px] h-[50px] rounded-full"
                                                                                                src="/images/f-5.png"
                                                                                                alt="Neil image"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="flex-1 min-w-0 text-left">
                                                                                            <h6 className="text-lg font-Nunito font-bold text-black flex items-baseline gap-1">
                                                                                                Aldo andrian
                                                                                            </h6>
                                                                                            <p className="text-[13px] font-Nunito font-normal text-black">
                                                                                                if there is a problem during the
                                                                                                process...
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        {/* friends-close */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" w-full md:w-[906px]  h-[669px] rounded-[20px] bg-[#F9FAFB]">
                                                        <div className="flex flex-col justify-between h-[667px] pt-6 pl-6 pr-[34px] pb-8">
                                                            <div className="text-center">
                                                                <div className="flex justify-between items-baseline">
                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            data-drawer-hide="videodrawer-navigation"
                                                                            aria-controls="videodrawer-navigation"
                                                                            className="inline-flex items-center"
                                                                        >
                                                                            <a href="#">
                                                                                {" "}
                                                                                <img
                                                                                    src="/images/icons/screen-message.svg"
                                                                                    alt=""
                                                                                />
                                                                            </a>
                                                                        </button>
                                                                    </div>
                                                                    <div className="">
                                                                        <div className="mt-[-20px]">
                                                                            <span className="text-[#020F21] text-2xl font-Nunito font-semibold text-center">
                                                                                Messages
                                                                            </span>
                                                                        </div>
                                                                        <p className="md:max-w-[317px] text-[#818A98] text-xs font-Nunito font-normal text-center pt-[7px] opacity-90">
                                                                            You can chat here with other members during the
                                                                            meeting and they will be deleted after the
                                                                            meeting.
                                                                        </p>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="#">
                                                                            <img src="/images/Add user.png" alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col gap-[37px]">
                                                                    <div className="flex gap-4 mt-[42px]">
                                                                        <div className="">
                                                                            <img
                                                                                src="/images/pro 2 3.png"
                                                                                alt=""
                                                                                className="rounded-full"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col max-w-[237px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
                                                                            <div className="flex justify-between">
                                                                                <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                                                    you
                                                                                </div>
                                                                                <div className="text-xs text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                                                    9:44
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-justify text-xs font-Nunito font-normal text-white opacity-80">
                                                                                Hii! I am Ria fro Mumbai it’s nice to meet you
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-end gap-[12.39px]">
                                                                        <div
                                                                            className="flex flex-col max-w-[183.529px] bg-white gap-[3.1px] rounded-[6.195px] pt-[6.2px] px-[12.39px] pb-[6.969px]"
                                                                            style={{
                                                                                boxShadow:
                                                                                    "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                                                                            }}
                                                                        >
                                                                            <div className="flex justify-between">
                                                                                <div className="text-[9.293px] text-[#B9BEC6] font-normal font-Nunito opacity-80">
                                                                                    9:20
                                                                                </div>
                                                                                <div className="text-xs text-[#176DEE] font-normal font-Nunito opacity-80">
                                                                                    Amir
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-justify text-[9.293px] font-Nunito font-normal text-[#020F21] pr-[10px]">
                                                                                Hii Ria, Well how’s the weather in Mumbai?{" "}
                                                                            </div>
                                                                        </div>
                                                                        <div className="">
                                                                            <img
                                                                                src="/images/amir.png"
                                                                                alt=""
                                                                                className="rounded-full"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col justify-end">
                                                                <div className="w-full md:max-w-[850px] mx-auto h-16 flex py-[14px] px-[10px] rounded-[10px] bg-white">
                                                                    <div className="flex gap-1 mr-[29px]">
                                                                        <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                                            <img
                                                                                src="/images/icons/Happy.svg"
                                                                                alt=""
                                                                                className="w-[18px] tab:w-auto"
                                                                            />
                                                                        </div>
                                                                        <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                                            <img
                                                                                src="/images/icons/microphone-2.svg"
                                                                                alt=""
                                                                                className="w-[18px] tab:w-auto"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="w-[1px] h-[38px]"
                                                                        style={{ background: "rgba(51, 51, 51, 0.35)" }}
                                                                    />
                                                                    <form
                                                                        className="flex justify-between gap-10 w-full ml-[5px]"
                                                                        role="search"
                                                                    >
                                                                        <div className="contents">
                                                                            <input
                                                                                type="search"
                                                                                aria-label="search"
                                                                                placeholder="Write a message..."
                                                                                className="w-full md:w-[152px] border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                                                                            />
                                                                        </div>
                                                                        <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                                                                            <a href="#">
                                                                                <img
                                                                                    src="/images/icons/message-send.svg"
                                                                                    alt=""
                                                                                    className="fa-rocket"
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* md-screen-close */}
                                            </div>
                                        </div>
                                        {/*  */}
                                        <p className="text-center text-[#818A98] text-xs font-Nunito font-normal pt-[7px]  opacity-90">
                                            You can chat here with other members during the meeting and they
                                            will be deleted after the meeting.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-[27px]  mt-[42px]">
                                        <div className="flex justify-between gap-4">
                                            <div className="">
                                                <img
                                                    src="/images/pro 2 3.png"
                                                    alt=""
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="max-w-[237px] flex flex-col items-start gap-2 py-2 px-4 rounded-lg bg-[#176DEE]">
                                                <div className="flex justify-between w-full">
                                                    <div className="text-xs text-[#F9FAFB] font-Nunito font-normal  opacity-80">
                                                        You
                                                    </div>
                                                    <div className="text-xs text-[#F9FAFB] font-Nunito font-normal text-right  opacity-80">
                                                        9:44
                                                    </div>
                                                </div>
                                                <div className="mt-1">
                                                    <p className="text-justify text-xs text-white font-Nunito font-normal  opacity-80">
                                                        Hii! I am Ria fro Mumbai it’s nice to meet you
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="max-w-[239px] gap-[12.39px] flex justify-end text-start">
                                                <div
                                                    className="max-w-[183px] flex flex-col gap-[6.195px] pt-[6.195px] pr-[12.39px] pb-[6.969px] pl-[12.39px] text-start rounded-[6.195px] bg-white"
                                                    style={{
                                                        boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                                                    }}
                                                >
                                                    <div className="flex justify-between w-full">
                                                        <div className="text-[9.293px] text-[#B9BEC6] font-Nunito font-normal text-right  opacity-80">
                                                            9.20
                                                        </div>
                                                        <div className="text-[9.293px] text-[#176DEE] font-Nunito font-normal  opacity-80">
                                                            Amir
                                                        </div>
                                                    </div>
                                                    <div className="mt-[3.1px]">
                                                        <p className="text-[9.293px] text-[#020F21] font-Nunito font-normal  opacity-80">
                                                            Hii Ria, Well how’s the weather in Mumbai?{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <img src="/images/amir.png" alt="" className="rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="w-full md:max-w-[338px] mx-auto h-16 flex py-[14px] px-[10px] bg-white">
                                        <div className="flex gap-1 mr-2">
                                            <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                <img
                                                    src="/images/icons/Happy.svg"
                                                    alt=""
                                                    className="w-[18px] tab:w-auto"
                                                />
                                            </div>
                                            <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                                <img
                                                    src="/images/icons/microphone-2.svg"
                                                    alt=""
                                                    className="w-[18px] tab:w-auto"
                                                />
                                            </div>
                                        </div>
                                        <form
                                            className="flex gap-10 border-l border-[#9DA4AF] pl-[19px] w-full"
                                            role="search"
                                        >
                                            <div className="contents">
                                                <input
                                                    type="search"
                                                    aria-label="search"
                                                    placeholder="Write a message..."
                                                    className="w-full md:w-[135px] border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                                                />
                                            </div>
                                            <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                                                <a href="#">
                                                    <img
                                                        src="/images/icons/message-send.svg"
                                                        alt=""
                                                        className="fa-rocket"
                                                    />
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* responsive-chat-screen-with-v-call-close */}
                    </section>
                </div>
            {/* Video Screen Arrangement V2-close */}


            {/* responsive-chat-screen-with-v-call-open */}
           
                <div className={ `${screenResShow == 'multiple' ? 'md:hidden block': 'hidden'}  `}>
                <div
  id="videochat"
  className="videocall flex flex-col gap-[22px] md:hidden w-full max-w-[1440px] h-screen md:h-auto rounded-[20px] bg-white pt-3 tab:pt-5 pl-3 tab:pl-[22px] pb-[10px] md:pb-0 md:pt-0 pr-[11px] tab:pr-6"
>
  <div
    className="md:hidden flex flex-col justify-between h-screen md:ml-[66px] rounded-[10px] bg-no-repeat pt-[10px] tab:pt-5 pr-[15px] pl-[18px] tab:pl-[31px] tab:pr-[33px] pb-[14px] tab:pb-[30px]"
    style={{
      backgroundImage: "url(/images/chat-with-v-call.png)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      gap: '12px'
    }}
  >
    <div className="flex justify-between">
      <div className="tab:mt-[25px]">
        <img
          src="/images/v call-logo.png"
          alt=""
          className="w-[88px] h-7 tab:w-auto tab:h-[42px]"
        />
      </div>
      <div className="flex flex-col justify-end items-end">
        <p
            onClick={()=>setPepIconToggle(!pepIconToggle)}
          className=" w-[30px] tab:w-[51px] h-[30px] tab:h-[51px] relative bg-white rounded-full flex items-center justify-center"
        >
          {" "}
          <img
            src="/images/icons/pepicons-pop_dots-y.svg"
            alt=""
            className="threedot relative z-50 w-6 tab:w-auto"
          />
        </p>
        <ul className={` ${pepIconToggle ? 'flex': 'hidden'} absolute top-[7%] tab:top-[13.8%]  flex-col z-10 bg-white py-[10px] tab:pt-[14px] tab:pb-[12px] pl-[25px] tab:pl-[20px] pr-10 tab:pr-12 font-Nunito rounded-tl-[20px] rounded-b-[20px] mr-[13px] tab:mr-5`}>
          <li>
            <a href="#" className="tab:text-lg">
              Report user
            </a>
          </li>
          <li>
            <a href="#" className="tab:text-lg">
              Open chat
            </a>
          </li>
          <li>
            <a href="#" className="tab:text-lg">
              End conversation
            </a>
          </li>
        </ul>
      </div>
      {/* <div class="mt-[-112px] tab:mt-[-120px]">
      <img src="/images/v call-logo.png" alt="" class="w-[88px] tab:w-auto">
  </div> */}
    </div>
    <div className="flex justify-end">
      <div className="flex flex-col justify-end">
        <img
          src="/images/v call-img.png"
          alt=""
          className="w-[79px] h-[83px] tab:w-auto tab:h-auto"
        />
      </div>
    </div>
  </div>
  <div className="md:hidden flex flex-col justify-between pt-[17px] tab:pt-[31px] tab:pr-5 md:pb-8">
    <div className="text-center mb-[97px]">
      <div className="flex  items-center">
        <div className="flex ml-[-10px] tab:ml-[-15px]">
          <a href="#">
            <img
              src="/images/chat-screen-prev.png"
              alt=""
              className="w-[47px] tab:w-[87px]"
            />
          </a>
        </div>
        <div className="w-[47px] tab:w-[73px] tab:h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
          <img src="/images/screen-avt.png" alt="" className="rounded-[73px]" />
        </div>
        <div className="ms-auto">
          <p
            onClick={()=>{setScreentResShow('fullRes')}}
            className=" bg-[#EEE] p-[9px] flex items-center justify-center rounded-[100px]"
          >
            <img
              id="videoScreen"
              src="/images/fluent_video.png"
              alt=""
              className="video-icon w-[30px] tab:w-auto"
            />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[39px]">
        <div className="flex justify-between gap-4 mt-[41px]">
          <div className="">
            <img
              src="/images/pro 2 3.png"
              alt=""
              className="rounded-full w-[56px] tab:w-[94px]"
            />
          </div>
          <div className="flex flex-col w-[237px] tab:w-[530px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
            <div className="flex justify-between">
              <div className="text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                you
              </div>
              <div className="tab:hidden text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                9:44
              </div>
              <div className="hidden tab:block text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                9:20
              </div>
            </div>
            <div className="max-w-[493px] h-[55px] text-justify text-xs tab:text-base font-Nunito font-normal text-white opacity-70">
              Hii! I am Ria fro Mumbai it’s nice to meet you
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-[9.94px] tab:gap-8">
          <div
            className="flex flex-col w-[183.529px] tab:w-[404px] bg-white gap-[3.1px] rounded-[6.195px] px-[12.39px] py-[6.195px] tab:pt-[6.2px]  tab:pr-[12.39px] tab:pb-[6.969px]"
            style={{ boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)" }}
          >
            <div className="flex justify-between">
              <div className="tab:hidden text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                9:20
              </div>
              <div className="hidden tab:block text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                9:44
              </div>
              <div className="text-[9.293px] tab:text-base text-[#176DEE] font-normal font-Nunito opacity-80">
                Amir
              </div>
            </div>
            <div
              className="text-justify text-[9.293px] tab:text-[13.29px] font-Nunito font-normal text-[#020F21] pr-[10px]"
              style={{
                boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
              }}
            >
              Hii Ria, Well how’s the weather in Mumbai?{" "}
            </div>
          </div>
          <div className="">
            <img
              src="/images/amir.png"
              alt=""
              className="rounded-full w-12 tab:w-[94px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-end w-full">
      <div className="w-full  h-16 flex py-[14px] tab:px-[10px] rounded-[10px] bg-white">
        <div className="flex gap-1 mr-[5px] tab:mr-[29px]">
          <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
            <img
              src="/images/icons/Happy.svg"
              alt=""
              className="w-[18px] tab:w-auto"
            />
          </div>
          <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
            <img
              src="/images/icons/microphone-2.svg"
              alt=""
              className="w-[18px] tab:w-auto"
            />
          </div>
        </div>
        <div
          className="w-[1px] h-[38px]"
          style={{ background: "rgba(51, 51, 51, 0.35)" }}
        />
        <form
          className="flex justify-between tab:gap-10 w-full ml-[5px]"
          role="search"
        >
          <div className="contents">
            <input
              type="search"
              aria-label="search"
              placeholder="Write a message..."
              className="w-[80%] tab:w-full border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
            />
          </div>
          <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
            <a href="#">
              <img
                src="/images/icons/message-send.svg"
                alt=""
                className="fa-rocket"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
                </div>
                </div>
            
            {/* responsive-chat-screen-with-v-call-close */}

            {/* responsive-chat-screen-open */}
            
                <div className={ `${screenResShow == 'chat' ? 'md:hidden block': 'hidden'}  `}>
                    <div
                        id="fullChatScreen"
                        className="flex targetDiv w-full max-w-[1440px] h-screen rounded-[20px] bg-white"
                    >
                        <div className="w-full h-screen flex flex-col justify-between pt-[17px] pr-[14px]  tab:pt-[31px] pl-6 tab:pr-5 tab:pb-8">
                            <div className="text-center">
                                <div className="flex  items-center">
                                    <div className="flex">
                                        <p onClick={()=>{setScreentResShow('multiple')}}>
                                            <img
                                                
                                                src="/images/chat-screen-prev.png"
                                                alt=""
                                                className="fullChatScreen w-[47px] tab:w-[87px]"
                                            />
                                        </p>
                                    </div>
                                    <div className="w-[47px] tab:w-[73px] tab:h-[73px] rounded-[73px] border-[0.5px] border-[#DBDBDB]  hover:border-[3px] hover:border-[#0b78ff]">
                                        <img
                                            src="/images/screen-avt.png"
                                            alt=""
                                            className="rounded-[73px]"
                                        />
                                    </div>
                                    <div className="ms-auto">
                                        <p onClick={()=>{setScreentResShow('fullRes')}}>
                                            <img
                                                src="/images/fluent_video.png"
                                                alt=""
                                                className="w-[30px] tab:w-auto"
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[70px]">
                                    <div className="flex justify-between gap-4 mt-[93px]">
                                        <div className="">
                                            <img
                                                src="/images/pro 2 3.png"
                                                alt=""
                                                className="rounded-full w-[56px] tab:w-[94px]"
                                            />
                                        </div>
                                        <div className="flex flex-col w-[237px] tab:w-[530px] bg-[#176DEE] gap-[6px] rounded-lg py-2 px-4">
                                            <div className="flex justify-between">
                                                <div className="text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                    you
                                                </div>
                                                <div className="tab:hidden text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                    9:44
                                                </div>
                                                <div className="hidden tab:block text-xs tab:text-base text-[#F9FAFB] font-normal font-Nunito opacity-80">
                                                    9:20
                                                </div>
                                            </div>
                                            <div className="max-w-[493px] h-[55px] text-justify text-xs tab:text-base font-Nunito font-normal text-white opacity-80">
                                                Hii! I am Ria fro Mumbai it’s nice to meet you
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-[9.94px] tab:gap-8">
                                        <div
                                            className="flex flex-col w-[183.529px] tab:w-[404px] bg-white gap-[3.1px] rounded-[6.195px] px-[12.39px] py-[6.195px] tab:pt-[6.2px]  tab:pr-[12.39px] tab:pb-[6.969px]"
                                            style={{
                                                boxShadow: "0px 0px 54px 0px rgba(180, 180, 180, 0.25)"
                                            }}
                                        >
                                            <div className="flex justify-between">
                                                <div className="tab:hidden text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                                                    9:20
                                                </div>
                                                <div className="hidden tab:block text-[9.293px] tab:text-base text-[#B9BEC6] font-normal font-Nunito opacity-80">
                                                    9:44
                                                </div>
                                                <div className="text-[9.293px] tab:text-base text-[#176DEE] font-normal font-Nunito opacity-80">
                                                    Amir
                                                </div>
                                            </div>
                                            <div className="text-justify text-[9.293px] tab:text-[13.29px] font-Nunito font-normal text-[#020F21] pr-[10px]">
                                                Hii Ria, Well how’s the weather in Mumbai?{" "}
                                            </div>
                                        </div>
                                        <div className="">
                                            <img
                                                src="/images/amir.png"
                                                alt=""
                                                className="rounded-full w-12 tab:w-[94px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end w-full">
                                <div className="w-full  h-16 flex py-[14px] tab:px-[10px] rounded-[10px] bg-white">
                                    <div className="flex gap-1 mr-[5px] tab:mr-[29px]">
                                        <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                            <img
                                                src="/images/icons/Happy.svg"
                                                alt=""
                                                className="w-[18px] tab:w-auto"
                                            />
                                        </div>
                                        <div className="w-9 h-9 flex justify-center items-center border border-[#BFBFBF] rounded-[7px] bg-white">
                                            <img
                                                src="/images/icons/microphone-2.svg"
                                                alt=""
                                                className="w-[18px] tab:w-auto"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="w-[1px] h-[38px]"
                                        style={{ background: "rgba(51, 51, 51, 0.35)" }}
                                    />
                                    <form
                                        className="flex justify-between tab:gap-10 w-full ml-[5px]"
                                        role="search"
                                    >
                                        <div className="contents">
                                            <input
                                                type="search"
                                                aria-label="search"
                                                placeholder="Write a message..."
                                                className="w-[80%] tab:w-full border-none  focus:outline-none font-Inter font-normal text-sm text-[#9DA4AF]"
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-[7px] bg-[#176DEE] flex justify-center items-center">
                                            <a href="#">
                                                <img
                                                    src="/images/icons/message-send.svg"
                                                    alt=""
                                                    className="fa-rocket"
                                                />
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* responsive-chat-screen-close */}

           {/* responsive-video-calling-open */}
                <div className={ `${screenResShow == 'fullRes' ? 'md:hidden block': 'hidden'}  `}>
                    <section className="md:hidden max-w-[1440px] targetDiv flex items-center  mx-auto bg-black md:bg-white overflow-hidden">
                        {/* responsive-video-calling-open */}
                        <div
                            id="fullScreen"
                            className={`targetDiv  fullScreen w-full md:h-screen items-center flex flex-col justify-end bg-cover bg-no-repeat bg-center tab:pb-[1.5px]`}
                            style={{ backgroundImage: "url(/images/v-call-bg.png)" }}
                        >
                            <div className=" md:hidden w-full h-screen flex flex-col justify-between">
                                <div className="py-[22px] px-[18px] tab:p-[53px]">
                                    <img
                                        src="/images/v call-logo.png"
                                        alt=""
                                        className="w-[88px] tab:w-auto"
                                    />
                                </div>
                                <div className=" flex flex-col justify-end ">
                                    <div className="flex justify-between pr-[14px] tab:pr-[34px]  rounded-[20px]">
                                        <div>
                                            {/* intesrest */}
                                            <div
                                                className={`${openIntentest ? '' : 'hidden'}   tab:mt-20 mt-[15px] tab:ml-10 ml-5`}
                                                id="twoavtarShow"
                                            >
                                                {/* popup */}
                                                <div
                                                    className="max-w-[12rem]  tab:max-w-[251px] h-[126px] rounded-[10px] pt-4 pb-[23px] px-2 overflow-y-scroll"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.50)",
                                                        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                                                        backdropFilter: "blur(25px)"
                                                    }}
                                                >
                                                    <div className="flex flex-col gap-3 font-Assistant max-w-[620px]">
                                                        {/* checkbox */}
                                                        <ul className="flex flex-wrap justify-center items-center gap-3">
                                                            {/* 1 */}
                                                            <li className="inline-block">
                                                                <input
                                                                    type="checkbox"
                                                                    id="mobmyCheckbox1"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="mobmyCheckbox1"
                                                                    className="
                                                w-[65px] tab:w-[82px] h-9 relative flex justify-center items-center bg-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[65px] tab:before:w-[82px] before:h-9 before:duration-[.4s] before:scale-0"
                                                                >
                                                                    <i className=" fa-solid fa-plus text-[#484848] text-xs tab:text-lg mr-[10px]" />
                                                                    <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                        🎨 Art
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            {/* 2 */}
                                                            <li className="inline-block">
                                                                <input
                                                                    type="checkbox"
                                                                    id="mobmyCheckbox2"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="mobmyCheckbox2"
                                                                    className="
                                            w-[110px] tab:w-[99px] h-9 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px] tab:before:w-[99px]   before:h-9 before:duration-[.4s] before:scale-0"
                                                                >
                                                                    <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                    <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                        🖌️ Poetry
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            {/* 3*/}
                                                            <li className="inline-block">
                                                                <input
                                                                    type="checkbox"
                                                                    id="mobmyCheckbox3"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="mobmyCheckbox3"
                                                                    className="
                                                w-[110px] tab:w-[95px]  h-[35px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px]  tab:before:w-[95px] before:h-[35px] before:duration-[.4s] before:scale-0"
                                                                >
                                                                    <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                    <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                        😜 Jokes
                                                                    </span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <ul className="flex flex-wrap  justify-center items-center gap-3">
                                                            {/* 1 */}
                                                            <li className="inline-block">
                                                                <input
                                                                    type="checkbox"
                                                                    id="mobmyCheckbox4"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="mobmyCheckbox4"
                                                                    className="
                                                w-[110px] tab:w-[97px]  h-[30px] relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px] tab:before:w-[97px]  before:h-[30px] before:duration-[.4s] before:scale-0"
                                                                >
                                                                    <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                    <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                        🍿 Cinema
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            {/* 2 */}
                                                            <li className="inline-block">
                                                                <input
                                                                    type="checkbox"
                                                                    id="mobmyCheckbox5"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="mobmyCheckbox5"
                                                                    className="
                                                w-[85px] tab:w-[101px] h-8 relative  flex justify-center items-center z-10 bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px] tab:before:w-[101px]  before:h-8 before:duration-[.4s] before:scale-0"
                                                                >
                                                                    <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                    <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                        💃🏻 Dance
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            {/* 3*/}
                                                            <li className="inline-block">
                                                                <input
                                                                    type="checkbox"
                                                                    id="mobmyCheckbox6"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="mobmyCheckbox6"
                                                                    className="
                                                w-[110px] tab:w-[104px]  h-8 relative  flex justify-center items-center z-10  bg-[#FDFBF9] text-[#484848] text-center rounded-[10px] border border-[#A2A09D] cursor-pointer focus:border-[#4A9BFF] before:block before:absolute before:top-0 before:left-0 before:rounded-[10px] before:w-[85px]  tab:before:w-[104px] before:h-8 before:duration-[.4s] before:scale-0"
                                                                >
                                                                    <i className="fa-solid fa-plus text-[#484848] text-xs tab:text-lg" />
                                                                    <span className="text-[17px]  font-semibold leading-[22px] tracking-[-0.408px] z-[-1]">
                                                                        🎮 Gaming
                                                                    </span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* popup */}
                                                </div>
                                            </div>
                                            {/* avatar */}
                                            <div
                                                className={`${openAvatar ? '' : 'hidden'}  tab:mt-20 mt-[15px] tab:ml-10 ml-5`}
                                                id="oneintersetShow"
                                            >
                                                <div
                                                    className="xm:max-w-[12rem] max-w-[9rem] tab:max-w-[232px]  h-[126px] flex flex-col gap-[5px] rounded-[10px] pt-[6px] px-5 overflow-y-scroll"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.50)",
                                                        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                                                        backdropFilter: "blur(25px)"
                                                    }}
                                                >
                                                    <div className="flex gap-3">
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_one.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avtar_Two.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_Three.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_six.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_seven.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_eight.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/open-elavan.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/open-twelve.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/open-thirteen.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                    <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_nine.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/open-fourtine.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/open-elavan.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                    <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_ten.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_Four.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                        <div className="border border-[#DBDBDB] rounded-[45px] w-[45px] ">
                                                            <img
                                                                src="/images/avatar_Five.png"
                                                                alt=""
                                                                className="rounded-[45px]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            onClick={()=>{setScreentResShow('multiple')}}
                                            src="/images/v call-img.png"
                                            alt=""
                                            className="vcall w-[140px] h-[147px] tab:w-[224px] tab:h-[225px] ps-2"
                                        />
                                    </div>
                                    <div
                                        className="bg-cover  bg-no-repeat md:bg-transparent"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)"
                                        }}
                                    >
                                        <div className="flex justify-center items-center mt-[34px] mb-[2px] tab:mb-[35px] tab:mt-[52px] px-[5px] tab:px-[30px] calling ">
                                            <div className="flex gap-[5px] tab:gap-16">
                                                <div className="redButton w-12 h-12 tab:w-[65px] tab:h-[66px] rounded-[50%] bg-white flex justify-center items-center">
                                                    <img
                                                        src="/images/icons/small-video-slash.svg"
                                                        alt=""
                                                        className="img w-6 tab:w-auto"
                                                    />
                                                </div>
                                                <div className="mute w-12 h-12 tab:w-[65px] tab:h-[66px] rounded-[50%] bg-white flex justify-center items-center">
                                                    <img
                                                        src="/images/icons/small-microphone-2.svg"
                                                        alt=""
                                                        className="muteimg w-6 tab:w-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="hang-up w-[150px] h-12 tab:w-[159px] tab:h-[63px] bg-[#F1414F] rounded-[28px] mx-[5px] tab:ml-[74px] tab:mr-16 flex justify-center items-center">
                                                <img
                                                    src="/images/icons/small-hang-up-48 1.svg"
                                                    alt=""
                                                    className="hangimg w-auto"
                                                />
                                            </div>
                                            <div className="flex items-end gap-[10px] tab:gap-[58px]">
                                                {/*interest-button */}
                                                <div className="">
                                                    <div className="w-10 tab:w-16 h-10 tab:h-[55px] rounded-[7px] bg-[#007AFF] flex justify-center items-center">
                                                        <button id="twoavtar" className="block" type="button" onClick={() => hadndleAvatarFunc('openAvatar', openAvatar)}>
                                                            <img
                                                                src="/images/icons/emoji-happy.svg"
                                                                alt=""
                                                                className="w-6 tab:w-auto"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/*interest-button-close */}
                                                {/* avatar-button-open*/}
                                                <div className="">
                                                    <div className="flex items-end ">
                                                        <button id="oneinterset" className="block" type="button" onClick={() => hadndleAvatarFunc('openIntentest', openIntentest)}>
                                                            <img
                                                                src="/images/icons/small-light.svg"
                                                                alt=""
                                                                className="w-9 h-9 tab:w-[67px] tab:h-[55px]"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/*avatar-button-close */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* responsive-video-calling-close */}
                    </section>
                </div>
        </div>
    )
}

export default Two_Avatar_View