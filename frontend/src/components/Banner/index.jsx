import './style.scss'
import banner from '../../assets/image/banner.jpg'
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('shop')
    }

    return ( 
        <div className="banner">
            <img className='banner__image' src={banner} alt="" />
            <button className='banner__button' onClick={handleNavigate}>Shop Now</button>
        </div>
     );
}

export default Banner;