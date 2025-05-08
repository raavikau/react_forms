import React from "react";

function ComplexState() {

    return (
        <>
            <h1>Hello Name</h1>
            <p>Email</p>
            <form>
                <input onChange={handleChange} name="fname" placeholder="First Name" value="" />
                <input onChange={handleChange} name="lname" placeholder="Last Name" value="" />
                <input onChange={handleChange} name="email" placeholder="Email" value="" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ComplexState;