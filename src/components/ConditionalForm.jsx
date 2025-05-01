import React from "react";
var isRegistered = false;

function ConditionalForm() {
    return (
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {isRegistered === false && (
                <input type="password" placeholder="Confirm Password" />
            )}
            <button type="submit">
                { isRegistered? "Login" : "Register" }
            </button>
        </form>
    );
}

export default ConditionalForm;