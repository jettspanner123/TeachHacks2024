"use client";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FaArrowDown} from "react-icons/fa6";

export default function Home():React.JSX.Element {
    const [isReady, setReady] = React.useState(false);
    return (
        <React.Fragment>
            <motion.div
                animate={{
                    left: "-30%"
                }}
                initial={{
                    left: "100%"
                }}
                transition={{
                    duration: 8,
                }}
                className={`bg-green-800 h-[35rem] w-[35rem] left-full rounded-full absolute top-1/2 -translate-y-1/2 `}/>
            <motion.div
                animate={{
                    right: "-30%"
                }}
                initial={{
                    right: "100%"
                }}
                transition={{
                    duration: 8,
                }}
                className={`bg-white h-[35rem] w-[35rem] right-full rounded-full absolute top-1/2 -translate-y-1/2`}/>


            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 2,
                    delay: 6.5
                }}
                className={`w-full flex justify-center absolute items-center h-screen`}>
                <motion.div
                    animate={{rotate: 360}}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`flex justify-between w-[50%] items-center h-[20rem]`}>
                    <div className={`h-[35rem] w-[35rem] rounded-full bg-green-800`}/>
                    <div className={`h-[35rem] w-[35rem] rounded-full bg-white`}/>
                </motion.div>
            </motion.div>

            <main
                className={`absolute overflow-hidden z-[10] top-0 left-0 w-screen h-[300vh] flex justify-start pt-[10rem] flex-col items-center min-w-screen blur_it300`}>
                <motion.h1
                    className={`text-white text-[12rem] font-bold`}>HALCHALL
                </motion.h1>
                <motion.h1
                    animate={{
                        opacity: 1
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 2,
                        delay: 3
                    }}
                    className={`text-white text-[3rem] font-bold`}>Where Agriculture Meets Innovation
                </motion.h1>
                <h1 onClick={() => setReady(true)}
                    className={`text-[2rem] p-4 rounded-xl flex items-center gap-[1.5rem] bg-white mt-[3rem] text-black `}>
                    Show For More
                    <FaArrowDown/>
                </h1>
            </main>

            <AnimatePresence>
                {isReady &&
                    <motion.div
                        animate={{
                            opacity: 1
                        }}
                        initial={{
                            opacity: 0
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.5,
                            ease: [0.83, 0, 0.17, 1]
                        }}
                        className={`bg-[#1c1c1c] p-[5rem] w-screen overflow-hidden h-screen absolute top-0 left-0 z-[100]`}>

                        <motion.div
                            animate={{
                                opacity: 1
                            }}
                            initial={{
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [0.83, 0, 0.17, 1],
                                delay: 1.5
                            }}
                        >
                            <h1 className={`text-white font-bold text-[4rem]`}>HalChall
                                <div className={`w-full h-[10px] rounded-full bg-white`}/>
                            </h1>

                            <p className={`text-white font-light text-[3rem] text-justify mt-[6rem]`}>
                                Halchal, your agricultural growth catalyst! We empower farmers to unlock their full
                                potential with innovative solutions. From precision farming to sustainable practices, we
                                guide you towards abundant harvests. Join us in cultivating prosperity and transforming
                                agriculture. Halchal—where every seed sows the promise of a thriving future!
                            </p>

                            <div className={`flex justify-center items-center text-[2.5rem]`}>
                                <div
                                    className={`border-2 p-2 flex justify-center items-center rounded-xl  gap-[6rem] mt-[6rem] border-white`}>
                                    <div
                                        onClick={() => window.location.assign("/dashboard")}
                                        className={`text-white border-2 border-white p-4 rounded-xl hover:bg-white hover:text-black`}>Services
                                    </div>
                                    <div
                                        onClick={() => window.location.assign("/aboutus")}
                                        className={`text-white border-2 border-white p-4 rounded-xl hover:bg-white hover:text-black`}>About
                                        Us
                                    </div>
                                    <div
                                        onClick={() => window.location.assign("/regpage")}
                                        className={`text-white border-2 border-white p-4 rounded-xl hover:bg-white hover:text-black`}>LogIn/SignUp
                                    </div>
                                    <div
                                        onClick={() => setReady(false)}
                                        className={`text-white border-2 border-white p-4 rounded-xl hover:bg-white hover:text-black`}>Back
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>

        </React.Fragment>
    );
}
