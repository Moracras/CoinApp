import { renderCoins } from "./renderData";
export const apiRequest = async (input)=>{
    
    // const API_KEY = 'coinrankingaf5d04619b7d8af1a08b3ff829ad7f04f171d48bc4bd629a'
    const options = {headers: {'x-access-token': import.meta.env.VITE_API_KEY,},};
  
    const url =`https://api.coinranking.com/v2/coins?search=${input}`
    try{
        const res = await fetch(url,options)
        const json = await res.json()
        if(json.data.coins.length === 0){
            alert("Coin cannot be found")
        }else {
            // console.log(json.data.coins[0]);
            renderCoins(json.data.coins[0])
        }
      }catch(error){
        console.log(error);
      } 
}

