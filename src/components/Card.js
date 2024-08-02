import React, { useState } from "react"
import reviews from '../data';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Card = (props) => {
    const review = reviews;
    const [current, setCurrent] = useState(0);

    function rightHandler() {
        setCurrent((prev) => {
            if (prev === 4) {
                return 0;
            }
            else {
                return (prev + 1);
            }
        });
    }
    function leftHandler() {
        setCurrent((prev) => {
            if (prev === 0) {
                return (prev = 4);
            }
            else {
                return (prev - 1);
            }

        })

    }
    function surpriseHandler() {
       
       const randPoint=5*Math.random();
       const randInt=Math.floor(randPoint);
       setCurrent(randInt);
       console.log(randPoint)
       console.log(randInt);

    }
    return (
        <div className=" bg-white min-w-[360px] max-w-[30%] px-5  ">

            <div className="relative">
                <div className="bg-[#8a63f4] w-[88px] h-[88px] rounded-full absolute top-[-48px] left-1 "></div>

                <img src={review[current].image} alt="Loading" className="w-[84px] rounded-full absolute top-[-45px] " />

            </div>
            <div className="flex flex-col  items-center pt-10 pb-6 gap-4">

                <div>
                    <div className="font-extrabold text-center">
                        {review[current].name}
                    </div>
                    <div className="text-sm opacity-50 text-center mt-[-5px]">
                        {review[current].job}
                    </div>
                </div>
                <FaQuoteLeft className="opacity-50" />
                <div className="text-center opacity-80 text-sm">{review[current].text}</div>
                <FaQuoteRight className="opacity-50" />

                <div className="flex gap-4 mt-4">
                    <button onClick={leftHandler} className="opacity-50 hover:text-[#8a63f4]"><FaChevronLeft /></button>
                    <button onClick={rightHandler} className="opacity-50 hover:text-[#8a63f4]"><FaChevronRight />
                    </button>
                </div>
                <button onClick={surpriseHandler} className="bg-[#a47ff2] py-1 px-4 font-bold text-white rounded-md hover:bg-[#8a63f4] ">Surprise me</button>

            </div>
        </div>
    )
};

export default Card;
