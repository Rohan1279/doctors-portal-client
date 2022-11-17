import React from "react";

const AppoinmentOptions = ({ appoimentOption, setTreatment }) => {
  const { name, slots } = appoimentOption;
  return (
    <div className="card w-96 shadow-xl my-10">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary mx-auto">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try Another day"}</p>
        <p>
          {slots.length} {slots.length ? "spaces" : "space"} avaiable
        </p>
        <div className="card-actions justify-center">
          {/* The button to open modal */}
          <label
            onClick={() => setTreatment(appoimentOption)}
            htmlFor="booking-modal"
            className="btn  btn-primary text-white"
            disabled={slots.length === 0}
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOptions;
