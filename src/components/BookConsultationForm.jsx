import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const BookConsultationForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending message...");

    const form = e.target;

    emailjs
      .sendForm(
        "services_cg2pas3",
        "template_9c536db",
        form,
        "my-PT-y_3t48nZjOg",
      )
      .then(
        (result) => {
          toast.dismiss(loadingToast);
          toast.success("Message Sent successfully.");
          setLoading(false);
        },
        (error) => {
          toast.dismiss(loadingToast);
          toast.error(
            "There was an issue submitting the form. Please try again.",
          );
          setLoading(false);
        },
      );

    form.reset();
  };

  return (
    <div className="my-8 flex justify-center px-5 lg:px-0">
      <div className="form w-full bg-white px-5 shadow-xl md:py-8 lg:w-[60%] lg:p-12">
        <form className="flex flex-col gap-5 py-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 md:flex-row">
            <input
              type="text"
              className="w-full border px-4 py-2 lg:w-1/2"
              placeholder="First Name"
              name="firstName"
              required
            />
            <input
              type="text"
              className="w-full border px-4 py-2 lg:w-1/2"
              placeholder="Last Name"
              name="lastName"
              required
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <input
              type="text"
              className="w-full border px-4 py-2 lg:w-1/2"
              placeholder="Phone Number"
              name="phone"
              required
            />
            <input
              type="email"
              className="w-full border px-4 py-2 lg:w-1/2"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="w-full">
            <select
              name="serviceType"
              className="w-full cursor-pointer border bg-inherit px-4 py-2"
              required
            >
              <option value="" disabled selected>
                Select a service
              </option>
              <option value="travelDesign">Travel Design</option>
              <option value="luxuryCars">Luxury Cars & Chauffeurs</option>
              <option value="privateJet">Private Jet & Air Transport</option>
            </select>
          </div>
          <div className="w-full">
            <textarea
              placeholder="Message"
              name="message"
              className="w-full resize-none border px-4 py-2"
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className={`family-montserrat bg-secondary px-12 py-2 text-base font-semibold leading-relaxed text-white transition hover:bg-white hover:text-secondary ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "SEND"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookConsultationForm;
