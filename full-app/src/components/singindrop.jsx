import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faBox,
  faHeart,
  faTruck,
  faCreditCard,
  faArrowUpRightFromSquare,
  faComments,
  faStore,
  faEnvelope,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SigninDrop = () => {
  const navigate = useNavigate();

  const signupNavigate = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <>
      <div className="relative flex flex-col items-start gap-5 p-4  bg-white border border-gray-300">
        <div className="absolute w-28 h-8 top-[-25px] left-32 "></div>
        <button
          className=" bg-blue-105 text-white w-64 h-10"
          onClick={(e) => signupNavigate(e)}
        >
          {" "}
          Sign In | Create Account
        </button>
        <div className="flex flex-col items-start">
          <h2 className="font-extrabold text-xl mb-4 hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
            Your Account
          </h2>
          <ul className="flex flex-col items-start gap-4">
            <li>
              <FontAwesomeIcon icon={faBox} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
                Purchases
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
                Wish List
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleUser} className="mr-3" />{" "}
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
                The nordy Club Rewards
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
                Shipping Addresses
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
                Payment Methods
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="mr-3"
              />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
                Pay & Manage NordStorm Cards
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-extrabold text-xl  hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">Account Settings</h2>
          <ul className="flex flex-col items-start gap-4">
            <li>
              {" "}
             
                <FontAwesomeIcon icon={faLock} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
              Passwords & Personal Info
              </span>
            </li>
            <li>
             
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
              Email & Mail Preferences
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-extrabold text-xl  hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">Need Help?</h2>
          <ul className="flex flex-col items-start gap-4">
            <li>
              {" "}
             
                <FontAwesomeIcon icon={faComments} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
              Contact us
              </span>
            </li>
            <li>
             
                <FontAwesomeIcon icon={faStore} className="mr-3" />
              <span className=" hover:text-blue-105 hover:underline hover:cursor-pointer transition-all duration-100">
              Find a Store
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SigninDrop;
