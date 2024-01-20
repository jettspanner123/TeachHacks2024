"use client";
import React from "react";
import {motion} from "framer-motion";
import PageInitLoader from "@/app/Components/PageInitLoader";

const Page = () => {

    const [circlePositionState, setCirclePositionState] = React.useState(1);
    const [headingProgressOne, setHeadingProgressOne] = React.useState(false);

    return <React.Fragment>
        <PageInitLoader/>
        <main className={`bg-black w-full h-screen relative`}>
            <motion.div
                initial={false}
                animate={{
                    left: circlePositionState === 1 ? `50%` : circlePositionState === 2 ? `30%` : `50%`,
                    top: circlePositionState === 1 ? `50%` : circlePositionState === 2 ? `40%` : `50%`,
                    height: circlePositionState === 1 ? `80rem` : circlePositionState === 2 ? `40rem` : `60rem`,
                    width: circlePositionState === 1 ? `100rem` : circlePositionState === 2 ? `40rem` : `60rem`,
                    transform: circlePositionState === 1 ? `translate(-50%, -50%)` : circlePositionState === 2 ? `translate(-50%, -50%)` : `translate(-50%, -50%)`
                }}
                transition={{ease: [0.85, 0, 0.15, 1], duration: 1.6, delay: 0.3}}
                className={` absolute  rounded-full first_circle_background bt_border`}/>

            <motion.div
                initial={false}
                animate={{
                    left: circlePositionState === 1 ? `50%` : circlePositionState === 2 ? `50%` : `30%`,
                    top: circlePositionState === 1 ? `50%` : circlePositionState === 2 ? `50%` : `10%`,
                    height: circlePositionState === 1 ? `40rem` : circlePositionState === 2 ? `60rem` : `40rem`,
                    width: circlePositionState === 1 ? `60rem` : circlePositionState === 2 ? `60rem` : `40rem`,
                    transform: circlePositionState === 1 ? `translate(-50%, -50%)` : circlePositionState === 2 ? `translate(-50%, -50%)` : `translate(-50%, -50%)`
                }}
                transition={{ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 0.3}}
                className={`absolute rounded-full second_circle_background z-[2] bt_border`}
            />


            <motion.div
                initial={false}
                animate={{
                    left: circlePositionState === 1 ? `50%` : circlePositionState === 2 ? `70%` : `30%`,
                    top: circlePositionState === 1 ? `50%` : circlePositionState === 2 ? `60%` : `10%`,
                    height: circlePositionState === 1 ? `20rem` : circlePositionState === 2 ? `40rem` : `40rem`,
                    width: circlePositionState === 1 ? `40rem` : circlePositionState === 2 ? `40rem` : `40rem`,
                    transform: circlePositionState === 1 ? `translate(-50%, -50%)` : circlePositionState === 2 ? `translate(-50%, -50%)` : `translate(-50%, -50%)`,
                }}
                transition={{ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 0.3}}
                className={`absolute z-[1] rounded-full third_circle_background  bt_border`}
            />

            <div className={`absolute z-[9] blur_it w-screen h-screen `}/>

            <h1 className={`text-white text-[6rem] z-[11] absolute left-1/2 top-[10rem] -translate-x-1/2`}>About Us
                <div className={`bg-white h-[10px] rounded-xl w-full`}/>
            </h1>


            <div
                className={`absolute left-1/2 z-[10] text-[3rem] text-center -translate-x-1/2 top-1/2 -translate-y-1/2`}>
                <h1 style={{opacity: circlePositionState === 1 ? 1 : 0}}
                    className={`text-white transition-all duration-700 delay-700`}>Our mission is to empower farmers and
                    enhance the
                    sustainability of
                    agriculture by providing a
                    comprehensive platform that addresses the unique challenges faced by the farming community.
                </h1>
            </div>


            <div
                className={`absolute left-1/2 z-[10] text-[3rem] text-center -translate-x-1/2 top-1/2 -translate-y-1/2`}>
                <h1 style={{opacity: circlePositionState === 2 ? 1 : 0}}
                    className={`text-white transition-all duration-700 delay-700`}>
                    At HALCHAL, we are passionate about revolutionizing the agricultural landscape through innovative
                    solutions.

                </h1>
            </div>


            <div
                className={`absolute left-1/2 z-[10] text-[3rem] text-center -translate-x-1/2 top-1/2 -translate-y-1/2`}>
                <h1 style={{opacity: circlePositionState === 3 ? 1 : 0}}
                    className={`text-white transition-all duration-700 delay-700`}>
                    <h1 className={`text-center my-[3rem]`}>Our Services:</h1>
                    <div className={`flex gap-[1rem]`}>
                        <h1 className={`bg-[rgba(0,0,0,0.15)] rounded-xl border-2 border-white p-4`}>E-Commerce</h1>
                        <h1 className={`bg-[rgba(0,0,0,0.15)] rounded-xl border-white border-2 p-4`}>Labour Farmer Connect Protal</h1>
                    </div>
                </h1>
            </div>

            <div
                className={`flex gap-[2rem] absolute text-white z-[10] font-bold text-[2rem] blur_it bottom-[2rem] p-3 rounded-xl border-white border-2 left-1/2 -translate-x-1/2`}>
                <h1
                    onClick={() => setCirclePositionState(1)}
                    style={{
                        backgroundColor: circlePositionState === 1 ? "white" : "transparent",
                        color: circlePositionState === 1 ? "black" : "white"
                    }}
                    className={`p-4 rounded-xl bg-white transition-colors duration-700 text-black cursor-default`}>Mission</h1>
                <h1
                    onClick={() => setCirclePositionState(2)}
                    style={{
                        backgroundColor: circlePositionState === 2 ? "white" : "transparent",
                        color: circlePositionState === 2 ? "black" : "white"
                    }}
                    className={`p-4 rounded-xl bg-white transition-colors duration-700 text-black cursor-default`}>Moto</h1>
                <h1
                    onClick={() => setCirclePositionState(3)}
                    style={{
                        backgroundColor: circlePositionState === 3 ? "white" : "transparent",
                        color: circlePositionState === 3 ? "black" : "white"
                    }}
                    className={`p-4 rounded-xl bg-white text-black cursor-default transition-colors duration-700 `}>Services</h1>
            </div>
        </main>
    </React.Fragment>
}


export default Page;