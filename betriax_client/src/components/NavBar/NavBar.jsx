import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCoinByName, getAllCoins, originalOrder, orderByPrice } from "../../redux/actions";

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
        />
        <button onClick={()=>onSearch(name)}>Buscar</button>
        <button onClick={()=>reset()}>Volver</button>

        <select onChange={handleChangePrice}>
            <option value="Original Order">Ordenar por Precio</option>
            <option value="S to L">Menor a Mayor</option>
            <option value="L to S">Mayor a Menor</option>
        </select>

        
        </>  
    )

}

export default NavBar;