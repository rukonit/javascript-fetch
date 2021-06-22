fetch('https://api.cryptonator.com/api/ticker/btc-usd').then(res => {console.log('Waiting to parse');
return res.json();}).then((response)=>{
    console.log(response.ticker);
})
.catch((e)=>{
    console.log(e);
})
