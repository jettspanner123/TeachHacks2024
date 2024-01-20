"use client";
import React from "react";
import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import {IoArrowDownCircleSharp} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import {onValue as ViewDatabase, ref as DatabaseRef, set as SetDatabase} from "firebase/database";
import {FirebaseDatabase} from "@/app/Components/FirebaseContext";
import RiceImage from "../src/Rice.jpg"
import WheatImage from "../src/Wheat.jpg"
import PageInitLoader from "@/app/Components/PageInitLoader";
const Page = () => {


    const [responces, setResponces] = React.useState([]);
    function generateUUID() {
        var d = new Date().getTime();
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }


    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    React.useEffect(() => {
        window.addEventListener("mousemove", e => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })
    }, [])

    const [optionShow, setOptionShow] = React.useState(false);
    const [currentOption, setCurrentOption] = React.useState("");
    const [databasePeek, setDatabasePeek] = React.useState([]);

    function writeUserDate(cropType: string, cropName: string, cropPricePerCapital: string, cropRating: number) {
        const uuid = generateUUID();
        SetDatabase(DatabaseRef(FirebaseDatabase, `crops/${uuid}`), {
            cropName,
            cropType,
            cropPricePerCapital,
            cropRating,
            uuid
        })
    }
    React.useEffect(() => {
        peekDatabase();
    }, [])

    function peekDatabase(){
        ViewDatabase(DatabaseRef(FirebaseDatabase, 'crops/'), (snapshot) => {
            const data = snapshot.val();
            if(data != null){
                Object.values(data).map((item) => {
                    //@ts-ignore
                    setResponces(oldArr => [...oldArr, item])
                })
            }
        })
    }


    const [cropType, setCropType] = React.useState("");
    const [corpName, setCropName] = React.useState("");
    const [cropPrice, setCropPrices] = React.useState("");



const [showLogin, setShowLogin] = React.useState(false);
// @ts-ignore
    return <React.Fragment>
    <PageInitLoader />
    <main
        style={{background: `radial-gradient(circle farthest-side at ${mousePosition.x}px ${mousePosition.y}px, #08653b 0%, #1c1c1c 50%)`}}
        className={`flex  bg-black w-screen h-screen`}>
        <motion.div
            animate={{x: 0}}
            initial={{x: "-25rem"}}
            transition={{duration: 1.5, ease: [0.85, 0, 0.15, 1]}}
            className={`w-[20%] `}>
            <ul className={`text-white relative w-full h-full p-6`}>
                <li className={`text-center text-[2rem] text-[#1c1c1c] font-bold my-[3rem] bg-white  p-4 rounded-[1rem]`}>HalChall
                    E_Commerce
                </li>
                <li className={`flex items-center p-2 border-white border-2 w-full justify-around text-[2rem] rounded-[1rem]`}>
                    <input placeholder={`Search`} type={`text`}
                           className={`bg-transparent border-none outline-none`}/>
                    <CiSearch/>
                </li>

                <li className={`text-white border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[3rem] text-center`}>Home</li>
                <li onClick={() => setOptionShow(!optionShow)}
                    className={`text-black items-center bg-white flex justify-center gap-[1rem] border-2 border-white rounded-[1rem] text-[2rem] p-2  transition-all duration-700 mt-[1rem] text-center`}>Options
                    <span style={{rotate: optionShow ? "180deg" : "0deg"}}
                          className={`transition-all duration-700`}>
                            <IoArrowDownCircleSharp/>
                        </span>
                </li>

                <AnimatePresence>
                    {
                        optionShow &&
                        <motion.div animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}
                                    initial={{opacity: 0}}>
                            <li onClick={() => setCurrentOption("millets")} style={{
                                background: currentOption === "millets" ? "white" : "",
                                color: currentOption === "millets" ? "black" : ""
                            }}
                                className={`text-white  border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[1rem] text-center`}>Millets
                            </li>
                            <li onClick={() => setCurrentOption("rabi")} style={{
                                background: currentOption === "rabi" ? "white" : "",
                                color: currentOption === "rabi" ? "black" : "white"
                            }}
                                className={`text-white  border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[1rem] text-center`}>Rabi
                            </li>
                            <li onClick={() => setCurrentOption("pulses")} style={{
                                background: currentOption === "pulses" ? "white" : "",
                                color: currentOption === "pulses" ? "black" : ""
                            }}
                                className={`text-white border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[1rem] text-center`}>Pulses
                            </li>
                            <li onClick={() => setCurrentOption("zaid")} style={{
                                background: currentOption === "zaid" ? "white" : "",
                                color: currentOption === "zaid" ? "black" : ""
                            }}
                                className={`text-white border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[1rem] text-center`}>Zaid
                            </li>
                            <li onClick={() => setCurrentOption("cereals")} style={{
                                background: currentOption === "cereals" ? "white" : "",
                                color: currentOption === "cereals" ? "black" : ""
                            }}
                                className={`text-white border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[1rem] text-center`}>Cereals
                            </li>
                        </motion.div>
                    }
                </AnimatePresence>

                <li onClick={() => setShowLogin(!showLogin)} style={{
                    background: currentOption === "cereals" ? "white" : "",
                    color: currentOption === "cereals" ? "black" : ""
                }}
                    className={`text-white w-[90%] bottom-[1rem] absolute border-2 border-white rounded-[1rem] text-[2rem] p-2 hover:bg-white hover:text-black transition-all duration-700 mt-[1rem] text-center`}>
                    {showLogin ? "Cancel" : "Post"}
                </li>

            </ul>
        </motion.div>


        <div
            className={`flex-1 text-[5rem] px-[7rem] mt-[3rem] text-white`}>

            <AnimatePresence>
                <motion.h1 animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}
                           transition={{duration: 1}}
                           className={`uppercase relative`}>{currentOption === "" ? "Search Responce:" : `${currentOption}:`}
                    <div className={`h-[10px] bg-white rounded-full absolute w-full`}/>
                </motion.h1>
            </AnimatePresence>


            {/*all the product will show up here */}
            <div className={`text-white mt-[4rem] grid grid-cols-3`}>
                {responces.map((item, index) => {
                    // @ts-ignore
                    return <div key={index}>{item.cropType}</div>
                })}

                <div className={`w-[25rem] p-4 rounded-xl bg-white h-[32rem]`}>
                    <div className={`bg-black overflow-hidden w-full h-[50%] rounded-xl`}>
                        <Image width={400} height={150} objectFit={`cover`} className={``} src={RiceImage} alt={''}/>
                    </div>
                    <h1 className={`text-black mt-10`}>Rice</h1>
                    <div className={`text-black text-[1.5rem]`}><span
                        className={`p-2 bg-black rounded-xl text-white mr-4`}>Price</span>250
                    </div>
                </div>

                <div className={`w-[25rem] p-4 rounded-xl bg-white h-[32rem]`}>
                    <div className={`bg-black overflow-hidden w-full h-[50%] rounded-xl`}>
                        <Image width={400} height={150} objectFit={`cover`} className={``} src={WheatImage} alt={''}/>
                    </div>
                    <h1 className={`text-black mt-10`}>Wheat</h1>
                    <div className={`text-black text-[1.5rem]`}><span
                        className={`p-2 bg-black rounded-xl text-white mr-4`}>Price</span>315
                    </div>
                </div>
            </div>


            {/*this will be the form page */}
            <motion.div
                animate={{
                    right: showLogin ? "1rem" : "-100rem"
                }}
                transition={{
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1]
                }}
                initial={false}
                className={`p-10 flex flex-col gap-[1.5rem] justify-center items-center bottom-[1rem] w-[40vw]  fixed z-[200] border-white blur_it200 border-2 rounded-xl `}>

                <h1 className={``}>Create Post
                    <div className={`bg-white h-[10px] w-full rounded-xl`}/>
                </h1>
                <input placeholder={'Enter CropType: '}
                       onChange={(e) => setCropType(e.target.value)}
                       className={`w-full border-2 border-white p-2 text-white  rounded-xl outline-none bg-transparent text-[2rem]`}/>
                <input placeholder={'Enter CropName: '}
                       onChange={e => setCropName(e.target.value)}
                       className={`w-full border-2 border-white p-2 text-white  rounded-xl outline-none bg-transparent text-[2rem]`}/>
                <input placeholder={'Enter CropRate: '}
                       onChange={e => setCropPrices(e.target.value)}
                       className={`w-full border-2 border-white p-2 text-white  rounded-xl outline-none bg-transparent text-[2rem]`}/>
                <button
                    onClick={() => writeUserDate(cropType, corpName, cropPrice, 4)}
                    className={`text-black bg-white border-2 border-white rounded-xl p-3 text-[1.5rem] w-full hover:bg-transparent hover:text-white`}>Submit</button>
            </motion.div>
        </div>
    </main>
</React.Fragment>
}

interface ECommerceCardProps {
    someImageObject: any,
    cropname: string,
    croptype: string,
    percapitalprice: string
}
const ECommerceCard = ({someImageObject, cropname, croptype, percapitalprice}: ECommerceCardProps) => {

    const imageContainerRef = React.useRef<HTMLDivElement | null>(null);
    return <div className={`w-[25rem] p-4 rounded-xl bg-white h-[32rem]`}>
        <div ref={imageContainerRef} className={`bg-black w-full h-[50%] rounded-xl`}>
            <Image width={150} height={150} src={someImageObject} alt={''}/>
        </div>
        <h1 className={`text-black mt-10`}>Rice</h1>
        <div className={`text-black text-[1.5rem]`}><span className={`p-2 bg-black rounded-xl text-white mr-4`}>Price</span>250</div>
    </div>
}

export default Page;