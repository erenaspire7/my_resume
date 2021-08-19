import React from 'react';
import { Link } from 'react-router-dom';

const ResumeHero = () => {
  return (
    <div className="h-screen hero-bg flex items-center flex-row bg-cover bg-no-repeat bg-center">
      <div className="lg:w-2/5  justify-center flex w-full">
        <div className="text-center w-4/5 pt-16 lg:pt-12 mx-auto">
          <h1 className="text-4xl md:text-6xl text-white inter tracking-tighter font-thin">
            I’m Yusuff Jamal.
          </h1>
          <p className="playfair text-1xl md:text-3xl text-gray-100 py-3 font-normal">
            An energetic, young software developer with an aptitude for learning
            things quickly
          </p>
          <div className="flex flex-row justify-around w-4/5 mx-auto text-white mt-5 inter">
            <Link to="/Yusuff_Jamal_Resume.pdf" target="_blank">
              <button className="text-xs lg:text-base bg-transparent px-3 py-2 md:px-6 md:py-3 border-white border rounded hover:bg-white hover:text-black ease-out duration-500">
                Resume
              </button>
            </Link>

            <button
              className="text-xs lg:text-base bg-transparent px-3 py-2 md:px-6 md:py-3 border-white border rounded hover:bg-white hover:text-black ease-out duration-500"
              onClick={() => {
                document.getElementById('modal').classList.add('scale-100');
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHero;
