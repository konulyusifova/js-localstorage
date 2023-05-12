const button= document.getElementsByClassName("btn");
const usernameInput = document.getElementById("name");
const password=document.getElementById("pass")



button[0].addEventListener("click",()=>{
    
let usernameVal = usernameInput.value
let passVal = password.value

let list= {
    name: usernameVal,
    password: passVal
}
        localStorage.setItem("list",JSON.stringify(list))
})