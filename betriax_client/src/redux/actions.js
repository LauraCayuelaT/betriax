import axios from "axios";

export const GET_ALL_COINS = "GET_ALL_COINS";
export const GET_COIN_BY_NAME = "GET_COIN_BY_NAME";
export const ORIGINAL_ORDER = "ORIGINAL_ORDER";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_COIN_BY_ID = "GET_COIN_BY_ID";
export const DELETE_COIN="DELETE_COIN";
export const RESET_COINS ="RESET_COINS"



// export const getAllCoins = ()=>{

//     return async function (dispatch) {
//         const coins = await axios("http://localhost:3001/api/coins");
//         const allCoins = coins.data;
//         dispatch({type: GET_ALL_COINS, payload:allCoins})

//     }

// }

export const getAllCoins = ()=>{

    return async function (dispatch) {
        const coins = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=2h&locale=en");
        const allCoins = coins.data;
        dispatch({type: GET_ALL_COINS, payload:allCoins})

    }

}

export const getCoinByName = (name)=>{

    return function (dispatch) {
        dispatch({type: GET_COIN_BY_NAME, payload: name})
    }
}

export const originalOrder = ()=>{
    return function (dispatch){
        dispatch({type: ORIGINAL_ORDER})
    }
}

export const orderByPrice = (order)=>{
    return function (dispatch){
        dispatch({type: ORDER_BY_PRICE, payload: order})
    }
}

export const getCoinById = (id)=>{
    return async function (dispatch) {
         const coinSearch = await axios(`https://api.coingecko.com/api/v3/coins/${id}`);
         const coin = coinSearch.data;
         dispatch({type: GET_COIN_BY_ID, payload:coin})
        
    }
}

export const deleteCoin = ()=>{
    return function (dispatch){
        dispatch({type:DELETE_COIN})
    }
}

export const resetCoins = ()=>{
    return function (dispatch){
        dispatch({type:RESET_COINS})
    }
}



