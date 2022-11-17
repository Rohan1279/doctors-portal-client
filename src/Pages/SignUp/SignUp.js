import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[800px] flex items-center justify-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center">Sign Up</h2>
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
            value="Sign Up"
          />
        </form>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-secondary">
            PLease login
          </Link>
        </p>
        <div className="divider">Or</div>
        <button className="btn btn-outline w-full">Continue With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
