import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure Link and useNavigate are imported
import signupImage from "../assets/signupImage.png";
import prashantImage from "../assets/prashant.jpeg";
import sushim1Image from "../assets/sushim1.jpeg";
import basaiIcon from "../assets/basaiIcon.png";
import axios from 'axios';

// Configure axios with better error handling
const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Add request interceptor for debugging
api.interceptors.request.use(request => {
    console.log('Starting Request:', {
        url: request.url,
        method: request.method,
        headers: request.headers,
        data: request.data
    });
    return request;
});

// Add response interceptor for debugging
api.interceptors.response.use(
    response => {
        console.log('Response:', response);
        return response;
    },
    error => {
        console.error('Response Error:', {
            message: error.message,
            response: error.response,
            request: error.request,
            config: error.config
        });
        return Promise.reject(error);
    }
);

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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    console.log('Submitting form with data:', {
      ...data,
      password: data.password ? '****' : undefined,
      confirmPassword: data.confirmPassword ? '****' : undefined
    });

    // Basic frontend validation
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      const missingFields = Object.entries(data)
        .filter(([key, value]) => !value && key !== 'confirmPassword')
        .map(([key]) => key);
      setError(`Missing required fields: ${missingFields.join(', ')}`);
      return;
    }

    if (!data.email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    if (data.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!e.target.terms.checked) {
      setError("Please agree to the terms and conditions");
      return;
    }

    try {
      // Test server connection
      try {
        const testResponse = await api.get('/test');
        console.log('Server test successful:', testResponse.data);
      } catch (testError) {
        console.error('Server test failed:', testError);
        setError('Cannot connect to server. Please check if the backend server is running.');
        return;
      }

      // Proceed with signup
      const response = await api.post('/users/signup', data);
      console.log('Signup successful:', response.data);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error('Signup failed:', err);
      
      if (!err.response) {
        setError('Network error. Please check if the server is running.');
      } else {
        setError(
          err.response?.data?.error || 
          err.response?.data?.details || 
          'An unexpected error occurred'
        );
      }
    }
  };

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
        {error && (
          <div className="w-full p-3 mb-4 text-red-500 bg-red-100 rounded">
            {error}
          </div>
        )}
        <form className="w-full" onSubmit={handleSubmit}>
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
