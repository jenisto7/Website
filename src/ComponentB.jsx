import React from "react";
import ComponentC from './ComponentC.jsx';
function ComponentB({ user }) {
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC user={user} />
        </div>
    )
}
export default ComponentB