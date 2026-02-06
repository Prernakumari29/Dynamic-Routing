import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Slide3 from "../assets/Slide3.png"


const SwiperLibrary = () => {
  return (
    <div>
      <div className='h-96 w-full bg-amber-400'>
        <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <img className='h-96 w-full object-cover object-center' src={Slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='h-96 w-full object-cover' src="https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='h-96 w-full object-cover' src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg" alt="" />
            </SwiperSlide>


        </Swiper>
      </div>
    </div>
  )
}

export default SwiperLibrary
