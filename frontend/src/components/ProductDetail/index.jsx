import { useEffect, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../utils';
import { addToCart } from '../Cart/cartSlice';
import Loading from '../Loading';
import Product from '../Product';
import Review from '../Review';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
    const { productId } = useParams()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const [sizeSelected, setSizeSelected] = useState('')
    const [quantily, setQuantily] = useState(1)
    const [tabActive, setTabActive] = useState(1)
    const [productSame, setProductSame] = useState([])
    const [image, setImage] = useState('')

    const productList = JSON.parse(localStorage.getItem('products'))
    const product = productList.find(item => item.id === parseInt(productId))
    
    if(product) {
        var { id, categoryId, name, description, urlImage, originPrice, salePrice, size, addInfor } = product
    }

    const reviews = useSelector(state => state.review.reviewList)
    if(reviews) {
        var reviewsFind = reviews.filter(item => item.id === parseInt(productId))
    }
    
    const handleClickSize = (e) => {
        setSizeSelected(e.target.innerText);
    }

    const handleClickImage = (e) => {
        setImage(e.target.src)
    }

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : []
        var count = 0;
        
        const product = products.filter(item => {      
            if(item.categoryId === categoryId && item.id !== id && count < 4) {
                count++
                return item
            }
        })

        setProductSame(product)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 400)

        window.scrollTo(0, 0)
    }, [])

    const handleAddToCart = () => {
        const payload = {
            id,
            name,
            urlImage: Array.isArray(urlImage) ? urlImage[0] : urlImage,
            price: salePrice > 0 ? salePrice : originPrice,
            size: sizeSelected,
            quantily
        }

        dispatch(addToCart(payload))

        setSizeSelected('')
        setQuantily(1)

        toast.success('Thêm vào giỏ hàng thành công!')
    }

    const handleClick = () => {
        setImage('')
    }

    return ( 
        !loading ? (
            <div className="detail container">
                <div className="detail__image">
                    {
                        Array.isArray(urlImage) ? (
                            <>
                                <img className='detail__image-main' src={image ? image : urlImage[0]} alt={name} />
                                <div className='detail__image-list'>
                                    {
                                        urlImage.map(item => (
                                            <img key={item} className='detail__image-item' src={item} onClick={handleClickImage} alt={name} />
                                        ))
                                    }
                                </div>
                            </>
                        ) : (
                            <img className='detail__image-main' src={urlImage} alt={name} />
                        )
                    }
                </div>
                <div className="detail__content">
                    <h2 className="detail__name">{name}</h2>
                    {
                        salePrice > 0 ? (
                            <>
                                <span className='detail__price'>{formatPrice(salePrice)}</span>
                                <span className='detail__originPrice'>{formatPrice(originPrice)}</span>
                            </>
                        ) : (
                            <span className='detail__price'>{formatPrice(originPrice)}</span>
                        )
                    }

                    <div className="detail__desc">
                        {
                            description.map(item => (
                                <p key={item} className="detail__desc-item">{item}</p>
                            ))
                        }
                    </div>

                    <div className="detail__size">
                        SIZE
                        {
                            Array.isArray(size) ? (
                                size.map(item => (
                                    <button 
                                        key={item} 
                                        className={`detail__size-number ${sizeSelected == item ? 'detail__size-active' : ''}`}
                                        onClick={handleClickSize}
                                    >
                                        {item}
                                    </button>    
                                ))
                            ) : (
                                <button 
                                        className={`detail__size-number ${sizeSelected == size ? 'detail__size-active' : ''}`}
                                        onClick={handleClickSize}
                                    >
                                        {size}
                                </button>   
                            )
                        }
                    </div>

                    <div className="detail__payment">
                        <input 
                            className="detail__quantily" 
                            value={quantily} 
                            onChange={e => setQuantily(e.target.value)}
                            onBlur={(e) => !e.target.value ? setQuantily(1) : null}
                        />

                        <button 
                            className={`detail__add 
                                ${(!sizeSelected || !quantily || quantily > 50 || quantily < 1) ? 
                                'detail__add--disabled' : ''}`
                            }
                            onClick={handleAddToCart}
                        >
                            <TiShoppingCart className='detail__add-icon' />
                            <span>Thêm vào giỏ hàng</span>
                        </button>

                        <ToastContainer />
                    </div> 
                </div>


                <div className="detail__tabs">
                    <div className="detail__tabs-title">
                        <h4 
                            className={tabActive === 1 ? 'detail__tabs-title--active' : ''}
                            onClick={() => setTabActive(1)}
                        >
                            Thông tin bổ sung
                        </h4>
                        <h4 
                            className={tabActive === 2 ? 'detail__tabs-title--active' : ''}
                            onClick={() => setTabActive(2)}
                        >
                            Đánh giá <span>({reviewsFind.length})</span>
                        </h4>
                    </div>

                    <div className="detail__tabs-content">
                        <div className={`detail__tabs-content-infor ${tabActive === 1 ? 'detail__tabs-content-active' : ''}`}>
                            <div className="detail__tabs-content-row">
                                <h4>Trọng lượng</h4>
                                <span>{addInfor.weight}</span>
                            </div>
                            <div className="detail__tabs-content-row">
                                <h4>Kích thước</h4>
                                <span>{addInfor.size}</span>
                            </div>
                            <div className="detail__tabs-content-row">
                                <h4>Color Wash</h4>
                                <span>{addInfor.color}</span>
                            </div>
                            {
                                addInfor.fit ? (
                                    <div className="detail__tabs-content-row">
                                        <h4>Fit</h4>
                                        <span>{addInfor.fit}</span>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }
                            <div className="detail__tabs-content-row">
                                <h4>Size</h4>
                                {
                                    Array.isArray(size) ? (
                                        <div>
                                            {
                                                size.map(item => (
                                                    <span key={item}>{item} </span>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                    <span>{size}</span>   
                                    )
                                }
                            </div>
                        </div>
                        <div className={`detail__tabs-content-reviews ${tabActive === 2 ? 'detail__tabs-content-active' : ''}`}>
                            <Review title={name} id={id} />
                        </div>
                    </div>
                </div>

                <div className="detail__same">
                    <h2 className='detail__same-title'>Sản phẩm tương tự</h2>
                    <div className="detail__same-list">
                        {
                            productSame.map(item => (
                                <Product 
                                    onClick={handleClick}
                                    key={item.id}
                                    product={item} 
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )  : (
            <Loading />
        )
     );
}

export default ProductDetail;