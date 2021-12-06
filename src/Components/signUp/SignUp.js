import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { signup } from "../../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();

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
    const user = { fullname, email, password };

    try {
      if (validator.current.allValid()) {
        const { status, data } = await signup(user);
        if (status === 201) {
          toast.success("User created successfully", {
            position: "top-right",
            closeOnClick: true,
          });
          localStorage.setItem("token", data.token);
        }
      } else {
        validator.current.showMessages();

        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Error in create user", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="container-fluid container-sign-up py-5">
      <div className="cover-signup"></div>
      <div className="row py-5">
        <div className="col-12 col-md-6  div-form-signup">
          <form
            onSubmit={handleSubmit}
            className="form-contorol forms-in-sign p-5"
          >
            <h2>ثبت نام</h2>
            {/* fullname input group  */}
            <div class="input-group mb-2 div-signup-form">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="نام کاربری"
                value={fullname}
                name="fullname"
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
              />
              <div>
                {validator.current.message(
                  "fullname",
                  fullname,
                  "required|min:5"
                )}
              </div>
            </div>
            {/* End fullname / */}
            {/* Email input group  */}
            <div className="input-group mb-2 div-signup-form">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                aria-describedby="email-address"
                placeholder="ایمیل"
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
            <div className="input-group  mb-2 div-signup-form">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder=" رمز عبور"
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
              <div className="helper-signin">
                <Link>فراموشی رمز عبور</Link>
                <Link to="/signin">ورود</Link>
              </div>
            {/*End password input group  */}
            <button type="" className="btn-sign-up  btn btn-primary ">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
