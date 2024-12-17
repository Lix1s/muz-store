import React, { useState, createContext, useEffect, useCallback } from "react";
import axios from "axios";

export const CartContext = createContext();

const Context = (props) => {
  const [items, setitems] = useState([]); // Список всех товаров
  const [cartItems, setCartItems] = useState([]); // Товары в корзине

  // Преобразуем price в число для корзины
  const processedItems = cartItems.map((item) => ({
    ...item,
    price: Number(item.price), // Убедимся, что price числовой
  }));

  // Загрузка товаров из API (например, для корзины)
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get('https://673876654eb22e24fca800c5.mockapi.io/cart');
        setCartItems(data); // Загружаем корзину с сервера
      } catch (error) {
        console.error("Ошибка при загрузке корзины:", error);
      }
    };
    fetchCartItems();
  }, []);

  const onAddToCart = useCallback(async (item) => {
    try {
      const existingItem = cartItems.find((cartItem) => cartItem.title === item.title);
  
      if (existingItem) {
        // Обновляем количество на сервере
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        await axios.put(`https://673876654eb22e24fca800c5.mockapi.io/cart/${existingItem.id}`, updatedItem);
        setCartItems((prevItems) =>
          prevItems.map((el) => (el.id === existingItem.id ? updatedItem : el))
        );
      } else {
        // Добавляем новый товар
        const newItem = { ...item, quantity: 1 };
        const { data } = await axios.post('https://673876654eb22e24fca800c5.mockapi.io/cart', newItem);
        setCartItems((prevItems) => [...prevItems, data]);
      }
    } catch (error) {
      console.error("Ошибка при добавлении товара в корзину:", error);
    }
  }, [cartItems]);

  // Функция для удаления товара из корзины
  const onRemoveItem = async (id) => {
    try {
      // Находим товар по ID
      const itemToUpdate = cartItems.find((item) => item.id === id);
  
      if (!itemToUpdate) return;
  
      if (itemToUpdate.quantity > 1) {
        // Если количество больше 1, уменьшаем количество
        const updatedItem = { ...itemToUpdate, quantity: itemToUpdate.quantity - 1 };
        await axios.put(`https://673876654eb22e24fca800c5.mockapi.io/cart/${id}`, updatedItem);
  
        // Обновляем локальное состояние
        setCartItems((prevItems) =>
          prevItems.map((item) => (item.id === id ? updatedItem : item))
        );
      } else {
        // Если количество равно 1, удаляем товар полностью
        await axios.delete(`https://673876654eb22e24fca800c5.mockapi.io/cart/${id}`);
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Ошибка при обновлении количества товара:", error);
    }
  };

  // Функция для проверки, добавлен ли товар в корзину
  const isItemInCart = (title) => {
    return cartItems.some((cartItem) => cartItem.title === title);
  };

  // Состояние для активной категории товаров
  const [activeCategory, setActiveCategory] = useState('');

  // Контекст, который предоставляет необходимые данные и функции компонентам
  const value = {
    items,
    isItemInCart,
    processedItems,
    setitems,
    cartItems,
    activeCategory,
    setActiveCategory,
    setCartItems,
    onAddToCart,
    onRemoveItem,
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
