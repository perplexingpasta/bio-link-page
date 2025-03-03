// "use client";
import React from "react";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { HiMiniGlobeAsiaAustralia } from "react-icons/hi2";

export const metadata = {
  title: "Dr. Santosh Ingle", // Set the title for this page
  description: "Digital Business Card of Dr. Santosh Ingle",
};

const page = () => {
  return (
    <>
      <main className="relative mx-auto mt-8 flex max-w-[90%] flex-col items-center justify-center overflow-clip">
        {/* TOP INFO W LOGO */}
        <section className="flex flex-col justify-between text-center text-lg md:text-xl">
          <Image
            src="/images/drsantoshingle-kolkata-logo.png"
            alt=""
            width={500}
            height={500}
            className="mb-4 w-40 place-self-center md:mb-10 md:w-44"
          />
          <h1 className="text-3xl font-bold md:text-4xl">
            Dr. Santosh Ingle
          </h1>
          <h1 className="mb-10 text-xl tracking-wider font-light md:text-3xl">MBBS, DO, MS</h1>
          
          <p>Hey! 👋</p>
          <p className="mx-auto w-[85%]">
            I&apos;m an Oculo-Facial Aesthetic Surgeon practicing in Kolkata.
          </p>
          <div className="my-4 border-2 border-b-black-100 md:my-8" />
        </section>

        {/* HERO + 3 BUTTONS */}
        <section>
          <Image
            src="/images/drsantoshingle-kolkata.jpg"
            alt=""
            width={750}
            height={750}
            className="mx-auto my-2 h-max place-self-center rounded-2xl"
          />
          <div className="mx-auto">
            <a
              className="my-4 flex items-center justify-center md:mt-5"
              href="tel:+916289053421"
            >
              <button className="w-[90vw] rounded-xl bg-violet-300 p-3 text-base transition-all duration-300 hover:bg-violet-500 hover:text-white active:bg-black-100 active:text-white md:w-[80vw] md:p-3 md:px-6 lg:w-[25vw]">
                <span className="ml-4 flex items-center justify-start gap-x-4 md:ml-12 md:gap-x-6">
                  <BiPhoneCall className="text-2xl md:text-4xl" />
                  Call Now
                </span>
              </button>
            </a>
            <a
              className="my-4 flex items-center justify-center md:mt-5"
              href="https://api.whatsapp.com/send?phone=919557088564"
            >
              <button className="w-[90vw] rounded-xl bg-violet-300 p-3 text-base transition-all duration-300 hover:bg-violet-500 hover:text-white active:bg-black-100 active:text-white md:w-[80vw] md:p-3 md:px-6 lg:w-[25vw]">
                <span className="ml-4 flex items-center justify-start gap-x-4 md:ml-12 md:gap-x-6">
                  <FaWhatsapp className="text-2xl md:text-4xl" />
                  Text on WhatsApp
                </span>
              </button>
            </a>
            <a
              className="my-4 flex items-center justify-center mb-6 md:mb-0 md:mt-5"
              href="/Rishabh Celeste Consulting.vcf"
              download={"Dr. Santosh Ingle Contact Info"}
            >
              <button className="w-[90vw] rounded-xl bg-violet-300 p-3 text-base transition-all duration-300 hover:bg-violet-500 hover:text-white active:bg-black-100 active:text-white md:w-[80vw] md:p-3 md:px-6 lg:w-[25vw]">
                <span className="ml-4 flex items-center justify-start gap-x-4 md:ml-12 md:gap-x-6">
                  <RiContactsLine className="text-2xl md:text-4xl" />
                  Save Contact Info
                </span>
              </button>
            </a>
          </div>
          <div className="my-4 border-2 border-b-black-100 md:my-8" />
        </section>

        {/* VISIT */}
        <section className="flex flex-col justify-between text-center text-lg">
          <h1 className="my-2 mb-4 text-3xl font-semibold md:text-5xl">
            Visit Us
          </h1>
          <div className="mx-auto mb-2 aspect-square w-[90vw] md:w-[80vw] lg:w-[25vw]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19115.841943071846!2d88.34147296742157!3d22.538575422592643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773c06e23b61%3A0xb45a0c071204b61f!2sRejuvea%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1740999138589!5m2!1sen!2sin"
            //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38231.683886143735!2d88.33011948832247!3d22.538575422592643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773c06e23b61%3A0xb45a0c071204b61f!2sRejuvea%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1740999065629!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-2xl border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className="my-5 text-2xl md:text-3xl">Working Hours</h1>
          <div className="mx-auto grid w-[85vw] grid-cols-2 justify-center md:w-[70vw] md:text-xl lg:w-[25vw]">
            <div className="text-left md:leading-relaxed">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className="text-right opacity-75 md:leading-relaxed">
              <p>9 am - 6 pm</p>
              <p>9 am - 6 pm</p>
              <p>9 am - 6 pm</p>
              <p>9 am - 6 pm</p>
              <p>9 am - 6 pm</p>
              <p>9 am - 6 pm</p>
              <p>Closed</p>
            </div>
          </div>
          <div className="my-4 border-2 border-b-black-100 md:my-8" />
        </section>

        {/* SOCIAL ICONS */}
        <section className="mb-20 flex flex-row items-center justify-center space-x-4 text-3xl md:mb-24 md:space-x-6 md:text-4xl">
          <a href="https://rejuveaaesthetic.in/" target="_blank">
            <HiMiniGlobeAsiaAustralia />
          </a>
          <a href="mailto:info.rejuvea@gmail.com" target="_blank">
            <IoMdMail />
          </a>
          <a
            href="https://www.facebook.com/people/Celeste-Consulting/61561819893146/"
            target="_blank"
          >
            <MdFacebook />
          </a>
          <a href="https://www.instagram.com/consultceleste/" target="_blank">
            <AiFillInstagram />
          </a>
        </section>
      </main>

      <footer>
        <div className="bg-black p-3 text-center text-sm font-light text-white md:p-6 md:text-lg lg:text-xl">
          {" "}
          Designed by{" "}
          <a
            href="https://www.celesteconsulting.in/"
            className="!cursor-pointer hover:text-indigo-300"
            target="_blank"
          >
            {" "}
            Céleste Consulting ✨
          </a>
        </div>
      </footer>
    </>
  );
};

export default page;
