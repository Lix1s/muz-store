import toCart from './../../img/pictures/toCart.svg'
import cartIcon from './../../img/icons/cart.png'
import inCart from './../../img/pictures/inCart.svg'
import React from "react";
import { Link } from 'react-router-dom';

function Card({ imageUrl, category, title, price, onClickAdd }) {
        
        const [isAdded, setIsAdded] = React.useState(false);

        const onAdd = () => {
            onClickAdd({imageUrl, category, title, price});
            setIsAdded(!isAdded);
           
        }

    return(
        <>
        
        
        <div className="card">
           
                <button className="img">
                    <img src={imageUrl} alt='products' />
                </button>
                        <p>{category}</p>
                        <a>{title}</a>
                        <b>{price} ₽.</b>
            
                    <button className='add' >
                    
        {!isAdded ? (
            <>
             <button className="" onClick={onAdd} >
             <img className="img2" src={toCart} alt="Add to Cart" />
                </button>
               
                </>
      ) : (
        <Link to="/cart" >
        <img className="img2" src={inCart} alt="In Cart" />
        </Link>
      )}
   
                        {/* <img className="img2"  src={isAdded ? inCart : toCart} ></img> */}
                           
                    </button>
                
            </div>
            
            </>
    );
}

export default Card;