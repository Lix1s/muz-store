import './tovar.css'
import Header from '../../components/header/Header';

const Tovar = () => {
    return (
        <>
        <Header />
        <div className="container">
    {/* <!-- Основной блок товара --> */}
    <section className="product-section">
      <div className="product-gallery">
        <img src="guitar.png" alt="Электрогитара IBANEZ GRX40-BKN" class="main-image" />
        <div className="thumbnail-gallery">
          <img src="guitar.png" alt="Гитара миниатюра 1" class="thumbnail" />
          <img src="guitar.png" alt="Гитара миниатюра 2" class="thumbnail" />
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-title">IBANEZ GRX40-BKN</h1>
        <p className="product-meta">Артикул: A039475 | Гарантия: 1 год</p>
        <p className="product-rating">
          ⭐⭐⭐⭐⭐ <span class="rating-text">(8 отзывов)</span>
        </p>
        <h2>Характеристики</h2>
        <ul className="product-specs">
          <li><strong>Количество струн:</strong> 6</li>
          <li><strong>Конфигурация звукоснимателей:</strong> H-S-S</li>
          <li><strong>Крепление грифа:</strong> на болтах</li>
          <li><strong>Материал грифа:</strong> клён</li>
          <li><strong>Материал корпуса:</strong> тополь</li>
          <li><strong>Материал накладки грифа:</strong> сосна</li>
          <li><strong>Ориентация:</strong> правосторонняя</li>
          <li><strong>Форма корпуса:</strong> Superstrat</li>
          <li><strong>Мензура, дюймы:</strong> 25.5</li>
          <li><strong>Тип бриджа:</strong> Tremolo</li>
        </ul>
        <a href="#" className="specs-link">Все характеристики</a>
        <div class="product-price">
          <p className="price">25 400 ₽</p>
          <p className="bonus">+1300 бонусов</p>
          <button className="add-to-cart">В корзину</button>
        </div>
      </div>
    </section>

    {/* <!-- Отзывы --> */}
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
          <p className="review-author"><strong>Денис Зиновкин</strong></p>
          <p className="review-text">Решил подарить своему кентафарику на дембель гитару. Заказал на этом сайте, гитара пришла настолько быстро, что кента с казармы не выпустили еще. Так вот, сижу теперь сам играю. Всем советую.</p>
          <p className="review-date">28 октября 2024</p>
          <p className="review-stars">⭐⭐⭐⭐⭐</p>
        </article>
        <article className="review-item">
          <p className="review-author"><strong>Денис Зиновкин</strong></p>
          <p className="review-text">Решил оставить еще один комментарий. В общем, гитару ему не отдал, сам теперь играю, но сайт "Аккорд" всем посоветовал.</p>
          <p className="review-date">15 ноября 2024</p>
          <p className="review-stars">⭐⭐⭐⭐⭐</p>
        </article>
      </div>
    </section>
  </div>
        </>
    );
}

export default Tovar;