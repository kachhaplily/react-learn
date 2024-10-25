//use state
//counter project

import { useState } from "react";

const ChapterOne=()=>{
const [counter,setCounter]=useState(10)
/**
 * method to add counter
 */
const add=()=>{
   setCounter(counter+1);
}

/**
 * method to decrement counter
 */
const remove=()=>{
    if(counter===0){
        alert("counter is zero");
        setCounter(0);

    }else{
        setCounter(counter-1);
    }
}
 
return(<>
<div>
<h1>Counter</h1>
<p>Click button to increment or decremnet the counter the counter</p>
<p>{counter}</p>
<button onClick={add}>Incremnet</button>
<button onClick={remove}>Decrement</button>
</div>
</>)
}
export default ChapterOne;