import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperOnly.css';

export default function SwiperOnly() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="https://flyarystan.com/media/2xajlymb/skytrax-2025_banner_ru.jpg" alt="Слайд 1" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://flyarystan.com/media/4kggw3y5/main_banner_2025_guw-tas_new_with_price_ru.webp" alt="Слайд 2" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://flyarystan.com/media/oyobfakn/main-banner_kiwi-china_ru.jpg" alt="Слайд 3" className="slide-image" />
      </SwiperSlide>
    </Swiper>
  );
}
