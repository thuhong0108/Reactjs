import { Link } from 'react-router-dom';
import './style.scss'
import Denim from '../../assets/image/denim.jpg'
import Jackets from '../../assets/image/jackets.jpg'
import T_shirts from '../../assets/image/t-shirts.jpg'

function Category() {
    const denim = 'denim'
    const jackets = 'jackets'
    const t_shirts = 't-shirts'

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return ( 
        <ul className='category container'>
            <li className="category__item">
                <Link to={`product-category/${denim}`} onClick={handleClick}>
                    <img src={Denim} alt="" className="category__image" />
                </Link>
            </li>
            <li className="category__item">
                <Link to={`product-category/${jackets}`} onClick={handleClick}>
                    <img src={Jackets} alt="" className="category__image" />
                </Link>
            </li>
            <li className="category__item">
                <Link to={`product-category/${t_shirts}`} onClick={handleClick}>
                    <img src={T_shirts} alt="" className="category__image" />
                </Link>
            </li>
        </ul>
     );
}

export default Category;