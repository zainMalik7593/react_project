import { useState } from "react";

function StateCroseQ() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {
                for (let i = 0; i < 2; i++) {
                    // issay bs count update hokr rerender hony main timem lagy to ishi k forn baad same statement chli to element aik hi baar update hokr render hoga
                    // setCount(count + 1)
                    // setCount(count + 1)
                    // issay count jitni baar kro utni baar update bhi hoga or render bhi bs is state (variable) ko let ye var pr set krna hoga wrna const say to variable change nhi hota na isliye
                    setCount(count = count + 1)   
                }
             }}>Increase</button>
        </div>
    );
}
export default StateCroseQ