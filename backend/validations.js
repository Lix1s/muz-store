import { body } from 'express-validator'

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 6 символов').isLength({min: 5}),
   
];

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 6 символов').isLength({min: 5}),
    body('fullName', 'Укажите имя').isLength({min: 3}),
    
];

export const productCreateValidation = [
    body('category', 'Укажите категорию').isString(),
    body('title', 'Введите название инструмента').isString(),
    body('price', 'Введите цену').isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isURL(),
];