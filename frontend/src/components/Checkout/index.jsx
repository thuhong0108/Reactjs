import { useFormik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { formatPrice } from '../../utils';
import { removeAllFromCart } from '../Cart/cartSlice';
import Loading from '../Loading';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {
    const codeList = [
        {
            id: 1,
            name: 'ABCXY',
            value: 5
        },
        {
            id: 2,
            name: 'JFUSN',
            value: 10
        },
        {
            id: 3,
            name: 'FWLDM',
            value: 15
        }
    ]

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartList = useSelector(state => state.cart.cartList)
    const [loading, setLoading] = useState(true)

    const [displayCode, setDisplayCode] = useState(false)
    const [codeInput, setCodeInput] = useState('')
    const [codeValue, setCodeValue] = useState(0)
    const [showRemindModal, setShowRemindModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const ship = 40000
    const totalPrice = useMemo(() => (
        cartList.reduce((total, item) => total + (item.price * item.quantily), 0)
    ), [cartList])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 400)

        window.scrollTo(0, 0)
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            note: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Trường này là bắt buộc').min(5, 'Vui lòng nhập ít nhất 5 kí tự').max(30, 'Vui lòng nhập ít hơn 30 kí tự'),
            phone: Yup.string().required('Trường này là bắt buộc').matches(/^[0-9\-\+]{9,15}$/, 'Số điện thoại không hợp lệ'),
            email: Yup.string().required('Trường này là bắt buộc').email('Trường này phải là email').max(50, 'Vui lòng nhập ít hơn 50 kí tự'),
            address: Yup.string().required('Trường này là bắt buộc').min(10, 'Vui lòng nhập ít nhất 10 kí tự').max(255, 'Vui lòng nhập ít hơn 255 kí tự'),

        }),
        onSubmit: (values) => {
            setShowRemindModal(true)
            handleDisabledScroll()
        },
    })

    const handleDisplayCode = () => {
        setDisplayCode(state => !state)
    }

    const handleConfirm = () => {
        setShowSuccessModal(true)
        setShowRemindModal(false)
    }

    const handleCancel = () => {
        setShowRemindModal(false)
        handleEnableScroll()
    }

    const handleComplete = () => {
        dispatch(removeAllFromCart())
        setShowSuccessModal(false)

        navigate('/cart')

        handleEnableScroll()
        window.scrollTo(0, 0)
    }

    const handleDisabledScroll = () => {
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = function(){
            window.scrollTo(x, y)
        }
    }

    const handleEnableScroll = () => {
        window.onscroll = function(){ }
    }

    const handleCode = () => {
        const codeIsFind = codeList.find(item => item.name === codeInput.trim())

        if(codeIsFind) {
            setCodeValue(codeIsFind.value)
            toast.success('Áp dụng mã giảm giá thành công!')
        }
        else {
            toast.error('Mã giảm giá không chính xác!')
        }
        
        setCodeInput('')
    }

    return ( 
        !loading ? (
            <div className={`checkout ${(showRemindModal || showSuccessModal) ? 'checkout--actived' : ''}`}>
                <div className="checkout__main container">
                    <h1 className="checkout__heading">Thanh toán</h1> 
                    <div className="checkout__ques">
                        <span>Bạn có mã ưu đãi?</span>
                        <b onClick={handleDisplayCode}>Nhấp vào đây để nhập mã</b>
                    </div>
                    <div className={`checkout__code ${displayCode ? 'checkout__code--active' : ''}`}>
                        <div className={`checkout__code-input ${displayCode ? 'checkout__code-input--active' : ''}`}>
                            <input 
                                type="text" 
                                placeholder='Mã ưu đãi' 
                                value={codeInput}
                                onChange={e => setCodeInput(e.target.value)}
                            />
                        </div>
                        <button 
                            className={!codeInput.trim() ? 'checkout__code--disabled' : ''}
                            onClick={handleCode}
                        >
                            Áp dụng
                        </button>  
                    </div>
                    <ToastContainer />
                    <form className="checkout__infor" onSubmit={formik.handleSubmit}>
                        <div className="checkout__infor-person">
                            <h2>Thông tin liên hệ</h2>
                            <form className="checkout__infor-person-form">
                                <div className="checkout__infor-person-row">
                                    <div className="checkout__infor-person-wrap">
                                        <label>Họ và tên <span>*</span></label>
                                        <input 
                                            type="text" 
                                            placeholder='Họ tên của bạn' 
                                            id='name' 
                                            name='name' 
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />    
                                    </div>
                                    <span className='checkout__infor-person-mess'>
                                        {formik.errors.name ? formik.errors.name : ''}    
                                    </span>
                                </div>
                                <div className="checkout__infor-person-row">
                                    <div className="checkout__infor-person-wrap">
                                        <label>Số điện thoại <span>*</span></label>
                                        <input 
                                            type="text" 
                                            placeholder='Số điện thoại của bạn' 
                                            id='phone' 
                                            name='phone'
                                            value={formik.values.phone}
                                            onChange={formik.handleChange} 
                                        />  
                                    </div>
                                    <span className='checkout__infor-person-mess'>
                                        {formik.errors.phone ? formik.errors.phone : ''}   
                                    </span>                    
                                </div>
                                <div className="checkout__infor-person-row">
                                    <div className="checkout__infor-person-wrap">
                                        <label>Email <span>*</span></label>
                                        <input 
                                            type="text" 
                                            placeholder='Email của bạn' 
                                            id='email' 
                                            name='email' 
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />   
                                    </div>
                                    <span className='checkout__infor-person-mess'>
                                        {formik.errors.email ? formik.errors.email : ''}   
                                    </span>
                                </div>
                                <div className="checkout__infor-person-row checkout__infor-person-last">
                                    <div className="checkout__infor-person-wrap">
                                        <label>Địa chỉ <span>*</span></label>
                                        <input 
                                            type="text" 
                                            placeholder='Địa chỉ của bạn' 
                                            id='address' 
                                            name='address' 
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                        />   
                                    </div>
                                        <span className='checkout__infor-person-mess'>
                                            {formik.errors.address ? formik.errors.address : ''}       
                                        </span>
                                </div>  
                                <div className="checkout__infor-person-add">
                                    <h3>Thông tin bổ sung</h3>
                                    <label>Ghi chú đơn hàng (tùy chọn)</label>
                                    <textarea 
                                        placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.'
                                        rows="3" 
                                        name="note" 
                                        id="note" 
                                        value={formik.values.note}
                                        onChange={formik.handleChange}
                                    >
                                    </textarea>
                                    <span className='checkout__infor-person-mess'>
                                        {formik.errors.note ? formik.errors.note : ''}   
                                    </span>
                                </div>  
                            </form>
                        </div>
                        <div className="checkout__infor-order">
                            <h2>Đơn hàng của bạn</h2>
                            <div className="checkout__infor-order-form">
                                <div className="checkout__infor-order-list">
                                    {
                                        cartList.map(item => (
                                            <div className="checkout__infor-order-item" key={item.id}>
                                                <img 
                                                    className='checkout__infor-order-image'
                                                    src={Array.isArray(item.urlImage) ? item.urlImage[0] : item.urlImage} 
                                                    alt={item.name} 
                                                />
                                                <div className="checkout__infor-order-basic">
                                                    <h5 className="checkout__infor-order-name">{item.name}</h5>
                                                    <span>Size: {item.size}, </span>
                                                    <span>SL: {item.quantily}</span>
                                                </div>
                                                <span className="checkout__infor-order-totalitem">{formatPrice(item.price * item.quantily)}</span>
                                            </div>
                                        ))
                                    }    
                                </div>
                                <div className="checkout__infor-order-provisional checkout__infor-order-group">
                                    <span>TẠM TÍNH</span>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <div className="checkout__infor-order-ship checkout__infor-order-group">
                                    <span>SHIP</span>
                                    <span>{formatPrice(ship)}</span>
                                </div>
                                <div className="checkout__infor-order-code checkout__infor-order-group">
                                    <span>CODE</span>
                                    <span>{codeValue > 0 ? `-${codeValue}%` : `${codeValue}%`}</span>
                                </div>
                                <div className="checkout__infor-order-total checkout__infor-order-group">
                                    <span>TỔNG CỘNG</span>
                                    <span>
                                        { formatPrice((totalPrice + ship) - (totalPrice + ship) * (codeValue / 100) ) }
                                    </span>
                                </div>
                                <div className="checkout__infor-order-notifi checkout__infor-order-group">
                                    Bạn đặt hàng và thanh toán sau khi nhân viên bưu điện đưa hàng đến nơi và thu tiền tận nhà bạn.
                                </div>
                                <button 
                                    type='submit'
                                    className="checkout__infor-order-button"
                                >
                                    ĐẶT HÀNG
                                </button>
                            </div>
                        </div>    
                        {
                            showRemindModal && (
                                <div className={`checkout__remind ${showRemindModal ? 'checkout__remind--actived' : ''}`}>
                                    <p className="checkout__remind-content">Bạn có chắc chắn đặt hàng ?</p>
                                    <div className="checkout__remind-button">
                                        <button 
                                            className="checkout__remind-confirm"
                                            onClick={handleConfirm}
                                        >
                                            Xác nhận
                                        </button>
                                        <button 
                                            type='button' 
                                            className="checkout__remind-back" 
                                            onClick={handleCancel}
                                            >
                                                Hủy bỏ
                                        </button>
                                    </div>
                                </div>
                            ) 
                        }
                        {
                            showSuccessModal && (
                                <div className="checkout__success">
                                    <p className="checkout__success-content">Bạn đã thanh toán thành công</p>
                                    <div className="checkout__success-icon">
                                        <AiFillCloseSquare onClick={handleComplete} />
                                    </div>
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        ) : (
            <Loading />
        )
     );
}

export default Checkout;