import './profile.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
const Profile = () => {
    return (
        <>
    <Header />
            <section className="profile">
      <div className="container">
        <div className="profile-card">
          <div className="profile-header">
            <img
              src="img/pic/avatar.jpg" // Замените на реальный URL аватара
              alt="User Avatar"
              className="profile-avatar"
            />
            <h1 className="profile-name">Имя пользователя</h1>
            <p className="profile-email">example@mail.com</p>
          </div>
          <div className="profile-actions">
            <button className="btn edit-btn">Редактировать профиль</button>
            <button className="btn logout-btn">Выйти из аккаунта</button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
        </>
    )
}

export default Profile;