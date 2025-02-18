import {useState} from "react";
import { Link } from "react-router-dom";
// import basaiIcon from "../assets/basaiIcon.png";
import backgroundImage from "../assets/navbar_bg.png";
import carIcon from "../assets/icon/car.gif";
import dateIcon from "../assets/icon/date.gif";
import PeopleIcon from "../assets/icon/people.png";
import PrashantImg from "../assets/prashant.jpeg";
import SushimImg from "../assets/sushim1.jpeg";
import NishanImg from "../assets/nishan1.jpeg";
import AbhishekImg from "../assets/abhishek.jpeg";
import kathmandImg from "../assets/kathmandu.jpeg";
import dharanImg from "../assets/image-dharan-bazaar.jpg";
import pokharaImg from "../assets/pokhara.jpeg";
import Navbar from "../components/NavbarB";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const HomePage = () => {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const cityArray = [
    {
      img: kathmandImg,
      city: "Kathmandu",
    },
    {
      img: dharanImg,
      city: "Dharan",
    },
    {
      img: pokharaImg,
      city: "Pokhara",
    }
  ];
  const staysArray = [
    {
      img: PrashantImg,
      owner: "Prashant",
      location: "Pokhara, Nepal",
      price: "NPR 4,500 ",
      description: "A beautiful house with mountain views, ideal for relaxing.",
    },
    {
      img: SushimImg,
      owner: "Sushim",
      location: "Kathmandu, Nepal",
      price: "NPR 3,800 ",
      description: "Modern stay in the heart of Kathmandu with all amenities.",
    },
    {
      img: NishanImg,
      owner: "Nishan",
      location: "Dharan, Nepal",
      price: "NPR 4,000",
      description: "A cozy retreat with a garden and peaceful surroundings.",
    },
    {
      img: AbhishekImg,
      owner: "Abhishek",
      location: "Lalitpur, Nepal",
      price: "NPR 5,200",
      description: "Luxury stay with top facilities and stunning city views.",
    },
    {
      img: PrashantImg,
      owner: "Prashant",
      location: "Pokhara, Nepal",
      price: "NPR 4,500",
      description: "A beautiful house with mountain views, ideal for relaxing.",
    },
    {
      img: SushimImg,
      owner: "Sushim",
      location: "Kathmandu, Nepal",
      price: "NPR 3,800 ",
      description: "Modern stay in the heart of Kathmandu with all amenities.",
    },
    {
      img: NishanImg,
      owner: "Nishan",
      location: "Dharan, Nepal",
      price: "NPR 4,000",
      description: "A cozy retreat with a garden and peaceful surroundings.",
    },
    {
      img: AbhishekImg,
      owner: "Abhishek",
      location: "Lalitpur, Nepal",
      price: "NPR 5,200",
      description: "Luxury stay with top facilities and stunning city views.",
    },
  ];

  return (
    <div>

 
        <Navbar />
   

      <div className="mt-40">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center text-center text-white p-12"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-5xl font-bold">Explore · Stay · Relax</h1>
          <p className="text-xl mt-2">
            Book unique stays and unforgettable experiences anywhere in the
            world.
          </p>
        </section>

        {/* Search Bar */}
        <div className="flex -mt-8 rounded-xl w-fit mx-auto border-2 border-green-800 bg-green-800 p-0.5">
          <div className="relative p-0.5 rounded-lg border-2 border-green-800 mx-0.5">
            <input
              type="text"
              placeholder="Where are you going?"
              className="px-8 py-2.5 rounded-lg text-center bg-white"
            />
            <img
              src={carIcon}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6"
              alt="Car-icon"
            />
          </div>

          <div className="relative p-0.5 rounded-lg border-2 border-green-800 mx-0.5">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              isClearable={true}
              className="px-10 py-2.5 rounded-lg text-center block w-fit bg-white"
              placeholderText="Check-in - Check-out"
            />
            <img
              src={dateIcon}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6"
              alt="date-icon"
            />
          </div>

          <div className="relative p-0.3 rounded-lg border-2 border-green-800 mx-0.3">
            <input
              type="number"
              min="1"
              placeholder="Number of people"
              className="px-12 py-2.5 rounded-lg text-center bg-white"
            />
            <img
              src={PeopleIcon}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6"
              alt="crowd-icon"
            />
          </div>

          <button className="bg-blue-500 text-white px-7 py-2.5 mx-0.5  rounded-lg border-2 border-green-800 hover:bg-blue-600">
            Search
          </button>
        </div>


        {/* Trending Cities */}
        <section className="p-6">
          <div className="trending-cities flex mx-60 ">

          <h2 className="text-3xl font-bold mb-4 text-left">
            Trending Cities
          </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 w-fit mx-auto">
            {cityArray.map((city, index) => (
              <div key={index} className="text-left">
                <img src={city.img} alt={'photo'} className="rounded-lg w-80 h-48" />
                <p className="mt-2 font-bold text-xl">
                  {city.city}{", "}
                  <span className="text-gray-500">Nepal</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Stays */}
        <section className="p-6">
          <div className="trending-stays  flex align-baseline mx-60">

          <h2 className="text-3xl font-bold mb-4 text-left">
            Trending Stays
          </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 w-fit mx-auto">
            {staysArray.map(
              (stay, index) => (
                <div key={index} className="text-center">
                   <Link to={`/booking/${stay.owner}`} state={stay}> {/* Wrap stay card in Link */}
                    <img
                      src={stay.img}
                      alt={"photo"}
                      className="rounded-lg w-80 h-48"
                    />
                    <p className="mt-2 text-left text-lg font-semibold">
                      {stay.owner}{"'s house "}
                      <span className="text-gray-500">{stay.city}</span>
                    </p>
                    <div className="flex items-center mt-1">
                      <h3 className="text-red-500 text-lg mr-1">RS 4000</h3>
                      <p className="text-sm">per Night</p>
                    </div>
                  </Link> {/* End Link */}
                </div>
              )
            )}
          </div>
        </section>
       
        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-4 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">About Basai</h3>
                <p className="text-gray-300">
                  Your trusted platform for finding and booking unique stays across Nepal.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Home</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Search Stays</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">List Your Property</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Contact Us</a></li>
                </ul>
              </div>
              
              {/* Popular Destinations */}
              <div>
                <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Kathmandu</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Pokhara</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Dharan</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400">Lalitpur</a></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">📞 +977 987654321</li>
                  <li className="text-gray-300">✉️ info@basai.com</li>
                  <li className="text-gray-300">📍 Kathmandu, Nepal</li>
                </ul>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Basai. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
