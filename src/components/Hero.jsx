import React from "react";
import Header from './Header';
import { SpotlightPreview } from "./spotligh";
import ArrowRight  from "../assets/arrowRight.svg";
import documentation from "../assets/documentation.svg";

function Hero(){

    return(
        <>
        <section className="mt-60 px-4 absolute z-50 w-full">

            <div className="flex justify-center text-center">
                <h3 className="text-pink-500 text-6xl font-bold tracking-wide p-4">AI-Powered Breast Cancer<br/>
                <span className="text-pink-500 block mt-1 text-center">Detection Assistant</span></h3>
            </div>

            <div className="flex justify-center text-center mt-1">
                <p className="text-pink-500 text-xl font-medium">A Machine Learning Model to assist healthcare Professionals in early detection
                    <span className="block">and classification of breast cancer. Accurate, fast, and Reliable analysis</span>
                    <span className="block">for better patient outcomes.</span>
                </p>
            </div>

            <div className="flex justify-center gap-x-6 mt-8 text-white">
                <a href="" className="bg-pink-500 px-3 py-2 rounded-sm flex gap-x-2 hover:scale-105 transition delay-75">Try Model <img src={ArrowRight} alt="arrowRightLogo" /></a>
                <a href="" className="bg-pink-500 px-3 py-2 rounded-sm hover:scale-105 transition delay-75 flex gap-x-2 ">View Documentation <img src={documentation} alt="documentationLogo"></img></a>
            </div>

        </section>
        </>
    );
}
export default Hero;