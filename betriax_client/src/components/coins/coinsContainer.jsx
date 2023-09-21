import Coin from "../coin/coin"
import style from "./coinsContainer.module.css"
import MyCoin from "../myCoin/myCoin";
import { useSelector} from "react-redux";
import { useState } from "react";


const CoinsContainer =(props)=>{

    const {coins, page} = props;
    const name = useSelector(state=>state.search)
    const [showMyCoin, setShowMyCoin] = useState(false);

    const toggleMyCoin = () => {
        setShowMyCoin(!showMyCoin);
    };
    

    return (
        <div className={style.container}>

             <button onClick={toggleMyCoin} className = {style.button}>
             {showMyCoin ? "Ocultar Mi Moneda" : "Mostrar Mi Moneda"}
            </button>
            
            { showMyCoin && page === 1 && !name &&
            <div className={style.myCoin}>
            <MyCoin />
            </div> }
            <div className={style.CoinsContainer}> 
            { !coins.length ? <h1 className={style.h1}>No hay monedas con ese nombre!</h1> :
            coins?.map(coin =>{
                return <Coin key={coin.name} 
                                name = {coin.name} 
                                current_price={coin.current_price} 
                                market_cap={coin.market_cap}
                                id={coin.id}/>
            })

            
            }
        </div>
        </div>

    )

}

export default CoinsContainer;