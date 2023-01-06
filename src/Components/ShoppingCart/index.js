import { useEffect, useState } from "react";
import Card from '../../Assets/images/img03.jpg'


export const ShoppingCart = (props) => {
    let state = props.state
    const [active, setActive] = useState(true);

    useEffect(() => {
        setActive(!state)
    }, [state])


    const closeButton = () => {
        setActive(!active)
    }

    return (
        <div className={active ? "parent-cart" : "d-none"}>
            <div className="modal-cart" >
                <div onClick={closeButton} className="icon-close-modal">
                    <box-icon name='x'></box-icon>
                </div>
                <div className="content-cart">
                    <h1> Your  cart </h1>
                    <div className="shopping-center">
                        <div className="shopping-item">
                            <img src={Card} alt="" width="100%" height="145px" />
                            <div className="content-context-car">
                                <div>
                                    <h3>title</h3>
                                    <p>$345</p>
                                </div>

                                <div className="cantidad-content">
                                    <box-icon name="up-arrow" type='solid'></box-icon>
                                    <p className="cantidad">1</p>
                                    <box-icon name="down-arrow" type='solid'></box-icon>
                                </div>
                                <div className='trash-car'>
                                    <box-icon name='trash'></box-icon>
                                </div>
                            </div>
                        </div>
                        <div className="shopping-item">
                            <img src={Card} alt="" width="100%" height="145px" />
                            <div className="content-context-car">
                                <div>
                                    <h3>title</h3>
                                    <p>$345</p>
                                </div>

                                <div className="cantidad-content">
                                    <box-icon name="up-arrow" type='solid'></box-icon>
                                    <p className="cantidad">1</p>
                                    <box-icon name="down-arrow" type='solid'></box-icon>
                                </div>
                                <div className='trash-car'>
                                    <box-icon name='trash'></box-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="total-content">
                            <div className="text-total">
                                <p>Total: </p>
                                <p> $2334</p>
                            </div>
                        <button className="btn-payment">Payment</button>
                        </div>
                </div>
            </div>
        </div>
    );
}