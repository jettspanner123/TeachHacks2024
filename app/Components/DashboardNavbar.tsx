import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";


const DashboardNavbar = () => {
    const options = [
        {title: "Home", link: "/dashboard"},
        {title: "About Us", link: "/aboutus"},
        {title: "Contact Us", link: "/contactus"}
    ]


    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.3], ["100vw", "0vw"]);
    const backgroundColor = useTransform(scrollYProgress, [0,0.3], ["rgba(0,0,0,0)", "rgba(255,255,255,1)"])
    const color = useTransform(scrollYProgress, [0,0.3], ["rgba(255,255,255,1)", "rgba(0,0,0,1)"])

    return <div className={`fixed text-white w-full flex justify-center py-8 z-[1000]`}>
        <motion.nav style={{backgroundColor, color}} className={`flex justify-between p-2 px-10 items-center border-2 blur_it200 border-white rounded-full w-[40%]`}>
            <h1 className={`font-bold text-[2rem]`}>HalChall</h1>
            <motion.ul style={{color}} className={`top-[2rem] text-white flex gap-[1.5rem]`}>
                {options.map((item, index) => {
                    return <li className={`text-[1.5rem] `} key={index}>{item.title}</li>
                })}
            </motion.ul>
        </motion.nav>
    </div>
}

export default DashboardNavbar;