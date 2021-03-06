export const Yo = () => {


    return (
        <article className="mt-10 mb-5 container text-center" id="yo">
            <h3 className="yo__h3">¿Quien Soy?</h3>
            <div className="yo__div">
                <img 
                    src="./assets/img/yo.webp" 
                    alt="Foto de Peter Aspiazu"
                    title="Foto de mi perfil"
                    className="yo__img mt-5" />
                <div className="yo__div-div">
                    <h2>Peter Aspiazu, soy desarrollador web front-end</h2>
                    <aside className="yo__aside mt-8">
                        <h4>Estas son las habilidades de desarrollo que he adquirido hasta ahora</h4>
                        <div className="yo__aside-div">
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-html5"></i>
                                <p>HTML5</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-css3-alt"></i>
                                <p>CSS3</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-js"></i>
                                <p>JAVASCRIPT</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-bootstrap"></i>
                                <p>BOOTSTRAP</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-sass"></i>
                                <p>SASS</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-react"></i>
                                <p>REACT</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-solid fa-fire"></i>
                                <p>FIREBASE</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i class="fa-solid fa-database"></i>
                                <p>POSTGRESQL</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i className="fa-brands fa-react"></i>
                                <p>REDUX</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i class="fa-solid fa-leaf"></i>
                                <p>MONGODB</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i class="fa-brands fa-node-js"></i>
                                <p>NODEJS</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i class="fa-brands fa-etsy"></i>
                                <p>EXPRESS</p>
                            </div>
                            <div className="yo__aside-div-div">
                                <i class="fa-brands fa-ets">jwt</i>
                                <p>JWT</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    )
}