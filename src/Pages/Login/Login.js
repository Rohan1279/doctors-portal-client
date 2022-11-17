import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex items-center justify-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="your password"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text text-xs">Forget password?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full"
            value="Login"
          />
        </form>
        <p>
          New to doctors portal?{" "}
          <Link to={"/signup"} className="text-secondary">
            Create an account
          </Link>
        </p>
        <div className="divider">Or</div>
        <button className="btn btn-outline w-full">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
