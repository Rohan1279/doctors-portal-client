import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { useToken } from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createUserEmail, setCretedUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("User created successfully");
        const userInfo = { displayName: data.name };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCretedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex items-center justify-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              {...register("name", {
                required: "name is required",
              })}
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
              {...register("email", {
                required: "email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="your password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 chracters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must be strong",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text text-xs">Forget password?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
          />
          {signUpError && <p className="text-red-400">{signUpError}</p>}
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
