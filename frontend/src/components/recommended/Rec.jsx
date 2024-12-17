import forTeachers from './../../img/pictures/ForTeachers2.svg'
import presentHelp from './../../img/pictures/PresentHelp.svg'
import seasonNews from './../../img/pictures/SeasonNews.svg'
import { Link } from 'react-router-dom';
import './rec.css'

const Rec = () => {
    return(
        <>
        <section className='Recommendation'>
            <div className="container">
            <span>Популярные категории</span>
            <Link to='/catalog'>
        <ul>
        
       
            <li><button><img src="img/pic/AcGuitars.svg" alt="AcGuitars" /></button></li>
            
            <li><button><img src="img/pic/ElectroGuitars.svg" alt="ElectroGuitars" /></button></li>
            <li><button><img src="img/pic/Drums.svg" alt="Drums" /></button></li>
        </ul>
        </Link>
            </div>
    </section>
    </>
        
    )
}

export default Rec;


