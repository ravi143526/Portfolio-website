"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("mqkrnajw");
  if (state.succeeded) {
    return <p className="text-xl font-bold text-center py-32">Thanks for Reaching Out!</p>;
  }
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="contact"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities, my inbox is always open,
          whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex fle3x-ow gap-2">
          <Link href="github.com">
            <Image
              src="/images/github-icon.svg"
              alt="GITHUB ICON"
              width={50}
              height={50}
            />
          </Link>
          <Link href="linkedin.com">
            <Image
              src="/images/linkedin-icon.svg"
              alt="GITHUB ICON"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="text-white block mb-2 text-smfont-medium"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="jacob@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div>
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5 h-44"
              placeholder="Type your Message here"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
