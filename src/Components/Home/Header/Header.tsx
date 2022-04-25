import React from 'react'
import {headerContent} from '../../../Files/Header'
import Button from '../../Button/Button'


function Header() {
  return (
    <div className='header-container'>
        <div className='header-bg'>
            <div className='img-overlay'>
                <div className='contents-container'>
                <div className='contents'>
                    <div className='c1'>
                        <div className='text-content'>
                            <h1>{headerContent.htext}</h1>
                            <h3>{headerContent.abou}</h3>  
                            <div className='btn-container'>
                                <Button><p className='btn'>Play Now</p></Button>
                            </div>
                        </div>
                        <div className='illustration'>
                            <img src={headerContent.illustration} alt="hero-section"/>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={headerContent.scrap} alt="last"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header