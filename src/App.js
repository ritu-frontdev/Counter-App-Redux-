import React from "react";
import Counter from "./Component/Counter";
import './Component/Counter.css';
const App=()=>{
    return (
        <>
        <h1 style={{textAlign:"center", fontSize:"50px"}}>React-Redux Counter App </h1>
        <Counter/>
        </>
    )
}
export default App;