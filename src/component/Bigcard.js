import React from 'react'
import data from '../data/data'
import Colorpara from './Colorpara'

export default function Bigcard() {
  return (
    <div className='bigCard'>
        <div className="nav">
            <input type="text" />
            <img src="./menu.svg" alt="menu" />
        </div>
        <div className="inner_container">
            {data.map(function(color){
                return <Colorpara color={color.color} key={`${color.color}-${Date.now()}`}/>
            })}
        </div>
        
    </div>
  )
}
