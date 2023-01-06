import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import { ProductItem } from './ProductItme'


export const Products = () => {

    const value = useContext(DataContext);
    const [products] = value.products;
    const productsItems = Object.entries(products);
    const productsEntries = productsItems.length > 0 ? productsItems[1][1]:null;
    return (
        <div className="parent-products">
            <h1 className="title">Products</h1>
            <div className="products">
                {   
                    productsEntries !== null &&
                    Object.keys(productsEntries).map(key => {
                        return (
                            <ProductItem
                                key={productsEntries[key].title}
                                id={productsEntries[key].id}
                                title={productsEntries[key].title}
                                price={productsEntries[key].price}
                                image={productsEntries[key].image}
                                category={productsEntries[key].category}
                                cantidad={productsEntries[key].cantidad}
                            />
                        );
                    })

                }
            </div>
        </div>
    );
}
