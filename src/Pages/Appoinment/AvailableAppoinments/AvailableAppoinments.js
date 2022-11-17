import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOptions from "./AppoinmentOptions";

const AvailableAppoinments = ({ selectedDate }) => {
  const [appoimentOptions, setAppoimentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appoinmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppoimentOptions(data));
  }, []);
  return (
    <section className="mt-16">
      <p className="text-center font-bold text-secondary">
        Available Appointment on: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appoimentOptions.map((option) => (
          <AppoinmentOptions
            key={option._id}
            appoimentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          treatment={treatment}
          selectedDate={selectedDate}
        />
      )}
      <label htmlFor="my-modal" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1> Yooo </h1>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableAppoinments;
