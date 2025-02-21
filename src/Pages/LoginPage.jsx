import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signupImage from "../assets/signupImage.png";
import prashantImage from "../assets/prashant.jpeg";
import sushim1Image from "../assets/sushim1.jpeg";
import basaiIcon from "../assets/basaiIcon.png";
import mailIcon from "../assets/icon/mail-142.png";
import eyeIcon from "../assets/icon/eye-12111.png";
import { Link } from "react-router-dom";
import axios from 'axios';

// Configure axios
const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const slides = [
    signupImage,
    prashantImage,
    sushim1Image,
    signupImage,
    prashantImage,
    sushim1Image,
    signupImage,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Basic validation
    if (!data.email || !data.password) {
      setError("Email and password are required");
      return;
    }

    if (!data.email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    if (!e.target.terms.checked) {
      setError("Please agree to the terms and conditions");
      return;
    }

    try {
      const response = await api.post('/users/login', data);
      console.log('Login successful:', response.data);
      
      // Store the token and user data in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Show success message
      alert("Login successful!");
      
      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.error('Login failed:', err);
      
      setError(
        err.response?.data?.error || 
        'Failed to login. Please check your credentials.'
      );
    }
  };

  return (
    <div className="flex h-screen font-sans mx-12 gap-9 mr-7 ml-7 mt-4">
      <div className="relative flex-1 overflow-hidden rounded-2xl">
        <img
          src={basaiIcon}
          alt="Basai Icon"
          className="absolute top-2 left-2 w-20 z-10"
        />
        <div className="w-full h-full relative">
          <img
            src={slides[currentSlide]}
            alt="Slide"
            className="w-full h-full object-cover rounded-2xl transition-all duration-700"
          />
          <div className="absolute bottom-4 left-4 text-white text-lg bg-black bg-opacity-50 px-3 py-1 rounded">
            Caption for Slide {currentSlide + 1}
          </div>
        </div>
      </div>
      <div className="flex-1 p-10 flex flex-col justify-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Log into your account</h2>
        <div className="text-xl text-gray-600 mb-8 flex gap-2">
          <span className="font-bold text-black">Basai·</span> Explore · Stay ·
          Relax
        </div>
        {error && (
          <div className="w-full p-3 mb-4 text-red-500 bg-red-100 rounded">
            {error}
          </div>
        )}
        <form className="w-full mr-44" onSubmit={handleSubmit}>
          <div className="relative w-full mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border-2 border-black rounded bg-gray-300"
            />
            <img
              src={mailIcon}
              alt="mail icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6"
            />
          </div>
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-3 border-2 border-black rounded bg-gray-300"
            />
            <img
              src={eyeIcon}
              alt="eye icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up.
          </Link>
        </p>
        <button className="mt-4 w-52 p-3 border border-gray-400 rounded bg-white hover:bg-indigo-600 hover:text-white">
          <Link to="/" className="block w-full h-full text-center">
            Continue without login →
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
