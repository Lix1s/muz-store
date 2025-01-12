import './checkout.css'
import { Link } from 'react-router-dom';
import Footer from './../../components/footer/Footer'

const CheckOut = () => {
    return (
        <>
        <section className="checkout">
  <div className="bye">
    <div className="text1">
      <p>Спасибо за покупку!</p>
      <p>Чек отправлен на вашу почту!</p>
    </div>
    <Link to="/" className="back">Вернуться на сайт</Link>
  </div>
</section>
      <Footer />
        </>
    )
}

export default CheckOut;