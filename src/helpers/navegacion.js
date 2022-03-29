export const scrollItemMenu = ( evento ) => {
    
        const element = evento.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;
        console.log(to);

        window.scroll({
            top: to -70,
            behavior: "smooth"
        });
}