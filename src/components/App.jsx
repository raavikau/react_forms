import React, { useState } from "react";

function App() {
    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver() {
        setMouseOver(true);
      }
      function handleMouseRelease() {
        setMouseOver(false);
      }
    return (
        <div className="container">
            <form>
                <h1>Hello</h1>
                <input type="text" placeholder="What is your first name?" />
                <button style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseRelease}
                type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
