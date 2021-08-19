import React from 'react';
import { PhonePortrait, Compass } from '@styled-icons/ionicons-outline';
import {
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
} from '@styled-icons/ionicons-solid';
// import AxiosClient from './../api/AxiosClient';
import axios from 'axios';

const ResumeForm = (props) => {
  const sendMail = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const formDetails = Object.fromEntries(data.entries());

    props.loading('loading');

    // let apiCall = await AxiosClient.post('send_mail', formDetails)

    let apiCall = await axios({
      method: 'POST',
      url: '/api/send_mail',
      data: formDetails,
    });

    console.log(apiCall.data);
    props.mail(apiCall.data.status);

    // document.getElementById('contact-me').reset();
  };

  return (
    <div class="modal-bg lg:w-1/2 md:w-10/12 w-full h-auto p-8 md:px-12 relative ">
      <button
        id="closebutton"
        type="button"
        class="focus:outline-none absolute md:-right-3 md:-top-3 right-0 top-2 text-white"
        onClick={() => {
          document.getElementById('modal').classList.remove('scale-100');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div className="flex md:flex-row flex-col">
        <div className="md:w-5/12 text-white flex-col flex md:justify-center md:mr-6">
          <div>
            <h1 className="playfair text-4xl font-normal tracking-wide">
              Get In Touch
            </h1>
            <p className="inter font-normal pt-1">
              Here's how you can reach me
            </p>
          </div>

          <div className="inter text-sm md:py-12 py-4">
            <a className="">
              <button className="block py-3 border-2 px-3 rounded mb-3 w-11/12">
                <PhonePortrait size="24" />
                <span className="pl-1 align-middle">+ 27 812 462 687</span>
              </button>
            </a>
            <a>
              <button className="block py-3 border-2 px-3 rounded md:mb-3 w-11/12">
                <Compass size="24" />
                <span className="pl-1 align-middle">
                  Port Elizabeth, South Africa
                </span>
              </button>
            </a>
          </div>

          <div className="flex flex-row divide-x justify-center pb-4 md:pb-0">
            <a className="pr-4">
              <LogoTwitter size="24" />
            </a>
            <a className="pl-4 pr-4">
              <LogoGithub size="24" />
            </a>
            <a className="pl-4 pr-4">
              <LogoInstagram size="24" />
            </a>
          </div>
        </div>
        <div className="flex flex-grow">
          <form
            class="md:p-8 p-4 bg-white rounded w-full"
            id="contact-me"
            onSubmit={(e) => {
              sendMail(e);
            }}
          >
            <div class="">
              <label
                class="block mb-2 text-sm inter font-bold text-gray-700"
                for="name"
              >
                Your Name
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm inter leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                minLength="5"
              />
            </div>

            <div>
              <label
                class="block mb-2 text-sm inter font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm inter leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div class="">
              <label
                class="block mb-2 text-sm inter font-bold text-gray-700"
                for="message"
              >
                Message
              </label>
              <textarea
                class="w-full px-3 py-2 mb-3 text-sm inter leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline resize-none	"
                id="message"
                name="message"
                type="text"
                placeholder="Your Message (150 characters)"
                rows="4"
                required
                minLength="10"
                maxLength="150"
              />
            </div>
            <div class="text-right">
              <button
                class="w-1/2 px-3 py-2 inter text-sm text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
