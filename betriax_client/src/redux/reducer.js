import { GET_ALL_COINS, GET_COIN_BY_NAME, ORIGINAL_ORDER, ORDER_BY_PRICE,GET_COIN_BY_ID,DELETE_COIN } from "./actions";

const initialState ={
    coins: [],
    actualCoins: [],
    actualOrder: "",
    coin: {}
}

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case GET_ALL_COINS:
            return {...state, coins:action.payload, actualCoins: action.payload}
        case GET_COIN_BY_NAME:
            const nameSearched = action.payload.toLowerCase()
            const coinFiltered = state.actualCoins.filter(coin=>coin.name.toLowerCase().includes(nameSearched))
            return {...state, coins:coinFiltered }
        case ORIGINAL_ORDER:
            return {...state, coins: state.actualCoins}
        case ORDER_BY_PRICE:
            const orderCoins = action.payload==="S to L" ? 
            [...state.coins].sort((a,b)=>a.current_price-b.current_price):
            [...state.coins].sort((a,b)=>b.current_price-a.current_price)
            return {...state, coins: orderCoins}
        case GET_COIN_BY_ID:
            return {...state, coin:action.payload}
        case DELETE_COIN:
            return {...state, coin: {}}
        default:
            return {...state}
    }


}


export default reducer;
