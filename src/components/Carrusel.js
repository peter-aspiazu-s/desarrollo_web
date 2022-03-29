// import required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


export const Carrusel = () => {

    
    return (
        <div className="mt-2">
            <Swiper
                // install Swiper modules
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./assets/img/ui.jpg" alt="Interfaz de usuario" title="Interfaz de usuario" />
                    <div className="swiper__div">
                        <p>Interfaz de usuario</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/img/js.jpg" alt="Código limpio" title="Código limpio" />
                    <div className="swiper__div">
                        <p>Código limpio</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/img/ux.jpg" alt="Experiencia de usuario" title="Experiencia de usuario" />
                    <div className="swiper__div">
                        <p>Experiencia de usuario</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};