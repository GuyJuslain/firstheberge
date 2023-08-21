const nav = document.querySelector("nav");
console.log(nav);

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){   // lorsqu'on scroll, apres 120px la barre de navigation initalement cachée apparait en top de la page
        nav.style.top = "0px";
    }else{  
        nav.style.top = "-350px";   // sinon on la cache de nouveau
    }
});

nav.addEventListener("mouseenter", ()=> {
    nav.style.background = "rgba(0,0,0,0.6)";
})
