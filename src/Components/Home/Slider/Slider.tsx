import React, {useEffect} from 'react'
import {sliderHeading,sliders,learnerList,organisationsList,teachersList} from '../../../Files/Home'
import Sliders from './Sliders'

function Slider() {
    useEffect(() => {


// ----------------------------------FOR THE CAROUSEL----------------------
      let progress = document.getElementsByClassName('progress') as HTMLCollectionOf<HTMLElement>
      let slide1 = document.querySelector('.slide1')
      let slide2 = document.querySelector('.slide2')
      let slide3 = document.querySelector('.slide3')
      const progressIncrements = (num:any,i:any) => {
        if(num < 100){
            console.log(num)
            num = num + 1
            setTimeout(() => {
                let numStr = num.toLocaleString('en-US')
                 for (let i = 0; i < progress.length; i++){
                    progress[i].style.width = `${numStr}%`
                }
                if(numStr < 40){
                    slide1?.classList.remove('hidden')
                    slide2?.classList.add('hidden')
                    slide3?.classList.add('hidden')
                }else if(numStr > 40 && numStr <80){
                    slide1?.classList.add('hidden')
                    slide2?.classList.remove('hidden')
                    slide3?.classList.add('hidden')
                }else if(numStr > 80){
                    slide3?.classList.remove('hidden')
                    slide2?.classList.add('hidden')
                    slide1?.classList.add('hidden')
                }
                progressIncrements(num,i)
            }, 500);
        }else if(num > 90 && num < 190 && i <= 190){
            num += 1
            i += 1
            i += 1
            let a = num - i
            setTimeout(() => {
                /* console.log(num)
                console.log(i) */
                console.log(`T-------->: ${a}`)
                progressIncrements(num,i)
            }, 500);
        }else if(num === 190){
            num = 0
            i = 0
            progressIncrements(num,i)
        }
        /* if(num === 100){
            num = num - 100
            setTimeout(() => {
                let numStr = num.toLocaleString('en-US')
                 for (let i = 0; i < progress.length; i++){
                    progress[i].style.width = `${numStr}%`
                }
                progressIncrements(num)
            }, 500);
        } */

    }

    progressIncrements(0,10)
// ------------------END--------------------------------------------------


      
    }, [])
    
  return (
    <>
        <div className='s-section'>
            <div>
                <h1>{sliderHeading.text}</h1>
                <div className='line'></div>

{/* //--------------for the images------ */}
                <div className='image-routes'>
                    <div className='indicator-container'>
                        <div className='indicator'>
                            <img src={sliderHeading.learnersimg} alt={sliderHeading.learnerstxt}/>
                        </div>
                        <h2>{sliderHeading.learnerstxt}</h2>
                    </div>
                    <div className='indicator-container'>
                        <div className='indicator'>
                            <img src={sliderHeading.teachersimg} alt={sliderHeading.teacherstxt}/>
                        </div>
                        <h2>{sliderHeading.organizationstxt}</h2>
                    </div>
                    <div className='indicator-container'>
                        <div className='indicator'>
                            <img src={sliderHeading.organisations} alt={sliderHeading.organizationstxt}/>
                        </div>
                        <h2>{sliderHeading.teacherstxt}</h2>
                    </div>
                </div>

{/* //----------------------------------------------------- */}





                {/*-------- progress bar sections------- */}

                <div className='progress-bar-container'>
                    <div className='progress-bar'>
                        <div className='progress' id='progress'></div>
                    </div>
                </div>

                {/* -------------End-------------------- */}



                <div className='slider-container'>
                    <div className='slide1'>
                        <Sliders title={sliders.header1} info={sliders.info1} alt="image" 
                        img={sliders.img1} one={learnerList[1]} two={learnerList[2]} three={learnerList[3]}/>
                    </div>
                    <div className='slide2 hidden'>
                        <Sliders title={sliders.header2} info={sliders.info2} alt="image" img={sliders.img2}
                        one={organisationsList[1]} two={organisationsList[2]} three={organisationsList[3]}/>
                    </div>
                    <div className='slide3 hidden'>
                        <Sliders title={sliders.header3} info={sliders.infor3} alt="image" img={sliders.img3}
                        one={teachersList[1]} two={teachersList[2]} three={teachersList[3]}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Slider