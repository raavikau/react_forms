import React, { useState } from "react";
import Event from "./Event";
import ConditionalForm from "./ConditionalForm";
var userIsRegistered = false;

function App() {
    return (
        <div className="container">
            <Event />
            <ConditionalForm isRegistered = {userIsRegistered} />
        </div>
    );
}

export default App;
