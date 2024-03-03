
document.addEventListener("touchmove",()=>{
    const navBar = document.querySelector("#navBar")

    if (navBar && navBar.contains(event.target)) {
        event.preventDefault(); // Prevenir el desplazamiento táctil dentro del menú desplegable
    }
}, { passive: false }); 