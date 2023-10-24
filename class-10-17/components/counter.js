"use client";
import { useSearchParams } from "next/navigation";
import {useState} from "react";

export default function Counter(){
    //count is a variable, setCount is a function, default value id count is 0
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0)
    const [sum, setSum] = useState(count+count2)
    

    return(
        <div>
            <h1>this is the counter</h1>
            <h3>Count: {count} </h3>
            {/*lambda function*/}
            <button onClick={() => setCount(count+1, setSum(count+1+count2))}>Press</button>
            <h3>Count2: {count2} </h3>
            <button onClick={() => setCount2(count2+1, setSum(count+count2+1))}>Press 2</button>
            <h3>Sum: {sum}</h3>

        </div>
    )
}