import React, { useState } from "react";
import Event from "./Event";
import ConditionalForm from "./ConditionalForm";
import ComplexState from "./CompexState";
var userIsRegistered = false;

function App() {
    return (
        <div className="container">
            <Event />
            <ConditionalForm isRegistered = {userIsRegistered} />
            <ComplexState />
        </div>
    );
}

export default App;
