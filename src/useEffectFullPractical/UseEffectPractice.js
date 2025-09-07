import { useEffect } from "react";

function UseEffectPractice({hideEle,flag}) {
  useEffect(() => {
    let func = () => {
      console.log("set interval out");
    }
     let setintervel = setInterval(func, 1000);
    return () => {
      clearInterval(setintervel);
    }
  }, [])
  
return (
  <div>
    {/* UseEffect with cleanup funtion and depn */}
    <button onClick={() => !flag ? hideEle(): console.log("flag true")}>UseEffect</button>
  </div>
);

}
export default UseEffectPractice    