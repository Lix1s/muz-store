// Card.js
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';
import toCart from './../../img/pictures/toCart.svg';
import inCart from './../../img/pictures/inCart.svg';

function Card({ id, imageUrl, category, title, price }) {
    const { onAddToCart, isItemInCart } = useContext(CartContext); // Получаем функции из контекста

    const isAdded = isItemInCart(title); // Проверяем, добавлен ли товар в корзину по title

    const onAdd = () => {
        onAddToCart({ id, imageUrl, category, title, price }); // Добавляем товар в корзину
    };

    return (
        <div className="card" key={id}>
            <Link to={`/tovar/${encodeURIComponent(title)}`}>
                <button className="img">
                    <img src={imageUrl} alt="products" />
                </button>
            </Link>
            <p>{category}</p>
            <a>{title}</a>
            <b>{price} ₽.</b>
            <button className="add">
                {!isAdded ? (
                    <button className="" onClick={onAdd}>
                        <img className="img2" src={toCart} alt="Add to Cart" />
                    </button>
                ) : (
                    <Link to="/cart">
                        <img className="img2" src={inCart} alt="In Cart" />
                    </Link>
                )}
            </button>
        </div>
    );
}

export default Card;
