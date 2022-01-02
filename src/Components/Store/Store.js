import React, { Fragment, useContext, useState } from "react";
import Product from "../Product/Product";
import { ProductContext } from "./../context/ProductsContextProvider";
import "./Store.css";
import galaxy_notes from "../assets/galaxy-note.jpg";
import nokiaAd from "../assets/nokia1.webp";
import xiomiAd from "../assets/xiami1.webp";
import huaweiAd from "../assets/huawei1.webp";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";

const Store = (props) => {
  const products = useContext(ProductContext);

  // const search = useContext(SearchContext);

  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const { pathname } = props.location;

  return (
    <Fragment>
      <Navbar search={search} searchHandler={searchHandler} />

      {pathname === "/products" ? <Landing /> : null}

      <div className="container-fluid p-5 container-store-product">
        <div className="col-12" style={{ textAlign: "center" }}>
          <img
            src={galaxy_notes}
            className="w-50 ad-image-landing"
            alt="samsung-galaxy"
          />
        </div>
        <h4
          style={{
            borderBottom: "3px solid #fc0046",
            width: "fit-content",
            marginRight: "2rem",
          }}
        >
          پرچــــمداران دیجیتال
        </h4>
        <div className="row">
          {searchProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2  store-product">
              <Product key={product.id} productData={product} />
            </div>
          ))}

          <div className="col-12 col-md-4 mt-5">
            <img
              src={nokiaAd}
              className="img-ad ad-image-landing"
              alt="phone"
            />
          </div>
          <div className="col-12 col-md-4 mt-5">
            <img
              src={xiomiAd}
              className="img-ad ad-image-landing"
              alt="phone"
            />
          </div>
          <div className="col-12 col-md-4 mt-5">
            <img
              src={huaweiAd}
              className="img-ad ad-image-landing"
              alt="phone"
            />
          </div>
        </div>
        {/* <h4
        style={{
          borderBottom: "3px solid #fc0046",
          width: "fit-content",
          marginRight: "2rem",
        }}
      >
        پرچــــمدارن اپــــــل
      </h4>
      <div className="row">
        {apples.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2  store-product">
            <Product key={product.id} productData={product} />
          </div>
        ))}
        <div className="col-12">
          <img
            src={iphone13promax}
            className="img-iphone-ad ad-image-landing"
            alt="Apple"
          />
        </div>
      </div>
      <h4
        style={{
          borderBottom: "3px solid #fc0046",
          width: "fit-content",
          marginRight: "2rem",
        }}
      >
        لـــپـتاپ
      </h4>
      <div className="row">
        {laptops.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2  store-product">
            <Product key={product.id} productData={product} />
          </div>
        ))}
       
      </div> */}
      </div>
    </Fragment>
  );
};

export default Store;
