import './catalog.css'
import Header from '../../components/header/Header'
import ExHeader from '../../components/ExHeader/ExHeader'
import Products from '../../components/Product/Product'
import Footer from './../../components/footer/Footer'

const Catalog = () => {
    return (
        <>
        <Header />
        {/* <ExHeader /> */}
        <div className="container">
      
            <div className="categories">
            <span>Популярные категории</span>
            <div className="classes">
                
            <button><img src="img/pic/AcGuitars.svg" alt="AcGuitars" /></button>
            <button><img src="img/pic/ElectroGuitars.svg" alt="ElectroGuitars" /></button>
            <button><img src="img/pic/AcSys.svg" alt="AcSys" /></button>
            <button><img src="img/pic/Powers.svg" alt="Powers" /></button>
            <button><img src="img/pic/ElPiano.svg" alt="ElPiano" /></button>
            <button><img src="img/pic/Drums.svg" alt="Drums" /></button>
            
            </div>
            </div>  

        </div>
        <Products />
       
        <Footer />
        </>
    );
}

export default Catalog;