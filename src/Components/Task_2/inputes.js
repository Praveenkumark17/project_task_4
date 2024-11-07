import React, { useState } from "react";
import "./input.css";

export default function Inputes() {

  let [values, setValues] = useState('Initial value');

  const updatevalue = (event) => {setValues(event.target.value)};

  return (
    <>
      <div className="main input" style={{padding:'20px 0 ',lineHeight:'50px',height:'133px'}}>
        <h1>Task 2</h1>
        <input type="text" placeholder="Enter the Value" onChange={updatevalue}/>
        <h2>{values}</h2>
      </div>
      <div style={{borderBottom:'2px solid black',width:'100%'}}></div>
    </>
  );
}
