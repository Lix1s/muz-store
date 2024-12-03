import './exheader.css'
import tunerIcon from './../../img/icons/tuner.png'
import metronomIcon from './../../img/icons/metronom.png'
import searchIcon from './../../img/icons/searchIcon.png'


const ExHeader = () => {
    return (<section className='ex_header'>

        <div className="container">
            <div className="ex_content">
                <div className="ex_instruments">
                    <div className="tuner">
                    <img src={metronomIcon} alt="Logo" />
                        <span>Метроном</span>
                    </div>
                
                    <div className="metronom">
                    <img src={tunerIcon} alt="Logo" />
                    <span>Тюнер</span>
                    
                    </div>
                    
                </div>
                    <div className="search"> 
                        <input type= 'text' placeholder='Введите текст...'></input>
                            <div className='searchbt'>
                                <img src={searchIcon} alt='search'/>
                                <button alt='search' type="submit"></button>
                            </div>
                    </div>
            </div>
        </div>

    </section>);
        
}
 
export default ExHeader;