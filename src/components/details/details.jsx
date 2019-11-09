import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import Map from "../map/map.jsx";

const Details = ({details, cards, coords, onTitleClickHandler}) => {

  const coordsForView = coords.filter(
      (coord) => coord.toString() !== details.coordinates.toString()
  );
  const filterCards = cards.filter((card) => card.id !== details.id);

  return (
    <div className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img
                className="property__image"
                src={details.mainImg}
                alt="Photo studio"
              />
            </div>
            {details.gallery.map((img, i) => {
              return (
                <div
                  key={`image-${details.id}-${i}`}
                  className="property__image-wrapper"
                >
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
              <span>{details.roomClass}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">{details.title}</h1>
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
                {details.raiting}
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
              <b className="property__price-value">{details.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">Whats inside</h2>
              <ul className="property__inside-list">
                {details.insideList.map((listItem, i) => {
                  return (
                    <li key={`li-${details.id}-${i}`} className="property__inside-item">
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
                    src={details.host.hostImg}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{details.host.userName}</span>
                <span className="property__user-status">{details.host.userStatus}</span>
              </div>
              <div className="property__description">
                {details.host.description.map((text, i) => (
                  <p key={`p-${details.id}-${i}`} className="property__text">
                    {text}
                  </p>
                ))}
              </div>
              <ReviewsList reviews={details.reviews} />
            </div>
          </div>
        </div>
        <div
          style={{
            width: `100%`,
            height: `579px`
          }}
        >
          <Map coordinates={coordsForView} />
        </div>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
           Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <PlaceCardList
              cards={filterCards}
              onTitleClickHandler={onTitleClickHandler}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

Details.propTypes = {
  props: PropTypes.object,
  details: PropTypes.shape({
    coordinates: PropTypes.array.isRequired,
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
    },
    reviews: PropTypes.arrayOf(PropTypes.object.isRequired),
    details: PropTypes.object,
  }),
  coords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  cards: PropTypes.array,
  onTitleClickHandler: PropTypes.func
};

export default Details;
