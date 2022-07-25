import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Proyectos = () => {


    return (
        <article className="mt-10 container" id="portafolio">
            <h2 className="text-center mb-4">Proyectos</h2>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/king-clean.webp" 
                        alt="Proyecto Web King Clean"
                        title="Sitio Web King Clean" 
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/king-clean/"
                        alt="Enlace a sitio web de King Clean"
                        target="_blank">
                            Ir a Sitio Web King Clean
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/proyecto-wego.webp" 
                        alt="Proyecto Web WeGo"
                        title="Sitio Web WeGo" 
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/wego/"
                        alt="Enlace a sitio web de WeGo"
                        target="_blank">
                            Ir a Sitio Web WeGo
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/Proyecto-Replica-D-Cuero-Shoes.webp" 
                        alt="Replica D'Cuero Shoes"
                        title="Replica D'Cuero Shoes" 
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/Proyecto-Replica-D-Cuero-Shoes/"
                        alt="Enlace a sitio web de Replica D'Cuero Shoes"
                        target="_blank">
                            Ir a Replica D'Cuero Shoes
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/Proyecto-Replica-D-Prati.webp"
                        alt="Replica D'Prati"
                        title="Replica D'Prati"    
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/Proyecto-Replica-D-Prati/" 
                        alt="Enlace a sitio web de Replica D'Prati"
                        target="_blank">
                            Ir a Replica D'Prati
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/Journal-App.webp" 
                        alt="Journal App"
                        title="Journal App" 
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/Journal-App/"
                        alt="Enlace a sitio web de Journal App"
                        target="_blank">
                            No Adaptable
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/img-min.webp"
                        alt="Lista de tareas"
                        title="Lista de tareas"    
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/lista-tareas-app-react/" 
                        alt="Enlace a sitio web de lista de tareas"
                        target="_blank">
                            Lista de Tareas App
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/react-gifexpertapp.webp"
                        alt="Buscador de Gif"
                        title="Buscador de Gif"    
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/react-gifexpertapp/" 
                        alt="Enlace a sitio web de Buscador de Gif"
                        target="_blank">
                            ir a Buscador de Gif
                    </a>
                </SwiperSlide>
                <SwiperSlide className="proyectos__swiper">
                    <img 
                        src="./assets/img/peter-aspiazu.webp"
                        alt="Web Peter Aspiazu"
                        title="Web Peter Aspiazu"    
                    />
                    <a 
                        href="https://peter-aspiazu-s.github.io/desarrollo-web/" 
                        alt="Enlace a sitio web de Buscador de Gif"
                        target="_blank">
                            ir a Web Peter Aspiazu
                    </a>
                </SwiperSlide>
            </Swiper>
        </article>
    )
}