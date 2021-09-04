import React, { Component } from 'react';

//Stateless functional component 

const NavBar = ({totalCounters}) => {
    console.log("NavBar rendered");
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Types of Items in Cart
            <span className="badge badge-pill badge-secondary m-2">
                {totalCounters}
            </span>
        </a>
        </nav>
        );
};

 
export default NavBar;