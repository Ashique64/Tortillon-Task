import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from "../../redux/cartSlice";
import "./Cart.scss";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const BASE_URL = "http://127.0.0.1:8000";

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleOrderNow = async () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const orders = cartItems.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
        }));

        try {
            const response = await fetch(`${BASE_URL}/api/orders/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ orders }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Order placed successfully:", data);
                alert("Order placed successfully!");
                dispatch(clearCart()); 
            } else {
                const errorData = await response.json();
                console.error("Failed to place order:", errorData);
                alert("Failed to place order: " + errorData.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
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
                                            Price: &#8377; <span>{item.price * item.quantity}</span>
                                        </p>
                                        <p>
                                            Quantity:
                                            <button className="decrement" onClick={() => handleDecrement(item.id)}>-</button>
                                            {item.quantity}
                                            <button className="increment" onClick={() => handleIncrement(item.id)}>+</button>
                                        </p>
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

                    {cartItems.length > 0 ? (
                        <div className="cart-item2">
                            <div className="items">
                                <h3>Cart Total</h3>
                                <div className="total_items">
                                    <div className="item">
                                        <p>Cart Subtotal</p>
                                        <h6>&#8377;{cartSubtotal.toFixed(2)}</h6>
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
                                        <h6>&#8377;{cartSubtotal.toFixed(2)}</h6>
                                    </div>
                                </div>

                                <button onClick={handleOrderNow}>Order Now</button>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
