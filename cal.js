import { useState } from 'react';
import React from "react";
import '../cal.css';
const Cal = () => {
    const [value, setValue] = useState('');
    const calculate = () => {
        let result = eval(value);
        setValue(result);
    }
    return (
        <div className="container">
            <div className="display" >
                <input id="display" disabled value={value}></input>
            </div>
            <div className="buttons">
                <button onClick={e => setValue('')}>AC</button>
                <button onClick={e => setValue(value.slice(0,-1))}>DE</button>
                <button value={"/"} onClick={e => setValue(value + e.target.value)}>/</button>
                <button value={"*"} onClick={e => setValue(value + e.target.value)}>x</button>
                <button value={"9"} onClick={e => setValue(value + e.target.value)}>9</button>
                <button value={"8"} onClick={e => setValue(value + e.target.value)}>8</button>
                <button value={"7"} onClick={e => setValue(value + e.target.value)}>7</button>
                <button value={"-"} onClick={e => setValue(value + e.target.value)}>-</button>
                <button value={"6"} onClick={e => setValue(value + e.target.value)}>6</button>
                <button value={"5"} onClick={e => setValue(value + e.target.value)}>5</button>
                <button value={"4"} onClick={e => setValue(value + e.target.value)}>4</button>
                <button value={"+"} onClick={e => setValue(value + e.target.value)}>+</button>
                <button value={"3"} onClick={e => setValue(value + e.target.value)}>3</button>
                <button value={"2"} onClick={e => setValue(value + e.target.value)}>2</button>
                <button value={"1"} onClick={e => setValue(value + e.target.value)}>1</button>
                <button value={"%"} onClick={e => setValue(value + e.target.value)}>%</button> 
                <button value={"0"} onClick={e => setValue(value + e.target.value)}>0</button> 
                <button value={"00"} onClick={e => setValue(value + e.target.value)}>00</button> 
                <button onClick={calculate} style={{width:'130px'}}>=</button> 
            </div>
        </div>
    )
}
export default Cal;