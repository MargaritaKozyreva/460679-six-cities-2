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

const App = ({props}) => {

  const coords = [];
  const cards = [];

  const onTitleClickHandler = () => {};

  // eslint-disable-next-line react/prop-types
  props.map((card) =>
    card.offers.forEach((offer) => coords.push(offer.coordinates))
  );
  // eslint-disable-next-line react/prop-types
  props.map((card) => card.offers.forEach((car) => cards.push(car)));

  return (
    <Fragment>
      {getPageScreen(cards, coords, onTitleClickHandler)}
    </Fragment>
  );
};

App.propTypes = {
  props: PropTypes.PropTypes.arrayOf()
};

export default App;
