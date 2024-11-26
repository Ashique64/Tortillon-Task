import React from "react";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <a href="">ClothCart</a>
            </div>
            <div className="items">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
                <div className="cart_icon">
                    <i>cart</i>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
