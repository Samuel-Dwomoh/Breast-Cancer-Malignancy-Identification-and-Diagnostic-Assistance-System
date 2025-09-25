import React from "react";
import logo from "../assets/logo.png"
import { BackgroundLines } from "./ui/background-lines";


function Header(){



    return(
        <>
    <div className="flex mx-12 justify-between px-4 py-1 absolute z-50 w-[95%]">

        <div className="flex items-center gap-x-4">
            <a href="#"><img src={logo} alt="logo" className="w-20 -mt-1" /></a>
            <h4 className="uppercase text-pink-500 mt-2 text-lg font-bold">Breast Cancer Malignancy Identification and Diagnostic Assistance System</h4>
        </div>

        <nav className="flex gap-6 items-center text-pink-500 ">
            <ul><a href="#" className="bg-pink-500 py-3 text-white px-2 rounded-sm transition-all duration-400">Diagnostic Interface</a></ul>
            <ul><a href="#" className="hover:text-white hover:bg-pink-500 hover:py-3 hover:px-2 hover:rounded-sm transition-all duration-400">Results Dashboard</a></ul>
            <ul><a href="#" className="hover:text-white hover:bg-pink-500 hover:py-3 hover:px-2 hover:rounded-sm transition-all duration-400">Clinical Evidence</a></ul>
        </nav>
        

    </div>
        



           {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 -mt-16">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines> */}

    
    </>
    )
}
export default Header;