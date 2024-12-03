import React, {useContext} from 'react'
import Card from '../card/Card'
import { CartContext } from '../Context'
import './product.css'



const Products = () => {
    const [items, setitems] = React.useState([]);
    const { cartItems, onAddToCart } = useContext(CartContext);
    console.log('cartItems', cartItems);

  React.useEffect(() => {
    fetch ('https://673876654eb22e24fca800c5.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setitems(json);
    });
  }, []);


    return (
    <section className='Products'>
       
        <div className="container">
            
        <span>Популярные товары</span>


            <div className="tovary">
            { items.map((item) => ( 
                <Card 
                   
                    title={item.title}
                    price={item.price}
                    category={item.category}
                    imageUrl={item.imageUrl} 
                    onClickAdd={(obj) => onAddToCart(obj)}
                />
            ))}
  
            </div>
    
            </div>
        
                
    </section>);
        
}
 


export default Products;

