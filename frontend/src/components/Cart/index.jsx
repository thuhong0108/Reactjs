import { useEffect, useMemo, useState } from 'react';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';
import { RiSubtractLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils';
import Loading from '../Loading';
import { changeQuantily, removeFromCart } from './cartSlice';
import './style.scss';

function Cart() {
    const [loading, setLoading] = useState(true)
    const cartList = useSelector(state => state.cart.cartList)
    console.log(cartList);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 400)

        window.scrollTo(0, 0)
    }, [])

    const handleRemoveFromCart = (id, size) => {
        dispatch(removeFromCart({
            id,
            size
        }))
    }

    const handleChangeQuantily = (newQuantily, id, size) => {
        if(newQuantily > 0) {
            dispatch(changeQuantily({
                newQuantily,
                id, 
                size
            }))
        }
    }

    const totalPrice = useMemo(() => (
        cartList.reduce((total, item) => total + (item.quantily * item.price), 0)
    ), [cartList])

    const handlePayment = () => {
        navigate('/checkout')
    }
    
    const handleProductDetail = (id) => {
        navigate(`/product/${id}`)
    }

    const handlePageShop = () => {
        navigate('/shop')
    }

    return ( 
        !loading ? (
            <div className="cart container">
                <div className="cart__title">
                    <h4>Sản phẩm</h4>
                    <h4>Giá</h4>
                    <h4>Số lượng</h4>
                    <h4>Size</h4>
                    <h4>Tổng</h4>
                </div>

                {
                    cartList.length > 0 ? (
                        <>
                            <div className="cart__list">
                                {
                                    cartList.map(item => (                                  
                                        <div className='cart__item' key={item.id}>
                                            <div className="cart__infor">
                                                <img onClick={() => handleProductDetail(item.id)} src={item.urlImage} className="cart__image" />
                                                <h4 onClick={() => handleProductDetail(item.id)} className="cart__name">{item.name}</h4>
                                            </div>
                                            <div className="cart__price cart__row">
                                                <h5 className='cart__note'>Giá: </h5>
                                                <span className="cart__price-number">{formatPrice(item.price)}</span>
                                            </div>
                                            <div className="cart__quantily cart__row">
                                                <h5 className='cart__note'>Số lượng: </h5>
                                                <div className="cart__quantily-wrap">
                                                    <RiSubtractLine 
                                                        onClick={() =>handleChangeQuantily(item.quantily - 1, item.id, item.size)} 
                                                        className='cart__reduce cart__icon' 
                                                    />
                                                    <span className="cart__quantily-number">{item.quantily}</span>
                                                    <AiOutlinePlus 
                                                        onClick={() => handleChangeQuantily(item.quantily + 1, item.id, item.size)} 
                                                        className='cart__increase cart__icon'
                                                    />
                                                </div>
                                            </div>
                                            <div className="cart__size cart__row">
                                                <h5 className='cart__note'>Size: </h5>
                                                <span className="cart__size-nuumber">{item.size}</span>
                                            </div>
                                            <div className="cart__total cart__row">
                                                <h5 className='cart__note'>Tổng:</h5>
                                                <span className="cart__total-number">{formatPrice(item.price * item.quantily)}</span>
                                            </div>
                                            <AiFillDelete 
                                                onClick={() => handleRemoveFromCart(item.id, item.size)}
                                                className='cart__remove cart__icon' 
                                            />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="cart__bottom">
                                <div className="cart__bottom-total">
                                    <h4>Tổng tiền:</h4>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <button className="cart__payment" onClick={handlePayment}>Tiến hành thanh toán</button>
                                <button className="cart__buymore" onClick={handlePageShop}>Mua thêm sản phẩm khác</button>
                            </div>
                        </>
                    ) : (
                        <div className='cart__empty'>
                            <h2 className='cart__mess'>Chưa có sản phẩm nào trong giỏ hàng!</h2>
                            <button className="cart__back" onClick={handlePageShop}>Quay trở lại cửa hàng</button>
                        </div>
                    )
                }
            </div>
        ) : (
            <Loading />
        )
     );
}

export default Cart;