
document.addEventListener("touchmove",()=>{
    const navBar = document.querySelector("#navBar")

    if (navBar && navBar.contains(event.target)) {
        event.preventDefault(); 
    }
}, { passive: false }); 



const toogler = document.querySelector("#toogler")

toogler.addEventListener("click",()=>{

    const tema = document.querySelector(".dark")

    if(tema){

        
        document.body.classList.replace("dark","light")
        document.body.style.background="black"

        const header = document.querySelector(".navbar")
        header.style.background="black"
        header.style.boxShadow="0px 0px 15px white"

        const active = document.querySelector(".tema-click")
        active.classList.add("tema-active")

        const carousel = document.querySelector(".carousel")
        carousel.style.background = "black"
        carousel.style.boxShadow = "0px 0px 20px white"
        const carouselTam = carousel.querySelectorAll(".carrouselTam")
        carouselTam.forEach((element)=>{
            element.style.background="black"
        })

    }


    else {

        document.body.classList.replace("light","dark")
        document.body.style.background="white"

        const header = document.querySelector(".navbar")
        header.style.background="white"
        header.style.boxShadow="0px 0px 15px black"


        const active = document.querySelector(".tema-click")
        active.classList.remove("tema-active")

        const carousel = document.querySelector(".carousel")
        carousel.style.background = "white"
        carousel.style.boxShadow = "0px 0px 20px black"
        const carouselTam = carousel.querySelectorAll(".carrouselTam")
        carouselTam.forEach((element)=>{
            element.style.background="white"
        })
        

    }

})