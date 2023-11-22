import "./scss/style.scss"
import { apiRequest } from "./src/apiRequest";
//selector
const form = document.querySelector("header form")

// declaring submit event for form structure
form.addEventListener("submit",(e)=>{
  console.log(e.target);
  e.preventDefault() // prevent all submit actions
  getCoinData()
  e.target.reset() // eactive form clearing
  
})

const getCoinData = () =>{
  const input = document.querySelector("header form input").value

  if (!input.trim()){
    alert("input can not be empty")
  }else{
    apiRequest(input)
  }

}