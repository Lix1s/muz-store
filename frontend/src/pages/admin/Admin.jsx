import React, { useContext, useState } from 'react';
import './admin.css';
import Header from './../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { CartContext } from '../../components/Context';
import { useForm } from 'react-hook-form';

const Admin = () => {
  const { items, addProduct, updateProduct, deleteProduct } = useContext(CartContext);

  // Состояния для изображений
  const [imageUrl, setImageUrl] = useState('');
  const [updateImageUrl, setUpdateImageUrl] = useState('');

  // Форма для добавления товара
  const {
    register: addRegister,
    handleSubmit: handleAddSubmit,
    formState: { errors: addErrors },
    reset: resetAddForm,
  } = useForm({
    defaultValues: { category: '', title: '', price: 0 },
    mode: 'onChange',
  });

  // Форма для обновления товара
  const {
    register: updateRegister,
    handleSubmit: handleUpdateSubmit,
    formState: { errors: updateErrors },
    reset: resetUpdateForm,
  } = useForm({
    defaultValues: { id: '', category: '', title: '', price: 0 },
    mode: 'onChange',
  });

  // Состояния для удаления товара
  const [deleteId, setDeleteId] = useState('');
  const [deleteError, setDeleteError] = useState('');

  // Функция загрузки изображения при добавлении
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Изображение слишком большое, выберите файл меньше 5 МБ');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Сохраняем URL изображения
      };
      reader.readAsDataURL(file);
    }
  };

  // Функция загрузки изображения при обновлении
  const handleUpdateImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdateImageUrl(reader.result); // Сохраняем URL изображения
      };
      reader.readAsDataURL(file);
    }
  };

  // Добавление продукта
  const handleAdd = async (data) => {
    try {
      const productWithId = { ...data, id: Date.now(), imageUrl };
      await addProduct(productWithId);
      resetAddForm();
      setImageUrl('');
    } catch (e) {
      console.error(e);
    }
  };

  // Обновление продукта
  const handleUpdate = async (data) => {
    if (!data.id) {
      setDeleteError('Введите ID продукта для обновления.');
      return;
    }

    try {
      const updatedProduct = {
        title: data.title,
        category: data.category,
        price: data.price,
        imageUrl: updateImageUrl || data.imageUrl,
      };

      await updateProduct(data.id, updatedProduct);
      resetUpdateForm();
      setUpdateImageUrl('');
    } catch (e) {
      console.error(e);
    }
  };

  // Удаление продукта
  const handleDelete = async () => {
    if (!deleteId) {
      setDeleteError('Введите ID продукта для удаления.');
      return;
    }

    try {
      await deleteProduct(deleteId);
      setDeleteError('');
    } catch (e) {
      setDeleteError('Ошибка при удалении продукта. Проверьте ID.');
    }
  };

  return (
    <>
      <Header />
      <section className="admin">
        <div className="container">
          <h1 className="prei">Админ-панель</h1>

          {/* Добавление товара */}
          <div className="crud-section">
            <h2>Добавить продукт</h2>
            <form onSubmit={handleAddSubmit(handleAdd)}>

              <input
                type="text"
                placeholder="Название"
                {...addRegister('title', { required: 'Введите название продукта.' })}
                className="form-control-item"
              />
              {addErrors.title && <p className="check">{addErrors.title.message}</p>}

              <input
                type="text"
                placeholder="Категория"
                {...addRegister('category', { required: 'Введите категорию продукта.' })}
                className="form-control-item"
              />
              {addErrors.category && <p className="check">{addErrors.category.message}</p>}

              <input
                type="number"
                placeholder="Цена"
                {...addRegister('price', {
                  required: 'Введите цену продукта.',
                  min: { value: 1, message: 'Цена должна быть больше 0.' },
                })}
                className="form-control-item"
              />
              {addErrors.price && <p className="check">{addErrors.price.message}</p>}

              {/* Загрузка изображения */}
              <input
                type="file"
                onChange={handleImageUpload}
                className="form-control-item"
              />
              {imageUrl && <img src={imageUrl} alt="Предпросмотр" width="100" />}
              {addErrors.image && <p className="check">{addErrors.image.message}</p>}

              <button type="submit" className="CRUD-btn">
                Добавить продукт
              </button>

              {/* Ошибки формы */}
              {addErrors && Object.keys(addErrors).length > 0 && (
                <p className="check">Пожалуйста, исправьте ошибки в форме.</p>
              )}
            </form>
          </div>

          {/* Обновление товара */}
          <div className="crud-section">
            <h2>Обновить продукт</h2>
            <form onSubmit={handleUpdateSubmit(handleUpdate)}>

              <input
                type="text"
                placeholder="ID продукта"
                {...updateRegister('id', { required: 'Введите ID продукта для обновления.' })}
                className="form-control-item"
              />
              {updateErrors.id && <p className="check">{updateErrors.id.message}</p>}

              <input
                type="text"
                placeholder="Новое название"
                {...updateRegister('title', { required: 'Введите новое название.' })}
                className="form-control-item"
              />
              {updateErrors.title && <p className="check">{updateErrors.title.message}</p>}

              <input
                type="text"
                placeholder="Категория"
                {...updateRegister('category')}
                className="form-control-item"
              />

              <input
                type="number"
                placeholder="Новая цена"
                {...updateRegister('price', {
                  min: { value: 1, message: 'Цена должна быть больше 0.' },
                })}
                className="form-control-item"
              />
              {updateErrors.price && <p className="check">{updateErrors.price.message}</p>}

              {/* Загрузка нового изображения */}
              <input
                type="file"
                onChange={handleUpdateImageUpload}
                className="form-control-item"
              />
              {updateImageUrl && <img src={updateImageUrl} alt="Предпросмотр" width="100" />}
              {updateErrors.image && <p className="check">{updateErrors.image.message}</p>}

              <button type="submit" className="CRUD-btn">
                Обновить продукт
              </button>
            </form>
          </div>

          {/* Удаление товара */}
          <div className="crud-section">
            <h2>Удалить продукт</h2>
            <input
              type="number"
              placeholder="ID продукта для удаления"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              className="form-control-item"
            />
            {deleteError && <p className="check">{deleteError}</p>}
            <button className="CRUD-btn" onClick={handleDelete}>
              Удалить продукт
            </button>
          </div>

          {/* Список товаров */}
          <div className="crud-section">
            <h2>Список товаров</h2>
            {items.length > 0 ? (
              <table className="product-table">
                <thead>
                  <tr className="shapka">
                    <th>ID</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Цена</th>
                    <th>Изображение</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price} руб.</td>
                      <td>
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          width="50"
                          height="50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
