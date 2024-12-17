import './catalog.css'
import Header from '../../components/header/Header'
import ExHeader from '../../components/ExHeader/ExHeader'
import Products from '../../components/Product/Product'
import Footer from './../../components/footer/Footer'
import Categories from '../../components/categories/Categories'

const Catalog = () => {
  

    return (
        <>
        <Header />
        {/* <ExHeader /> */}
       
        <Categories />

        
        <Products />
       
        <Footer />
        </>
    );
}

export default Catalog;