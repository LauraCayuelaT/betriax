import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import { getCoinById, deleteCoin } from "../../redux/actions";


const Detail = ()=>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const coin = useSelector(state=>state.coin)

    useEffect(()=>{
        dispatch(getCoinById(id));

        return ()=>dispatch(deleteCoin());
        

    },[id,dispatch])

    const coinDetail = coin.description && coin.description.en ? coin.description.en : "No hay descripción"

    

    return(
        <>
        <Link to="/"><button>Volver</button></Link>
        
        
        <h1>Nombre: {coin.name}</h1>
        <h2>Simbolo: {coin.symbol}</h2>
        <h2>Descripción: </h2>
        <p>{coinDetail}</p> 
       
        
        </>
    )

}

export default Detail