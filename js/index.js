
document.addEventListener("touchmove",()=>{
    const navBar = document.querySelector("#navBar")

    if (navBar && navBar.contains(event.target)) {
        event.preventDefault(); 
    }
}, { passive: false }); 


const toogler = document.querySelector("#toogler")


const temaStorage = localStorage.getItem("tema")
console.log(temaStorage)


if (temaStorage=="dark"){

    const currentPath = window.location.pathname;


    document.body.classList.replace("light","dark")
    document.body.style.background="#1C1C1C"

    const header = document.querySelector(".navbar")
    header.style.background="#1C1C1C"
    header.style.boxShadow="0px 0px 15px white"

    const active = document.querySelector(".tema-click")
    active.style.transition = "none";
    active.classList.add("tema-active")
    

    // INDEX
    
    if (currentPath == "/index.html"){

        const carousel = document.querySelector(".carousel")
    carousel.style.background = "#1C1C1C"
    carousel.style.boxShadow = "0px 0px 20px white"
    const carouselTam = carousel.querySelectorAll(".carrouselTam")
    carouselTam.forEach((element)=>{
        element.style.background="#1C1C1C"
    })

    const footer = document.querySelector("footer")
    const span = footer.querySelector("span")
    span.classList.replace("text-dark","text-light")

    const p = footer.querySelector("p")
    p.style.color = "white"

    }

    // CARDS
    if (currentPath == "/html/ofertas.html" || currentPath == "/html/hombres.html" || currentPath == "/html/mujeres.html"){

        const cards = document.querySelectorAll(".card")
        cards.forEach((element)=>{
            element.style.background="#1C1C1C"
            element.style.boxShadow="0px 0px 10px white"
            element.style.color = "white"
        })


    }
    
    // CONTACTO
    if (currentPath == "/html/contacto.html"){

        const formulario = document.querySelector(".contenedorFomulario")
        formulario.style.boxShadow = "-2px -2px 8px white,-2px 2px 8px white"

        const preguntas = document.querySelectorAll(".pregunta")
        preguntas.forEach((element)=>{
            element.style.color="white"
        })
        const respuestas = document.querySelectorAll(".respuesta")
        respuestas.forEach((element)=>{
            element.style.color="white"
        })

        const inputs = document.querySelectorAll("input")
        inputs.forEach((element)=>{
            element.style.background="#1C1C1C"
            
            element.addEventListener("click",()=>{
                if (element.contains(event.target)==true){
                    element.style.background="linear-gradient(to top, #F7D8E2, #1C1C1C)"


                }

            
            })

            document.addEventListener("click",()=>{

                if (document.contains(event.target)&&!element.contains(event.target)){
                    element.style.background="#1C1C1C"

                }

            })


            
        })
        

        const textoArea = document.querySelector("textarea")
        textoArea.style.background="#1C1C1C"
        textoArea.style.color="white"
        textoArea.addEventListener("click",()=>{

            if (textoArea.contains(event.target)==true){
                textoArea.style.background="linear-gradient(to top, #F7D8E2, #1C1C1C)"


            }


        })

        document.addEventListener("click",()=>{

            if (document.contains(event.target)&&!textoArea.contains(event.target)){
                textoArea.style.background="#1C1C1C"

            }

        })
        
       
    }
    
}

else {

    const currentPath = window.location.pathname;

    document.body.classList.replace("dark","light")
        document.body.style.background="white"

        const header = document.querySelector(".navbar")
        header.style.background="white"
        header.style.boxShadow="0px 0px 15px black"


        const active = document.querySelector(".tema-click")
        active.classList.remove("tema-active")

        if (currentPath == "/index.html"){

            const carousel = document.querySelector(".carousel")
            carousel.style.background = "white"
            carousel.style.boxShadow = "0px 0px 20px black"
            const carouselTam = carousel.querySelectorAll(".carrouselTam")
            carouselTam.forEach((element)=>{
                element.style.background="white"
            })
    
            const footer = document.querySelector("footer")
            const span = footer.querySelector("span")
            span.classList.replace("text-light","text-dark")
    
            const p = footer.querySelector("p")
            p.style.color = "black"


        }

         // CARDS
         if (currentPath == "/html/ofertas.html" || currentPath == "/html/hombres.html" || currentPath == "/html/mujeres.html"){

            const cards = document.querySelectorAll(".card")
            cards.forEach((element)=>{
                element.style.background="white"
                element.style.boxShadow="0px 0px 10px black"
                element.style.color = "black"
            })


        }

 
      // CONTACTO
      if (currentPath == "/html/contacto.html"){

          
        const formulario = document.querySelector(".contenedorFomulario")
        formulario.style.boxShadow = "2px 2px 8px black,-2px -2px 8px black"

        const preguntas = document.querySelectorAll(".pregunta")
        preguntas.forEach((element)=>{
            element.style.color="black"
        })
        const respuestas = document.querySelectorAll(".respuesta")
        respuestas.forEach((element)=>{
            element.style.color="black"
        })

        const inputs = document.querySelectorAll("input")
        inputs.forEach((element)=>{

            element.style.background="white"

            element.addEventListener("click",()=>{
                if (element.contains(event.target)==true){
                    element.style.background="linear-gradient(to top, #F7D8E2, white)"


                }

            
            })

            document.addEventListener("click",()=>{

                if (document.contains(event.target)&&!element.contains(event.target)){
                    element.style.background="white"

                }

            })


            
        })
        

        const textoArea = document.querySelector("textarea")
        textoArea.style.background="white"
        textoArea.style.color="black"
        textoArea.addEventListener("click",()=>{

            if (textoArea.contains(event.target)==true){
                textoArea.style.background="linear-gradient(to top, #F7D8E2, white)"


            }
    

        })
        document.addEventListener("click",()=>{

            if (document.contains(event.target)&&!textoArea.contains(event.target)){
                textoArea.style.background="white"

            }

        })
        
       
    }
    

}




toogler.addEventListener("click",()=>{

    const tema = document.querySelector(".light")

    const currentPath = window.location.pathname;

    if(tema){


        localStorage.setItem("tema","dark");
 


        document.body.classList.replace("light","dark")
        document.body.style.background="#1C1C1C"

        const header = document.querySelector(".navbar")
        header.style.background="#1C1C1C"
        header.style.boxShadow="0px 0px 15px white"

        const active = document.querySelector(".tema-click")
        active.classList.add("tema-active")

        // INDEX
        
        if (currentPath == "/index.html"){

            const carousel = document.querySelector(".carousel")
        carousel.style.background = "#1C1C1C"
        carousel.style.boxShadow = "0px 0px 20px white"
        const carouselTam = carousel.querySelectorAll(".carrouselTam")
        carouselTam.forEach((element)=>{
            element.style.background="#1C1C1C"
        })

        const footer = document.querySelector("footer")
        const span = footer.querySelector("span")
        span.classList.replace("text-dark","text-light")

        const p = footer.querySelector("p")
        p.style.color = "white"

        }

        // CARDS
        if (currentPath == "/html/ofertas.html" || currentPath == "/html/hombres.html" || currentPath == "/html/mujeres.html"){

            const cards = document.querySelectorAll(".card")
            cards.forEach((element)=>{
                element.style.background="#1C1C1C"
                element.style.boxShadow="0px 0px 10px white"
                element.style.color = "white"
            })


        }
        
        // CONTACTO
        if (currentPath == "/html/contacto.html"){

            const formulario = document.querySelector(".contenedorFomulario")
            formulario.style.boxShadow = "-2px -2px 8px white,-2px 2px 8px white"

            const preguntas = document.querySelectorAll(".pregunta")
            preguntas.forEach((element)=>{
                element.style.color="white"
            })
            const respuestas = document.querySelectorAll(".respuesta")
            respuestas.forEach((element)=>{
                element.style.color="white"
            })

            const inputs = document.querySelectorAll("input")
            inputs.forEach((element)=>{
                element.style.background="#1C1C1C"
                
                element.addEventListener("click",()=>{
                    if (element.contains(event.target)==true){
                        element.style.background="linear-gradient(to top, #F7D8E2, #1C1C1C)"


                    }

                
                })

                document.addEventListener("click",()=>{

                    if (document.contains(event.target)&&!element.contains(event.target)){
                        element.style.background="#1C1C1C"
    
                    }
    
                })


                
            })
            

            const textoArea = document.querySelector("textarea")
            textoArea.style.background="#1C1C1C"
            textoArea.style.color="white"
            textoArea.addEventListener("click",()=>{

                if (textoArea.contains(event.target)==true){
                    textoArea.style.background="linear-gradient(to top, #F7D8E2, #1C1C1C)"
    
    
                }
    

            })

            document.addEventListener("click",()=>{
    
                if (document.contains(event.target)&&!textoArea.contains(event.target)){
                    textoArea.style.background="#1C1C1C"

                }

            })
            
           
        }

    

    }


    else {

        localStorage.setItem("tema","light");

        document.body.classList.replace("dark","light")
        document.body.style.background="white"

        const header = document.querySelector(".navbar")
        header.style.background="white"
        header.style.boxShadow="0px 0px 15px black"


        const active = document.querySelector(".tema-click")
        active.style.transition = "0.5s left";
        active.classList.remove("tema-active")

        if (currentPath == "/index.html"){

            const carousel = document.querySelector(".carousel")
            carousel.style.background = "white"
            carousel.style.boxShadow = "0px 0px 20px black"
            const carouselTam = carousel.querySelectorAll(".carrouselTam")
            carouselTam.forEach((element)=>{
                element.style.background="white"
            })
    
            const footer = document.querySelector("footer")
            const span = footer.querySelector("span")
            span.classList.replace("text-light","text-dark")
    
            const p = footer.querySelector("p")
            p.style.color = "black"


        }

         // CARDS
         if (currentPath == "/html/ofertas.html" || currentPath == "/html/hombres.html" || currentPath == "/html/mujeres.html"){

            const cards = document.querySelectorAll(".card")
            cards.forEach((element)=>{
                element.style.background="white"
                element.style.boxShadow="0px 0px 10px black"
                element.style.color = "black"
            })


        }

 
      // CONTACTO
      if (currentPath == "/html/contacto.html"){

          
        const formulario = document.querySelector(".contenedorFomulario")
        formulario.style.boxShadow = "2px 2px 8px black,-2px -2px 8px black"

        const preguntas = document.querySelectorAll(".pregunta")
        preguntas.forEach((element)=>{
            element.style.color="black"
        })
        const respuestas = document.querySelectorAll(".respuesta")
        respuestas.forEach((element)=>{
            element.style.color="black"
        })

        const inputs = document.querySelectorAll("input")
        inputs.forEach((element)=>{

            element.style.background="white"

            element.addEventListener("click",()=>{
                if (element.contains(event.target)==true){
                    element.style.background="linear-gradient(to top, #F7D8E2, white)"


                }

            
            })

            document.addEventListener("click",()=>{

                if (document.contains(event.target)&&!element.contains(event.target)){
                    element.style.background="white"

                }

            })


            
        })
        

        const textoArea = document.querySelector("textarea")
        textoArea.style.background="white"
        textoArea.style.color="black"
        textoArea.addEventListener("click",()=>{

            if (textoArea.contains(event.target)==true){
                textoArea.style.background="linear-gradient(to top, #F7D8E2, white)"


            }
    

        })
        document.addEventListener("click",()=>{

            if (document.contains(event.target)&&!textoArea.contains(event.target)){
                textoArea.style.background="white"

            }

        })
        
       
    }
        

    }

})