import React,{useState, useEffect} from 'react'
import {gaminginfo} from '../../../Files/Home'

function Gaminginfo() {
    useEffect(() => {
const acnt = (a:number,b:number) => {
    if(a > b){
        a = a- 10
        setTimeout(() => {
            let atoStr = a.toLocaleString('en-US')
            setNums(nums => ({...nums, numa:atoStr}))
            acnt(a,b)
        }, 5);
    }
}
const bcnt = (bc:number, bs:number) => {
    if(bc > bs){
        bc = bc -10
        setTimeout(() => {
            let btoStr = bc.toLocaleString('en-US')
            setNums(nums => ({...nums, numb:btoStr}))
            bcnt(bc,bs)
        }, 5);
    }

}
const ccnt = (cc:number,cs:number) => {
    if(cc > cs){
        cc = cc -100
        setTimeout(() => {
            let ctoStr = cc.toLocaleString('en-US')
            setNums(nums => ({...nums, numc:ctoStr}))
            ccnt(cc,cs)
        }, 5);
    }
}
const dcnt = (dc:number,ds:number) => {
    if(dc > ds){
        dc = dc - 1
        setTimeout(() => {
            let dtoStr = dc.toLocaleString('en-US')
            setNums(nums => ({...nums, numd:dtoStr}))
            dcnt(dc,ds)
        }, 5);
    }
}

acnt(32828, 22828)
bcnt(37799,27799)
ccnt(212623,121623)
dcnt(820,40)
      
}, [])

const [nums, setNums] = useState({numa:'0', numb:'+0', numc: '0', numd: '+0'})
    

  return (
    <>
        <div className='gaminginfo-container'>
            <div className='gaminginfo-container-image'>
                <img className='img-edit' src={gaminginfo.gamingpad} alt='gaming-pad'/>
            </div>
            <div className='gaminginfo-container-counts grid grid-cols-2 pt-20 gap-14 mr-20'>
                <div className='gamingcnt'>
                    <h1>Total Question Created</h1>
                    <p id='a'>{nums.numa}</p>
                </div>
                <div className='gamingcnt'>
                    <h1>Total Game Played</h1>
                    <p id='b'>+{nums.numb}</p>
                </div>
                <div className='gamingcnt'>
                    <h1>Total Game Response</h1>
                    <p id='c'>{nums.numc}</p>
                </div>
                <div className='gamingcnt'>
                    <h1>Total Country Played</h1>
                    <p id='d'>+{nums.numd}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gaminginfo