import { useEffect, useReducer, useState } from "react";
import "../calculator/Calculator.css"
import SetTitle from "./calc_compo/SetTitle";

function Calculator() {
    let [title, setTitle] = useState("");

    useEffect(() => {
        setTitle("My Calculator App");
        return () => {
            setTitle("My React App");
        };
    }, []);

    function reducer(state, action) {
        switch (action.type) {
            case "Key_Press": {
                let currString = state.Is_symbol
                    ? state.stringNumber + action.number
                    : state.stringNumber + action.number;

                let tempNum = state.Is_symbol
                    ? action.number
                    : state.Temp_nums * 10 + action.number;

                return {
                    ...state,
                    Temp_nums: tempNum,
                    stringNumber: currString,
                    Is_symbol: false,
                };
            }

            case "+": {
                let total =
                    state.total === null ? state.Temp_nums : state.total + state.Temp_nums;
                return {
                    ...state,
                    total,
                    type: "+",
                    stringNumber: state.stringNumber + "+",
                    Temp_nums: 0,
                    Is_symbol: true,
                };
            }

            case "-": {
                let total =
                    state.total === null ? state.Temp_nums : state.total - state.Temp_nums;
                return {
                    ...state,
                    total,
                    type: "-",
                    stringNumber: state.stringNumber + "-",
                    Temp_nums: 0,
                    Is_symbol: true,
                };
            }

            case "X": {
                let total =
                    state.total === null ? state.Temp_nums : state.total * state.Temp_nums;
                return {
                    ...state,
                    total,
                    type: "X",
                    stringNumber: state.stringNumber + "×",
                    Temp_nums: 0,
                    Is_symbol: true,
                };
            }

            case "/": {
                let total =
                    state.total === null ? state.Temp_nums : state.total / state.Temp_nums;
                return {
                    ...state,
                    total,
                    type: "/",
                    stringNumber: state.stringNumber + "÷",
                    Temp_nums: 0,
                    Is_symbol: true,
                };
            }

            case "=": {
                let result = state.total;
                switch (state.type) {
                    case "+": result = state.total + state.Temp_nums; break;
                    case "-": result = state.total - state.Temp_nums; break;
                    case "X": result = state.total * state.Temp_nums; break;
                    case "/": result = state.total / state.Temp_nums; break;
                    default: result = state.Temp_nums;
                }
                return {
                    ...state,
                    total: result,
                    stringNumber: state.stringNumber + "=" + result,
                    Temp_nums: 0,
                    Is_symbol: true,
                };
            }

            case "C":
                return {
                    number: 0,
                    type: "",
                    stringNumber: "",
                    total: null,
                    Temp_nums: 0,
                    Is_symbol: false,
                };

            default:
                return state;
        }
    }

    let initialValue = {
        type: "",
        number: 0,
        Is_symbol: false,
        Temp_nums: 0,
        stringNumber: "",
        total: null,
    };

    let [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <>
            <SetTitle titleMsg={title} />
            <div className="calculator" role="application" aria-label="Simple calculator">
                <div className="display">
                    <div className="expr">{state.stringNumber}</div>
                    <div className="res">{state.total}</div>
                </div>

                <div className="keys">
                    <button onClick={() => { dispatch({ type: "C" }) }} className="key func">C</button>
                    <button onClick={() => { dispatch({ type: "<-" }) }} className="key func">←</button>
                    <button onClick={() => { dispatch({ type: "%" }) }} className="key func">%</button>
                    <button onClick={() => { dispatch({ type: "/" }) }} className="key op">÷</button>

                    <button onClick={() => { dispatch({ type: "Key_Press", number: 7 }) }} className="key">7</button>
                    <button onClick={() => { dispatch({ type: "Key_Press", number: 8 }) }} className="key">8</button>
                    <button onClick={() => { dispatch({ type: "Key_Press", number: 9 }) }} className="key">9</button>
                    <button onClick={() => { dispatch({ type: "X" }) }} className="key op">×</button>

                    <button onClick={() => { dispatch({ type: "Key_Press", number: 4 }) }} className="key">4</button>
                    <button onClick={() => { dispatch({ type: "Key_Press", number: 5 }) }} className="key">5</button>
                    <button onClick={() => { dispatch({ type: "Key_Press", number: 6 }) }} className="key">6</button>
                    <button onClick={() => { dispatch({ type: "-" }) }} className="key op">−</button>

                    <button onClick={() => { dispatch({ type: "Key_Press", number: 1 }) }} className="key">1</button>
                    <button onClick={() => { dispatch({ type: "Key_Press", number: 2 }) }} className="key">2</button>
                    <button onClick={() => { dispatch({ type: "Key_Press", number: 3 }) }} className="key">3</button>
                    <button onClick={() => { dispatch({ type: "+" }) }} className="key op">+</button>

                    <button onClick={() => { dispatch({ type: "Key_Press", number: 0 }) }} className="key span-2">0</button>
                    <button onClick={() => { dispatch({ type: "." }) }} className="key">.</button>
                    <button onClick={() => { dispatch({ type: "=" }) }} className="key op">=</button>
                </div>

                <div className="hint">(UI only – no calculation logic)</div>
            </div>
        </>
    );
}
export default Calculator
// Simple Calculator UI