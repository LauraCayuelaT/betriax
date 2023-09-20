import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCoinByName, getAllCoins, originalOrder, orderByPrice } from "../../redux/actions";
import style from "./NavBar.module.css"

const NavBar = ({setPage})=>{

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setName(e.target.value);
    }

    const onSearch = (input)=>{
        try{
            dispatch(getCoinByName(input))
            setName("")
            setPage(1)
        }
        catch(err){window.alert("No hay monedas con ese nombre")}
    }

    const reset = ()=>{
        dispatch(getAllCoins())
    }

    const handleChangePrice = (e)=>{
        const {value} = e.target;
        if(value==="Original Order"){
            dispatch(originalOrder())
            setPage(1)
        }
        else {
            dispatch(orderByPrice(value))
            setPage(1)
        }
    }

    return (
        <>
        <input type="search"
                value = {name}
                onChange = {handleChange}
                className={style.input}
        />
        <button onClick={()=>onSearch(name)} className={style.button}>Buscar</button>
        <button onClick={()=>reset()} className={style.button}>Volver</button>
        <br />

        <select onChange={handleChangePrice} className={style.select}>
            <option value="Original Order">Ordenar por Precio</option>
            <option value="S to L">Menor a Mayor</option>
            <option value="L to S">Mayor a Menor</option>
        </select>

        
        </>  
    )

}

export default NavBar;