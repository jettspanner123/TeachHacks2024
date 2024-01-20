import React from "react";
import {motion} from "framer-motion";

const ReversePageInitLoader = () => {
    return <motion.div
        animate={{y: 0}}
        initial={{y: -window.innerHeight}}
        transition={{y: {duration: 1, delay: 1.5, ease: [0.85, 0, 0.15, 1]}}}
        className={`fixed  text-[10rem] flex justify-center items-center text-white font-bold z-[1000] bg-[rgba(0,0,0,0.15)] blur_it200 rounded-xl top-0 left-0 w-screen h-screen border-8 border-white`}>
        <h1>ਹਲChall</h1>
    </motion.div>
}

export default ReversePageInitLoader;