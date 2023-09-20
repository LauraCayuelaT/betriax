import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import { getCoinById, deleteCoin } from "../../redux/actions";
import style from "./detail.module.css"


const Detail = ()=>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const coin = useSelector(state=>state.coin);
    const [loading, setLoading] = useState(false)


    useEffect(()=>{

        setLoading(true);
        dispatch(getCoinById(id))
        .then(()=>{setLoading(false)})
        .catch((error) => {
            console.error("Error al cargar los datos:", error);
            setLoading(false); 
          });

        return ()=>dispatch(deleteCoin());
        

    },[id,dispatch])

    const coinDetail = coin.description && coin.description.en ? coin.description.en : "No hay descripción"

    

    return(
        <div className={style.fullContainer}>
        <h1 className={style.title}>CriptoCoins</h1>

        {loading ?
        <div className={style.loadingIndicator}>
            <p></p>
        </div>
         :
        ( <>

        
        <div    className={style.container}>
        

        <Link to="/" className={style.button}><button className={style.customButton}>Volver</button></Link>
        
        
        <h1 className={style.name}>{coin.name}</h1>
        <h2 className={style.h2}>{coin.symbol}</h2>
        <h2 className={style.h2}>Descripción: </h2>
        <p className={style.p}>{coinDetail}</p>
       
        </div> 
        </>) }

        </div>
    )

}

export default Detail