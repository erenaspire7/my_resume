import React from 'react';
import { Menu } from '@styled-icons/ionicons-outline';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap navbar px-6 py-4 absolute w-full ">
        <div class="flex items-center flex-shrink-0 text-white ">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/erenaspire7/image/upload/v1625218726/703e02b53cb97fa45cef8b156e4b0e4a_jw8xc4.jpg"
              className="w-10 "
            />
          </Link>
        </div>
        <div className="hidden text-gray-200 text-sm uppercase inter tracking-wide md:block ">
          <a className="mx-4 hover:text-white " href="#">
            Education
          </a>
          <a className="mx-4 hover:text-white " href="#">
            Skills
          </a>
          <a className="mx-4 hover:text-white " href="#">
            Experience
          </a>
          <a className="mx-4 hover:text-white " href="#">
            Works
          </a>
        </div>
        <div className="">
          <a href="https://internship.zuri.team/" target="_blank">
            <img
              src="https://res.cloudinary.com/erenaspire7/image/upload/v1629319966/zuri-logo_l1t0uh.svg"
              className="w-10"
            />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => {
              document.getElementById('sub-nav').classList.toggle('hidden');
            }}
          >
            <Menu size="24" className="text-white" />
          </button>
        </div>
      </nav>

      <div
        class="md:hidden flex items-center pt-16 navbar text-gray-200 hidden "
        id="sub-nav"
      >
        <div className="flex flex-col inter uppercase text-sm">
          <a className="mx-4 py-1 hover:text-white" href="#">Education</a>
          <a className="mx-4 py-1 hover:text-white" href="#">Skills</a>
          <a className="mx-4 py-1 hover:text-white" href="#">Experience</a>
          <a className="mx-4 py-1 pb-2 hover:text-white" href="#">Works</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
