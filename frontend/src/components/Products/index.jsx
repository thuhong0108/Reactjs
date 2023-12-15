import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Product from '../Product';
import './style.scss';

function Products() {
    const [loading, setLoading] = useState(false)
    const [productAll, setProductAll] = useState([])
    const [productNew, setProductNew] = useState([])
    const [productSale, setProductSale] = useState([])
    const [categoryActive, setCategoryActive] = useState('all')

    useEffect(() => {
        (async() => {
            const response = await axios.get('/v1/products')
            const data = await response.data;

            const [categories, productList] = data

            var count = 0

            const productS = productList.filter(item => item.salePrice > 0)

            const productN = productList.filter(item => {
                count++
                return productList.length - 12 < count
            })

            setProductAll(productList)
            setProductSale(productS)
            setProductNew(productN)

            localStorage.setItem('categories', JSON.stringify(categories))
            localStorage.setItem('products', JSON.stringify(productList))
        })()
    }, [])

    const handleSetCategoryActive = (type) => {
        setCategoryActive(type)
        setLoading(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading])

    return ( 
        <div className="products container">
            <div className="products__category">
                <h5 
                    className={categoryActive === 'all' ? 'products__category-active' : ''}
                    onClick={() => handleSetCategoryActive('all')}
                >
                    All
                </h5>
                <h5 
                    className={categoryActive === 'new' ? 'products__category-active' : ''}
                    onClick={() => handleSetCategoryActive('new')}
                >
                    New Arrival
                </h5>

                <h5 
                    className={categoryActive === 'sale' ? 'products__category-active' : ''}
                    onClick={() => handleSetCategoryActive('sale')}
                >
                    Sale
                </h5>
            </div>

            {
                !loading ? (
                    <>
                        <div className={`products__list ${categoryActive === 'all' ? 'products__list-active' : ''}`}>
                            {
                                productAll.map(item => (
                                    <Product 
                                        key={item.id}
                                        product={item} 
                                    />
                                ))
                            }
                        </div>

                    <div className={`products__list ${categoryActive === 'new' ? 'products__list-active' : ''}`}>
                        {
                            productNew.map(item => (
                                <Product 
                                    key={item.id}
                                    product={item} 
                                />
                            ))
                        }
                    </div>

                    <div className={`products__list ${categoryActive === 'sale' ? 'products__list-active' : ''}`}>
                        {
                            productSale.map(item => (
                                <Product 
                                    key={item.id}
                                    product={item} 
                                />
                            ))
                        }
                    </div>
                    </>
                ) : (
                    <Loading />
                )
            }

        </div>
     );
}

export default Products;