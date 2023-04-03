import './CartWidget.scss'
import iconCarrito from './changuito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
 
const productsQuantity = (cart) => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
}

export const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return (
        <div className='cartwidget__container'>
            <img src={iconCarrito} alt='changuito'/>
            <div className='number__container'>
                <label className='numbercontainer__number'>{productsQuantity(cart)}</label>
            </div>
        </div>
    );
}