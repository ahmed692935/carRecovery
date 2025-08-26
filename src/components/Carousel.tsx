import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CC5 from "../../public/images/CC5.jpeg";
import C5 from "../../public/images/c5.jpg";
import C6 from "../../public/images/c6.jpg";
import C3 from "../../public/images/c3.jpeg";
import CC2 from "../../public/images/CC2.jpeg";
import CC4 from "../../public/images/CC4.jpeg";

const cardsData = [
  {
    id: 1,
    image: C5,
    title: "Towing Services",
    content:
      "Fast and secure towing for all vehicle types, 24/7. We transport your vehicle safely to your desired location or garage.",
  },
  {
    id: 2,
    image: CC2,
    title: "Car Recovery",
    content:
      "Broken down or stuck? Our expert team will recover your car quickly and get you back on track.",
  },
  {
    id: 3,
    image: CC4,
    title: "Tow to Nearest Garage",
    content:
      "We'll tow your vehicle to the nearest trusted garage for repairs. Hassle-free and efficient service wherever you are.",
  },
  {
    id: 4,
    image: C3,
    title: "Sports Car Recovery",
    content:
      "Specialised recovery for high-end and sports cars. We handle your luxury vehicle with expert care and precision.",
  },
  {
    id: 5,
    image: CC5,
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

const CarouselSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-5">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
        >
          {cardsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white shadow-lg overflow-hidden group rounded-lg">
                {/* Image with hover zoom */}
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows - Outside the cards */}
        <button className="hidden xl:block custom-swiper-button-prev absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 border border-gray-200">
          <svg
            width="35"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button className="hidden xl:block custom-swiper-button-next absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 border border-gray-200">
          <svg
            width="40"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Custom styles to hide default Swiper navigation */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default CarouselSection;
