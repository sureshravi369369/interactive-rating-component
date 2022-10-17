const mainContainer=document.querySelector(".container")
const thankContainer=document.querySelector(".thank-you")

const submitButton=document.getElementById("submit")
const rateAgain=document.getElementById("rate-again")

const rating=document.getElementById("rating") 
const rates=document.querySelectorAll(".btn-list")



submitButton.addEventListener("click",()=>{
    thankContainer.classList.remove("hidden")
    mainContainer.style.display="none"
})


rateAgain.addEventListener("click",()=>{
    thankContainer.classList.add("hidden")
    mainContainer.style.display="block"
})

rates.forEach((rate)=>{
   rate.addEventListener("click",()=>{
    rating.innerHTML=rate.innerHTML
   })
})