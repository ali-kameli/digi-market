import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContextProvider";
import "./productDetails.css";
import shop from "./assets/addtocart.png";
import { getProduct } from "./api";

const ProductDetails = (props) => {
  const { dispatch } = useContext(CartContext);

  const [details, setDetails] = useState([]);

  const id = props.match.params.id;

  const data = async () => {
    const response = await getProduct;
    return response[id - 1];
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setDetails(await data());
    };

    fetchAPI();
  }, []);

  return (
    <div className="container p-0 mt-4 container-product-details ">
      <div className="row ">
        <div className="col-12 col-md-5 mt-4 parrent-product-details">
          <img src={details.image} alt="product" />
        </div>
        <div className="col-12 col-md-7 mt-3 text-product-details">
          <h5>{details.title}</h5>
          <h6 className="all-category-detail mt-3">
            <span className="text-category-details">دسته بندی :</span>
            <span className="category-product-details">
              {" "}
              {details.category}
            </span>
          </h6>
          <hr />
          <p>{details.description}</p>
          <hr />

          <div className="btns-details">
            <h4 className="price-product-details">
              <span> {details.price}</span> <p>تومان</p>
            </h4>
            <div className="btn-product-detail">
              {/* <Link to="/products">
                <input
                  className="btn btn-seccondry"
                  value="بازگشت به فروشگاه"
                />
              </Link> */}
              <button
                onClick={() => dispatch({ type: "ADD_ITEM", payload: details })}
                className=" btn-detail-product-add"
              >
                <img src={shop} alt="ax" />
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
