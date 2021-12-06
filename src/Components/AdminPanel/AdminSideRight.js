import React from "react";
import { NavLink } from "react-router-dom";

const AdminSideRight = () => {
  return (
    <div>
      <NavLink to="/dashboard/home" activeStyle={{ color: "#ff82a5" }}>
        <div className="section-admin-sidbar mb-4">
          <i className="fa fa-dashboard"></i>
          خانه
        </div>
      </NavLink>
      <NavLink to="/dashboard/account" activeStyle={{ color: "#85868b" }}>
        <div className="section-admin-sidbar mb-4">
          <i className="fa fa-user"></i>
          حساب کاربری
        </div>
      </NavLink>
      <NavLink to="/dashboard/wallet" activeStyle={{ color: "#85868b" }}>
        {" "}
        <div className="section-admin-sidbar mb-4">
          <i className="fas fa-wallet"></i>
          کیف پول
        </div>
      </NavLink>
      <NavLink to="/dashboard/setting" activeStyle={{ color: "#85868b" }}>
        <div className="section-admin-sidbar mb-4">
          <i className="fa fa-gear"></i>
          تنظیمات
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="section-admin-sidbar mb-4">
          <i className="fa fa-sign-out"></i>
          خروج
        </div>
      </NavLink>
    </div>
  );
};

export default AdminSideRight;
