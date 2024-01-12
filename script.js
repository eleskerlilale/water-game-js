const cup=document.querySelectorAll(".cup")
const liters=document.querySelector(".liters")
const percentage=document.querySelector(".percentage")

const arr=[]
console.log(cup);

cup.forEach(element => {
    element.addEventListener("click" , () => {
        console.log(cup)
        element.classList.add("full")

    })
})