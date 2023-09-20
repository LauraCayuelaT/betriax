import style from "./coin.module.css";
import { Link } from "react-router-dom";

const Coin = ({id,name, current_price, market_cap, key})=>{

        const formattedPrice = current_price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

        const mktFormattedPrice = market_cap.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
    
        return (
          <div className={style.container}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Moneda</th>
                  <th>Precio Actual</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr key={key}>
                    <Link to={`/detail/${id}`}>
                    <td>{name}</td>
                    </Link>
                    <td>{formattedPrice}</td>
                    <td>{mktFormattedPrice}</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        );

}

export default Coin;