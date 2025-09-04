import { useState } from "react";

function App() {
  const [color, setColor] = useState("alert alert-light");
  const [colorName, setColorName] = useState("white");
  return (
    <div className="container mt-5 text-center">
      <h1 className="color-dark bg-white mb-5">This is dinamic alert throught select options</h1>
      <div className="container mb-5">
        <select onChange={(e)=>{setColor(e.target.value); setColorName(e.target.options[e.target.selectedIndex].text)}} class="form-select" aria-label="Default select example">
          <option selected>Change alert Color</option>
          <option value="alert alert-danger">red</option>
          <option value="alert alert-success">green</option>
          <option value="alert alert-primary">blue</option>
          <option value="alert alert-secondary">gray</option>
          <option value="alert alert-warning">yellow</option>
          <option value="alert alert-info">sea green</option>
          <option value="alert alert-light">white</option>
          <option value="alert alert-dark">blackS</option>
        </select>
      </div>
    <div className={color} role="alert">
      {colorName}
    </div>
    {/* <span className="badge text-bg-primary" onClick={()=>setColor(color + 1)}>Primary</span> */}
    </div>
  );
}

export default App;
