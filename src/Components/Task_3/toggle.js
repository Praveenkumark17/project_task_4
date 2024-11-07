import React, { useState } from "react";
import './toggle.css';

export default function Toggle(){

    let [glow,setGlow] = useState(false);

    const changeglow = () => {
        glow ? setGlow(false) : setGlow(true)
    }

    return(
        <>
        <div className="main toggle" style={{padding:'38px 0 ',lineHeight:'60px'}}>
            <h1>Task 3</h1>

            <div onClick={changeglow} className = "glow" style={{boxShadow: glow ? '0px 0px 35px red': null,userSelect:'none'}}>{glow?'Switch OFF':'Switch ON'}</div>
        </div>
        <div style={{borderBottom:'2px solid black',width:'100%'}}></div>
        </>
    )
}