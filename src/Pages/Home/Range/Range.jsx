
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/s1.jpg'
import slide2 from '../../../assets/s2.jpg'
import slide3 from '../../../assets/s3.jpg'
import slide4 from '../../../assets/s4.jpg'
import slide5 from '../../../assets/s5.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';


const Range = () => {
    
    return (
        <>
        <SectionTitle subHeading={'Price Range'}
        heading={'Different House'}></SectionTitle>
        
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 mt-5"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>$16000</h2>
                    </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>$35000</h2></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>$27000</h2></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>$38000</h2></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>$40000</h2></SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Range;