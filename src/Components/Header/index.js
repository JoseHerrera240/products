import logo from '../../Assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../context/Dataprovider'

export const Header = ({activeCar, setActiveCar}) => {
    const value = useContext(DataContext);
    const [car] = value.car
    

    const handleShoppingCar = () =>{
        setActiveCar(!activeCar);
    }
    return (
        <header>
            <div className='menu'>
                <box-icon color='white' name="menu"></box-icon>
            </div>
            <div className="logo-products">
                <Link to="/">
                    <img src={logo} alt="logo" width="85px" />
                </Link>
                <ul>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            <div className='cart' onClick={handleShoppingCar}>
                <box-icon  name='cart' color='white'></box-icon>
                <span className='item__total'>{car.length}</span>
            </div>
        </header>
    )
}