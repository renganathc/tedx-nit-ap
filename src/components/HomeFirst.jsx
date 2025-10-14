import React from "react";
import to from "../../public/images/1(2).svg";
import Image from "next/image";
import GetYourTickets from "./GetYourTickets";
import { Syne } from "next/font/google";
import { CiUser } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
const syne = Syne({ subsets: ["latin"] });

export default function HomeFirst() {
  return (
    <>
      <div className="flex bg-no-repeat relative top-0 bg-[url('../../public/images/Home.png')] h-[100vh] w-full bg-cover">
        <div className="p-2 flex-wrap md:flex-nowrap flex-col md:flex-row sm:p-5 sm:pl-[3rem] sm:gap-6 flex justify-end items-end bg-gradient-to-tr from-black/10 via-black/60 to-tedred/10 backdrop-filter backdrop-blur-sm bg-opacity-45 h-full w-full ">
          {/* <div> */}
          {/* <div className="title text-[#FF2B06] text-2xl md:text-3xl">
            <span className="font-helvitica font-extrabold">
              TED<sup>x</sup>
            </span>
            <span className="text-white font-light">NITAndhraPradesh</span>
          </div> */}

          <div className="w-full h-max">
            <div className="text-white text-3xl w-full h-full justify-end items-start sm:text-5xl flex gap-5 flex-col">
              <p
                className={`text-[3.5rem] sm:text-[5.1rem] opacity-5 leading-none text-white font-bold ${syne.className}`}
              >
                ALCHEMY
              </p>
              <p
                className={`text-[3.5rem] sm:text-[5.1rem] opacity-20 leading-none text-white font-bold ${syne.className}`}
              >
                ALCHEMY
              </p>
              <p
                className={`text-[3.5rem] sm:text-[5.1rem] leading-none text-white font-bold ${syne.className}`}
              >
                ALCHEMY
              </p>{" "}
              <p className="font-light text-[0.9rem] sm:text-[1.5rem] gap-2 md:text-[2rem] flex-wrap inline-flex items-center">
                Transformation of{" "}
                <span className="font-poppins"> Ordinary</span>{" "}
                <span className="font-poppins inline-flex items-center">
                  <Image
                    alt="to"
                    src={to}
                    width={500}
                    height={500}
                    className="w-[1.5rem] md:w-[2.3rem]"
                  />{" "}
                  <span className=" text-tedred ">o</span>{" "}
                </span>
                <span className="font-poppins">Extraordinary</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end w-full justify-between mb- sm:py-0 py-9 gap-3">
            <div className="flex sm:text-base flex-col items-start text-[1rem] md:items-end text-white justify-between gap-2">
              <div className="flex md:flex-row flex-row-reverse gap-2 ">
                <p className="font-medium">5th October, 2 PM - 6 PM, 2024</p>
                <AiOutlineCalendar
                  size={30}
                  className="scale-75 sm:scale-100 text-tedred"
                />
              </div>

              <div className="flex md:flex-row flex-row-reverse gap-2">
                <p className="font-medium">NIT Andhra Pradesh</p>
                <IoLocationOutline
                  size={30}
                  className="text-tedred scale-75 sm:scale-100"
                />
              </div>

              <div className="flex md:flex-row flex-row-reverse gap-2">
                <p className="font-medium">6 Speakers</p>
                <CiUser
                  size={30}
                  className="text-tedred scale-75 sm:scale-100"
                />
              </div>
            </div>
            <br />
            <GetYourTickets />
          </div>
        </div>
        {/* <div className="h-full overflow-clip flex justify-center items-center  w-[40%] bg-[#ff2b06]"> */}
        {/*   <p className="tracking-tighter p-0 m-0 font-helvitica font-extrabold text-[15rem] sm:text-[18rem] text-white transform rotate-90"> */}
        {/*     TED<sup>x</sup> */}
        {/*   </p> */}
        {/* </div>{" "} */}
      </div>
    </>
  );
}
