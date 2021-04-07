const TeleBot = require('telebot');
const bot = new TeleBot('1492962512:AAGX7G1JPt6ZiKLNtfoldF2MVditgERja1U');//change
axios=require('axios');
const CoinGecko = require('coingecko-api');
const cg = new CoinGecko();

async function main(){
    const secret=await cg.simple.price({
ids: ['secret'],
vs_currencies: ['usd'],
});
const dollars=secret.data.secret.usd;
const dollars2=dollars.toFixed(2);
async function fats(){
    const response=await axios ({
      url: "https://fats-api.herokuapp.com/",
      method: "GET"
  })
  return response;
  }
  const fatscrt=fats();
  var dollars3=0;
  Promise.resolve(fatscrt);
  fatscrt.then(result=>(result.data))
  .then(fatscrt=>fatscrt.toFixed(3))
  .then(fta=> dollars3=(dollars2*fta).toFixed(2), bot.on(['/text', '/fats'], (msg) => msg.reply.text(fta+" "+dollars3)))
} 

bot.start(main());
