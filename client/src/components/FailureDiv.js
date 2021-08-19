import React from 'react';
import { Warning } from '@styled-icons/ionicons-outline';

const SuccessDiv = (props) => {
  return (
    <div class="modal-bg lg:w-1/2 md:w-10/12 w-full h-auto p-8 md:px-12 relative ">
      <button
        id="closebutton"
        type="button"
        class="focus:outline-none absolute md:-right-3 md:-top-3 right-0 top-2 text-white"
        onClick={() => {
          document.getElementById('modal').classList.remove('scale-100');

          props.loading("dormant")
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
        <div className="w-full text-white flex-row flex md:justify-center">
          <Warning size="24" className="align-middle" />
          <span className="pl-3 inter">
            Your email failed to deliver. Please try again later.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuccessDiv;
