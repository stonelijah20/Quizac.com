import React from 'react'
import GameCards from './GameCards'

function GameSlides() {
  return (
    <>
        <div className='game-slides-bg pt-10'>
            {/* <div className='flex justify-center text-3xl font-semibold'>
              <h1>Explore various user-created question sets</h1>
            </div> */}
            <GameCards/>
        </div>
    </>
  )
}

export default GameSlides