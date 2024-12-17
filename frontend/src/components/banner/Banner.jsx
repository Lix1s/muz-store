
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return(
        <section class='banner'>
        <div class="container">
        
        <div className="start-buy">
            <img src='img/pic/banner-unbutton.svg' alt="banner" />
            
                <button className='btn-start'>
                <Link to='/catalog' >
                   <img src='img/pic/start-buy.svg' alt="banner" />
                   </Link>
                </button>
                
        </div>
        
        </div>
        
    </section>
    )
}

export default Banner;



