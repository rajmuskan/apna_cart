import React, { useState } from "react";

export default function Counter() {
    // state
    const [count, setCount ] = useState(10);
    const handleReduce=(e)=>{
       let y = e.target.value ;
       y=y*5;
        console.log(y);


        setCount(e.target.value +1 );
    }
    const handleIncrease=()=>{
        let x=0;
        setCount(x+10);
    }



  return (
    <>
    <div style={{display: 'flex',alignItems: 'center', gap: 10}} >
      <button type="button" className="btn btn-danger" onClick={handleReduce}>
        -
      </button>
    
      <div>{count}</div>

      <button type="button" className="btn btn-warning" onClick={handleIncrease}>
        +
      </button>
    </div>
    </>
  );
}
