import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>آدرس ایمیل</h3>
              <a href="mailto:script.frontend@gmail.com">
                script.frontend@gmail.com
              </a>
            </span>
            <i className="fa fa-envelope fa-footer"></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>پیام</h3>
              <div style={{ display: "grid" }}>
                <a href="https://www.instagram.com/script_front">
                  Script_Front
                  <i className="fa fa-instagram icon-footer"></i>
                </a>
                <a href="tel:+989385109370">
                  0938 510 9370
                  <i className="fa fa-whatsapp icon-footer"></i>
                </a>
              </div>
            </span>
            <i className="fa fa-comment fa-footer"></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>تلفن</h3>
              <a href="tel:+989385109370">0938 510 9370</a>
            </span>
            <i className="fa fa-phone fa-footer"></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 section-footer">
            <span>
              <h3>آدرس</h3>
              <p>مازندران - ساری</p>
            </span>
            <i className="fa fa-map-marker fa-footer"></i>
          </div>
        </div>
      </div>
      <div className="container-fluid container-footer py-5">
        <div className="row pt-5 row-footer">
          <div className="col-12 col-md-2 "> </div>
          <div className="col-12 col-md-4 footer-text">
            <h3>دیـجـی مارکـت</h3>
            <p>
              دیـجـی مارکـت یکی از بزرگترین عرضه کنندگان کالای دیجیتال در سراسر
              کشور است که بروزترین و جدیدترین کالاها مانند گوشی های موبایل، لپ
              تاپ، تبلت و لوازم جانبی گوشی و کامپیوتر را از برترین برندهای جهانی
              با مناسب ترین قیمت و ضمانت اصالت کالا به کاربران عرضه داشته است.
              این فروشگاه بزرگ اینترنتی همواره در تلاش است تا در راستای کسب
              رضایت مشتریان کالاهای خود را به بهترین شکل ممکن با ارزان ترین قیمت
              به کاربران عرضه کند. شما می توانید تنها با چند کلیک ساده کالای
              مورد نیاز خود را از مبیت خریداری کنید ؛ تیم مجرب پشتیبانی این
              فروشگاه بزرگ نیز در تمامی مراحل خرید، حتی پس از تحویل کالا نیز شما
              را همراهی خواهد کرد. ضمانت اصالت تمامی کالاهای موجود دردیجی مارکت
              مهر تاییدی بر کیفیت آن ها می باشد.
            </p>
          </div>
          <div className="col-12 col-md-3 service-footer">
            <h3 className="  service-moshavere"> راهنمای خرید</h3>
            <a href="#">روش های پرداخت</a>
            <a href="#"> روش های ارسال کالا</a>
            <a href="#">ضـمــانت کالا</a>
          </div>
          <div className="col-12 col-md-3 service-footer">
            <h3 className="  service-moshavere">خدمات مشتریان</h3>
            <a href="#">راهنمای جامع</a>
            <a href="#">سوالات متداول</a>
            <a href="#">حریم خصوصی</a>
          </div>

          <div
            className="col-12"
            style={{
              color: "#fe0048 ",
              marginTop: "2rem",
              textAlign: "center ",
            }}
          >
            © کلیه حقوق مادی و معنوی این وب‌سایت متعلق به
            <a
              href="https://www.instagram.com/__aaalli_"
              style={{ color: "rgb(255 203 203)" }}
            >
              {" "}
              علی کاملی{" "}
            </a>
            می باشد.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
