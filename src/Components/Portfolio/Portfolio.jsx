import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Portfolio = () => {
    return (
        <>
            <div className="BG_COL w-full phone:w-full phone:h-screen phone:flex phone:flex-col  h-screen flex flex-col ">
                <div className="NAV w-full phone:w-full phone:h-[60px] phone:flex h-[80px] border-b-2 border-gray-300 flex  ">
                    <div className="Left w-[40%] phone:w-[50%] phone:h-[60px] phone:flex phone:items-center phone:justify-center phone:pl-[0rem] h-[80px] flex pl-[4rem] gap-2 items-center justify-start ">
                        <span className='w-[50px] h-[50px] phone:w-[25px] phone:h-[25px] phone:rounded-full phone:bg-black phone:flex phone:items-center phone:justify-center  rounded-full bg-black flex items-center justify-center  '>
                            <i className="fa-solid fa-envelope phone:text-[15px] text-2xl text-pink-500 "></i>
                        </span>
                        <p className='text-[20px] phone:text-[10px] phone:font-bold  ' >hussainvali@gmail.com</p>
                    </div>
                    <div className="Right w-[60%] phone:w-[50%] phone:text-[10px] phone:h-[60px] phone:hidden phone:items-center phone:justify-evenly  font-bold text-lg h-[80px] flex items-center justify-evenly  ">
                        <span><a href="#About">About me</a></span>
                        <span>Skills</span>
                        <span>Work</span>
                        <span><a href="#Contact">Contact</a></span>
                    </div>
                </div>
                <div className="w-full phone:w-full phone:h-[90vh]  phone:flex phone:flex-col h-screen flex flex-col ">
                    <div className="w-full phone:w-full phone:h-[10vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center ">
                        <h1 className='TEXT_H1 text-[70px] phone:text-[30px] text-white font-bold '>I am A Creative Coder</h1>
                    </div>
                    <div className="w-full phone:w-full phone:h-[80vh]  phone:flex phone:flex-col phone:items-center phone:justify-center  phone:pl-[1rem] h-[65vh] flex  items-end pl-[4rem] ">
                        <div className="DIV_AN w-[50%] phone:w-[97%] phone:h-[45vh]  phone:flex phone:flex-col h-[50vh]  flex flex-col ">
                            <span className='w-full phone:w-full phone:flex  phone:text-lg flex phone:gap-1 text-2xl text-white '>
                                <i className="fa-solid fa-hand-holding-heart text-purple-400 phone:text-lg text-2xl"></i>
                                <p className='flex phone:gap-1 gap-1 '>Hi, I Am <h1 className='font-bold'>Hussain Basha</h1></p>
                            </span>
                            <span className='w-full phone:w-full phone:flex phone:flex-col flex flex-col text-white text-xl '>
                                <p className='flex phone:flex phone:text-[13px] phone:gap-1 '><h1 className='font-bold'>Frontend Developer </h1>with high level of experience in web</p>
                                <p className='phone:text-[13px] '>development and designing , producting the Quality work.</p>

                            </span>
                            <div className="w-full phone:w-full phone:h-[25vh] phone:gap-5   phone:flex h-[25vh] gap-10  flex ">
                                <div className="w-[45%]  h-[25vh] flex  ">
                                    <span className='w-[35%] h-[25vh] flex items-center justify-center '>
                                        <h1 className='text-white text-[40px] font-bold '>2+</h1>
                                    </span>
                                    <span className='w-[65%] h-[25vh] text-white text-[15px]    flex flex-col items-start justify-center '>
                                        <p>SUCCESSFULLY</p>
                                        <p>COMPLETED</p>
                                        <p>PROJECTS</p>
                                    </span>
                                </div>
                                <div className="w-[40%]  h-[25vh] flex ">
                                    <span className='w-[35%] h-[25vh] flex items-center justify-center '>
                                        <h1 className='text-white text-[40px] font-bold '>1</h1>
                                    </span>
                                    <span className='w-[65%] h-[25vh] text-white text-[15px] flex flex-col items-start justify-center '>
                                        <p>YEARS OF</p>
                                        <p>EXPERIENCE</p>

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[20%] h-[50vh] phone:flex phone:w-[97%] phone:h-[20vh]   flex items-center justify-start ">
                            <span className='w-[150px] h-[150px] phone:w-[120px] phone:h-[120px] phone:rounded-full rounded-full flex flex-col bg-white items-center justify-center  '>
                                <a href="#Contact"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADISURBVHgB7dbhDcIgEAXgwwmASTqCI3STjiCdTEdwBCdgBTw1GtP443H3av/0JYSmueQjFyCIbJSAFsYYpxDCKKRAsKJHRc9CzAGsu+q4CTE9rY46DWKIdmvSaTTB1uh6TwqX5X+01Sz0sjq8RPV7bq3Nq8K/0Fpr+a6hwwhKh1GUCvegNLgXpcAW1A1bURfsQc2wFzXBDLQbZqFdMBOFYTYKwWQUe8k80JRSe4+ccxFn4ivDX1FkVTu6o+48z7Gezc/2ZlwOSO6M+3y1SDzwLwAAAABJRU5ErkJggg==" alt="" class="w-[20px]" /></a>
                                <p className='text-xl '> <a href="#Contact">Hire Me</a></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='About' className="BG_COL2 w-full phone:flex phone:w-full phone:h-screen phone:pl-[1rem]  h-screen flex pl-[4rem]  ">
                <div className="w-[70%] phone:w-[90%] phone:h-screen phone:flex phone:flex-col phone:gap-5  h-screen flex flex-col gap-11 ">
                    <div className="w-full phone:w-full phone:flex phone:gap-3 mt-2 phone:flex-col flex flex-col ">
                        <h1 className='text-[50px] phone:text-[20px] phone:font-bold ' >A PRODUCT DEVELOPER</h1>
                        <span className='flex text-[50px] phone:text-[20px] phone:font-bold '>BASED <img className='w-[150px] phone:w-[100px] phone:h-[30px] phone:mt-0 h-[60px] mt-1 ' src="https://my-portfolio-701m8xg4e-samiransari.vercel.app/assets/indian-flag-9746b408.png" alt="" />  IN INDIA</span>
                    </div>
                    <p className='text-[20px] phone:text-[15px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <p className='text-[20px] phone:text-[15px] ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <p className='text-[20px] phone:text-[15px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
            </div>
            <div className="BG_COL3 w-full h-screen phone:w-full phone:h-[65vh]   phone:flex phone:flex-col flex flex-col ">
                <div className="w-full phone:w-full phone:flex phone:flex-col phone:items-center phone:justify-center flex flex-col items-center justify-center ">
                    <h1 className='text-[60px] phone:text-[30px] font-bold '>CLIENT SAYS</h1>
                    <p className='text-xl phone:text-[11px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className="w-full h-screen phone:w-full phone:h-[53vh]  phone:flex phone:items-center phone:justify-center flex items-center justify-center ">
                    <Carousel className='w-[60%] h-[60vh] phone:w-[60%] phone:h-[50vh] phone:flex phone:items-center phone:justify-center    flex items-center  justify-center    ' showThumbs={false} >
                        <div className='w-full phone:w-full phone:h-[45vh] phone:flex phone:flex-col phone:items-center phone:justify-center  h-[50vh] bg-white rounded-3xl   justify-center items-center flex flex-col '>
                            <span className='w-[130px] phone:w-[80px] phone:h-[80px] phone:rounded-full phone:items-center phone:justify-center h-[130px]  rounded-full  flex items-center justify-center  '>
                                <img className='  w-full h-full phone:w-full phone:h-full phone:rounded-full  flex rounded-full ' src="data:image/jpeg;base64,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" alt="" />
                            </span>
                            <p className='text-[18px] phone:text-[10px] p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className='w-[100%] phone:w-full phone:h-[45vh] phone:flex phone:flex-col phone:items-center phone:justify-center h-[50vh] bg-white rounded-3xl   justify-center items-center flex flex-col '>
                            <span className='w-[130px] phone:w-[80px] phone:h-[80px] phone:rounded-full phone:items-center phone:justify-center h-[130px]  rounded-full  flex items-center justify-center  '>
                                <img className='  w-full h-full  flex rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-bL-BV2UKFqHiJvLr5z0QarsmZtrZ6myWhXkeJNemEpMRCKgSLcZXvzgKfeQVFgaaoQ&usqp=CAU" alt="" />
                            </span>
                            <p className='text-[18px] phone:text-[10px] p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className='w-[100%] phone:w-full phone:h-[45vh] phone:flex phone:flex-col phone:items-center phone:justify-center h-[50vh] bg-white rounded-3xl   justify-center items-center flex flex-col '>
                            <span className='w-[130px] phone:w-[80px] phone:h-[80px] phone:rounded-full phone:items-center phone:justify-center h-[130px]  rounded-full  flex items-center justify-center  '>
                                <img className='  w-full phone:w-full phone:h-full phone:rounded-full h-full  flex rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIbD9QDVfsfj6J6XP-iwE6u6w0J7R2jw2mEfHr1mLRebY-m4yncHYes41SYfBR59l58E&usqp=CAU" alt="" />
                            </span>
                            <p className='text-[18px] phone:text-[10px] p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>


                    </Carousel>
                </div>
            </div>
            <div id='Contact' className="BG_COL4 w-full phone:w-full phone:h-[90vh] phone:flex-col phone:flex  h-screen flex flex-col items-center justify-center ">
                <div className="w-full phone:w-full phone:flex phone:flex-col phone:items-center phone:justify-center flex flex-col items-center justify-center ">
                    <h1 className='text-[70px] phone:text-[40px] font-bold '>LET'S TALK</h1>
                    <p className='text-xl phone:hidden '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <p className='text-xl phone:hidden  '>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
                <div className="w-[90%] phone:w-[90%] phone:h-[80vh]  phone:gap-5 phone:flex phone:flex-col    gap-6 h-screen flex flex-col ">
                    <div className="w-full mt-3 phone:w-full phone:flex-col flex justify-between ">
                        <div className="w-[45%] phone:w-full flex flex-col ">
                            <h1 className='text-lg phone:text-[12px] font-bold '>YOUR NAME*</h1>
                            <input className='py-8 phone:py-7 rounded-lg ' type="text" placeholder='Name....' />
                        </div>
                        <div className="w-[45%] flex  phone:w-full flex-col ">
                            <h1 className='text-lg phone:text-[12px] font-bold '>YOUR EMAIL*</h1>
                            <input className='py-8 phone:py-7 rounded-lg ' type="text" placeholder='Email....' />
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className='text-lg phone:text-[12px] font-bold ' >PLEASE TELL A BIT ABOUT YOURSELF & YOUR PROJECT*</h1>
                        <textarea id="description" rows="8" class="block p-2.5 w-full text-sm  bg-white rounded-lg " placeholder="Your projerct here"></textarea>
                    </div>
                    <button className='w-[20%] phone:w-[45%] phone:h-[50px] phone:text-[10px]  h-[70px] bg-black text-white font-bold rounded-lg '>Send Contact Request Now
                    </button>
                </div>
            </div>
            <div className="BG_COL4 w-full phone:w-full phone:h-[60px] phone:flex h-[80px]  flex  ">
                <div className="w-[40%] phone:w-[50%] phone:h-[60px] phone:flex phone:items-center phone:justify-center phone:pl-[0rem] h-[80px] flex pl-[4rem] gap-2 items-center justify-start ">
                    <span className='w-[50px] h-[50px] phone:w-[25px] phone:h-[25px] phone:rounded-full phone:bg-black phone:flex phone:items-center phone:justify-center  rounded-full bg-black flex items-center justify-center  '>
                        <i className="fa-solid fa-envelope phone:text-[15px] text-2xl text-pink-500 "></i>
                    </span>
                    <p className='text-[20px] phone:text-[10px] phone:font-bold  ' >hussainvali@gmail.com</p>
                </div>
                <div className="Right w-[60%] phone:w-[50%] phone:text-[10px] phone:h-[60px] phone:flex phone:items-center phone:justify-evenly  font-bold text-lg h-[80px] flex items-center justify-evenly  ">
                    <span><a href="#About">About me</a></span>
                    <span>Skills</span>
                    <span>Work</span>
                    <span><a href="#Contact">Contact</a></span>
                </div>
            </div>

        </>
    )
}

export default Portfolio