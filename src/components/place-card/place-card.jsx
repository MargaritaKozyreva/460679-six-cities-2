import React from "react";
import PropTypes from "prop-types";

const PlaceCard = ({type, offer, onTitleClickHandler, onCurrentCard}) => {

  return (
    <article className="cities__place-card place-card" onMouseOver={() => onCurrentCard(offer.id)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={offer.link}>
          <img
            className="place-card__image"
            src={offer.img}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span className="visually-hidden">{offer.raiting}</span>
            <span style={{width: `80%`}}></span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onTitleClickHandler}>
          <a href={offer.link}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  type: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    raiting: PropTypes.number
  }),
  onTitleClickHandler: PropTypes.func.isRequired,
  onCurrentCard: PropTypes.func.isRequired
};

export default PlaceCard;
