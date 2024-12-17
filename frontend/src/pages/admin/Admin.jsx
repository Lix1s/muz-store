import './admin.css';
import Header from './../../components/header/Header';
import Footer from '../../components/footer/Footer';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/Context';

const Admin = () => {
  const { items, addProduct, updateProduct, deleteProduct } = useContext(CartContext);

  // Состояния для формы добавления
  const [newProduct, setNewProduct] = useState({
    category: '',
    title: '',
    price: 0,
    imageUrl: '',
  });

  const [updateData, setUpdateData] = useState({ id: '', title: '', price: 0, category: '', imageUrl: '' });
  const [deleteId, setDeleteId] = useState('');

  const handleAdd = () => {
    const productWithId = { ...newProduct, id: Date.now() };
    addProduct(productWithId);
    setNewProduct({ category: '', title: '', price: 0, imageUrl: '' }); // Очистка формы
  };

  return (
    <>
      <Header />
      <section className="admin">
        <div className="container">
          <h1 className='prei'>Админ-панель</h1>

          {/* Добавление товара */}
          <div className="crud-section">
            <h2>Добавить продукт</h2>
            <input
              type="text"
              placeholder="Название"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Категория"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            />
         
            <input
              type="number"
              placeholder="Цена"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            />
            <input
              type="text"
              placeholder="URL изображения"
              value={newProduct.imageUrl}
              onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
            />
            <button className='CRUD-btn' onClick={handleAdd}>Добавить продукт</button>
          </div>

          {/* Обновление товара */}
          <div className="crud-section">
            <h2>Обновить продукт</h2>
            <input
              type="number"
              placeholder="ID продукта"
              value={updateData.id}
              onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
            />
             <input
              type="text"
              placeholder="Новое название"
              value={updateData.title}
              onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Категория"
              value={updateData.category}
              onChange={(e) => setUpdateData({ ...updateData, category: e.target.value })}
            />
           
            <input
              type="number"
              placeholder="Новая цена"
              value={updateData.price}
              onChange={(e) => setUpdateData({ ...updateData, price: Number(e.target.value) })}
            />
             <input
              type="text"
              placeholder="URL изображения"
              value={updateData.imageUrl}
              onChange={(e) => setUpdateData({ ...updateData, imageUrl: e.target.value })}
            />
            <button className='CRUD-btn'
              onClick={() =>
                updateProduct(updateData.id, {
                  title: updateData.title,
                  price: updateData.price,
                  category: updateData.category,
                  imageUrl: updateData.imageUrl
                })
              }
            >
              Обновить продукт
            </button>
          </div>

          {/* Удаление товара */}
          <div className="crud-section">
            <h2>Удалить продукт</h2>
            <input
              type="number"
              placeholder="ID продукта для удаления"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
            />
            <button className='CRUD-btn' onClick={() => deleteProduct(deleteId)}>Удалить продукт</button>
          </div>

          {/* Список товаров */}
          <div className="crud-section">
            <h2>Список товаров</h2>
            {items.length > 0 ? (
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <strong>{item.title}</strong> - {item.price} руб. ({item.category}), id: {item.id}<br />
                    <img src={item.imageUrl} alt={item.title} width="50" height="50" />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Список товаров пуст</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Admin;
