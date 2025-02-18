import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import signupImage from "../assets/signupImage.png";
import prashantImage from "../assets/prashant.jpeg";
import sushim1Image from "../assets/sushim1.jpeg";
import basaiIcon from "../assets/basaiIcon.png";

const Signup = () => {
  const images = [
    signupImage,
    prashantImage,
    sushim1Image,
    signupImage,
    prashantImage,
    sushim1Image,
    signupImage,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex h-screen m-5 font-sans mx-12 gap-6">
      {/* Left Container */}
      <div className="relative flex-1 overflow-hidden rounded-2xl">
        <img
          src={basaiIcon}
          alt="Basai Icon"
          className="absolute top-2 left-2 w-20 h-auto z-10"
        />
        <div
          className="flex w-full h-full transition-transform ease-in-out duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 text-white text-lg bg-black bg-opacity-50 px-3 py-1 rounded">
                Caption for Slide {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Container */}
      <div className="flex-1 p-10 flex flex-col justify-center items-start bg-white">
        <h2 className="text-4xl font-bold mb-4">Create an account</h2>
        <div className="flex gap-2 text-gray-500 mb-6 text-xl">
          <div className="font-bold text-black">Basai·</div>
          <div>Explore · Stay · Relax</div>
        </div>
        <form
          className="w-full"
          method="post"
          action="http://localhost:5005/signup"
        >
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-full p-3 border-2 border-black rounded bg-gray-300 mb-4"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-full p-3 border-2 border-black rounded bg-gray-300 mb-4"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border-2 border-black rounded bg-gray-300 mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border-2 border-black rounded bg-gray-300 mb-4"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full p-3 border-2 border-black rounded bg-gray-300 mb-4"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              Agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
          >
            Signup
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Log in.
          </Link>
        </p>
        <button className="mt-4 w-55 p-3 border border-gray-400 rounded bg-white hover:bg-indigo-600 hover:text-white">
          <Link to="/" className="block w-full h-full text-center">
            Continue without Signup →
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
