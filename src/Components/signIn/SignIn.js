import React, { useRef, useState } from "react";
import "./SignIn.css";
import SimpleReactValidator from "simple-react-validator";
import { signin } from "../../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useHistory, Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();
  const history = useHistory();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی است",
        min: "این فیلد باید بیشتر از 5 کاراکتر باشد",
        email: "ایمیل نوشته شده صحیح نمی باشد",
      },
      element: (message) => (
        <div
          style={{
            color: "red",
            position: "absolute",
            fontWeight: "lighter",
            margin: "9px",
          }}
        >
          {message}
        </div>
      ),
    })
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      if (validator.current.allValid()) {
        const { status, data } = await signin(user);
        if (status === 200) {
          toast.success("Login successfully", {
            position: "top-right",
            closeOnClick: true,
          });
          localStorage.setItem("token", data.token);
          history.replace("/");
          // reset();
          history.replace("/dashboard");
        }
      } else {
        validator.current.showMessages();

        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Error to login", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="container-fluid container-sign-in py-5">
      {/* <div className="cover-signin"></div> */}
      <div className="row py-5">
        <div className="col-12 col-md-6  div-form-signin">
          <form
            onSubmit={handleSubmit}
            className="form-contorol forms-in-sign p-5"
          >
            <h2>ورود</h2>
            {/* Email input group  */}
            <div className="input-group mb-2 div-sigin-form">
              <i className="fa fa-envelope"></i>
              <input
                className="fa fa-envelope"
                type="text"
                aria-describedby="email-address"
                placeholder="ایــمـیـل"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />
              <div>
                {validator.current.message("email", email, "required|email")}
              </div>
            </div>
            {/*End Email input group  */}

            {/*password input group  */}
            <div className="input-group  mb-2 div-sigin-form">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder=" رمز عبــور"
                name="password"
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              <div>
                {validator.current.message(
                  "password",
                  password,
                  "required|min:5"
                )}
              </div>
            </div>
            {/*End password input group  */}
            {/* bootstrap modal  */}
            <div className="col-12 col-md-4 offset-1 offset-md-2 mt-4 link-all-helper">
              <a
              href="/#"
                type="button"
                className=""
                data-toggle="modal"
                data-target="#myModal"
              >
                بخوان مرا
              </a>
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h6 className="modal-title">
                        برای ورود به سایت از ایمیل و رمز مشخص شده استفاده کنید !
                      </h6>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        {/* &times; */}
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Email : eve.holt@reqres.in</p>
                      <p>password : cityslicka</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        بستن
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="helper-signin">
                <Link>فراموشی رمز عبور</Link>
                <Link to="/signup">ثبت نام کنید</Link>
              </div>
            </div>
            {/* End bootstrap modal  */}
            <button type="" className="btn-sign-in  btn btn-primary ">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
