"use client";
import { useForm } from '@formspree/react';
import React, { useState } from 'react';
import Message from '../Components/Mesagge';


export default function Form() {
  const [state, handleSubmit] = useForm("mwkgvqgn");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFormSubmit = async (e:null|any|React.FormEvent=[]) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setShowSuccessMessage(true);
    }
  };

  return (
    <div  className="container mx-auto">
      <div className="max-w-md mx-auto my-10  p-5 rounded-md shadow-sm">
        {showSuccessMessage ? (
        <Message/>
        ) : (
          <>
            <div id="formid" className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-300 dark:text-gray-200">
                Contact Us
              </h1>
              <p className="text-gray-200 dark:text-gray-400">
                Fill out the form below to send us a message.
              </p>
            </div>
            <div className="m-7">
              <form   onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 text-black border rounded-md w-full"
                    placeholder="Your email"
                    defaultValue=""
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://web3forms.com/success"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 p-2 border text-black rounded-md w-full"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-neutral-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full hover:duration-300 transition-all ease-out transform hover:translate-y-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

