getCoins = () =>{
    const options = {
        headers: {
          'x-access-token': 'coinrankingaf5d04619b7d8af1a08b3ff829ad7f04f171d48bc4bd629a',
        },
      };
      
      fetch('https://api.coinranking.com/v2/coins', options)
        .then((response) => response.json())
        .then((result) => console.log(result));
}