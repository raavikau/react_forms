import React, { useState } from "react";

function App() {
    const [isMouseOver, setMouseOver] = useState(false);
    const [fnameText, setFname] = useState("");

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseRelease() {
        setMouseOver(false);
    }

    function handleChange(event) {
        setFname(event.target.value);
    }

    return (
        <div className="container">
            <form>
                <h1>Hello {fnameText}</h1>
                <input onChange={handleChange} type="text" placeholder="What is your first name?" />
                <button style = {{ backgroundColor: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver} onMouseOut={handleMouseRelease} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
