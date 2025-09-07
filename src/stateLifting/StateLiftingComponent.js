import { useState } from "react";
import StateLiftingChildComponent from "./StateLiftingChildComponent/StateLiftingChildComponent";


function StateLiftingComponent() {
    const [yourtName , setyourName] = useState("");
    let fetchChildInputData_throughStateLifting = (data)=>{
        setyourName(data);
    }
    return (
        <>
        <StateLiftingChildComponent stateLifting={fetchChildInputData_throughStateLifting}/>
        <h1>Your text {yourtName}</h1>
        </>
    );
}

export default StateLiftingComponent