import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    const cart = useSelector(s => s.reducer.cart); 
    const cartCount = cart.reduce((total, item) => total + item.count, 0);

    return (
        <header className="header">
            <h1>
                <Link to={'/'}>Shop</Link>
            </h1>

            <nav>
                {
                    categories.map(item => (
                        <Link to={`/category/${item}`} key={item}>{item}</Link>
                    ))
                }
                <Link to={'/'}>Home</Link>
                <Link to={'/cart'} className="cart-icon">
                    🛒
                    {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
                </Link>
            </nav>
        </header>
    );
}

export default Header;
