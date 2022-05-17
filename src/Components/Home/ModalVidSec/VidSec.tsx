// import React,{useState} from 'react'
import QuizacBg from "../QuizacBg";
import { modalvid } from "../../../Files/Home";
// import ModalVidSec from './ModalVidSec'

function VidSec() {
  /* const [isOpen, setIsOpen] = useState(false)
    const Toggle = () => {
        setIsOpen(!isOpen)
    } */
  return (
    <>
      <QuizacBg>
        <div className="vidsec-container flex p-20 items-center">
          {/* <button onClick={Toggle}>Open</button>
            <ModalVidSec open={isOpen} close={Toggle}/> */}
          <div>
            <img
              src={modalvid.image}
              alt={modalvid.text}
              className="h-full w-full"
            />
          </div>
          <div className="vidsec-text-container text-white font-bold text-4xl pl-20 w-1/2 flex flex-col items-center">
            {modalvid.text}
            <button className="text-base place-self-start mt-6 font-semibold bg-orange-600 rounded-full p-2">
              <span className="py-8 px-4 uppercase tracking-wider">
                sign up
              </span>
            </button>
          </div>
        </div>
      </QuizacBg>
    </>
  );
}

export default VidSec;
