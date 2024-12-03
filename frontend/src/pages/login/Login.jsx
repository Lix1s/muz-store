import React, { useState }from "react";
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
  const { 
    register,
    handleSubmit,
    formState: { errors, isValid},
    } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
  });

  const [showErrors, setShowErrors] = useState(false);

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
    return alert ('Неверная почта или пароль')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }

  };

  const handleFormSubmit = (data) => {
    setShowErrors(true); // Включаем отображение ошибок после клика
    handleSubmit(onSubmit)(data); // Вызываем отправку формы
  };
  
  if (isAuth) {
    return <Navigate to="/" />
  };
 

  return (
    <>
    <Header />
    <section className="Login">
      
        <div className="preview">
        
        <h3 className="text-center">Вход</h3>
        <div className="registration-cssave" >
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
                    minLength: { value: 6, message: "Минимум 6 символов" },
                  })}
                />
                {showErrors && errors.password && <p className="check">{errors.password.message}</p>}
              </div>
        <div className="form-group">
          
            <button className="btn btn-primary btn-block create-account" type="submit" onClick={handleFormSubmit}>ВОЙТИ</button>
        </div>
        <div className="form-group">
        <Link to='/register'> 
            <button className="register" type="submit" >Нет аккаунта? <a>Зарегистрироваться</a></button>
            </Link>
        </div>
    </form>
</div>
        </div>
      
    </section>
    </>
  );
};

export default Login