import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { removeFromCart } from "../../redux/cartSlice";
import "./Cart.scss";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const BASE_URL = "http://127.0.0.1:8000";

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <NavBar />
            <div className="cart">
                <div className="title">
                    <h3>
                        <span>My</span> Cart
                    </h3>
                </div>
                <div className="cart-items">
                    {cartItems.length > 0 ? (
                        <div className="cart-item1">
                            {cartItems.map((item) => (
                                <div className="item" key={item.id}>
                                    <img src={`${BASE_URL}${item.image}`} alt={item.name} />
                                    <div className="details">
                                        <h3>{item.name}</h3>
                                        <p>
                                            Price: &#8377; <span>{item.price}</span>
                                        </p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div id="remove">
                                        <i id="" onClick={() => handleRemove(item.id)} className="fas fa-trash"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="empty_cart">Your cart is empty.</p>
                    )}

                    <div className="cart-item2">
                        <div className="items">
                            <h3>Cart Total</h3>
                            <div className="total_items">
                                <div className="item">
                                    <p>Cart Subtotal</p>
                                    <h6>&#8377;999</h6>
                                </div>
                                <div className="item">
                                    <p>Shipping</p>
                                    <h6>Free</h6>
                                </div>
                                <div className="item">
                                    <p>Discount</p>
                                    <h6>&#8377;0</h6>
                                </div>
                                <div className="item">
                                    <p>Cart Total</p>
                                    <h6>&#8377;1999</h6>
                                </div>
                            </div>

                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
