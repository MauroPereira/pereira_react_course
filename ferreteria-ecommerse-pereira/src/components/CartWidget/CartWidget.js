import './CartWidget.scss'
import iconCarrito from './changuito.png'

export const CartWidget = () => {
    return (
        <div className='cartwidget__container'>
            <img src={iconCarrito} alt='changuito'/>
        </div>
    );
}