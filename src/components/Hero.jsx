import React from "react";
import Header from './Header';
import { SpotlightPreview } from "./spotligh";

function Hero(){

    return(
        <>
        <section className="mt-54 px-4 absolute z-50 w-full">

            <div className="flex justify-center text-center">
                <h3 className="text-pink-500 text-6xl font-bold tracking-wide p-4">AI-Powered Breast <br/>
                <span className="text-pink-500 block mt-1 text-center"><span className="">Cancer</span> Detection</span></h3>
            </div>

            <div className="flex justify-center text-center mt-1">
                <p className="text-pink-500 text-xl font-medium">A Machine Learning Model to assist healthcare Professionals in early detection
                    <span className="block">and classification of breast cancer. Accurate, fast, and Reliable analysis</span>
                    <span className="block">for better patient outcomes.</span>
                </p>
            </div>
            <div className="flex justify-center gap-x-4 mt-6">
                <a href="" className="bg-pink-500 px-2 py-2 rounded-sm">Try Model</a>
                <a href="" className="bg-pink-500 px-2 py-2 rounded-sm">View Documentation</a>
            </div>
        </section>
        </>
    );
}
export default Hero;