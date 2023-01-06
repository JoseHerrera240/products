import React from "react";
import {Route, Routes} from 'react-router-dom'
import { Inicio } from "./inicio";
import { Products } from "./Products";


export const Pages = () =>{
    return(
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </section>
    );
}