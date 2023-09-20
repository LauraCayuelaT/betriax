import CoinsContainer from "../../components/coins/coinsContainer";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { getAllCoins } from "../../redux/actions";
import Paginado from "./paginado";
import style from "./home.module.css"




const Home =()=>{

    const dispatch = useDispatch();
    const allCoins = useSelector(state=>state.coins);


    const [page, setPage] = useState(1);
    const [perPage] = useState(10);

    const startIndex = (page -1)*perPage;
    const endIndex = startIndex + perPage;
    const max = Math.ceil(allCoins?.length/ perPage);
    const coins = allCoins?.slice(startIndex,endIndex);


    useEffect(()=>{

        const fetchDataAndRefresh = () => {
           dispatch(getAllCoins());}
        
        fetchDataAndRefresh();
            
        const intervalId = setInterval(fetchDataAndRefresh, 120000);
        
        return () => clearInterval(intervalId);
       
    },[dispatch])

    return <div className = {style.container}>
        <div className={style.fondo}>
        </div>
            <h1 className={style.title}>CriptoCoins</h1>
            <div>
            <NavBar setPage = {setPage}/>   
            </div>
            <footer>
            <Paginado page={page} setPage = {setPage} max= {max}/>
        </footer>

       
            
            <CoinsContainer coins = {coins}/>
    </div>
}


export default Home;