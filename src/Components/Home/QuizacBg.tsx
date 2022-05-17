import React from 'react'

function QuizacBg(props:any) {
  return (
    <div className='bg-color'>
        <div className='bg-img-overlay'>
          {props.children}
        </div>
    </div>
  )
}

export default QuizacBg