import React, { useContext } from "react";
import "./off.css";
import Gift from "../../assets/boxGift.png";
import { ProductContext } from "../../context/ProductsContextProvider";
import OffProduct from "./offProduct";

const Off = () => {
  const products = useContext(ProductContext);

  return (
    <div className="container-fluid  pb-5 mt-5 off-landing">
      <div className="row m-0" style={{textAlign:"center"}}>
        <div className="col-12 col-md-2 off-side">
          <img src={Gift} alt="gift" className="img-off" />
          <span className="text-off">OFF% MARKET</span>
        </div>
        <div className="off-resp" style={{display:"flex "}}> 
          {products.map((product) => (
            <div className="col-12">
              <OffProduct key={product.id} productData={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Off;
