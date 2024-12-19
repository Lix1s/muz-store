import jwt from 'jsonwebtoken';

// Мидлвар для проверки JWT токена
export default (req, res, next) => {
    // Извлекаем токен из заголовков авторизации
    const token = req.headers['authorization']?.replace(/Bearer\s?/, '');

    if (token) {
        try {
            // Пытаемся расшифровать токен
            const decoded = jwt.verify(token, 'secret123'); // Используйте переменные окружения для хранения ключей

            // Если токен валиден, сохраняем userId в запросе
            req.userId = decoded._id;
            return next(); // Переходим к следующему обработчику
        } catch (e) {
            // Ошибка при расшифровке токена
            return res.status(403).json({
                message: 'Нет доступа. Неверный токен.',
            });
        }
    } else {
        // Если токен отсутствует
        return res.status(403).json({
            message: 'Нет доступа. Токен не найден.',
        });
    }
};