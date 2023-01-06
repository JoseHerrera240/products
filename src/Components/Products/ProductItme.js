import { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

export const ProductItem = ({
    key,  
    id,  
    title,
    price,
    image,
    category,
    cantidad
}) => {

    const value = useContext(DataContext);
    const addCar = value.addCar;


    if(id > 0 ){
        return (
            
            <div className="product" key={`${title}_${id}`}>
                <a href="/">
                    <img src={image} alt={title} width='300px' />
                </a>
                <div className="description-parent">
                    <h1>{title}</h1>
                    <div className="description">
                        <p>{category}</p>
                        <p className="price">${price}</p>
                    </div>
                </div>
                <div className="button">
                    <button onClick={() => addCar(id)} className="btn">
                        Añadir al carrito
                    </button>
                    <button className="btn">
                        vista
                    </button>
                </div>
            </div>
        );
    }
}