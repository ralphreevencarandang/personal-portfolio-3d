import React from "react";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="max-container padding-x mb-5">
        <div className="border border-gray-300 px-4 py-2 rounded-lg bg-base-200 dark:bg-base-300">
            <div className="flex gap-2 items-center mb-6 mt-2">
                <MdOutlineEmail size={30}/>
                <h1 className="font-inter text-xl">Contact</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-1 sm:mb-4">
                <div className="mb-2 w-full">
                    <div className="flex items-center gap-1 mb-1">
                        <GoPerson/>
                        <label className="font-inter text-sm "> Name </label> <br />
                    </div>
                    <input type="text" className="border border-gray-300 w-full rounded px-2 py-2 text-sm" placeholder="Your full name"/>
                </div>

                <div className="mb-2 w-full">
                    <div className="flex items-center gap-1 mb-1">
                        <MdOutlineEmail />
                        <label className="font-inter text-sm">Email</label><br />
                    </div>
                    <input type="email" className="border border-gray-300 w-full rounded px-2 py-2 text-sm" placeholder="your.email@example.com" required />   
                </div>
            </div>

            <div className="mb-4">
                <label className="font-inter text-sm">Subject</label>
                <input type="text" className="border border-gray-300 w-full rounded px-2 py-2 text-sm mt-1" placeholder="What is this message about?"/>
            </div>

            <div className="mb-5">
                <div className="flex items-center gap-1 mb-1">
                    <FaRegMessage />
                    <label className="font-inter text-sm">Message</label>
                </div>
                <textarea className="border border-gray-300 w-full h-35 rounded px-2 py-2 text-sm" placeholder="Tell us more about your inquiry..."></textarea>
            </div>

            <div className="mb-4">
                <button className="bg-blue-500 w-full hover:bg-blue-700 rounded px-2 py-1 cursor-pointer text-white">Send Message</button>
            </div>
        </div>
    </section>
  );
};

export default Contact;
