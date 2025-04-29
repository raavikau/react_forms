import React, { useState } from "react";

function Event() {
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
        event.preventDefault(); // to stop reload page
        setHeading(fnameText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hello {headingText}</h1>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder="What is your first name?" 
                value={fnameText}
            />
            <button 
                style = {{ backgroundColor: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseRelease} 
                type="submit">
                Submit
            </button>
        </form>
    );
}

export default Event;
