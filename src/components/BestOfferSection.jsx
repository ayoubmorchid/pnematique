import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import o1 from "../assets/img/offers/o2.png";
import o2 from "../assets/img/offers/o5.png";
import o3 from "../assets/img/offers/o4.webp";
import o4 from "../assets/img/offers/o8.webp";
import o5 from "../assets/img/offers/o7.webp";
import o6 from "../assets/img/offers/o6.webp";
import { NavLink } from "react-router-dom";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const BestOfferSection = () => {
  return (
    <div className="container mx-auto py-8 min-h-screen flex items-center justify-center flex-col">
      <div className="w-full" style={{ padding: "8px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-7">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <SwiperSlide>
                <img
                  src={o3}
                  alt="Large Banner 1"
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={o4}
                  alt="Large Banner 2"
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={o5}
                  alt="Large Banner 2"
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={o6}
                  alt="Large Banner 2"
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Two Stacked Smaller Banners */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-auto rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={o1}
                alt="Small Banner 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-auto rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={o2}
                alt="Small Banner 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text and Call to Action Button at the bottom of the section */}
      <div className="w-full mt-8 text-center my-8">
        <h2 className="text-3xl font-bold mb-4">Get the Best Deals Now!</h2>
        <p className="text-lg mb-4">Shop our latest offers and discounts. Don't miss out!</p>
        <NavLink to="/shop" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">
          Shop Now
        </NavLink>
      </div>
    </div>
  );
};

export default BestOfferSection;
