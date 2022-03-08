let switchInput=document.querySelector(".form-check-input")
let container=document.querySelector(".container")
let card=document.getElementsByClassName("card")
console.log(card);
switchInput.addEventListener("change",(e)=>{
if(e.target.checked){
    container.removeAttribute("class")
    container.setAttribute("class","bg-dark text-white")
    card.forEach((p)=>{
        p. hasAttribute("class","bg-dark text-white")
    })
   
}else{


   container.setAttribute("class", "container-fluid bg-secondary bg-opacity-10 ")}
})