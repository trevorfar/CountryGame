import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../GlobalRedux/store"

interface SkeletonProps {
  index: number
}

const Skeleton = ({index}: SkeletonProps) => {

  const { country, currentWord } = useSelector((state: RootState) => state.country)
 const typedLetter = currentWord[index+1] || ""

 if((country[index]) === country[index].toUpperCase() && country[index] !== country[index].toLowerCase() && index !== 0){
    return  <div className="border-b-2 border-blue-500 w-6 md:w-8 ml-4 pt-4 flex justify-center">{typedLetter||""}</div>
 }
  return <div className="border-b-2 border-blue-500 w-6 md:w-8 pt-4 flex justify-center">{typedLetter||""}</div>
}   

export default Skeleton 
