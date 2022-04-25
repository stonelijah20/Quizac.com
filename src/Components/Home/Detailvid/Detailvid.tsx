import React from 'react'
import {viddetails} from '../../../Files/Home'

function Detailvid() {
  return (
    <>
        <div className='detailvid-container'>
            <h1 className='detail-text'>
                {viddetails.text}
            </h1>
            <div className='detail-video'>
                <video className='video' controls>
                    <source src={viddetails.video} type='video/mp4'></source>
                </video>
            </div>
        </div>
    </>
  )
}

export default Detailvid