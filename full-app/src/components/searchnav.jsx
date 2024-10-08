import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import SigninDrop from "./singindrop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const signupNavigate = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const homeNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      {/* blue navbartop-------------------------------------------------------------------------------------------- */}
      <div className="flex justify-center items-center bg-blue-105 text-white h-9 font-ubuntu">
        <p>
          Free shipping on most orders $89+. Pick up select orders in stores.
        </p>
        <span style={{ textDecoration: "underline" }}>Learn More</span>
      </div>
      {/* search navbar-------------------------------------------------------------------------------------------- */}
      <div className="flex justify-between items-center h-40 pt-5 mb-5 mr-8 ml-8">
        <img
          src="https://seeklogo.com/images/N/nordstrom-rack-logo-9C42362F49-seeklogo.com.png"
          className=" h-10 hover:cursor-pointer"
          onClick={(e) => homeNavigate(e)}
        />
        <div className="relative border border-gray-500 h-10 flex justify-start items-center w-166 ">
          <button className="text-gray-800 w-16 text-lg">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            placeholder="Search for products or brands"
            className="w-166"
          />
        </div>
        <div className="flex justify-around w-444 gap-2">
          <button
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={(e) => signupNavigate(e)}
          >
            Sign In
            <span className="ml-4">
              <FontAwesomeIcon icon={faCaretDown} className="text-gray-500" />
            </span>
          </button>
          {isOpen && (
            <div
              className="absolute z-50 top-28 right-105"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <SigninDrop />
            </div>
          )}
          <button className="hover:underline hover:text-blue-105">
            Set Your Store
            <span className="ml-4">
              <FontAwesomeIcon icon={faCaretDown} className="text-gray-500" />
            </span>
          </button>
          <button className="">Purchases</button>
          <button>
            <span>
              <FontAwesomeIcon icon={faBagShopping} className="text-gray-400" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchNavbar;
