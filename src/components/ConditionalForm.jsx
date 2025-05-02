import React from "react";
import Input from "./Input";
var isRegistered = false;

function ConditionalForm(props) {
    return (
        <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            { isRegistered === false && (
                <Input type="password" placeholder="Confirm Password" />
            )}
            <button type="submit">
                { isRegistered ? "Login" : "Register" }
            </button>
        </form>
    );
}

export default ConditionalForm;