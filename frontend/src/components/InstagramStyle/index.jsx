import './style.scss'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

function InstagramStyle() {
    return ( 
        <div className="instagram container">
            <h2 className="instagram__heading">Instagram Shop</h2>
            <div className="instagram__icons">
                <a href="https://www.facebook.com/thedenimaniac/" target='_blank'>
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/thedenimaniac/" target='_blank'>
                    <AiFillInstagram />    
                </a>
            </div>
        </div>
     );
}

export default InstagramStyle;