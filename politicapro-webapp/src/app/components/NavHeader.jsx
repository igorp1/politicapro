import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = (props) => {
    return (
        <div className="nav">
            {/* <NavLink exact to="/" >
                <img alt="logo" src="./twitter_logo.svg" />
            </NavLink> */}
            <NavLink className="title" exact to="/">ProliticaPRO</NavLink>
            <NavLink className="link" exact to="/about" activeStyle={ { color: '#4963f5', 'fontWeight':'bold' }} >About</NavLink>
        </div>
    );
}

export default NavHeader;





