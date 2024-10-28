/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { createNotification } from "components/react-notification";
import TextField from "components/textfield";
import Button from "components/button";
import loginLogo from "assets/icons/auth.jpg";
import eyeOpen from "assets/icons/Hide.svg";
import eyeClose from "assets/icons/Show.svg";
import style from "./signup.module.scss";
import { useSelector } from "react-redux";
import { signup } from "store/authSlice";



function Signup() {
  const roleState = useSelector((state) => state?.appState?.roleState);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    const resultAction = await dispatch(
      signup({ firstName, lastName, email, password })
    );

    if (signup.fulfilled.match(resultAction)) {
      navigate("/");
    } else {
      createNotification({
        title: "Error",
        message: resultAction.error.message,
        type: "error",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.rightInnerDiv}>
        <img src={loginLogo} alt="" style={{ width: "100%", height: "100%" }} />
        <div
          style={{
            position: "absolute",
            display: "block",
            top: "20%",
            left: "5%",
          }}
        >
          <p style={{ color: "#ffff" }}>Welcome to Signup</p>
        
        </div>
      </div>

      <div className={style.mainDiv}>
        <h2 style={{}}>Create Account</h2>
        <span style={{ color: "#505673" }}>
          Please Enter your details to continue
        </span>

        <TextField
          label="First Name"
          className={style.field}
          name="firstName"
          register={register}
          //   placeholder="User ID"
          errorMessage={errors?.firstName?.message}
          //  icon={crossIcon}
          onClick={() => reset({ firstName: "" })}
          // iconClass={style.crossIcon}
        />
        <TextField
          label="Last Name"
          className={style.field}
          name="lastName"
          register={register}
          //   placeholder="User ID"
          errorMessage={errors?.lastName?.message}
          //  icon={crossIcon}
          onClick={() => reset({ lastName: "" })}
          // iconClass={style.crossIcon}
        />
        <TextField
          label="Email"
          className={style.field}
          name="email"
          register={register}
          //   placeholder="User ID"
          errorMessage={errors?.email?.message}
          //  icon={crossIcon}
          onClick={() => reset({ email: "" })}
          // iconClass={style.crossIcon}
        />
        <TextField
          label="Password"
          className={style.field}
          name="password"
          // placeholder="Password"
          register={register}
          errorMessage={errors?.password?.message}
          onClick={() => setPasswordVisible(!passwordVisible)}
          icon={passwordVisible ? eyeOpen : eyeClose}
          type={passwordVisible ? "text" : "password"}
          iconClass={style.eyeIcon}
        />

        <TextField
          label="Confirm Password"
          className={style.field}
          name="confirmPassword"
          // placeholder="Password"
          register={register}
          errorMessage={errors?.confirmPassword?.message}
          onClick={() => setPasswordVisible(!passwordVisible)}
          icon={passwordVisible ? eyeOpen : eyeClose}
          type={passwordVisible ? "text" : "password"}
          iconClass={style.eyeIcon}
        />
        <div className={style.forgotPassword}>
          <p
            style={{
              textDecoration: "none",
              color: "#7f7f7f",
            }}
          >
            Already have Account? Try{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#2F80ED",
                fontWeight: "bold",
              }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>

        <div className={style.buttonDiv}>
          <Button
            type={"submit"}
            text="Sign Up"
            btnClass={style.loginButton}
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
}

export default Signup;

const schema = yup
  .object({
    firstName: yup.string().required("First Name Field is required "),
    lastName: yup.string().required("Last Name Field is required "),
    email: yup.string().required("Email Field is required "),
    password: yup
      .string()
      .required("Password is required ")
      .min(4, "Must be at least 4 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();
