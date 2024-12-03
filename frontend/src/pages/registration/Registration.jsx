import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  // Локальное состояние для управления отображением ошибок
  const [showErrors, setShowErrors] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit", // Ошибки показываются после попытки сабмита
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Не удалось зарегистрироваться");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const password = watch("password");

  const handleFormSubmit = (data) => {
    setShowErrors(true); // Включаем отображение ошибок после клика
    handleSubmit(onSubmit)(data); // Вызываем отправку формы
  };

  return (
    <>
      <Header />
      <section className="Login">
        <div className="preview">
          <h3 className="text-center">Регистрация</h3>
          <div className="registration-cssave">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="form-group">
                <input
                  className="form-control-item"
                  type="text"
                  placeholder="Логин"
                  {...register("fullName", {
                    required: "Введите логин",
                    minLength: { value: 4, message: "Минимум 4 символа" },
                    maxLength: { value: 15, message: "Максимум 15 символов" },
                  })}
                />
                {showErrors && errors.fullName && <p className="check">{errors.fullName.message}</p>}
              </div>
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
                    minLength: { value: 6, message: "Минимум 6 символов" },
                  })}
                />
                {showErrors && errors.password && <p className="check">{errors.password.message}</p>}
              </div>
              <div className="form-group">
                <input
                  className="form-control-item"
                  type="password"
                  placeholder="Повторите пароль"
                  {...register("confirmPassword", {
                    required: "Подтвердите пароль",
                    validate: (value) =>
                      value === password || "Пароли не совпадают",
                  })}
                />
                {showErrors && errors.confirmPassword && (
                  <p >{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block create-account"
                  type="button"
                  onClick={handleFormSubmit} // Вызываем сабмит с отображением ошибок
                >
                  СОЗДАТЬ
                </button>
              </div>
              <div className="form-group">
                <Link to="/login">
                  <button className="log-in" type="button">
                    Есть аккаунт? <a>Войти</a>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;