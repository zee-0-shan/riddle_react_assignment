import React from 'react'
import data from '../data/data'
import Smallcolorpara from './Smallcolorpara'

export default function Smallcard() {
  return (
    <div className='smallCard'>
         <div className="nav">
            <input type="text" />
            <img src="./menu.svg" alt="menu" />
        </div>
        <div className="inner_container">
            {data.map(function(color){
                return <Smallcolorpara color={color.color} key={`${color.color}-${Date.now()}`}/>
            })}
             {data.map(function(color){
                return <Smallcolorpara color={color.color} key={`${color.color}-${Date.now()}`}/>
            })}
        </div>
    </div>
  )
}
