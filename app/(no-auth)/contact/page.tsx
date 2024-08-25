import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

          <p className="mb-4">
            We would love to hear from you! Whether you have a question about
            our services, need assistance, or just want to provide feedback,
            feel free to get in touch with us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Reach Out to Us</h2>
          <p className="mb-4">
            You can contact us through the following methods:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Email</h3>
          <p className="mb-4">
            Send us an email at{" "}
            <a
              href="mailto:contact@ken.com"
              className="text-blue-600 hover:text-blue-800"
            >
              contact@ken.com
            </a>
            , and we’ll get back to you as soon as possible.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Phone</h3>
          <p className="mb-4">
            Give us a call at{" "}
            <a
              href="tel:+91 234 567 890"
              className="text-blue-600 hover:text-blue-800"
            >
              +91 234 567 890
            </a>
            . Our lines are open Monday to Friday, from 9 AM to 6 PM.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Visit Us</h3>
          <p className="mb-4">Our office is located at:</p>
          <p className="mb-4">
            1234 Main Street
            <br />
            City, State, ZIP Code
            <br />
            Country
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Social Media</h3>
          <p className="mb-4">Connect with us on social media:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <a href="https://twitter.com/yourhandle" className=" ">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com/yourpage" className="">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourprofile" className="">
                LinkedIn
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Send Us a Message</h3>
          <p className="mb-4">
            You can also fill out the form below, and we will respond to your
            inquiry shortly.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground "
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm text-muted-foreground"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground "
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border  rounded-md shadow-sm  sm:text-sm text-muted-foreground"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground "
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border  rounded-md shadow-sm  sm:text-sm text-muted-foreground"
                required
              />
            </div>
            <div>
              <Button
              variant={"secondary"}
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
