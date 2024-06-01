"use client"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../GlobalRedux/store"
import { type, del } from "../GlobalRedux/Features/countrySlice"
import { useEffect } from "react"

const keys = {
  topRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  middleRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  bottomRow: ["Enter", "Z", "X", "C", "V", "B", "N", "M", "←"],
}

const Keyboard = () => {
  const dispatch = useDispatch()
  const { index, country } = useSelector((state: RootState) => state.country)

  const handleClick = (letter: string) => {
    if(letter ==="BACKSPACE"){
        dispatch(del())
        return
    }
    dispatch(type(letter))
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key.toUpperCase()
      if (
       ( keys.topRow.includes(key) ||
        keys.middleRow.includes(key) ||
        keys.bottomRow.includes(key) ||
        (key === "BACKSPACE") 
      )) {

        if((key === "BACKSPACE" && index === 0) ||
         (index === Array.from(country).length && key !== "BACKSPACE")){
            return
        }
        handleClick(key)
    }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleClick, index, country])

  return (
    <div className="flex flex-wrap justify-center w-full text-center">
      <div className="flex flex-wrap justify-center w-full text-center gap-1 p-1">
        {keys.topRow.map((letter, idx) => (
          <div
            className="w-8 h-12 rounded-lg hover:bg-gray-300 bg-gray-400 justify-center items-center flex"
            key={letter}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <br />
      <div className="flex flex-wrap justify-center w-full text-center gap-1 p-1">
        {keys.middleRow.map((letter, idx) => {
          return (
            <div
              className="w-8 h-12 rounded-lg hover:bg-gray-300 bg-gray-400 justify-center items-center flex"
              key={letter}
              onClick={() => handleClick(letter)}
            >
              {letter}
            </div>
          )
        })}
      </div>
      <br />
      <div className="flex flex-wrap justify-center w-full gap-1">
        {keys.bottomRow.map((letter, idx) => (
          <div
            className={`p-1 w-${
              idx === 0 || idx === 9 ? "12" : "8"
            } h-12 rounded-lg hover:bg-gray-300 bg-gray-400 justify-center items-center flex`}
            key={letter}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Keyboard
