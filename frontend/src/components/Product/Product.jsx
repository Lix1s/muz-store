import React, { useContext, useState, useEffect } from 'react';
import Card from '../card/Card';
import { CartContext } from '../Context';
import './product.css';
import axios from 'axios';

const Products = () => {
    const { items, setitems } = useContext(CartContext);
    const { cartItems, onAddToCart, setCartItems } = useContext(CartContext);
    const { activeCategory, setActiveCategory } = useContext(CartContext);

    // Загрузка данных
    useEffect(() => {
        axios.get('https://673876654eb22e24fca800c5.mockapi.io/items').then((res) => {
            console.log('Items data:', res.data);
            setitems(res.data);
        });
        axios.get('https://673876654eb22e24fca800c5.mockapi.io/cart').then((res) => {
            console.log('Cart data:', res.data);
            setCartItems(res.data);
        });
    }, []);

    // Фильтрация карточек по категории
    const filteredItems = activeCategory
        ? items.filter((item) => item.category === activeCategory)
        : items;

    return (
        <section className="Products">
            <div className="container">
                <span>Популярные товары</span>
                {/* Карточки товаров */}
                <div className="tovary">
                    {filteredItems.map((item) => (
                        <Card
                            key={item.id}
                            onClickAdd={() => onAddToCart(item)}  
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
