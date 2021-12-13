const circle = document.querySelector("#circle");

//!: if there is no hoover in the circle class
circle.addEventListener("mouseenter",() => {
    if(!circle.classList.contains("hover")){
        circle.classList.add("hover");
    }
});

circle.addEventListener("mouseleave",() => {
    if(circle.classList.contains("hover")) {
        circle.classList.remove("hover");
    }
})