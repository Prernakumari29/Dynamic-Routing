import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';
import SlideNew from "../assets/SlideNew.png"
import Slide1 from "../assets/Slide1.png"
import SlideLast from "../assets/SlideLast.jpg"





const SwiperLibrary = () => {
  return (
    <div>
      <div className='h-96 w-full '>
        <Swiper pagination={{ clickable: true }} modules={[Pagination , Autoplay]} 
                 autoplay={{delay: 2500,disableOnInteraction: false}} 
                 className="h-full relative pb-10 ">
          <SwiperSlide>
              <img className='h-96  object-cover object-center absolute left-[50%] transform -translate-x-1/2 top-5' src={SlideNew} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-96  object-cover object-center absolute left-[50%] transform -translate-x-1/2 top-5' src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-96  object-cover object-center absolute left-[50%] transform -translate-x-1/2 top-5' src={SlideLast} alt="" />
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  )
}

export default SwiperLibrary
