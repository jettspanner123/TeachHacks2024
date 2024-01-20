"use client";
import React, {FormEvent} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import BackgroundImage from "../src/bg_image.png";
import {FaArrowLeft, FaEye} from "react-icons/fa6";
import {FirebaseApplication, FirebaseAuthentication} from "@/app/Components/FirebaseContext";
import {createUserWithEmailAndPassword} from "firebase/auth"
import PageInitLoader from "@/app/Components/PageInitLoader";

const Page = () => {
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    React.useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        })
    }, [])
    const [whichScreen, setScreen] = React.useState(1);

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        createUserWithEmailAndPassword(FirebaseAuthentication, username, password).then(() => {
            setSuccessMessage(true);
            setTimeout(() => {setSuccessMessage(false)}, 1500)
            window.location.assign("/dashboard");
        }).catch((e) => {
            setErrorMessage(true);
            setTimeout(() => {
                setErrorMessage(false)
            }, 1500)
        })



    }
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState(false);


    return <React.Fragment>
        <PageInitLoader />
        <main className={`bg-black flex  min-w-screen min-h-screen overflow-hidden`}>
            <motion.div
                style={{left: mousePosition.x / 15, top: mousePosition.y / 15}}
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 10, ease: "linear"}}
                className={`w-screen scale-[1] blur-[200px] overflow-hidden h-screen absolute top-0 left-0`}>
                <Image className={`w-full h-full`} src={BackgroundImage} alt={`somethign was hwere`}/>
            </motion.div>

            <div
                className={`absolute flex justify-center gap-[5rem] flex-col z-[10] w-[50%] h-screen left-0 items-center bg-[rgba(0,0,0,0.15)]`}>
                <div className={`font-bold leading-[9rem] w-full flex flex-col items-center text-[10rem] text-white`}>
                    <h1 className={``}>WE</h1>
                    <h1 className={``}>MAKE</h1>
                    <h1>DIGITAL</h1>
                </div>

                <div className={`flex gap-[1rem] text-white font-normal text-[2rem]`}>
                    <h1 className={`hover:mx-10 transition-all duration-700 cursor-default`}>We Innovate</h1>
                    <h1>|</h1>
                    <h1 className={`hover:mx-10 transition-all duration-700 cursor-default`}>We Connect</h1>
                    <h1>|</h1>
                    <h1 className={`hover:mx-10 transition-all duration-700 cursor-default`}>We Help</h1>
                </div>

                <motion.button whileHover={{scale: 1.25}}
                               transition={{scale: {ease: [0.85, 0, 0.15, 1], duration: 0.7}}}
                               className={`bg-white transition-colors duration-700 hover:bg-transparent hover:text-white border-2 border-white flex justify-center items-center gap-[2rem] text-black font-semibold p-4 w-[40%] rounded-xl text-[2rem]`}>
                    <FaArrowLeft/>
                    Visit Landing Page
                </motion.button>
            </div>
            <div className={`absolute z-[10] w-[50%] h-screen right-0 flex justify-center items-end pb-10`}>

                <div
                    className={`border-2 relative text-white text-[2rem] border-white rounded-[2rem] flex flex-col gap-0 p-10 items-center w-[90%] h-[85%]`}>
                    <form className={`w-full`} onSubmit={(e) => handleSubmit(e)}>
                        <h1 className={`text-left my-4 w-full`}>Username: </h1>
                        <input
                            onChange={e => setUsername(e.target.value)}
                            className={`border-2 border-white bg-[rgba(0,0,0,0.15)] rounded-xl w-full p-2 outline-none px-4`}
                            placeholder={'Enter username: '} type="email"/>

                        <h1 className={`text-left my-4 w-full`}>Password: </h1>
                        <div className={`w-full flex gap-[0.5rem] `}>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                className={`border-2 border-white bg-[rgba(0,0,0,0.15)] rounded-xl w-full p-2 outline-none px-4`}
                                placeholder={'Enter username: '} type="text"/>
                            <button
                                className={`bg-white hover:bg-transparent hover:text-white border-2 border-white px-4 text-black rounded-xl flex-1`}>
                                <FaEye/>
                            </button>
                        </div>

                        <button
                            className={`bg-white text-black w-full rounded-xl p-2 hover:bg-transparent hover:text-white border-2 border-white my-10`}>Submit
                        </button>

                    </form>

                    <div style={{opacity: successMessage ? 1 : 0}}
                         className={`bg-green-300 transition-all duration-700 absolute bottom-[2.5rem] w-[90%] p-4 rounded-xl text-white flex justify-center items-center`}>Account
                        Created Successfully
                    </div>
                    <div style={{opacity: errorMessage ? 1 : 0}}
                         className={`bg-red-300 absolute bottom-[2.5rem] transition-all duration-700 w-[90%] p-4 rounded-xl text-white flex justify-center items-center`}>Account
                        An Error Occurred
                    </div>
                </div>


            </div>

            <button onClick={() => setScreen(1)} style={{
                backgroundColor: whichScreen === 1 ? "white" : "transparent",
                color: whichScreen === 1 ? "black" : "white"
            }}
                    className={`text-[2rem] border-2 z-[100] border-white absolute py-4 px-8 right-[13.5rem] top-[2rem]  rounded-xl`}>SignUP
            </button>
            <button onClick={() => setScreen(2)} style={{
                backgroundColor: whichScreen === 2 ? "white" : "transparent",
                color: whichScreen === 2 ? "black" : "white"
            }}
                    className={`text-[2rem] z-[100] border-2 border-white absolute py-4 px-8 right-[3.2rem] top-[2rem]  rounded-xl`}>LogIN
            </button>
        </main>
    </React.Fragment>
}


export default Page;