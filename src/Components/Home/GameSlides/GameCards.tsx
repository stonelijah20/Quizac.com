import React from 'react'
import {slidesAndTitle} from '../../../Files/Home'

function GameCards() {
  return (
    <div className='game-slider-container px-20'>
        <div className='py-20'>
                <h1 className=' flex pb-9 justify-center text-3xl font-semibold'>
                    Explore various user-created question sets
                </h1>

            <div className='flex shrink-0 overflow-x-auto scrollbar'>
        {
            slidesAndTitle.map((eles,index) => {
                const {image, subject} = eles
                return(
                        <div key={index} className='shrink-0 pr-20 pb-9 overflow-x-auto slider-elements '>
                        <img src={image} alt="subject" className='rounded-lg h-48 w-64 shadow-xl'/>
                        <p className='font-semibold capitalize'>{subject}</p>
                    </div>
                )
            })
        }
    </div>
        </div>
    </div>
  )
}

export default GameCards