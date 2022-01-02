import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isInCart, quantityCount } from "./../helpers/functions";
import { CartContext } from "./../context/CartContextProvider";
import "./product.css";
import shop from "../assets/addtocart.png";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="product-cart my-3 pt-4 pb-1">
      <Link to={`/products/${productData.id}`} className="link-product">
        <img src={productData.image} alt="product" className="p-3 mb-4" />
        <p style={{ fontSize: "smaller", height: "5rem" }}>
          {productData.title}
        </p>
      </Link>
      <div className="product-btns">
        {quantityCount(state, productData.id) > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
            className="btn-cart-product"
          >
            -
          </button>
        )}

        {quantityCount(state, productData.id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
            className="btn-cart-product"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        )}
        {quantityCount(state, productData.id) > 0 && (
          <span className="counter-product">
            {quantityCount(state, productData.id)}
          </span>
        )}

        {isInCart(state, productData.id) ? (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
            className="btn-cart-product"
          >
            +
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
            className="btn-cart-product-add"
          >
            <img src={shop} alt="ax" />
          </button>
        )}

        <h6>
          {" "}
          <span style={{ display: "inline-flex", fontSize: "13px" }}>
            {" "}
            تومان{" "}
          </span>{" "}
          {productData.price.toLocaleString()}
        </h6>
      </div>
    </div>
  );
};

export default Product;
