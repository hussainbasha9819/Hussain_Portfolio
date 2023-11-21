import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const COLOR=()=>{
        document.getElementById("SPAN_FLEX").style.display==="flex"?
        document.getElementById("SPAN_FLEX").style.display="none":
        document.getElementById("SPAN_FLEX").style.display="flex";

        document.getElementById("SVG_FLEX").style.display==="flex"?
        document.getElementById("SVG_FLEX").style.display="none":
        document.getElementById("SVG_FLEX").style.display="flex";

        document.getElementById("ICON_NONE").style.display==="none"?
        document.getElementById("ICON_NONE").style.display="flex":
        document.getElementById("ICON_NONE").style.display="none";

        document.getElementById("SPAN_NONE").style.display==="none"?
        document.getElementById("SPAN_NONE").style.display="flex":
        document.getElementById("SPAN_NONE").style.display="none";

        document.getElementById("color").style.backgroundColor==="black"?
        document.getElementById("color").style.backgroundColor="white":
        document.getElementById("color").style.backgroundColor="black";

        document.getElementById("color1").style.backgroundColor==="black"?
        document.getElementById("color1").style.backgroundColor="white":
        document.getElementById("color1").style.backgroundColor="black";

        document.getElementById("Experience").style.backgroundColor==="black"?
        document.getElementById("Experience").style.backgroundColor="white":
        document.getElementById("Experience").style.backgroundColor="black";

        document.getElementById("Testimonial").style.backgroundColor==="black"?
        document.getElementById("Testimonial").style.backgroundColor="white":
        document.getElementById("Testimonial").style.backgroundColor="black";

        document.getElementById("color2").style.backgroundColor==="black"?
        document.getElementById("color2").style.backgroundColor="white":
        document.getElementById("color2").style.backgroundColor="black";

        document.getElementById("color3").style.backgroundColor==="black"?
        document.getElementById("color3").style.backgroundColor="white":
        document.getElementById("color3").style.backgroundColor="black";

        document.getElementById("Hussain").style.color==="white"?
        document.getElementById("Hussain").style.color="black":
        document.getElementById("Hussain").style.color="white";

        document.getElementById("Hussain1").style.color==="white"?
        document.getElementById("Hussain1").style.color="black":
        document.getElementById("Hussain1").style.color="white";

        document.getElementById("text_color").style.color==="white"?
        document.getElementById("text_color").style.color="black":
        document.getElementById("text_color").style.color="white";

        document.getElementById("text_p").style.color==="white"?
        document.getElementById("text_p").style.color="black":
        document.getElementById("text_p").style.color="white";

        document.getElementById("text_p2").style.color==="white"?
        document.getElementById("text_p2").style.color="black":
        document.getElementById("text_p2").style.color="white";

        document.getElementById("text_p3").style.color==="white"?
        document.getElementById("text_p3").style.color="black":
        document.getElementById("text_p3").style.color="white";

       document.getElementById("COL_BACK").style.backgroundColor==="white"?
       document.getElementById("COL_BACK").style.backgroundColor="white":
       document.getElementById("COL_BACK").style.backgroundColor="white";
       
       document.getElementById("COL_BACK2").style.backgroundColor==="white"?
       document.getElementById("COL_BACK2").style.backgroundColor="white":
       document.getElementById("COL_BACK2").style.backgroundColor="white";
    
       document.getElementById("COL_BACK3").style.backgroundColor==="white"?
       document.getElementById("COL_BACK3").style.backgroundColor="white":
       document.getElementById("COL_BACK3").style.backgroundColor="white";
    
       document.getElementById("H2_COL").style.color==="white"?
       document.getElementById("H2_COL").style.color="black":
       document.getElementById("H2_COL").style.color="white";

    }
  return (
<>
<div id='color' className="w-full h-24 flex border-b-2 border-gray-400  phone:w-full phone:h-24 phone:flex  ">
    <div className="Left w-[40%] phone:w-[60%] phone:h-24 phone:pl-[0rem] phone:gap-1 phone:flex phone:items-center phone:justify-center h-24 flex gap-[5rem] pl-[4rem] items-center justify-start ">
        <h1 id='Hussain' className='text-2xl phone:text-[20px] font-bold '>Hussain Basha </h1>
        <span onClick={COLOR} className='SP phone:w-[25%] phone:h-[30px] phone:gap-1 phone:flex phone:items-center phone:justify-center w-[13%] h-[30px] border-2  flex items-center justify-center gap-1 rounded-full '>
        <span id='SPAN_FLEX' className='w-[20px] h-[20px] bg-[#fca61f] hidden rounded-full '></span>
        <i id='ICON_NONE' className="fa-regular fa-moon text-[#fca61f] text-xl "></i>
        <span id='SPAN_NONE' className='w-[20px] h-[20px] bg-[#fca61f] rounded-full '></span>
        <svg id='SVG_FLEX' className='hidden text-white' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>
        </span>
    </div>
    <div id='Hussain1' className="Right w-[60%] phone:w-[40%] phone:h-24 phone:flex phone:items-center phone:gap-1 phone:justify-center h-24 flex items-center justify-evenly ">
        <span className='font-bold phone:hidden '>Home</span>
        <span className='font-bold phone:hidden '><a href="#Experience">Experience</a></span>
            <span className=' hover:text-blue-600 hover:font-bold font-bold phone:text-[10px] '>
            <Link className='phone:flex' to="/Portfolio" >
                Portfolio
            </Link>
                </span>
        <span className='font-bold phone:hidden '><a href="">Testimonial</a></span>
        <button className='BTN p-3 shadow-lg shadow-[#fca61f]  rounded-full'><a href="#color2">Contact </a></button>
    </div>
</div>
</> 
 )

}

export default Home