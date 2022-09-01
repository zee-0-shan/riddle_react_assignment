import React from 'react'

export default function Smallcolorpara(props) {
  return (
        <div className="inner_content">
        <div className="small_round" style={{backgroundColor:`${props.color}`}}>

        </div>
        <div className="middle_inner_content">
            <div className='middle_head'></div>
            <hr className='middle_first' style={{width:"100%",height:3,backgroundColor:"#eee",border:"none"}}/>
            <hr className='middle_second' style={{width:"70%",height:3,backgroundColor:"#eee",border:"none"}}/>
            <hr className='middle_third' style={{width:"40%",height:3,backgroundColor:"#eee",border:"none"}}/>
        </div>
    </div>
  )
}
