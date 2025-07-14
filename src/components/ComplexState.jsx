import React, { useState } from "react";

function ComplexState() {
    const [contact, setContact] = useState({ fname: "", lname: "", email: "" });
    function handleChange(event) {
        const {name, value} = event.target; // its equal to event.target.name
        // setContact((previous)=>{
        //   // function with pasing previous val var
        //     if (name === "fname"){
        //         return {
        //             fname:value,
        //             lname:previous.lname,
        //             email:previous.email
        //         };
        //     } else if (name === "lname") {
        //         return {
        //             fname:previous.fname,
        //             lname:value,
        //             email:previous.email
        //         };
        //     } else if (name === "email") {
        //         return {
        //             fname:previous.fname,
        //             lname:previous.lname,
        //             email:value
        //         };
        //     }
        // });

        // you can use this ES6 optimize code with spread operator instead of above setContact function
        setContact((previousvalue)=> {  // give all previous values 
            return { 
                ...previousvalue,
                 [name]:value  // [name] as key in dict
            };
        });
        
    }
    return (
        <>
            <h1>Hello {contact.fname} {contact.lname}</h1>
            <p>{contact.email}</p>
            <form>
                <input onChange={handleChange} name="fname" placeholder="First Name" value={contact.fname} />
                <input onChange={handleChange} name="lname" placeholder="Last Name" value={contact.lname} />
                <input onChange={handleChange} name="email" placeholder="Email" value={contact.email} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ComplexState;
