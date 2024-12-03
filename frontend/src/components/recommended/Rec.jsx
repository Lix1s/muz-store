import forTeachers from './../../img/pictures/ForTeachers2.svg'
import presentHelp from './../../img/pictures/PresentHelp.svg'
import seasonNews from './../../img/pictures/SeasonNews.svg'

import './rec.css'

const Rec = () => {
    return(
        <section className='Recommendation'>
            <div className="container">
            <span>Подборки</span>
        <ul>
            <li><img src={forTeachers} alt="Logo"/></li>
            <li><img src={presentHelp} alt="Logo"/></li>
            <li><img src={seasonNews} alt="Logo"/></li>
        </ul>
            </div>
    </section>

        
    )
}

export default Rec;


