import React, { useState } from "react";

function ComplexState() {
    const [setContact, submitContact] = useState({fname:"", lname:"", email:""});
    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;
        submitContact((previous)=>{
            if (inputName === "fname"){
                return {
                    fname:newValue,
                    lname:previous.lname,
                    email:previous.email
                }
            } else if (inputName === "lname") {
                return {
                    fname:previous.fname,
                    lname:newValue,
                    email:previous.email
                }
            } else if (inputName === "email") {
                return {
                    fname:previous.fname,
                    lname:previous.lname,
                    email:newValue
                }
            }
        })
        
    }
    return (
        <>
            <h1>Hello {setContact.fname} {setContact.lname}</h1>
            <p>Email {setContact.email}</p>
            <form>
                <input onChange={handleChange} name="fname" placeholder="First Name" value={setContact.fname} />
                <input onChange={handleChange} name="lname" placeholder="Last Name" value={setContact.lname} />
                <input onChange={handleChange} name="email" placeholder="Email" value={setContact.email} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ComplexState;
