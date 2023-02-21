import './CartWidget.scss'
import iconCarrito from './changuito.png'

export const CartWidget = () => {
    return (
        <div className='cartwidget__container'>
            <img src={iconCarrito} alt='changuito'/>
            <div className='number__container'>
                <label className='numbercontainer__number'>0</label>
            </div>
        </div>
    );
}