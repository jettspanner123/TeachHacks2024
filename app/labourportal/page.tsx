"use client";
import React, {FormEvent} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FirebaseDatabase} from "@/app/Components/FirebaseContext";
import {onValue as ReadDatabase, ref as DatabaseRef, set as Setdatabase} from "firebase/database"
import PageInitLoader from "@/app/Components/PageInitLoader";

const Page = () => {

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


    const [LabourType, setLabourType] = React.useState("");
    const [Description, setDescription] = React.useState("");
    const [pricingHouse, setPricingHouse] = React.useState("");
    const postRequest = (LabourType: string, Description: string, pricingHouse: string) => {
        const uuid = generateUUID();
        Setdatabase(DatabaseRef(FirebaseDatabase, `labours/${uuid}`), {
            LabourType,
            Description,
            pricingHouse,
            uuid
        }).then(() => setShowPost(false)
        )
    }

    const [response, setResponse] = React.useState([]);
    const renderRequests = () => {
        setResponse([]);
        ReadDatabase(DatabaseRef(FirebaseDatabase, `labours/`), (snapshot) => {
            const data = snapshot.val()
            if(data != null){
                Object.values(data).map((item) => {
                    //@ts-ignore
                    setResponse(oldArr => [...oldArr, item])
                })
            }

        })
        response.pop();
    }


    React.useEffect(() => {
        renderRequests();
    }, [])

    const [showPost, setShowPost] = React.useState(false);
    return <React.Fragment>
        <PageInitLoader/>
        <motion.main className={`p-[4rem]`}>
            <h1 className={`text-white font-bold text-[5rem]`}>Currently Working:
                <div className={`h-[10px] w-full bg-white rounded-xl`}/>
            </h1>


            <div className={`w-full  mt-[5rem] gap-[2rem] grid grid-cols-3`}>
                <LabourDiv LabourType={`Harvester`}
                           Description={`Need a Person that can harvest some crops and also should be handsome enough to work in a circus.`}
                           PricingPerHour={250}/>

                {response.map((item, index) => {
                    //@ts-ignore
                    return <LabourDiv key={index} LabourType={item.LabourType} Description={item.Description} PricingPerHour={item.PricingPerHour} />
                })}

            </div>

        </motion.main>

        <div
            onClick={() => setShowPost(!showPost)}
            className={`bg-white z-[200] border-2 border-white text-[2rem] p-4 rounded-xl hover:bg-transparent hover:text-white cursor-default fixed bottom-[3rem] right-[3rem]`}>
            {showPost ? "Back" : "Create Post"}
        </div>


        <AnimatePresence>
            {
                showPost &&
                <motion.div
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.6}}
                    className={`blur_it200 w-screen h-screen top-0 left-0 flex justify-center items-center fixed z-[198]`}>
                    <motion.div
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        initial={{opacity: 0}}
                        transition={{duration: 1}}
                        className={`w-[60%] p-6 border-4 gap-[1.5rem] border-white rounded-[2rem] flex flex-col justify-center`}>

                        <input
                            onChange={(e) => setLabourType(e.target.value)}
                            className={`text-white bg-transparent text-[1.5rem] outline-none border-2 border-white p-2 rounded-xl`}
                            placeholder={`Enter type of work:`}/>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            className={`text-white bg-transparent text-[1.5rem] outline-none border-2 border-white p-2 rounded-xl`}
                            placeholder={`Enter description of work: `}/>
                        <input
                            onChange={(e) => setPricingHouse(e.target.value)}
                            className={`text-white bg-transparent text-[1.5rem] outline-none border-2 border-white p-2 rounded-xl`}
                            placeholder={`Enter amount to be paid per hour: `}/>
                        <button
                            onClick={(e: FormEvent) => {
                                e.preventDefault();
                                postRequest(LabourType, Description, pricingHouse)
                            }}
                            className={`bg-white text-black border-2 border-white text-[1.5rem] p-2 rounded-xl hover:bg-black hover:text-white`}
                        >Submit
                        </button>

                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </React.Fragment>
}


interface LabourDivProps {
    LabourType: string,
    Description: string,
    PricingPerHour: number
}

const LabourDiv = ({LabourType, Description, PricingPerHour}: LabourDivProps) => {
    const animations = ["gradient-background", "gradient-background2", "gradient-background3"]

    return <div
        className={`border-2 ${animations[Math.floor(Math.random() * animations.length)]} flex justify-center pb-10 items-center flex-col border-white rounded-xl p-4 bg-[#1c1c1c] text-white `}>
        <h1 className={`font-bold text-[5rem] w-full text-left px-6 `}>{LabourType}</h1>
        <p className={`text-justify w-full p-6 text-[2rem] font-light`}>{Description}</p>
        <div className={`w-full px-6`}>
            <p className={`text-[2rem]`}>
                <span
                    className={`text-[2rem] mr-4 bg-white p-2 rounded-xl text-black`}>Price</span>
                {PricingPerHour}</p>
        </div>
    </div>
}

export default Page;