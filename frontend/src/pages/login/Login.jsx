import React, { useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import { useForm } from 'react-hook-form'
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

export const Login = () => {
  
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [redirectToAdmin, setRedirectToAdmin] = useState(false); // Для перенаправления в админку
  const [redirectToHome, setRedirectToHome] = useState(false); // Для перенаправления на главную страницу
  const { 
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
  });

  const [showErrors, setShowErrors] = useState(false);

  const onSubmit = async (values) => {
    // Проверка логина и пароля как admin
    if (values.email === 'admin@admin.com' && values.password === 'admin') {
      // Устанавливаем флаг для перенаправления в админку
      setRedirectToAdmin(true);
      return;
    }

    // Отправка данных для обычной авторизации через Redux
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Неверная почта или пароль');
    }

    // Если токен получен, сохраняем его в localStorage
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }

    // Перенаправление на главную или админскую страницу в зависимости от роли
    if (data.payload.role === 'admin') {
      setRedirectToAdmin(true);
    } else {
      setRedirectToHome(true);
    }
  };

  const handleFormSubmit = (data) => {
    setShowErrors(true); // Включаем отображение ошибок после клика
    handleSubmit(onSubmit)(data); // Вызываем отправку формы
  };

  // Если пользователь уже авторизован, перенаправляем на главную
  if (isAuth) {
    return <Navigate to="/" />;
  }

  // Перенаправление в зависимости от флага
  if (redirectToAdmin) {
    return <Navigate to="/admin" />;
  }
  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <section className="Login">
        <div className="preview">
          <h3 className="text-center">Вход</h3>
          <div className="registration-cssave">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  className="form-control-item"
                  type="email"
                  placeholder="Email"
                  {...register("email", { 
                    required: "Введите почту",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Введите корректный email",
                    },
                  })}
                />
                {showErrors && errors.email && <p className="check">{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <input
                  className="form-control-item"
                  type="password"
                  placeholder="Пароль"
                  {...register("password", {
                    required: "Введите пароль",
                    minLength: { value: 5, message: "Минимум 6 символов" },
                  })}
                />
                {showErrors && errors.password && <p className="check">{errors.password.message}</p>}
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block create-account" type="submit" onClick={handleFormSubmit}>
                  ВОЙТИ
                </button>
              </div>
              <div className="form-group">
                <Link to='/register'> 
                  <button className="register" type="submit">Нет аккаунта? <a>Зарегистрироваться</a></button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
