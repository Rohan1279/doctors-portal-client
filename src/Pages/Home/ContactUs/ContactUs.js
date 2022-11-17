import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const ContactUs = () => {
  return (
    <section
      className="p-24"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div>
        <h4 className="text-primary text-lg font-bold text-center">
          Appoinment
        </h4>
        <h1 className="text-4xl font-bold text-white text-center">
          Stay connected with us
        </h1>
      </div>
      <div>
        <form className="card flex lg:flex-col items-center justify-center">
          <input type="email" className="input block lg:mx-auto my-4 lg:w-96" />
          <input type="text" className="input block lg:mx-auto my-4 lg:w-96" />
          <textarea
            type="email"
            className="input block lg:mx-auto my-4 lg:w-96 h-28 p-5"
          />
          <div>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
