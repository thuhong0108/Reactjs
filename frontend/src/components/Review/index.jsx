import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToReview } from './reviewSlice';
import './style.scss';

function Review({ id, title }) {
    const dispatch = useDispatch()
    const reviewList = useSelector(state => state.review.reviewList)
    const reviews = reviewList.filter(item => item.id === id)

    const [star, setStar] = useState('')
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(star && content && name && email) {
            dispatch(addToReview({
                id,
                star, 
                content, 
                name, 
                email
            }))

            setStar('')
            setContent('')
            setName('')
            setEmail('')
        }
    }

    const handleDisplayStars = (star) => {
        let starArr = []
        let count = 0
        while(star > count) {
            starArr.push(count)
            count++
        }
        return starArr
    }

    const handleDisplayDate = () => {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return `${day}-${month}-${year}`
    }

    return ( 
        <div className="review">
            <div className="review__left">
                <h3 className="review__left-title">Đánh giá</h3>
                <span className="review__left-total"><span>{reviews.length}</span> đánh giá</span>
                {
                    reviews.length < 1 && (
                        <p className="review__left-first">Hãy là người đầu tiên nhận xét {title}</p>
                    )
                }
                <div className="review__left-list">
                    {
                        reviews.map(item => (
                            <div key={item.name} className="review__left-item">
                                <div className="review__left-wrap">
                                    <h4 className='review__left-name'>{item.name}</h4>
                                    <div className="review__left-stars">
                                        {
                                            handleDisplayStars(item.star).map(x => (
                                                <span key={x}>
                                                    <AiFillStar />
                                                </span>
                                            )) 
                                        }
                                    </div>
                                    <i className="review__left-date">{handleDisplayDate()}</i>
                                </div>
                                <p className="review__left-content">{item.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <form className="review__infor">
                <h5 className="review__infor-title">Đánh giá của bạn</h5>
                <div className="review__infor-stars">
                    <div className="review__infor-stars-wrap">
                        <AiFillStar className={1 <= star && 'review__infor-stars-active'} onClick={() => setStar(1)} />
                        <AiFillStar className={2 <= star && 'review__infor-stars-active'} onClick={() => setStar(2)} />
                        <AiFillStar className={3 <= star && 'review__infor-stars-active'} onClick={() => setStar(3)} />
                        <AiFillStar className={4 <= star && 'review__infor-stars-active'} onClick={() => setStar(4)} />
                        <AiFillStar className={5 <= star && 'review__infor-stars-active'} onClick={() => setStar(5)} />
                    </div>
                    <span className="review__infor-mess">{!star && 'Vui lòng chọn số sao!'}</span>
                </div>
                <div className="review__infor-content review__infor-group">
                    <input value={content} onChange={e => setContent(e.target.value)} placeholder=" " className="review__infor-input" />
                    <label>Nhận xét của bạn *</label>
                    <span className="review__infor-mess">{!content && 'Vui lòng nhập nhận xét'}</span>
                </div>
                <div className="review__infor-wrapp">
                    <div className="review__infor-name review__infor-group">
                        <input value={name} onChange={e => setName(e.target.value)}  placeholder=" " className="review__infor-input"/>
                        <label>Tên *</label>
                        <span className="review__infor-mess">{!name && 'Vui lòng nhập tên'}</span>
                    </div>
                    <div className="review__infor-email review__infor-group">
                        <input value={email} onChange={e => setEmail(e.target.value)}  placeholder=" " className="review__infor-input"/>
                        <label>Email *</label>
                        <span className="review__infor-mess">{!email && 'Vui lòng nhập email'}</span>
                    </div>
                </div>
                <button className="review__infor-submit" onClick={handleSubmit}>Đánh giá</button>
            </form>
        </div>
     );
}

export default Review;