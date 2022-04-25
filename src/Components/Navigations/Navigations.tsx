import React from 'react'
import { Link } from 'react-router-dom'
import './Navigations.css'


import NavigationContent from '../../Files/Navigations'
import { image, login, signup } from '../../Files/Navigations'

function Navigations() {
    const {logoimg, text} = image
  return (
    <>
        <div className=' navi flex justify-between items-center h-16 px-4 nav-color'>
            <div className='image-size'>
                <img src={logoimg} alt={text}/>
            </div>
            <div>
                <ul className='flex'>
                    {NavigationContent.map((navcon, index) => {
                        const {dir,navelement} = navcon
                        return(
                            <div key={index}>
                                <li>
                                    <Link to={dir}>{navelement}</Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul className='flex'>
                    <li>
                        <Link to={login.dir}>{login.ele}</Link>
                    </li>
                    <li className='text-slate-100 hover:text-slate-100'>
                        <Link to={signup.dir}>
                            <span className='bg-orange-600 rounded-3xl pr-6 pl-6 py-2 text-xs uppercase hover:bg-orange-900 duration-1000'>
                                {signup.ele}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default Navigations