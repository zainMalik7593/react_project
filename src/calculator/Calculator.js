import { useEffect, useReducer, useState } from "react";
import "../calculator/Calculator.css"
import SetTitle from "./calc_compo/SetTitle";

function Calculator() {
    let [title, settitle] = useState("");
    useEffect(() => {
        settitle("My Calculator App")
      return () => {
        settitle("My React App")
      }
    }, [])
    function reducer(state , action) {
        let currString = "";
        switch (action.type) {
            case "Key_Press":
                currString = String(state.stringNumber + action.number);
                let totalvar = state.total;
                switch (state.type) {
                    case "X":
                        totalvar = state.total * action.number;
                        break;
                
                    default:
                        break;
                }
                console.log(state.type);
                
                return {...state , number: action.number, stringNumber: currString , total : totalvar}
        
            case "X":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: "X", stringNumber: currString}
        
            case "/":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: "/", stringNumber: currString}
        
            case "-":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: "-", stringNumber: currString}
        
            case "+":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: "+", stringNumber: currString}
        
            case "=":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: "=", stringNumber: currString}
        
            case "C":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: "C", stringNumber: currString}
            case ".":
                currString = String(state.stringNumber + action.type);
                return {...state ,type: ".", stringNumber: currString}
        
            default:
                return {...state}
        }
    }
    let initialValue = {
        type: "",
        number: 0,
        stringNumber: "",
        total: 0
    }
    let [state, dispatch] = useReducer(reducer,initialValue);
    return (
        <>
            <SetTitle  titleMsg={title}/>
            <div className="calculator" role="application" aria-label="Simple calculator">
                <div className="display">
                    <div className="expr">{state.stringNumber}</div>
                    <div className="res">{state.total}</div>
                </div>

                <div className="keys">
                    <button onClick={()=>{dispatch({type:"C"})}} className="key func">C</button>
                    <button onClick={()=>{dispatch({type:"<-"})}} className="key func">←</button>
                    <button onClick={()=>{dispatch({type:"%"})}} className="key func">%</button>
                    <button onClick={()=>{dispatch({type:"/"})}} className="key op">÷</button>

                    <button onClick={()=>{dispatch({type:"Key_Press",number: 7})}} className="key">7</button>
                    <button onClick={()=>{dispatch({type:"Key_Press",number: 8})}} className="key">8</button>
                    <button onClick={()=>{dispatch({type:"Key_Press",number: 9})}} className="key">9</button>
                    <button onClick={()=>{dispatch({type:"X",number: 7})}} className="key op">×</button>

                    <button onClick={()=>{dispatch({type:"Key_Press",number: 4})}} className="key">4</button>
                    <button onClick={()=>{dispatch({type:"Key_Press",number: 5})}} className="key">5</button>
                    <button onClick={()=>{dispatch({type:"Key_Press",number: 6})}} className="key">6</button>
                    <button onClick={()=>{dispatch({type:"-",number: 7})}} className="key op">−</button>

                    <button onClick={()=>{dispatch({type:"Key_Press",number: 1})}} className="key">1</button>
                    <button onClick={()=>{dispatch({type:"Key_Press",number: 2})}} className="key">2</button>
                    <button onClick={()=>{dispatch({type:"Key_Press",number: 3})}} className="key">3</button>
                    <button onClick={()=>{dispatch({type:"+",number: 7})}} className="key op">+</button>

                    <button onClick={()=>{dispatch({type:"Key_Press",number: 0})}} className="key span-2">0</button>
                    <button onClick={()=>{dispatch({type:"."})}} className="key">.</button>
                    <button onClick={()=>{dispatch({type:"="})}} className="key op">=</button>
                </div>

                <div className="hint">(UI only – no calculation logic)</div>
            </div>
        </>
    );
}
export default Calculator
// Simple Calculator UI