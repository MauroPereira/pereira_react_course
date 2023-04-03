import './CartWidget.scss'
import iconCarrito from './changuito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return (
        <div className='cartwidget__container'>
            <img src={iconCarrito} alt='changuito'/>
            <div className='number__container'>
                <label className='numbercontainer__number'>{cart.length}</label>
            </div>
        </div>
    );
}