import './style.scss'

function Contact() {
    return ( 
        <div className='contact container'>
            <h2 className="contact__heading">Store Information</h2>
            <h3 className="contact__name">TPHCM</h3>
            <div className="contact__infor">
                <div className="contact__row">
                    <h5 className='contact__title'>Phone</h5>
                    <span className='contact__content'>0925 743 149 – 0946 342 951</span>
                </div>
                <div className="contact__row">
                    <h5 className='contact__title'>Adress</h5>
                    <span className='contact__content'>Tầng 2, 41 Đặng Thị Nhu, Quận 1</span>
                    <span className='contact__content'>10:30am – 08:30pm </span>
                </div>
                <div className="contact__row">
                    <h5 className='contact__title'>Email</h5>
                    <span className='contact__content'>thedenimaniac@gmail.com</span>
                </div>
            </div>
        </div>
     );
}

export default Contact;