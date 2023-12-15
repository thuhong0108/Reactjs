import { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp, FaShoppingBag } from 'react-icons/fa';
import { RiMenu2Fill } from 'react-icons/ri';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import './style.scss';

function Header() {
    const navigate = useNavigate()
    const [activedMenu, setActivedMenu] = useState(false)
    const [activedMenuChild, setActivedMenuChild] = useState(false)

    const denim = 'denim'
    const jackets = 'jackets'
    const t_shirts = 't-shirts'

    const handleBackHome = () => {
        navigate('/')
    }

    const handlePageCart = () => {
        navigate('cart')
    }

    const handleActivedMenu = () => {
        setActivedMenu(true)
    }

    const handleCloseMenu = () => {
        setActivedMenu(false)
    }

    const handleActivedMenuChild = () => {
        if(window.innerWidth <= 1024) {
            setActivedMenuChild(state => !state)
        }
    }

    const handleClick = (e) => {
        if(e.target.localName === 'h4' || e.target.localName === 'a' || e.target.classList.contains('header__layer')) {
            setActivedMenu(false)
        }
    }

    return ( 
        <>
            <header onClick={handleClick} className={`header ${activedMenu && 'header__layer'}`}>
                <div className="container header__main">
                    <div className="header__menu" onClick={handleActivedMenu}>
                        <RiMenu2Fill />
                    </div>
                    <div className="header__logo">
                        <img src={logo} onClick={handleBackHome} />
                    </div>
                    <div className={`header__close ${activedMenu && 'header__close--actived'}`} onClick={handleCloseMenu}>
                        <AiOutlineCloseSquare />
                    </div>
                    <ul className={`header__list ${activedMenu && 'header__list--actived'}`}>
                        <li className="header__item">
                            <div className='header__parent'>
                                <NavLink to='/shop' className={({isActive}) => isActive ? 'header__active' : ''}>
                                    <h4 className='header__link'>Shop</h4>
                                </NavLink>
                                {
                                    activedMenuChild ? (
                                        <FaAngleUp onClick={handleActivedMenuChild} />
                                    ) : (
                                        <FaAngleDown onClick={handleActivedMenuChild} />
                                    )
                                }
                            </div>
                            <ul className={`header__child ${activedMenuChild ? 'header__child--actived' : ''}`}>
                                <li className="header__child-item">
                                    <Link to='shop'>Tất cả sản phẩm</Link>
                                </li>
                                <li className="header__child-item">
                                    <Link to={`product-category/${denim}`}>Denim</Link>
                                </li>
                                <li className="header__child-item">
                                    <Link to={`product-category/${jackets}`}>Jackets</Link>
                                </li>
                                <li className="header__child-item">
                                    <Link to={`product-category/${t_shirts}`}>T-shirts</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="header__item">
                            <NavLink to='/contact' className={({isActive}) => isActive ? 'header__active' : ''}>
                                <h4 className='header__link'>Contact</h4>
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to='/instagram-shop' className={({isActive}) => isActive ? 'header__active' : ''}>
                                <h4 className='header__link'>Instagram Style</h4>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="header__cart" onClick={handlePageCart}>
                        <FaShoppingBag />
                    </div>
                </div>
            </header>

            <Outlet />
        </>
     );
}

export default Header;