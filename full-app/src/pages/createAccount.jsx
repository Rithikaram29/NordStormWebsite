import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SearchNavbar from "../components/searchnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCreditCard, faCloud } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {
  let mail = JSON.parse(localStorage.getItem("email"));
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  const mailEdit = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleAgree = (e) => {
    setAgree(e.target.checked); // Update the agree state based on the checkbox state
  };

  const handlesubmit = (e) => {
    if (agree) {
      navigate('/');
    } else {
      alert("Please agree to our terms and conditions");
    }
  };

  return (
    <>
      <div>
        <SearchNavbar />
        <Navbar />
        <div className="w-full flex justify-center items-center text-black-105">
          <div className="p-6 w-444 mb-5 mt-3">
            <h2 className="font-bold text-2xl mb-3 mt-3">Create Account</h2>
            <p className="mb-3 mt-7">
              <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
              Check out faster
            </p>
            <p className="mb-3 mt-7">
              <FontAwesomeIcon icon={faTruck} className="mr-3" />
              Track Orders easily
            </p>
            <p className="mb-3 mt-7">
              <FontAwesomeIcon icon={faCloud} className="mr-3" />
              Use one sign-in across our brands
            </p>

            <form className="flex flex-col mb-3 mt-3">
              <label className="font-bold text-sm mt-3">Email</label>
              <div className="flex w-full justify-between">
                <p>{mail}</p>
                <button
                  className="text-blue-105"
                  onClick={mailEdit}
                >
                  Edit
                </button>
              </div>

              <label className="font-bold text-sm mt-3">First Name</label>
              <input
                className="border border-gray-500 h-10 mb-3 mt-3 w-full focus:border-blue-105 focus:border-b-2"
                type="text"
              />
              <label className="font-bold text-sm mt-3">Last Name</label>
              <input
                className="border border-gray-500 h-10 mb-3 mt-3 w-full focus:border-blue-105 focus:border-b-2"
                type="text"
              />
              <label className="font-bold text-sm mt-3">Create Password</label>
              <input
                className="border border-gray-500 h-10 mb-3 mt-3 w-full focus:border-blue-105 focus:border-b-2"
                type="password"
              />

              <label className="flex items-center mt-3">
                <input
                  type="checkbox" // Changed to checkbox for agree
                  checked={agree}
                  onChange={handleAgree}
                  className="square-radio mr-2"
                />
                I agree to the Terms & Conditions
              </label>
            </form>

            <p className="mb-3 mt-3">
              By creating an account, you agree to our{" "}
              <span className="text-blue-105 border-b border-transparent hover:border-blue-105 hover:cursor-pointer transition-colors duration-300">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-105 border-b border-transparent hover:border-blue-105 hover:cursor-pointer transition-colors duration-300">
                Terms & Conditions
              </span>.
            </p>
            <button
              className="mt-3 mb-6 h-12 w-full bg-blue-105 text-white font-bold text-sm hover:scale-105 transition-transform duration-300 hover:bg-blue-205"
              onClick={handlesubmit}
            >
              Create Account
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CreateAccount;
