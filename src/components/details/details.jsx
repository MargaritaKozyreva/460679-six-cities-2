import React from "react";
import PropTypes from "prop-types";

const Details = (props) => {

  const {
    offers: {
      id,
      title,
      price,
      mainImg,
      gallery,
      raiting,
      roomClass,
      insideList,
    }
  } = props;

  const {offers: {host: {hostImg, userName, userStatus, description}}} = props;

  return (
    <div className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img
                className="property__image"
                src={mainImg}
                alt="Photo studio"
              />
            </div>
            {gallery.map((img, i) => {
              return (
                <div key = {`image-${id}-${i}`} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={img}
                    alt="Photo studio"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{roomClass}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <button
                className="property__bookmark-button button"
                type="button"
              >
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `96%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {raiting}
              </span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                Entire place
              </li>
              <li className="property__feature property__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">Whats inside</h2>
              <ul className="property__inside-list">
                {insideList.map((listItem, i) => {
                  return (
                    <li key={`li-${id}-${i}`} className="property__inside-item">
                      {listItem}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={hostImg}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{userName}</span>
                <span className="property__user-status">{userStatus}</span>
              </div>
              <div className="property__description">
                {description.map((text, i) => <p key = {`p-${id}-${i}`} className="property__text">{text}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Details.propTypes = {
  props: PropTypes.object,
  offers: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mainImg: PropTypes.string.isRequired,
    gallery: PropTypes.array,
    raiting: PropTypes.number.isRequired,
    roomClass: PropTypes.string.isRequired,
    insideList: PropTypes.array.isRequired,
    host: {
      hostImg: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      userStatus: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
    }
  })
};

export default Details;
