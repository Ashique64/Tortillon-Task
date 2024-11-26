import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import "./Products.scss";

const Products = () => {
    const [products, setProducts] = useState([]);

    const BASE_URL = "http://127.0.0.1:8000";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/`);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <NavBar />
            <div className="store">
                <div className="title">
                    <h3>
                        <span>Our</span> Products
                    </h3>
                </div>
                <div className="product">
                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            <div className="card_items">
                                <img src={`${BASE_URL}${product.image}`} alt={product.name} />

                                <button>Add To Cart</button>
                                <div className="card_details">
                                    <h3>{product.name}</h3>
                                    <h4>
                                        <span> &#8377; :</span> {product.price}
                                    </h4>
                                    <h5>
                                        <span>{product.quantity}</span> item remaining
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
