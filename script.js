const remained=document.querySelector(".remained")
const cup=document.querySelectorAll(".cup-small")
const liters=document.querySelector(".liters")
const percentage=document.querySelector(".percentage")
const arr=[]
cup.forEach(e => {
    arr.push(e)
})
cup.forEach(element => {
    element.addEventListener("click" , () => {
        let height=0;
        const id = arr.indexOf(element)
        height=height+37.5*(id+1)
        percentage.style.height=`${height}px`
        percentage.innerText=`${12.5*(id+1)}`
        cup.forEach((elem, i) => {
            if(i<=id){
                cup[i].classList.add("full")
                remained.style.display='flex'
            }else{
                remained.style.display='flex'
                cup[i].classList.remove("full")
            }if(id==7){
                // remained.style.display='none'
            }
        })
    })
})