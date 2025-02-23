import { useState } from "react";
import { Link } from "react-router-dom";
import basaiIcon from "../assets/basaiIcon.png";
import profilePic from "../assets/Profile.jpeg";
import ProfileModal from "./ProfileModel";

// eslint-disable-next-line react/prop-types
const ProfileNavbar = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!userData || !userData.user) {
    return <div>Loading...</div>;
  }

  const { user } = userData;  // Extract user data from the response

  return (
    <div className="bg-[#001A72]  text-white flex items-center pt-0 pl-15">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-around items-center px-20 py-4 bg-[#001A72] text-white z-50">
        <div className="flex items-center">
          <Link to="/">
            <img src={basaiIcon} alt="Basai Logo" className="h-10" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/addproperty" className="text-white">
            List your property
          </Link>
          <div className="flex items-center space-x-2">
            <img
              src={profilePic}
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-red-500"
            />
            <div>
              <p className="text-sm font-semibold">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-xs">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container px-8 pt-0 pb-8 max-w-5xl mx-auto mt-20">
        <img
          src={profilePic}
          alt="Profile"
          className="h-32 w-32 rounded-full border-4 border-red-500"
        />
        <h2 className="text-2xl font-bold mt-2">Hi, {`${user.firstName} ${user.lastName}`}</h2>
        <p className="text-lg">{user.email}</p>
        <p className="text-sm text-gray-300">Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
        <button
          className="mt-2 px-4 py-1 bg-white text-[#001A72] rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Edit profile
        </button>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userData={userData}
      />
    </div>
  );
};

export default ProfileNavbar;
