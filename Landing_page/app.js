const elem = document.querySelector(".menu")
const nav = document.querySelector(".navbar")
const close = document.querySelector(".close")
elem.addEventListener("click",()=>{
    nav.classList.add("active")
    console.log("hello");
})
close.addEventListener("click",()=>{
    nav.classList.remove("active")
    console.log("hello");x
})