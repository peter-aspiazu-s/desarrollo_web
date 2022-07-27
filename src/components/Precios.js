import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";


export const Precios = () => {
    return(
        <div className="precio container" id="precios">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                
                <SwiperSlide className="mySwiper__card-container precio__card">
                    <h3>Opción #1</h3>
                    <p className="precio__card-site">Sitio Web Profesional</p>
                    <p className="precio__card-precio">$150</p>
                    <div><i class="fa-solid fa-circle-check"></i><p>Hasta 10 páginas estáticas</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Hosting por 1 año</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Dominio por 1 año</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Optimización de imagenes</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Enlace a Redes Sociales</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Botón Fijo de WhatsApp</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Diseño Adaptable a Pantallas de Celular, Tablet y PC</p></div>
                    <div><i class="fa-solid fa-xmark"></i><p>Formulario de Contacto con Envío al Email</p></div>
                    <div><i class="fa-solid fa-xmark"></i><p>Animaciones, Efectos y Transisiones Personalizadas</p></div>

                    <a href="https://wa.link/98mmeg">Me interesa</a>
                </SwiperSlide>
                <SwiperSlide className="mySwiper__card-container precio__card">
                    <h3>Opción #2</h3>
                    <p className="precio__card-site">Sitio Web Profesional + Formulario</p>
                    <p className="precio__card-precio">$200</p>
                    <div><i class="fa-solid fa-circle-check"></i><p>Hasta 10 páginas estáticas</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Hosting por 1 año</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Dominio por 1 año</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Optimización de imagenes</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Enlace a Redes Sociales</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Botón Fijo de WhatsApp</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Diseño Adaptable a Pantallas de Celular, Tablet y PC</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Formulario de Contacto con Envío al Email</p></div>
                    <div><i class="fa-solid fa-xmark"></i><p>Animaciones, Efectos y Transisiones Personalizadas</p></div>

                    <a href="https://wa.link/iu5qlx">Me interesa</a>
                </SwiperSlide>
                <SwiperSlide className="mySwiper__card-container precio__card">
                    <h3>Opción #3</h3>
                    <p className="precio__card-site">Sitio Web Profesional + formulario + animaciones</p>
                    <p className="precio__card-precio">$250</p>
                    <div><i class="fa-solid fa-circle-check"></i><p>Hasta 10 páginas estáticas</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Hosting por 1 año</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Dominio por 1 año</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Optimización de imagenes</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Enlace a Redes Sociales</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Botón Fijo de WhatsApp</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Diseño Adaptable a Pantallas de Celular, Tablet y PC</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Formulario de Contacto con Envío al Email</p></div>
                    <div><i class="fa-solid fa-circle-check"></i><p>Animaciones, Efectos y Transisiones Personalizadas</p></div>

                    <a href="https://wa.link/ky2fe8">Me interesa</a>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}