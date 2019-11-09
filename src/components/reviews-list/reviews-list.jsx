import React from "react";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import PropTypes from "prop-types";

const ReviewsList = ({reviews}) => {

  const reviewsCount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReviewsList;
