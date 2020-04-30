import React from 'react'

// Functional Component
function Root() {
    return (<div>
        <label className="label" for="name"></label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:'red',color:'white'}}>Submit</button>
    </div>);
}

export default Root;