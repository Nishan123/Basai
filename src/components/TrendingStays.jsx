// import React from "react";
import { Link } from "react-router-dom";
import PlusIcon from "../assets/Plus.png"
import PrashantImg from "../assets/prashant.jpeg";
import SushimImg from "../assets/sushim1.jpeg";
import NishanImg from "../assets/nishan1.jpeg";
import AbhishekImg from "../assets/abhishek.jpeg";

// eslint-disable-next-line no-empty-pattern
const TrendingStays = ({}) => {
  const trendingArray = [
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
  ];

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4  mx-50">Manage Your Properties</h2>

      <div className="grid grid-cols-3 gap-6 w-fit mx-auto">
        {trendingArray.map((stay, index) => (
          <div key={index} className="text-center bg-white rounded-lg shadow-md overflow-hidden p-4">
            <Link to={`/booking/${stay.owner}`} state={stay}>
              <img src={stay.img} alt={stay.owner} className="rounded-lg w-80 h-48 object-cover" />
              <p className="mt-2 text-left text-lg font-semibold">
                {stay.owner}&lsquo;s house <span className="text-gray-500">{stay.location}</span>
              </p>
              <div className="flex items-center mt-1">
                <h3 className="text-red-500 text-lg mr-1">{stay.price}</h3>
                <p className="text-sm">per Night</p>
              </div>
            </Link>
          </div>
        ))}

         {/* Add New Property Card with Image */}
         <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-md w-80 h-48 cursor-pointer">
          <Link to="/addproperty" className="flex flex-col items-center">
            <img src={PlusIcon} alt="Add Property" className="w-12 h-12 opacity-80" />
            <p className="mt-2 text-gray-700 font-semibold">Add more Property</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingStays;
