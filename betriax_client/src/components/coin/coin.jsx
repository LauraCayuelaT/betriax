import style from "./coin.module.css";
import { useHistory} from "react-router-dom";

const Coin = ({id,name, current_price, market_cap, key})=>{
        const history = useHistory();

        const formattedPrice = current_price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

        const mktFormattedPrice = market_cap.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        
        const handleOnClick = ()=>{
          history.push(`/detail/${id}`)
        }

    
        return (
          <div className={style.container}>
            <div className={style.overlay}>
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
                    
                    {/* <td><Link to={`/detail/${id}`}>{name}</Link></td> */}
                    <td>{name}</td>
                    <td>{formattedPrice}</td>
                    <td>{mktFormattedPrice}</td>
                  </tr>
                
              </tbody>
            </table>
            <button className={style.button} onClick={handleOnClick} >Detalle</button>
            </div>
          </div>
        );

}

export default Coin;