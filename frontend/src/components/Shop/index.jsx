import { useEffect, useState } from "react";
import Loading from "../Loading";
import Product from "../Product";
import './style.scss';

function Shop() {
    const [productAll, setProductAll] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {  
        const products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : []
        setProductAll(products)
        
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)

        window.scrollTo(0, 0)
    }, [])

    return ( 
        <>
            {
                !loading ? (
                    <div className="shop">
                        <p className='shop__quantily'>Hiển thị tất cả {productAll.length} kết quả</p>
                        <div className="shop__list">
                            {
                                productAll.map(item => (
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

export default Shop;