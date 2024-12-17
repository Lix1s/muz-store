<div className="container">
{/* Основной блок товара */}
<p className="product-title">{category}</p>
<h1 className="product-title2">{title}</h1>
<div className="preinfo">
    <p className="product-meta">Артикул: 21312132 | Гарантия: 1 год</p>
    <p className="product-rating">
        <img src="img/icons/stars.png" alt="stars" />
        <span className="rating-text">(8 отзывов)</span>
    </p>
</div>
<section className="product-section">
    <div className="thumbnail-gallery">
        <img src={imageUrl} alt="Гитара миниатюра 1" className="thumbnail" />
        <img
            src="https://www.muztorg.ru/files/dxp/j3t/yfl/88w/80g/gw8/8kk/4ko/s/dxpj3tyfl88w80ggw88kk4kos.jpg"
            alt="Гитара миниатюра 2"
            className="thumbnail"
        />
    </div>
    <div className="product-gallery">
        <div className="img-main">
            <img
                src="https://www.muztorg.ru/files/2jp/wx4/khs/2o0/8o4/4wc/ssk/s80/8/2jpwx4khs2o08o44wcssks808.jpg"
                alt={title}
                className="main-image"
            />
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
                    <span>{price} ₽.</span>
                </div>

                <button
                    className="buy"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                >
                    {isAdded ? 'Добавлено в корзину' : 'В корзину'}
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
                src="img/icons/stars.png"
                alt={title}
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
                src="img/icons/stars.png"
                alt={title}
                className="main-image"
            />
        </article>
    </div>
</section>
</div>
<Footer />