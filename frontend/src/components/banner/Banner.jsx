import bannerPic from './../../img/pictures/banner11.svg'
import './banner.css'

const Banner = () => {
    return(
        <section class='banner'>
        <div class="container">
        <img src={bannerPic} alt="banner" />
        </div>
        
    </section>
    )
}

export default Banner;



