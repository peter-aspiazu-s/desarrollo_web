// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

import { Typewriter } from 'react-simple-typewriter';


export const PresentacionSup = () => {
    return (
        <div className="presentacion-sup">

            <div className='presentacion-sup__typewriter'>
                <span className='presentacion-sup__typewriter-span'>
                {/* Style will be inherited from the parent element */}
                    <Typewriter
                        className="span-typing"
                        words={[ 
                                'Sitios Webs Profesionales', 
                                'Para Negocios Grandes, Medianos y Pequeños', 
                                'Hasta 10 Páginas Estáticas',
                                'Enlace a Redes Sociales',
                                'Botón de WhatsApp',
                                'Sitio Web Ligero y de Carga Rápida',
                                'Sitio Web Adaptable a Cualquier Tamaño de Pantalla',
                            ]}
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="presentacion-sup__swiper">
                    <img src="./assets/img/responsive-web-design.webp" alt="Responsive Web Design" title="Responsive Web Design" />
                </SwiperSlide>
                <SwiperSlide className="presentacion-sup__swiper">
                    <img src="./assets/img/hosting.webp" alt="Hosting" title="Hosting" />
                </SwiperSlide>
                <SwiperSlide className="presentacion-sup__swiper">
                    <img src="./assets/img/dominios.webp" alt="Dominios" title="Dominios" />
                </SwiperSlide>
                <SwiperSlide className="presentacion-sup__swiper">
                    <img src="./assets/img/redes-sociales.webp" alt="Redes Sociales" title="Redes Sociales" />
                </SwiperSlide>
                
            </Swiper>
            </div>
    )
}