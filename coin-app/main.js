import "./scss/style.scss"
//selector
const form = document.querySelector("header form")



// declaring submit event for form structure
form.addEventListener("submit",(e)=>{
  console.log(e.target);
  e.preventDefault() // prevent all submit actions
  e.target.reset() // eactive form clearing
  getCoinData()
})


const getCoinData = async () =>{
  const input = document.querySelector("header form input")
  const API_KEY = 'coinrankingaf5d04619b7d8af1a08b3ff829ad7f04f171d48bc4bd629a'
  const options = {headers: {'x-access-token': API_KEY,},};
  url ="https://api.coinranking.com/v2/coins?search=bitcoin"
  
  const res = await fetch()
  
}