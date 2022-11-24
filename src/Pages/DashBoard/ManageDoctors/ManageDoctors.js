import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const closeModal = () => {
    setDeletingDoctor(null);
  };
  const handleDelete = (doctor) => {
    console.log(doctor);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor.name} deleted successfully`);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className="text-3xl">
        Manage Doctors: {doctors?.length ?? "No doctors are available"}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, idx) => (
              <tr key={doctor._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want ot delete ${deletingDoctor.name}?`}
          message={`Action cannot be undone`}
          successAction={handleDelete}
          closeModal={closeModal}
          modalData={deletingDoctor}
          successButtonName="Delete"
          // setDeletingDoctor={setDeletingDoctor}
          // handleDelete={handleDelete}
          // deletingDoctor={deletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
