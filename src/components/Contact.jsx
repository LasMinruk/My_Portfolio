import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_at29o0o", // 🔁 Your actual EmailJS service ID
        "template_pxwy9vc", // 🔁 Your actual template ID
        {
          from_name: form.name,
          to_name: "Lasiru Minruk",
          from_email: form.email,
          to_email: "lasiru2225@gmail.com", // 📥 Receiver email (you)
          message: form.message,
        },
        "0-drLAlRiUorAQc9c" // 🔁 Your actual public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 flex flex-col xl:flex-row-reverse gap-8 xl:gap-10 overflow-hidden px-2 sm:px-0'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 xs:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-6 xs:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 xs:py-4 px-4 xs:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm xs:text-base'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='bg-tertiary py-3 xs:py-4 px-4 xs:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm xs:text-base'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className='bg-tertiary py-3 xs:py-4 px-4 xs:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm xs:text-base'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 xs:py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-sm xs:text-base'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[250px] xs:h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
