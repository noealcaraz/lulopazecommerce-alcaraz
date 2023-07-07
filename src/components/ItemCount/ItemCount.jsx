import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock }) => {
    const [producto, setMacetas] = useState(1);
    const [productoStock, setMacetaStock] = useState(stock);

    const incrementarStock = () => {
        if (producto < productoStock) {
            setMacetas(producto + 1);
        }
    }

    const decrementarStock = () => {
        if (producto > 1) {
            setMacetas(producto - 1);
        }
    }
    

    useEffect(() => {
        setMacetaStock(stock);
    }, [stock]);

    console.log(producto)

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{stock}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                     <Link className="btn btn-primary" to={"../shop"}>Finalizar Compra</Link>
                </div>
            </div>
            
        </div>        
    )
}

export default ItemCount;