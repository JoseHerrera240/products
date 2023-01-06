import React from "react";
import { Link } from "react-router-dom";
import Portada from '../../Assets/images/banner-nike-scaled.jpg';

export const Inicio = () =>{
    return(
        <div className="home">
            <Link to='/'>
                <h1 className="title">Home</h1>
            </Link>
            <Link to='/Products'>
                <h1 className="title">Products</h1>
            </Link>
            <img src={Portada} alt='portada'/>
        </div>
    )
}