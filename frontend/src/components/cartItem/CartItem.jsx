import Products from "../Product/Product";

const CartItem = ({ items = [] }) => {
    return (
        <>
        
<div className="container">
    
<div className="cart"  >
                <div className="precart">
                <span>КОРЗИНА</span>
                <a>Очистить всю корзину</a>
                </div>
            <div className="cart-main">
                <div className="items" >
                    {items.map((obj) => (
                        <div className="cartItem">
                            <div className="cartItemImg">
                                <img src={obj.imageUrl} alt="ibanez" width={50} height={50} />
                            </div>
                            <div className="main">
                                <div className="descrip">
                                    <div className="category">{obj.category}</div>
                                    <div className="name">{obj.title}</div>
                                </div>

                                <div className="number">
                                  <button className="minus"> - </button> 
                                  <input className="counter" type= 'text' placeholder='1'></input>
                                    <button type= 'text' className="counter"> 1 </button> 
                                    <button className="plus">+ </button> 
                                </div>

                                <div className="price">
                                    {obj.price} руб.
                                </div>
                                
                                <button className="trashImg">
                                <img src="img/products/TrashCan.svg" alt="" />
                                </button>
                            </div>

                            
                        </div>
                    ))}
                        
                </div>

                <div className="order-block">
                    <div className="total-menu">
                        
                        <div className="subtitle"><span>ВАШ ЗАКАЗ</span></div>
                        <div className="basket-row-total"><a>1 товар</a><a>25 399 р.</a></div>
                        <div className="basket-row-final"><b>Итого</b><b>25 399 р.</b></div>
                        
                        <button className='buy'>
                            Купить
                        </button>
                        
                      
                   
                    </div> 
                    <div className="aftertitle">
                               <span>Только самовывоз!</span>
                        </div>
                </div>
                            
                            
            </div>
                
            </div>
            </div>
            </>
             )
}

export default CartItem;