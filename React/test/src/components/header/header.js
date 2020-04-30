import React from 'react'


const Header = ()=>{
    return (<div className="ui top fixed menu">
    <a className="active item">Home</a>
    <a className="item">Messages</a>
    <a className="item">Friends</a>
    <div className="right menu">
        <div className="item">
            <div className="ui transparent icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
            </div>
            </div>
        </div>
    </div>);
}

export default Header;