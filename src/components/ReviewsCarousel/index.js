import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  // const {reviewsList} = this.props

  render() {
    const {reviewsList} = this.props
    // const {imgUrl, username, companyName, description} = reviewsList[0]

    const review = eachReview => (
      <div className="review-block">
        <p>{eachReview.username}</p>
        <img src={eachReview.imgUrl} alt={eachReview.username} />
        <p>{eachReview.companyName}</p>
        <p>{eachReview.description}</p>
      </div>
    )

    return (
      <div className="reviewContainer">
        <h1>Reviews</h1>
        <ul className="each-review">
          {reviewsList.map(newReview => review(newReview))}
        </ul>
      </div>
    )
  }
}

export default ReviewsCarousel
