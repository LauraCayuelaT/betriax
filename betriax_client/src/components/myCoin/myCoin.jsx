import { useEffect, useState } from "react";
import axios from "axios";
import style from "./myCoin.module.css"


const MyCoin = ()=>{

    const [myCoin, setMyCoin] = useState({})

    useEffect(()=>{
        

        const getMyCoin = async ()=> {
           const result = await axios("http://localhost:3001/api/myCoin")
           setMyCoin(result.data.myCoin)
           
        } 

        getMyCoin();
       
        const intervalCoin = setInterval(getMyCoin, 120000);
        
        return () => clearInterval(intervalCoin);



    },[])

    const currentPrice = Number(myCoin.current_price)

    const formattedPrice = currentPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        <div className={style.container}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>MiMoneda</th>
                <th>Precio Actual</th>
              </tr>
            </thead>
            <tbody>
              
                
                <tr >
                  <td>{myCoin.name}</td>
                  <td>{formattedPrice}</td>
                  
                </tr>
              
            </tbody>
          </table>
        </div>
      );
}

export default MyCoin;