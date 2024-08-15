import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending message...");

    const form = e.target;

    emailjs
      .sendForm(
        "service_gyrnz3m",
        "template_crntoqv",
        form,
        "kH2aQI9SOq2pTbo4x",
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
    <div className="my-12 flex justify-center px-5 lg:px-0">
      <div className="custom-shadow w-full bg-white px-5 py-5 md:py-12 lg:w-[60%] lg:p-16">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 md:flex-row">
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none lg:w-1/2"
              placeholder="First Name"
              name="firstName"
              required
            />
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none lg:w-1/2"
              placeholder="Last Name"
              name="lastName"
              required
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none lg:w-1/2"
              placeholder="Phone Number"
              name="phone"
              required
            />
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none lg:w-1/2"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Message"
              name="message"
              className="w-full resize-none border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className={`bg-[#149088] px-12 py-2 text-lg font-semibold leading-relaxed text-white transition-colors duration-200 hover:bg-[#054847] ${
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

export default ContactForm;
