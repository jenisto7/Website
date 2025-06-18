import React from "react";
import ComponentD from "./ComponentD.jsx";
function ComponentC({ user}) {
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD user={user} />
        </div>
    )
}
export default ComponentC