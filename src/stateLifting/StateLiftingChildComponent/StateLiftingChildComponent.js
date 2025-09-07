import 'bootstrap/dist/css/bootstrap.min.css';
function StateLiftingChildComponent({stateLifting}) {
    return (
        <>
        <h2>Enter Your name</h2>
        <input type="text" onChange={(e)=>{stateLifting(e.target.value)}}/>
        </>
    );
}
export default StateLiftingChildComponent