import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import o1 from "../assets/img/offers/o2.png";
import o2 from "../assets/img/offers/o5.png";
import o3 from "../assets/img/offers/o4.webp";
import o4 from "../assets/img/offers/o8.webp";
import o5 from "../assets/img/offers/o7.webp";
import o6 from "../assets/img/offers/o6.webp";
import { NavLink } from "react-router-dom";

const BestOfferSection = () => {
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 min-h-screen flex items-center justify-center flex-col">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-7">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
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
                  alt="Featured automotive offer"
                  className="w-full h-72 sm:h-[420px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={o4}
                  alt="Seasonal tire offer"
                  className="w-full h-72 sm:h-[420px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={o5}
                  alt="Maintenance product offer"
                  className="w-full h-72 sm:h-[420px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={o6}
                  alt="Accessory discount offer"
                  className="w-full h-72 sm:h-[420px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Two Stacked Smaller Banners */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-auto rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={o1}
                alt="Brake and service offer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-auto rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={o2}
                alt="Oil and parts offer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text and Call to Action Button at the bottom of the section */}
      <div className="w-full mt-8 text-center my-8">
        <h2 className="text-3xl font-bold mb-4">Get the Best Deals Now!</h2>
        <p className="text-lg mb-4">Shop our latest offers and discounts. Do not miss out!</p>
        <NavLink to="/shop" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">
          Shop Now
        </NavLink>
      </div>
    </section>
  );
};

export default BestOfferSection;
