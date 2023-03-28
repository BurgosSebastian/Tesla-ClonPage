const publi = document.querySelectorAll(".cont-img")

const showtext = (entradas,observador) =>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add("activo")
        } else {
            entrada.target.classList.remove("activo")
        }
    })
}

const observador = new IntersectionObserver(showtext,{
    root: null,
    rootMargin: "0px",
    threshold: 0.8
});

publi.forEach((ele)=> observador.observe(ele))
