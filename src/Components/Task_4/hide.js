import React, { useState } from "react";

export default function Hide(){

    let [value,setValue] = useState(true);

    const onToggle = () =>{
        value? setValue(false):setValue(true)
    }

    return(
        <>
        <div className="main" style={{padding:'20px 0 ',lineHeight:'50px',backgroundColor:'rgb(255, 167, 167)',height:'141px'}}>
            <h1>Task 4</h1>

            <h2>{value?'Praveenkumar K':<br/>}</h2>
            <button onClick={onToggle}>{value?'Hide':'Show'}</button>
        </div>
        </>
    );
}