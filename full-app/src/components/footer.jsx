import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { BannerUrl } from "../data/homebodydata";
import { useEffect } from "react";

const Footer = () => {
    
  return (
    <>
  
    <div className="w-full h-200 pl-7 pr-7 mt-2 mb-5">
        <div
          className="w-full h-full"
          style={{ backgroundImage: `url(${BannerUrl[2].url})` }}
        >
        </div>
      </div>
     <div className=" flex justify-end gap-2 items-center p-7">
       <label className="font-bold">Get Email Updates:</label>
       <input placeholder="Email Address" className=" w-64 h-10 border border-gray-500 p-3 text-sm"/>
       <button className="w-64 h-10 bg-blue-105 text-white text-xs">Sign Up</button>
     </div>

<div className="w-full h-full bg-yellow-105 ">
      <div className="flex w-full justify-around m-7 pt-7">
        <div className="w-48 p-2 flex flex-col gap-2">
          <h2 className="font-bold ">Customer Service</h2>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Order Status</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Guest Returns</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Shipping & Return Policy</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Gift Cards</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Product Recalls</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">FAQ</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div  className="w-48 p-2 flex flex-col gap-2">
          <h2 className="font-bold ">About Us</h2>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">About Our Brand</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">The Nordy Club</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Store Locator</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">All Brands</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Careers</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Get Email Update</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Nordstorm Blog</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer ">Nordy Podcast</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Store Openings</li>
          </ul>
        </div>
        <div  className="w-48 p-2 flex flex-col gap-2">
          <h2 className="font-bold ">Nordstrom Rack & The Community</h2>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Corporate Social Responsibility</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Diversity, Equity, Inclusion & Belonging</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Big Brothers Big Sisters</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Donate Clothes</li>
          </ul>
        </div>
        <div  className="w-48 p-2 flex flex-col gap-2" >
          <h2 className="font-bold ">Nordstrom Card</h2>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Apply for a Nordstorm Card</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Pay My Bill</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Manage my Norstorm card</li>
          </ul>
        </div>
        <div  className="w-48 p-2 flex flex-col gap-2">
          <h2 className="font-bold ">Nordstrom, Inc.</h2>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Nordstorm</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Hautelook</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Investor Relations</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Press Releases</li>
            <li className="hover:text-blue-105 hover:underline hover:cursor-pointer">Nordstorm Media Network</li>
          </ul>
        </div>
        <div className="w-96 p-2 gap-8">
            <div className="flex gap-4 mb-8">
            <FontAwesomeIcon icon={faFileArrowDown} className="text-2xl" />
            <p className="hover:text-blue-105 hover:underline hover:cursor-pointer">Download Our Apps</p>
            </div>
            <div className=" flex gap-5 ml-2">
          <button>
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6"/>
          </button>
          <button>
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
          </button>
          <button>
            <FontAwesomeIcon icon={faPinterest} className="w-6 h-6" />
          </button>
          <button>
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </button>
          </div>
        </div>
      </div>
      <div className="w-full flex h-10 gap-16 p-6 items-center">
        <p className="font-light">Privacy</p>
        <p className="font-light">Your Privacy Rights</p>
        <p className="font-light">Terms & Conditions</p>
        <p className="font-light">California Suppy Chain Act</p>
        <p className="font-light">©2024 Nordstorm Rack</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
