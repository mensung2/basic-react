import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const miunsCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="mainPost">
        <div className="countSet">
          <div className="top">
            <button onClick={miunsCount} className="miunsCount">
              -
            </button>
            <p>Count: {count}</p>
            <button onClick={plusCount} className="plusCount">
              +
            </button>
          </div>
          <div className="bottom">
            <button onClick={resetCount} className="resetCount">
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
