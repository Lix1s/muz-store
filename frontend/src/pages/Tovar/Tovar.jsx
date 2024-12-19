import React, { useContext } from 'react';
import { CartContext } from '../../components/Context';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link, useParams } from 'react-router-dom';
import './tovar.css';
import toCart from './../../img/pictures/toCart.svg';
import inCart from './../../img/pictures/inCart.svg';

const Tovar = () => {
    const { items, onAddToCart, isItemInCart } = useContext(CartContext); // Получаем контекст
    const { title } = useParams(); // Получаем title из URL

    const item = items.find(
        (item) => item.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
    );
    const formattedPrice1 = item.price.toLocaleString('ru-RU');
    const isAdded = item && isItemInCart(item.title); // Проверка, добавлен ли товар в корзину по title

    if (!item) return <p>Товар не найден</p>;

  return (
    <>
      <Header />
      <div className="container">
        {/* Основной блок товара */}
        <p className="product-title">{item.category}</p>
        <h1 className="product-title2">{item.title}</h1>
        <div className="preinfo">
          <p className="product-meta">Артикул: 21312132 | Гарантия: 1 год</p>
          <p className="product-rating">
            <img src="/img/icons/stars.png" alt="stars" />
            <span className="rating-text">(8 отзывов)</span>
          </p>
        </div>
        <section className="product-section">
          <div className="thumbnail-gallery">
            <img src={`/${item.imageUrl}`} alt="Гитара миниатюра 1" className="thumbnail" />
            <img
              src={`/${item.imageUrl}`}
              alt="Гитара миниатюра 2"
              className="thumbnail"
            />
          </div>
          <div className="product-gallery">
            <div className="img-main">
              <img src={`/${item.imageUrl}`} alt={item.title || 'Товар'} className="main-image" />
            </div>
          </div>

          <div className="product-details">
            <ul className="product-specs">
              <h2>
                <strong>Характеристики:</strong>
              </h2>
              <li>Количество струн: 6</li>
              <li>Конфигурация звукоснимателей: H-S-S</li>
              <li>Крепление грифа: на болтах</li>
              <li>Материал грифа: клён</li>
              <li>Материал корпуса: тополь</li>
              <li>Материал накладки грифа: сосна</li>
              <li>Ориентация: правосторонняя</li>
              <li>Форма корпуса: Superstrat</li>
              <li>Мензура, дюймы: 25.5</li>
              <li>Тип бриджа: Tremolo</li>
              <a href="#" className="specs-link">
                Все характеристики
              </a>
            </ul>

            <div className="order-block-tovar">
              <div className="buy-prod">
                <div className="subtitle2">
                  <span>{formattedPrice1} ₽.</span>
                </div>

                <button className="buy">
                     {!isAdded ? (
                        <button onClick={() => onAddToCart(item)}>
                            <img className="img2" src={toCart} alt="Add to Cart" />
                        </button>
                     ) : (
                        <Link to="/cart">
                            <img className="img2" src={inCart} alt="In Cart" />
                        </Link>
                    )}
                </button>
              </div>
              <div className="aftertitle">
                <span>Только самовывоз!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="reviews-section">
          <h2>Отзывы</h2>
          <div className="review-summary">
            <div className="review-rating">
              <span className="review-score">4.7</span>
              <p>8 отзывов</p>
            </div>
            <p className="recommend">100% рекомендуют</p>
          </div>
          <div className="review-list">
            <article className="review-item">
              <p className="review-author">
                <strong>Денис Зиновкин</strong>
              </p>
              <p className="review-text">
                Решил подарить своему другу гитару на др. Заказал на этом сайте, гитара
                пришла настолько быстро, что его др не наступило еще. Так вот, сижу
                теперь сам играю. Всем советую.
              </p>
              <p className="review-date">28 октября 2024</p>
              <img
                src="/img/icons/stars.png"
                alt="stars"
                className="main-image"
              />
            </article>
            <article className="review-item">
              <p className="review-author">
                <strong>Денис Зиновкин</strong>
              </p>
              <p className="review-text">
                Решил оставить еще один комментарий. В общем, гитару ему не отдал, сам
                теперь играю, но сайт "Аккорд" всем посоветовал.
              </p>
              <p className="review-date">15 ноября 2024</p>
              <img
                src="/img/icons/stars.png"
                alt="stars"
                className="main-image"
              />
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Tovar;
