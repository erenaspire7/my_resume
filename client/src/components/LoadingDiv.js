import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingDiv = () => {
  return (
    <div class="modal-bg w-full h-screen p-8 md:px-12 relative opacity-80">
      <button
        id="closebutton"
        type="button"
        class="focus:outline-none absolute right-0 top-0 text-white"
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

      <div className="flex justify-center	items-center h-screen w-full flex-col">
        <div className="">
          <Loader type="Rings" color="#fff" height={100} width={100} />
        </div>
        <div>
          <p className="inter text-sm text-white">Email Transmission in Progress...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingDiv;
