import React, { useState } from "react";
import "./count.css";

export default function Count() {
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="main count" style={{padding:'20px 0 ',lineHeight:'50px'}}>
        <h1>Task 1</h1>
        <h2>Count : {count}</h2>
        <div>
          <button style={{ backgroundColor: "green" }} onClick={()=>(setCount(count+1))}>
            Increment
          </button> <button onClick={()=>(setCount(count-1))}>Decrement</button>
        </div>
      </div>
      <div style={{borderBottom:'2px solid black',width:'100%'}}></div>
    </>
  );
}
