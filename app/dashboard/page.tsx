"use client";
import React from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import PhoneModel from "../Components/phone_image.webp";
import DashboardNavbar from "@/app/Components/DashboardNavbar";

const Page = () => {
    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import('locomotive-scroll')).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0})
    React.useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setMousePosition({x: event.clientX, y: event.clientY})
        })
        return () => {
            window.addEventListener("mousemove", (event) => {
            });
        }
    }, [])
    const attributeOptions = [{title: 'ChatBot', link: '/chatapp'}, {
        title: 'E-Commerce',
        link: '/eC'
    }, {title: 'Weather', link: '/weather'}, {title: 'News', link: '/news'}]


    const options = [
        {title: 'ChatAPI', link: 'chatapi'},
        {title: 'E-Commerce', link: 'eC'},
        {title: 'Weather', link: 'weatherToday'}
    ]

    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.3], ["100vw", "0vw"]);
    const backgroundColor = useTransform(scrollYProgress, [0,0.3], ["rgba(0,0,0,0)", "rgba(255,255,255,1)"])
    const dashboardOptions = [
        {title: "E-Commerce", link: "eC"},
        {title: "Labour-Farmer Portal", link: "labourportal"},
        {title: "Book Your Free Intreval", link: "bookings"},
    ]

    return <React.Fragment>
        <DashboardNavbar/>
        <main
            className={`bg-black h-[300vh]`}>
            <section
                style={{backgroundImage: `radial-gradient(circle farthest-side at 45vw 100vh, #074d2d 0%, transparent 100%`}}
                className={`h-screen w-full relative flex justify-center items-center`}>
                <div style={{transform: `translate(${mousePosition.x / 100}px, 0`}}>
                    <motion.h1 animate={{scale: 1, y: 0}} initial={{scale: 1.35, y: -1000}} transition={{
                        y: {duration: 1, delay: 0.3, ease: [0.83, 0, 0.17, 1]},
                        scale: {delay: 1, duration: 1.5, ease: [0.83, 0, 0.17, 1]}
                    }} style={{transform: `translate(${mousePosition.x / 100}px,0`}}
                               className={`text-[11rem] w-screen text-center tracking-tighter  thick_text sticky  font-bold `}>Ease
                        Of
                        Farming
                    </motion.h1>
                </div>
                <motion.div animate={{y: 0}} initial={{y: 1000}}
                            transition={{duration: 1.5, delay: 1.5, ease: [0.83, 0, 0.17, 1]}}
                            className={` flex justify-center items-center mt-[4rem] w-[30%] absolute `}>
                    <div className={'rounded-[10rem]'} style={{transform: `translate(-${mousePosition.x / 100}px, 0`}}>
                        <Image src={PhoneModel} alt={``} height={800}/>
                    </div>
                </motion.div>

            </section>


            {/*mai framer*/}
            <motion.div style={{x}} className={`bg-[#1c1c1c] grid grid-cols-3 place-items-center px-[3rem] gap-[1rem] h-screen w-screen rounded-[2rem] fixed top-0 pt-[5rem]`}>
                {dashboardOptions.map((item, index) => {
                    return <div
                        onClick={() => window.location.assign(item.link)}
                        key={index}
                        className={`border-2 shadow-2xl shadow-black hover:shadow-[#053f25] transition-all duration-700 border-white rounded-[2rem] h-[20rem] w-[35rem] text-white flex justify-center items-center font-bold text-[2rem] `}>
                        {item.title}
                    </div>
                })}
            </motion.div>
        </main>
    </React.Fragment>
}
export default Page;
