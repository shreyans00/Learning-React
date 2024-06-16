import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="menu_style">
                <NavLink exact activeclassName="active_class" to="/">About</NavLink>
                {/* use NavNavLink instead of NavLink kyunki NavLink mai active class bhi dikha skte hai */}
                <NavLink exact activeclassName="active_class" to="/contact">Contact</NavLink>
                <NavLink exact activeclassName="active_class" to="/user">User</NavLink>
                <NavLink exact activeclassName="active_class" to="/search">Search</NavLink>
            </div>
            <br />
            {/* <a href="/">About</a> isme pura page load ho rha hai */}
            {/* <a href="/contact">Contact</a> */}
        </>
    );
};

export default Navbar;


