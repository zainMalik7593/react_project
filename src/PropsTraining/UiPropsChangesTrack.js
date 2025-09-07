import Printhelloworld from "./printhelloworld/printHelloWorld";

function UiPropsChangesTracks() {
    let name = "Zain";
    let age = 19;
    return (
        <Printhelloworld fullname={name} age={age}/>
    );
}

export default UiPropsChangesTracks