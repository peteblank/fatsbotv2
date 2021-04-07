const TeleBot = require('telebot');
const bot = new TeleBot('1492962512:AAGX7G1JPt6ZiKLNtfoldF2MVditgERja1U');//change
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const CoinGecko = require('coingecko-api');
const axios=require('axios');
const {Client}=require('pg');

async function  fatscrt(){
    const cg = new CoinGecko();
          
    const secret=await cg.simple.price({
ids: ['secret'],
vs_currencies: ['usd'],
});


const client2 = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
client2.connect();
var d = new Date().toISOString().replace(/T/, " ");
var e= d.substr(0, 19);
console.log(e);


const dollars=secret.data.secret.usd;
const dollars2=dollars.toFixed(2);
async function fats(){
    const response=await axios ({
      url: "https://fats-api.herokuapp.com/",
      method: "GET"
  })
  return response;
  }
  var dollars3=0;
  const fatscrt=fats();
  Promise.resolve(fatscrt);
  fatscrt.then(result=>(result.data))
  .then(fatscrt=>fatscrt.toFixed(3))
  .then(fta=>{ dollars3=(dollars2*fta).toFixed(2),
  bot.on(['/text', '/fats'], (msg) => msg.reply.text(fta+" "+dollars3),
  client2.query(
    `INSERT INTO price(created_on,sscrt, dollars)VALUES('${e}','${fta}','${dollars3}')`,
    (err, res) => {
      console.log(err, res);
      client2.end();
    }
  ),
        console.log('sent'),
  )}), 
      



      bot.on(['/luigi'], (msg) => msg.reply.text("@luigi1111 come do math"));

}





bot.start(fatscrt());
