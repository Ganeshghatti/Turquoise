import React from "react";

const ContactForm = () => {
  return (
    <div className="my-8 flex justify-center px-5 lg:px-0">
      <div className="form w-full bg-white px-5 shadow-xl md:py-8 lg:w-[60%] lg:p-12">
        {/* <h1 className="family-montserrat mb-10 text-2xl font-medium text-gray-800 md:text-3xl lg:text-4xl">
          Feel free to contact us for more information
        </h1> */}
        <form
          className="flex flex-col gap-5 py-6"
          action="https://formsubmit.co/jhatnb@gmail.com"
          method="post"
        >
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
              className="family-montserrat bg-secondary px-12 py-2 text-base font-semibold leading-relaxed text-white transition hover:bg-white hover:text-secondary"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
