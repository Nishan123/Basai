import{useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaUsers, FaParking, FaHotTub, FaCar, FaCoffee, FaUtensils, FaChild } from "react-icons/fa";
import Navbar from "../components/NavbarB";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const { owner } = useParams();
  const location = useLocation();
  const stay = location.state;

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  

  if (!stay) {
    return <h2 className="text-center mt-20 text-xl">Stay not found!</h2>;
  }

  return (
    <>
    <Navbar/>
    <div className="p-10 mx-auto w-4/5 mt-35">
      {/* Stay Info */}
      <div className="flex gap-10">
        {/* Image */}
        <img src={stay.img} alt="Stay" className="w-2/5 h-96 rounded-lg" />

        {/* Stay Details */}
        <div className="w-3/5">
          <h1 className="text-3xl font-bold">
            {owner}&apos;s House, <span className="text-red-500">{stay.city}</span>
          </h1>
          <p className="text-gray-600 text-lg mt-1">📍 {stay.location}</p>

          {/* Description Box */}
          <div className="bg-gray-100 p-4 rounded-md mt-4">
            <p className="text-gray-700">{stay.description}</p>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-4 mt-4 text-blue-600">
            <div className="flex items-center gap-1"><FaUsers /> Family-Friendly Stay</div>
            <div className="flex items-center gap-1"><FaParking /> Secure Parking Available</div>
            <div className="flex items-center gap-1"><FaHotTub /> Relaxing Hot Tub</div>
            <div className="flex items-center gap-1"><FaCar /> Taxi Service</div>
            <div className="flex items-center gap-1"><FaCoffee /> Complimentary Tea/Coffee</div>
            <div className="flex items-center gap-1"><FaUtensils /> Delicious Dining Options</div>
            <div className="flex items-center gap-1"><FaChild /> Child-Friendly Amenities</div>
          </div>

          {/* Price & Booking */}
          <h3 className="text-red-500 text-2xl mt-4">{stay.price} <span className="text-red-500 text-lg">/ per night</span></h3>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Book Now</button>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-10 bg-gradient-to-r from-blue-500 to-indigo-700 p-20 rounded-md text-white w-3/4 mx-auto">
        <h2 className="text-xl font-bold mb-4">Booking Details</h2>
        <input type="text" placeholder="Your full name" className="w-full p-2 mb-2 bg-amber-50 rounded text-black" />
        <input type="text" placeholder="Phone No" className="w-full  bg-amber-50 p-2 mb-2 rounded text-black" />
        <input type="text" placeholder="No of people" className="w-full p-2 mb-2  bg-amber-50 rounded text-black" />
       <div className="react-datepicker-wrapper w-full p-2 mb-2  bg-amber-50 rounded text-black">
                   <DatePicker
                     selectsRange={true}
                     startDate={startDate}
                     endDate={endDate}
                     onChange={(update) => setDateRange(update)}
                     isClearable={true}
                     className=" w-full p-2  bg-amber-50 rounded text-black"
                     placeholderText="Check-in - Check-out"
                   />
                  
                 </div>
        <button className="w-full mt-2 px-4 py-2 bg-white text-blue-500 font-bold rounded">Book Now</button>
      </div>
    </div>
    </>
  );
};

export default BookingPage;
