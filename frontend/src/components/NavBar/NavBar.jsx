import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/cartSlice";

const NavBar = () => {
    const [menuIcon, setMenuicon] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const cartTotal = useSelector(selectCartTotal);

    const handleMenuIcon = () => {
        setMenuicon(!menuIcon);
    };


    useEffect(() => {

        const currentPath = location.pathname.slice(1) || "shop";
        setActiveItem(currentPath);
    }, [location]);

    return (
        <div className="nav">
            <Link className="logo" href="">
                ClothCart
            </Link>
            <div>
                <ul id="navbar-items" className={menuIcon ? "show" : ""}>
                    <li>
                        <Link
                            className={activeItem === "home" ? "active" : ""}
                            onClick={() => setActiveItem("home")}
                            to = "/home"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeItem === "shop" ? "active" : ""}
                            onClick={() => setActiveItem("shop")}
                            to = "/"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeItem === "about" ? "active" : ""}
                            onClick={() => setActiveItem("about")}
                            to = "/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                    <Link
                            className={activeItem === "cart" ? "active" : ""}
                            onClick={() => setActiveItem("cart")}
                            to="/cart"
                        >
                            <i className="fas fa-shopping-cart"></i>
                            {cartTotal > 0 && <span className="cart-badge">{cartTotal}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={handleMenuIcon}>
                <i id="bar" className={menuIcon ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
    );
};

export default NavBar;