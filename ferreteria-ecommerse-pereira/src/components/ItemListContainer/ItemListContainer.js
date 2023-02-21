import './ItemListContainer.scss'

export const ItemListContainer = () => {
    return (
        <div className="itemlist__container">
            <h2 className="itemlist__title">Gran oferta en:</h2>
            <hr/>
            <ul>
                <li className='itemlist_item'>Clavos</li>
                <li className='itemlist_item'>Tuercas</li>
                <li className='itemlist_item'>Tornillos</li>
                <li className='itemlist_item'>Arandelas</li>
            </ul>
        </div>
    );
};
