import React, {Fragment} from "react";
import Main from "../main/main.jsx";
import Details from "../details/details.jsx";
import PropTypes from "prop-types";

const getPageScreen = (cards, coords, onTitleClickHandler) => {

  const details = cards[0];

  switch (location.pathname) {
    case `/`:
      return (
        <Main
          cards={cards}
          coords={coords}
          onTitleClickHandler={onTitleClickHandler}
        />
      );
    case `/details`:
      return (
        <Details
          details={details}
          cards={cards}
          coords={coords}
          onTitleClickHandler={onTitleClickHandler}
        />
      );
  }
  return null;
};

const App = ({cards}) => {

  const coordsArray = [];
  const cardsArray = [];

  const onTitleClickHandler = () => {};

  cards.map((card) =>
    card.offers.forEach((offer) => coordsArray.push(offer.coordinates))
  );

  cards.map((card) => card.offers.forEach((car) => cardsArray.push(car)));

  return (
    <Fragment>
      {getPageScreen(cardsArray, coordsArray, onTitleClickHandler)}
    </Fragment>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number),
      gallery: PropTypes.arrayOf(PropTypes.string),
      host: PropTypes.shape({
        hostImg: PropTypes.string,
        userName: PropTypes.string,
        userStatus: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.string)
      }),
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      insideList: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string,
      mainImg: PropTypes.string,
      price: PropTypes.number,
      raiting: PropTypes.number,
      reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        userImg: PropTypes.string,
        userRaiting: PropTypes.number,
        text: PropTypes.string,
        createDate: PropTypes.string,
      })).isRequired,
      roomClass: PropTypes.string,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }))
  })),
  coords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  onTitleClickHandler: PropTypes.func.isRequired
};

export default App;
