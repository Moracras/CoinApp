const API_KEY = 'coinrankingaf5d04619b7d8af1a08b3ff829ad7f04f171d48bc4bd629a'
const getCoins = async () =>{
    const options = {
        headers: {
          'x-access-token': 'coinrankingaf5d04619b7d8af1a08b3ff829ad7f04f171d48bc4bd629a',
        },
      };
      
      let data = await fetch('https://api.coinranking.com/v2/coins', options)
      let res = await data.json()
      console.log(res.data.coins);
      return res.data.coins
}


const getCoinName = (res) =>{
  return res.map((coin) => {
    return coin.name
})}

getCoins()
.then((res)=>console.log(getFilter(res)))

const getFilter = (res) =>{
  return res.filter((coin)=>{
    return coin.name.includes("Bit")
  })

}

// const searchCrypto = (search) =>{
//   const options = {
//     headers: {
//       'x-access-token': 'your-api-key',
//     },
//   };
  
//   fetch(`https://api.coinranking.com/v2/search-suggestions?query=${search}s`, options)
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// }
