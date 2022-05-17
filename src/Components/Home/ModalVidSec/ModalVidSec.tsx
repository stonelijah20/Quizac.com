import React from 'react'

function ModalVidSec(props:any) {
  return (
    <>
        <div>
            {props.open ? <div>
                <div className='modal-header'>
                    <button onClick={props.close}>close</button>
                </div>
            </div> : null}
        </div>
    </>
  )
}

export default ModalVidSec