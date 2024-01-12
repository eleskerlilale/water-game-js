const remained=document.querySelector(".remained")
const cup=document.querySelectorAll(".cup-small")
const liters=document.querySelector("#liters")
const percentage=document.querySelector(".percentage")
const span=document.querySelector(".remained span")
const small=document.querySelector(".remained small")

const arr=[]
cup.forEach(e => {
    arr.push(e)
})
cup.forEach(element => {
    element.addEventListener("click" , () => {
        let height=0;
        const id = arr.indexOf(element)
        height=height+40*(id+1)
        percentage.style.height=`${height}px`
        percentage.innerText=`${12.5*(id+1)}%`
        liters.innerText=`${0.25*(id+1)} l`
        cup.forEach((elem, i) => {
            span.style.display='block'
            small.style.display='block'
            if(i<=id){
                cup[i].classList.add("full")
                remained.style.display='flex'
            }else{
                remained.style.display='flex'
                cup[i].classList.remove("full")
            }if(id==7){
                span.style.display='none'
                small.style.display='none'
            }
        })
    })
})