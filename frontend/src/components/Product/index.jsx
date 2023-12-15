import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils';
import './style.scss';

function Product({ product = {}, onClick = null }) {
    const {id, urlImage, name, originPrice, salePrice} = product
    const navigate = useNavigate()

    const handleProductDetail = () => {
        if(onClick) {
            onClick()
        }
        
        navigate(`/product/${id}`)
    }

    return ( 
        <div className="product">
            <div className="product__image" onClick={handleProductDetail}>
            {
                Array.isArray(urlImage) ? (
                    <div className='product__image-wrap'>
                        <img className='product__image-above' src={urlImage[0]} alt="" />
                        <img className='product__image-below' src={urlImage[1]} alt="" />
                    </div>
                ) : (
                    <img className='product__image-below' src={urlImage} alt="" />
                )
            }
            </div>
            <h4 onClick={handleProductDetail} className="product__name">{name}</h4>
            {
                salePrice > 0 ? (
                    <>
                        <span className="product__sale">Sale</span>
                        <span className="product__price">{formatPrice(salePrice)}</span>
                        <span className="product__originPrice">{formatPrice(originPrice)}</span>
                    </>
                ) : (
                    <span className="product__price">{formatPrice(originPrice)}</span>
                )
            }
        </div>
     );
}

export default Product;