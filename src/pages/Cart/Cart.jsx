import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, deleteCart, decrementCart } from '../../redux/reducer';

const Cart = () => {
    const cartList = useSelector(s => s.reducer.cart);
    const dispatch = useDispatch();
    return (
        <div>
           <div className="container">
                {
                    cartList.map(item =>{
                       return  <div key={item.id} className="cart-item">
                            <div className="cart-item-left">
                                <img src={item.image} alt="" className="cart-item-img" />
                                <h2 className="cart-item-title">{item.title}</h2>
                            </div>
                            <div className="cart-item-right">
                                <div className="cart-item-count">
                                    <button onClick={()=>{
                                        dispatch(addCart(item))
                                    }}>+</button>
                                    <span>count: <b>{item.count}</b></span>
                                    <span>price: <b>${(item.price * item.count).toFixed(2)}</b></span>
                                    <button onClick={()=>{
                                        if(item.count > 1) dispatch(decrementCart(item))
                                    }}>-</button>
                                </div>
                                    <button className="cart-item-delete-btn"
                                    onClick={()=>{
                                        dispatch(deleteCart(item))
                                    }}
                                    >delete</button>
                            </div>
                        </div>
                    })
                }
    <br />
                {
                    <p><b>Total:</b>${cartList.reduce((acc, rec)=>{
                        return acc + (rec.price * rec.count)
                    },0).toFixed(2)}</p>
                }
                <br />
           </div>
        </div>
    );
}

export default Cart;