import React from "react";
import PropTypes from "prop-types";

const ReviewsItem = ({review}) => {

  const {userName, userImg, userRaiting, text, createDate} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={userImg}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `94%`}} />
            <span className="visually-hidden">{userRaiting}</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={createDate}>
          {createDate}
        </time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    userName: PropTypes.string,
    userImg: PropTypes.string,
    userRaiting: PropTypes.number,
    text: PropTypes.string,
    createDate: PropTypes.string
  })
};

export default ReviewsItem;
