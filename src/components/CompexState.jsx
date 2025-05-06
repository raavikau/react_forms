import React from "react";

function ComplexState() {
    return (
        <>
            <h1>Hello Name</h1>
            <p>Email</p>
            <form>
                <input type="text" placeholder="First Name" value="" />
                <input type="text" placeholder="Last Name" value="" />
                <input type="text" placeholder="Email" value="" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ComplexState;