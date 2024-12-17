// utils/checkAdmin.js
export default (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({
      message: 'Нет доступа, только администратор может выполнять эти действия',
    });
  }
  next();
};
