import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe } from '../../redux/slices/auth';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();

  // Получаем информацию о пользователе из Redux
  const userData = useSelector((state) => state.auth.data);
  const status = useSelector((state) => state.auth.status);

  // При монтировании компонента, отправляем запрос для получения данных пользователя
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchAuthMe());
    }
  }, [dispatch, status]);

  // Если данные загружаются, показываем спиннер или сообщение о загрузке
  if (status === 'loading') {
    return <div className="loading">Загрузка...</div>;
  }

  // Если возникла ошибка или данные не найдены, показываем ошибку
  if (status === 'error' || !userData) {
    return <p>Данные пользователя не найдены</p>;
  }

  return (
    <>
      <Header />
      <div className="profile">
        <div className="container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar-container">
                <img 
                  src={userData.avatarUrl || "img/icons/logo.svg"} 
                  alt="User Avatar" 
                  className="profile-avatar" 
                />
              </div>
              <div className="profile-details">
                <div className="profile-item">
                  <label className="profile-label">Логин:</label>
                  <h1 className="profile-name">{userData.fullName || "Имя пользователя"}</h1>
                </div>
                <div className="profile-item">
                  <label className="profile-label">Email:</label>
                  <p className="profile-email">{userData.email || "example@mail.com"}</p>
                </div>
              </div>
              <div className="profile-actions">
                <button className="btn edit-btn">Редактировать профиль</button>
                <button className="btn logout-btn">Выйти из аккаунта</button>
              </div>
            </div>

            <div className="profile-orders">
              <h2 className="orders-title">Ваши заказы</h2>
              <div className="orders-list">
                {/* Пример заказа */}
                <div className="order-item">
                  <div className="order-details">
                    <span className="order-date">10.12.2024</span>
                    <span className="order-status">В процессе</span>
                    <span className="order-total">Сумма: 3500 ₽</span>
                  </div>
                </div>
                <div className="order-item">
                  <div className="order-details">
                    <span className="order-date">05.12.2024</span>
                    <span className="order-status">Доставлено</span>
                    <span className="order-total">Сумма: 5000 ₽</span>
                  </div>
                </div>
              </div>

              <p className="no-orders">У вас нет заказов</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
