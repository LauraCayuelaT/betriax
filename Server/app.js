const express = require('express');
const port = 3001;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');



const app = express();
app.use(express.json());

app.name = 'API';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(cors())
 
let currentPrice = Math.floor(Math.random() * 10000) + 1

let myCoin = {
  name: "BeatCoin",
  current_price: currentPrice}


app.get('/api/coins', (req, res) => {
    const allCoins_setUp = [
        {name:"Bitcoin",
        market_cap: 529774305003,
        current_price: 27126.71,
        id: "bitcoin"
        },
        {name:"Ethereum",
        market_cap: 197930978295,
        current_price: 1646.15,
        id: "ethereum"
        },
        {name:"Theter",
        market_cap: 83009412279,
        current_price: 0.999799,
        id: "tether"
        },
        {name:"bnb",
        market_cap: 33371036181,
        current_price: 216.95,
        id: "binancecoin"
        }
    ]
  res.json(allCoins_setUp);
});

app.get("/api/myCoin", (req,res)=>{
  try {
    res.json({myCoin})
  } catch (error) { res.status(400).json({error:error.message})
    
  }
  

})

function updateCurrencyValue() {
  setInterval(() => {
    currentPrice = Math.floor(Math.random() * 10000) + 1;
    myCoin = {...myCoin, current_price: currentPrice};
  }, 120000); 
}

updateCurrencyValue();

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
