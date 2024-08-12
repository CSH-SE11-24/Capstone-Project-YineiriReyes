console.log("run")


let button=document.querySelector("#idk")
console.log(button)

let body=document.querySelector("body")

button.addEventListener("mouseover",function(event){
  body.style.backgroundColor="red"
   })

button.addEventListener("mouseout",function(event){
  body.style.backgroundColor="white"
  })


let yineiri=document.querySelector("#yineiri")
console.log(yineiri)

let tag=document.querySelector("#text")
console.log(tag)

yineiri.addEventListener("click",function(event){
  tag.textContent="."
})