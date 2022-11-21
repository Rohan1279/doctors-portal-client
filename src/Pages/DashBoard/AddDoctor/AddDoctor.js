import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["appoinmentSpecialty"],
    queryFn: () =>
      // get by project method
      fetch("http://localhost:5000/appoinmentSpecialty").then((res) =>
        res.json()
      ),
  });
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url,
          };
          // save doctors info to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${doctor.name}'s data inserted successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  /**
   * Three places to store images
   * 1. hosting server (3rd party)
   * 2. file system of your server
   * 3. in mongoDB (base64)
   */
  return (
    <div className="w-96 p-5">
      <h2 className="text-3xl">Add a doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
            <span className="label-text ">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-ghost select-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="your name"
            {...register("image", {
              required: "photo is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-400">{errors.img?.message}</p>}
        </div>
        <input
          type="submit"
          className="btn btn-accent w-full mt-4"
          value="Add Doctor"
        />
        {/* {signUpError && <p className="text-red-400">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
