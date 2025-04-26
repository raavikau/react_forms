import React, { useState } from "react";

function App() {
    const [isMouseOver, setMouseOver] = useState(false);
    const [fnameText, setFname] = useState("");
    const [headingText, setHeading] = useState("");
    
    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseRelease() {
        setMouseOver(false);
    }

    function handleChange(event) {
        setFname(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHeading(fnameText);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Hello {headingText}</h1>
                <input onChange={handleChange} type="text" placeholder="What is your first name?" value={fnameText}/>
                <button style = {{ backgroundColor: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver} onMouseOut={handleMouseRelease} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
