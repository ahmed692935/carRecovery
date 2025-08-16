import Navbar from "../components/Navbar";
import MainCar from "../../public/images/carMain.jpeg";
import { FaAward, FaHandshake, FaPeopleGroup } from "react-icons/fa6";
import { Ri24HoursLine, RiDiscountPercentLine } from "react-icons/ri";
import C1 from "../../public/images/c1.jpeg";
import C2 from "../../public/images/c2.jpeg";
import C3 from "../../public/images/c3.jpeg";
import C4 from "../../public/images/c4.jpg";
import C5 from "../../public/images/c5.jpg";
import C6 from "../../public/images/c6.jpg";
import Main3 from "../../public/images/3main.jpeg";
import Main4 from "../../public/images/4Main.jpg";
import Main5 from "../../public/images/main5.webp";

import { FaCalendarAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Footer from "../components/Footer";

const cardsData = [
  {
    id: 1,
    image: C1,
    title: "Towing Services",
    content:
      "Fast and secure towing for all vehicle types, 24/7. We transport your vehicle safely to your desired location or garage.",
  },
  {
    id: 2,
    image: C2,
    title: "Car Recovery",
    content:
      "Broken down or stuck? Our expert team will recover your car quickly and get you back on track.",
  },
  {
    id: 3,
    image: C3,
    title: "Tow to Nearest Garage",
    content:
      "We’ll tow your vehicle to the nearest trusted garage for repairs. Hassle-free and efficient service wherever you are.",
  },
  {
    id: 4,
    image: C4,
    title: "Sports Car Recovery",
    content:
      "Specialised recovery for high-end and sports cars. We handle your luxury vehicle with expert care and precision.",
  },
  {
    id: 5,
    image: C5,
    title: "Desert Pull-Out Service",
    content:
      "Stuck in the sand? Our powerful desert pull-out vehicles can recover your car from any off-road or desert terrain.",
  },
  {
    id: 6,
    image: C6,
    title: "Basement Pullout",
    content:
      "Vehicle stuck in a basement or underground parking? We provide smooth and damage-free extraction.",
  },
];

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />

        {/* Main Image Section*/}
        <div className="relative h-screen w-full">
          {/* Background Image */}
          <img
            src={MainCar}
            alt="Car"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

          {/* Text Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              STRANDED ON THE ROAD?
              <span className="text-blue-900">CALL SMART CAR</span> RECOVERY
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Stuck on the road? Let Smart Car Recovery get you moving again –
              24/7 support across Dubai, Sharjah, Ajman, and more! We specialize
              in all types of vehicle recovery – from everyday cars to high-end
              sports vehicles.
            </p>
            <button className="bg-blue-900 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer">
              EMERGENCY CALL NOW
            </button>
          </div>
        </div>

        {/* Smart Car Recovery Section */}
        <div className="mt-14">
          <p className="text-4xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-blue-900">SMART CAR RECOVERY</span> –RECOVERY,
            TOWING & ROADSIDE HELP
          </p>
        </div>
        <div className="mt-14 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[45%_53%] gap-8">
            {/* Left Column (45%) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Sub-column 1 */}
              <div className="space-y-4">
                <div className="bg-white p-6 border transition-all duration-300 hover:shadow-xl border-blue-900 hover:rounded-2xl">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <FaPeopleGroup className="text-blue-900" size={50} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
                    Highly Trained Staff
                  </h3>
                </div>

                <div className="bg-white p-6 border transition-all duration-300 hover:shadow-xl border-blue-900 hover:rounded-2xl">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <Ri24HoursLine className="text-blue-900" size={50} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
                    24 Hour Service
                  </h3>
                </div>
              </div>

              {/* Sub-column 3 */}
              <div className="space-y-4">
                <div className="bg-white p-6 border transition-all duration-300 hover:shadow-xl border-blue-900 hover:rounded-2xl">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <FaAward className="text-blue-900" size={50} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
                    Customer Satisfaction
                  </h3>
                </div>

                {/* Sub-column 4 */}
                <div className="bg-white p-6 border transition-all duration-300 hover:shadow-xl border-blue-900 hover:rounded-2xl">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <RiDiscountPercentLine
                      className="text-blue-900"
                      size={50}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
                    Competitive Prices
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column (55%) */}
            <div className="flex flex-col">
              <p className="text-gray-700 mb-4 font-bold">
                Stuck on the road? Let Smart Car Recovery get you moving again –
                24/7 support across Dubai, Sharjah, Ajman, and more!
              </p>
              <p className="text-gray-700 mb-6">
                At <span className="font-bold">Smart Car Recovery</span>, we
                provide professional, quick-response vehicle recovery and
                roadside assistance services designed to get you back on the
                road with minimal stress. Whether you’ve broken down, run out of
                fuel, need a tow, or require a tyre change – our expert team is
                just a call away.
              </p>
              <p className="text-gray-700 mb-6">
                We specialize in all types of vehicle recovery – from everyday
                cars to high-end sports vehicles. No job is too big or too
                small. With years of hands-on experience and a fleet of fully
                equipped recovery trucks, we ensure your vehicle is handled with
                care and precision.
              </p>
              <button className="bg-blue-900 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-fit">
                Discover More
              </button>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mt-20">
          <p className="font-bold text-3xl md:text-6xl text-center">
            Our <span className="text-blue-900">Services</span>
          </p>
          <p className="mt-5 text-center max-w-5xl mx-auto text-base p-5">
            Smart Car Recovery offers fast and reliable{" "}
            <span className="font-bold">towing</span>,{" "}
            <span className="font-bold">car recovery</span>, and{" "}
            <span className="font-bold">roadside assistance</span> across Dubai,
            Sharjah, Ajman, and nearby areas. Our services include{" "}
            <span className="font-bold">
              tow to nearest garage, sports car recovery, desert pull-out,
              basement pullout, winching
            </span>
            , and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6 mt-5">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-lg overflow-hidden group"
              >
                {/* Image with hover zoom */}
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-7">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Basement PullOut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 mt-10">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              BREAKDOWN?{" "}
              <span className="text-blue-900">
                BASEMENT PULLOUT? DESERT STUCK?
              </span>
              – WE WILL BE THERE IN NO TIME!
            </h2>
            <p className="text-lg text-gray-700">
              At Smart Car Recovery, we specialize in fast, efficient solutions
              for any vehicle trouble. Whether you’re experiencing a breakdown
              on the road, need a vehicle pulled out of a basement, or find
              yourself stuck in the desert, we’ve got you covered. Our expert
              team is available 24/7 across Dubai, Sharjah, Ajman, and nearby
              areas, ready to respond quickly. With state-of-the-art equipment
              and a skilled team, we handle every situation with care and
              precision. You can trust us to get you back on the road safely and
              quickly, no matter the challenge. When you’re in need, we’ll be
              there in no time!
            </p>
            <button className="bg-blue-900 font-semibold text-white text-xl md:text-6xl px-6 py-3 rounded-lg hover:bg-blue-800">
              CALL US NOW!
            </button>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <img
              src={MainCar}
              alt="Car Recovery"
              className="w-full max-w-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Tech Master Section */}
        <div className="relative w-full h-[500px] flex items-center justify-center bg-black mt-10">
          {/* Background Image */}
          <img
            src={Main3}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

          {/* Overlay Content */}
          <div className="relative z-10 text-center text-white max-w-5xl px-6">
            {/* Name */}
            <h2 className="text-2xl text-blue-900 font-bold">John Doe</h2>

            {/* Designation */}
            <p className="text-lg text-gray-200 mb-2">CEO, Smart Recovery</p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-900"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.072 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.072-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Content */}
            <p className="text-lg text-gray-100 italic">
              I got my car stuck in the basement parking, and I thought it would
              be a huge hassle. But Smart Car Recovery handled the pullout
              effortlessly. They arrived promptly and got me out without a
              scratch. Fantastic service and very reliable!
            </p>
          </div>
        </div>

        {/* Tyre Fitting Services */}
        <div className="grid grid-cols-1 md:grid-cols-[28%_30%_30%] gap-8 p-8">
          {/* First Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              FROM TOWING TO –{" "}
              <span className="text-blue-900">TYRE FITTING</span>–WE DO IT ALL!
            </h2>
            <p className="text-gray-600 mb-6">
              At smart car recovery, we offer a comprehensive range of services
              to handle all your vehicle needs. whether it’s a quick tow, a
              desert pull-out, or mobile tyre fitting, we’ve got you covered.
              our team is ready to assist with any roadside emergency, providing
              you with fast, reliable, and professional service. no matter the
              situation, we make sure you’re back on the road in no time!
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <TiTick className="text-blue-900" />
                <span className="text-blue-900 font-bold">
                  Emergency Car Towing Near Me Dubai
                </span>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-blue-900" />
                <span className="text-blue-900 font-bold">
                  24/7 Car Recovery Services Sharjah
                </span>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-blue-900" />
                <span className="text-blue-900 font-bold">
                  Roadside Assistance Ajman
                </span>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-blue-900" />
                <span className="text-blue-900 font-bold">
                  Breakdown Recovery Near Me Al Mirdif
                </span>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-blue-900" />
                <span className="text-blue-900 font-bold">
                  Desert Pull-Out Recovery Dubai
                </span>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-blue-900" />
                <span className="text-blue-900 font-bold">
                  Towing Service Near Me Al Warqa
                </span>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="flex justify-center items-center">
            <img src={Main4} alt="Service" className="rounded-lg shadow-lg" />
          </div>

          {/* Third Column */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCalendarAlt
                  size={100}
                  className="text-black mt-12 lg:mt-7"
                />
                <div>
                  <h4 className="font-semibold text-blue-900 text-2xl mb-5">
                    6+ Years Of Experience
                  </h4>
                  <p className="text-gray-600">
                    With over six years of experience in the vehicle recovery
                    industry, Smart Car Recovery has built a strong reputation
                    for reliability and professionalism.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaHandshake size={200} className="text-black  lg:-mt-7" />
                <div>
                  <h4 className="font-semibold text-blue-900 text-2xl mb-5">
                    PERSONALIZED SERVICES
                  </h4>
                  <p className="text-gray-600">
                    We understand that every situation is unique, which is why
                    we offer personalized services tailored to your specific
                    needs. From quick towing to complex recovery tasks,
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PullOut Section */}
        <div className="bg-black py-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-[67%_30%] items-center gap-8 px-5">
            {/* Left Column (70%) */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                JUMP STARTS, –{" "}
                <span className="text-blue-900">
                  PULL-OUTS & EXPERT RECOVERY
                </span>{" "}
                24/7 ACROSS DUBAI
              </h2>
              <p className="mb-6">
                At Smart Car Recovery, we offer reliable jump starts, pull-outs,
                and expert recovery services, available around the clock.
                Whether your car has a dead battery or you’re stuck in a tight
                spot, our skilled team is just a call away. We specialize in
                quick and safe recovery, from standard vehicles to challenging
                situations like desert or basement pull-outs. Our
                state-of-the-art equipment ensures the job is done efficiently
                without any damage to your car. With 24/7 availability, we
                provide peace of mind knowing we’re always ready to assist, no
                matter the time or place in Dubai.
              </p>
              <button className="bg-blue-900 text-4xl hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md transition">
                EMERGENCY TOWING
              </button>
            </div>

            {/* Right Column (30%) */}
            <div className="flex justify-center">
              <img src={Main5} alt="Service" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Car Towing Section */}
        <div className="text-center">
          <p className="text-4xl text-center max-w-lg mx-auto mt-10 font-bold">
            FROM CAR TOWING TO{" "}
            <span className="text-blue-900 font-bold">DESERT PULL-OUT</span>
          </p>
          <p className="mt-5 text-center max-w-5xl mx-auto">
            At Smart Car Recovery, we provide a wide range of services, from
            basic roadside assistance to expert vehicle recovery. Whether you
            need a jump start, fuel delivery, or a quick tyre change, our team
            is always ready to help. We also specialize in more complex recovery
            situations, such as desert pull-outs and basement extractions. With
            our professional expertise and 24/7 availability, we ensure you’re
            never left stranded on the road.
          </p>
          <button className="bg-blue-900 mb-10 mt-5 text-2xl hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md transition">
            BREAKDOWN RECOVERY
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
