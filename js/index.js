
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
        const active = document.querySelector(".tema-click")
        active.classList.add("tema-active")

    }


    else {

        document.body.classList.replace("light","dark")
        document.body.style.background="#ddd"
        const active = document.querySelector(".tema-click")
        active.classList.remove("tema-active")

    }

})