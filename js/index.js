
document.addEventListener("touchmove",()=>{
    const navBar = document.querySelector("#navBar")

    if (navBar && navBar.contains(event.target)) {
        event.preventDefault(); 
    }
}, { passive: false }); 



const toogler = document.querySelector("#toogler")

toogler.addEventListener("click",()=>{

    const tema = document.querySelector(".light")

    const currentPath = window.location.pathname;

    if(tema){

 


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
        

    

    }


    else {

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
      
        

    }

})