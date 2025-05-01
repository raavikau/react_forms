import React, { useState } from "react";
import Event from "./Event";
import ConditionalForm from "./ConditionalForm";
 
function App() {
    return (
        <div className="container">
            <Event />
            <ConditionalForm />
        </div>
    );
}

export default App;
