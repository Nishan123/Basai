import { useState } from "react";
// import profilePic from "../assets/Profile.jpeg";

// eslint-disable-next-line react/prop-types
const EditProfileModal = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("Nishan");
  const [lastName, setLastName] = useState("Giri");
  const [email, setEmail] = useState("girinishan200@gmail.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfileImage] = useState("../assets/Profile.jpeg");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-5 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h2 className="text-center text-black text-2xl font-bold mb-4">Edit Profile</h2>
        <div className="flex flex-col items-center">
          <label htmlFor="profileImageUpload" className="cursor-pointer">
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-red-500 mb-2"
            />
          </label>
          <input
            type="file"
            id="profileImageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <p className="text-sm text-gray-600">Click to change image</p>
        </div>
        <form className="mt-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="border text-black p-2 rounded w-1/2"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border text-black p-2 rounded w-1/2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border text-black p-2 rounded w-full mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr className="my-4" />
          <p className="text-red-500 font-bold">Danger zone</p>
          <input
            type="password"
            placeholder="Old Password"
            className="border text-black p-2 rounded w-full mt-2"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="border text-black p-2 rounded w-full mt-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border text-black p-2 rounded w-full mt-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Discard changes
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;