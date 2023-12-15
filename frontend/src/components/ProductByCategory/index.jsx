import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import Product from '../Product';
import './style.scss';

function ProductByCategory() {
    const { category } = useParams()
    const [productsByCategory, setProductsByCategory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const categories = JSON.parse(localStorage.getItem('categories')) ? JSON.parse(localStorage.getItem('categories')) : []
        const products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : []

        const categoryFind = categories.find(item => item.name.toLowerCase().includes(category) ? item : null)
        const productC = products.filter(item => item.categoryId === categoryFind.id)

        setProductsByCategory(productC)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return ( 
        <>
            {
                !loading ? (
                    <div className="productsByCategory">
                        <p className='productsByCategory__quantily'>Hiển thị tất cả {productsByCategory.length} kết quả</p>
                        <div className="productsByCategory__list">
                            {
                                productsByCategory.map(item => (
                                    <Product 
                                        key={item.id}
                                        product={item} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <Loading />
                )
            }
        </>
     );
}

export default ProductByCategory;