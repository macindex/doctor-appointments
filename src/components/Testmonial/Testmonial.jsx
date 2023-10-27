import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import starIcon from "./../../assets/images/Star.png";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "./../../assets/images/patient-avatar.png";

const Testmonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerview={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py=[30px] px5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColor">
                  Jucelino Kubitschek
                </h4>
                <div className="flex items-center gap-[2px]">
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              "I have taken medical services from them. They treat so well and 
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py=[30px] px5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColor">
                  Jucelino Kubitschek
                </h4>
                <div className="flex items-center gap-[2px]">
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              "I have taken medical services from them. They treat so well and 
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py=[30px] px5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColor">
                  Jucelino Kubitschek
                </h4>
                <div className="flex items-center gap-[2px]">
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              "I have taken medical services from them. They treat so well and 
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py=[30px] px5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headinColor">
                  Jucelino Kubitschek
                </h4>
                <div className="flex items-center gap-[2px]">
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                  <starIcon className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              "I have taken medical services from them. They treat so well and 
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testmonial;
