import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loader from "../../Shared/Loader/Loader";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOptions from "./AppoinmentOptions";

const AvailableAppoinments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appoimentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appoimentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appoinmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return <Loader />;
  }
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
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppoinments;
