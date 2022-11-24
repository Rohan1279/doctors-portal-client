import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment; //treatment is just another name of appoinment options with name, slots, _id
  const { user } = useContext(AuthContext);
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
      treatment: treatmentName,
      patient: name,
      email,
      slot,
      phone,
      price,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          console.log(data);
          toast.success("Booking confirmed");
          refetch();
        } else {
          setTreatment(null);
          toast.error(data.message);
        }
      });
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
          <h3 className="text-lg font-bold">{treatmentName}</h3>
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
              defaultValue={user?.displayName}
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="email address"
              className="input w-full input-bordered"
              readOnly
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
