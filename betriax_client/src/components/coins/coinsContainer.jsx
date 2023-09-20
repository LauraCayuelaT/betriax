import Coin from "../coin/coin"
import style from "./coinsContainer.module.css"
import MyCoin from "../myCoin/myCoin";


const CoinsContainer =(props)=>{

    const {coins} = props;

    

    return (
        <div className={style.container}>
            <div className={style.myCoin}>
            <MyCoin />
            </div>
            <div className={style.CoinsContainer}> 
            {
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