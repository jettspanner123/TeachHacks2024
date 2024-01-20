import React from "react";
import Image from "next/image"
import PhoneImage from "./phone_image.webp"

const PhoneModel = () => {
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })
    }, [])
    return <Image src={PhoneImage} style={{}} className={`shadow-2xl -translate-y-1/2 -translate-x-[calc(50%+${mousePosition.x/20}px)] left-1/2 top-1/2 absolute rounded-[2.8rem]  shadow-black`} alt={'something was here'}
               height={850}/>
}


export default PhoneModel;