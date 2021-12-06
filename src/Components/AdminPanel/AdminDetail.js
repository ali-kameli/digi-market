import React from "react";

const AdminDetail = () => {
  return (
    <>
      <div className="admin-panel-profile">
        <h6>سلام,علی</h6>
        {/* <img src="" alt=""/> */}
        <p className="picture-admin-sidebar-left"></p>
      </div>
      <div className="div-total-admin-panel">
        <span className="span-total-wallet-admin-panel">
          <p>موجودی</p> 1,000,000 تومان
        </span>
        <i className="fa fa-usd"></i>
      </div>
      <div className="total-sell-much">
      <div className="div-total-sell-admin-panel">
        <span className="span-sell-admin-panel">
          <p> تعداد محصولات</p> 26
        </span>
      </div>
        <i className="fa fa-shopping-cart icon-sell-admin-panel"></i>
      </div>
      <div className="lorem-admin-detail">

      <div className="div-lorem-admin-panel">
        <span className="span-lorem-admin-panel">
          <p>لورم ایپسوم</p> 140
        </span>
      </div>
        <i className="fa fa-money icon-lorem-admin-panel "></i>
        </div>
      <div className="lorem-admin-detail">

      <div className="div-lorem-admin-panel">
        <span className="span-lorem-admin-panel">
          <p>لورم ایپسوم</p>185
        </span>
      </div>
        <i className="fas fa-money-check-alt icon-lorem-admin-panel "></i>
        </div>
    </>
  );
};

export default AdminDetail;
