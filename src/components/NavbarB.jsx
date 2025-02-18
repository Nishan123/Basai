import { useState } from "react";
import { Link } from "react-router-dom";
import basaiIcon from "../assets/basaiIcon.png";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (e, linkName) => {
    e.preventDefault(); // Prevent navigation
    setSelectedLink(linkName);
  };

  return (
    <>
      <div className="flex fixed top-0 left-0 w-full bg-[#001A72] text-white z-50">
        {/* Container to center and manage width responsively */}
        <div className="container mx-auto">
          {/* Top Navbar */}
          <div className="flex justify-around items-center px-4 py-4">
            {/* Left Side: Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src={basaiIcon} alt="Basai Logo" className="h-10" />
              </Link>
            </div>

            {/* Right Side: Auth Links */}
            <div className="flex items-center space-x-4">
              <Link to="/addproperty" className="text-white">
                List your property
              </Link>
              <Link
                to="/SignUp"
                className="bg-white text-[#001A72] px-4 py-1 rounded"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-white text-[#001A72] px-4 py-1 rounded"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Bottom Navbar: Navigation Links */}
          <div className="flex container px-8 gap-4 py-6 max-w-5xl mx-auto">
            <Link
              to="/notFound"
              className={`border-2 border-white px-6 py-2 rounded-full transition-colors ${
                selectedLink === "Hotels"
                  ? "bg-white text-[#001A72]"
                  : "text-white"
              }`}
              onClick={(e) => handleLinkClick(e, "Hotels")}
            >
              Hotels
            </Link>
            <Link
              to="/notFound"
              className={`border-2 border-white px-6 py-2 rounded-full transition-colors ${
                selectedLink === "Pods"
                  ? "bg-white text-[#001A72]"
                  : "text-white"
              }`}
              onClick={(e) => handleLinkClick(e, "Pods")}
            >
              Pods
            </Link>
            <Link
              to="/notFound"
              className={`border-2 border-white px-6 py-2 rounded-full transition-colors ${
                selectedLink === "Homestays"
                  ? "bg-white text-[#001A72]"
                  : "text-white"
              }`}
              onClick={(e) => handleLinkClick(e, "Homestays")}
            >
              Home stays
            </Link>
            <Link
              to="/notFound"
              className={`border-2 border-white px-6 py-2 rounded-full transition-colors ${
                selectedLink === "Premium"
                  ? "bg-white text-[#001A72]"
                  : "text-white"
              }`}
              onClick={(e) => handleLinkClick(e, "Premium")}
            >
              Premium
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
