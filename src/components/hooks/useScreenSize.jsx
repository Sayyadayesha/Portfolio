"use client"

import { useEffect, useState } from "react"

const useScreenSize = () =>{
     const [screenSize,setScreenSize] = useState ()
     useEffect(()=>{
        function getScreenSize(){
            return window.innerWidth;
        }

        function handleResize(){
           setScreenSize(getScreenSize())
        }

        handleResize();
        window.addEventListener('resize',handleResize);
         return () => removeEventListener('resize',handleResize);
     },[])
    return screenSize
    }

export default useScreenSize