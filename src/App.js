import ProductsContextProvider from "./Components/context/ProductsContextProvider";
import React from "react";
import CartContextProvider from "./Components/context/CartContextProvider";
import Store from "./Components/Store/Store";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import SignIn from "./Components/signIn/SignIn";
import SignUp from "./Components/signUp/SignUp";
import ShopCart from "./Components/ShopCart/ShopCart";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import { ToastContainer } from "react-toastify";
import WalletPanel from "./Components/AdminPanel/wallet";
import SettingPanel from "./Components/AdminPanel/setting";
import AdminDashboard from "./Components/AdminPanel/dashboard";
import AdminSideRight from "./Components/AdminPanel/AdminSideRight";
import AdminDetail from "./Components/AdminPanel/AdminDetail";
import "./Components/AdminPanel/Admin.css"
import AccountPanel from "./Components/AdminPanel/Account";

const App = (props) => {
  const { pathname } = props.location;
  return (
    <Switch>
      <Route path={["/dashboard"]}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 py-5 admin-sidbar-right">
              <AdminSideRight />
            </div>
            <div className="col-7 admin-panel-center pt-5">
              <Route path="/dashboard/home" component={AdminDashboard} />
              <Route path="/dashboard/account" component={AccountPanel} />
              <Route path="/dashboard/wallet" component={WalletPanel} />
              <Route path="/dashboard/setting" component={SettingPanel} />
            </div>

            <div className="col-3 admin-sidebar-left pt-3">
              <AdminDetail />
            </div>
          </div>
        </div>
      </Route>
      <Route path={["/"]}>
        <ProductsContextProvider>
          <CartContextProvider>
            <ToastContainer />
            <Navbar />
            {pathname === "/products" ? <Landing /> : null}
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/products" component={Store} />
              <Route path="/cart" component={ShopCart} />
              <Redirect to="/products" />
            </Switch>
            <Footer />
          </CartContextProvider>
        </ProductsContextProvider>
      </Route>
    </Switch>
  );
};

export default withRouter(App);
