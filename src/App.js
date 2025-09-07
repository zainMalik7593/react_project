import UiPropsChangesTrack from "./PropsTraining/UiPropsChangesTrack";
import { useState } from "react";
import Calculator from "./calculator/Calculator";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let [btn , setbtn] = useState(false)
  function change_compo(flag) {
    setbtn(flag)
  }
  if (btn) {
    return (
      <>
      <Calculator/>
        <button className="btn btn-primary" onClick={()=>{change_compo(false)}}>Props </button>
      </>
  
    );
    
  } else {
    return (
      <>
      <UiPropsChangesTrack/>
        <button className="btn btn-primary" onClick={()=>{change_compo(true)}}>Calculator</button>
      </>
  
    );

  }
// for test use effect through set intervel
// let [flag, setflag] = useState(false)
// function func(){
//   setflag(true)
// }
// if (!flag) {
//   return (
//       <UseEffectPractice hideEle={func} flag={flag}/>
//     );
// } else {
//   return (
//       <StateLiftingComponent/>
//     );
// }
}

export default App;
