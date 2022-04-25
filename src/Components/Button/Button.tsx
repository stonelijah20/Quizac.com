import React from 'react'

function Button(props:any) {
  return (
    <>
        <button className='bg-orange-600 text-white uppercase font-bold borderr'>
            {props.children}
        </button>
    </>
  )
}

export default Button