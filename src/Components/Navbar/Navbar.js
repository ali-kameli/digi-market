import React, { useContext, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "./../context/CartContextProvider";
import "./Navbar.css";
import "./MainNav/Main.css";
import MainNav from "./MainNav/MainNav";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <Fragment>
      <div>
        <div id="ticker" class="ticker">
          <ul>
            <li>تــخــفیــف هـای ویــــــژه</li>
            <li>خــریــد کــالـــای دیـجـیتـــال</li>
            <li>ضـمــانت اصـــــل کـــــالا</li>
          </ul>
        </div>
        <div className="container-fluid p-0 sticky-top container-all-navbar">
          <div className="row m-0">
            <div className="col-12 p-0">
              <nav className="navbar navbar-expand-lg py-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon "></span>
                </button>
                <NavLink
                  className="navbar-brand navbar-logo col-3"
                  to="/products"
                >
                  <h4>ᴰⁱᵍⁱ ᴹᵃʳᵏᵉᵗ</h4>
                </NavLink>

                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav pr-0">
                    <li className="nav-item">
                      <div>
                        <form className="form-contorol mt-2 form-navbar-search">
                          <div className="main">
                            <div className="form-group has-search">
                              <i className="fa fa-search form-control-feedback"></i>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="جستجــو در دیـجـی مارکـت"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <MainNav /> */}
                    </li>
                  </ul>
                </div>

                <ul className="ul-login mt-1">
                  <span>
                    <i className="fa fa-user-o fa-user-navbar "></i>
                  </span>
                  <div className="sign-in-navbar">
                  <NavLink
                      activeStyle={{ color: "skyblue" }}
                      className="nav-link login-navbar pl-2"
                      to="/signin"
                    >
                      ورود
                    </NavLink>
                    |
                    <NavLink
                      activeStyle={{ color: "limegreen" }}
                      className="nav-link pr-2 signin-navbar"
                      to="/signup"
                    >
                      عضویت
                    </NavLink>
                  </div>
                </ul>
                <ul className="cart-navbar">
                  <li>
                    <Link to="/cart">
                      <span>
                        <i className="fa fa-shopping-cart shopping-cart-navbar"></i>
                      </span>
                      <p className="span-counter">{state.itemsCounter}</p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
