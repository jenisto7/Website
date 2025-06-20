import React from 'react';
function ComponentD({user}) {

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`bye ${user}`} </h2>
        </div>
    )
}
export default ComponentD;