import { useMemo, useState } from "react";

// use memo unncessory state change p high calc krne say bachata hai ye high calc ka result memorize kr leta hai phir jab koi unnessory state change hoti hai to wo oshi result k through patch krta hai taky complex calculation say bacha ja sake or jis state pr wo calc dubara say krti prhti hai to osko as a dependency dedyty hain or agr empty array rehny do to sirf aik baar hi calc hogi
function UseMemoPractice() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState("light");

  // 🐌 Expensive calculation (deliberately slow)
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      // delay create karne k liye
      for (let j = 0; j < 10000; j++) { }
      result *= i;
    }
    return result;
  }, [number]); // only recalc when "number" changes

  return (
    <div style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white", padding: "20px" }}>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {factorial}</p>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );

}
export default UseMemoPractice    