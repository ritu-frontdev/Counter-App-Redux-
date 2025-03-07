import React from "react";
import { useSelector, useDispatch} from "react-redux";
// import { increment, decrement } from "../Redux/action";
import { increment,decrement,reset } from "../Redux/action";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Counter=()=>{
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return(
        <>
        <div className="main_container">
		<h2 className="subheading">Increment & Decrement Counter.</h2>
        <div className="container">
        <div className="subcontainer">
        <button className="col col-lg-3" onClick={()=>dispatch(decrement())}>-</button>{" "}
        <input style={{width:"5rem", textAlign:"center"}}type="text" value={count}/>{" "}
        <button className="col col-lg-3" onClick={()=>dispatch(increment())}>+
    </button>


        </div>
        


        </div>
        <button className="resetbtn" onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        </>              
    )  
}
export default Counter;