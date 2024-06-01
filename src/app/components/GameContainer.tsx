"use client"
import { RootState } from "../GlobalRedux/store";
import Skeleton from "./Skeleton"
import { useDispatch, useSelector } from "react-redux"



const GameContainer = () => {
    const { country, currentWord, index } = useSelector((state: RootState) => state.country);

    return (
        <div className="flex flex-col h-72 w-full bg-gray-200 items-center justify-center">
        <div className="flex flex-row">
            <div className="">
            {country}
            </div>
            <div className="">{index}</div>
        </div>
        <div className="md:flex-row flex-wrap flex gap-2 md:gap-4 pt-12 ">
            {Array.from(country).map((_, idx) =>(
            <Skeleton key={idx} index={idx}/>
            ))}
          
        </div>
        </div>
    )
}
export default GameContainer