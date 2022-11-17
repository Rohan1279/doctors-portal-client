import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; //treatment is just another name of appoinment options with name, slots, _id
  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appoinmentDate: date,
      treatment: name,
      patient: name,
      email,
      slot,
      phone,
    };
    setTreatment(null);
    console.log(booking);
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              className="input w-full input-bordered"
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="your name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="email address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="phone number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              className="input w-full input-bordered btn btn-accent"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
