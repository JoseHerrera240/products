import { createContext, useEffect, useState } from "react";
import Data from  './Data'


export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProduct] = useState([]);
    const [car, setCar] =useState([]);
    console.log('car ',car)

    useEffect(()=>{
        const product = Data;
        if(product){
            setProduct(product);
        }else{
            setProduct([]);
        }
    },[])

    const addCar = (id) =>{
        const check = car.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = (Object.values(products).filter(product =>{
                console.log('car ----',product)
                return product.id
            }))
            setCar(prevCar => [...prevCar, ...data]);
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    const value = {
        products: [products],
        addCar: addCar,
        car: [car]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}