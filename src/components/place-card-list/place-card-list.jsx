import React, {Component} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";

export default class PlaceCardList extends Component {
  constructor() {
    super();
    this.state = {
      currentCard: 1
    };

    this.onCurrentCard = this.onCurrentCard.bind(this);
  }

  onCurrentCard(idx) {
    this.setState({
      currentCard: idx
    });
  }

  render() {

    const {cards, onTitleClickHandler} = this.props;

    return cards.map((card) => {
      return card.offers.map((offer) => (
        <PlaceCard
          type={card.type}
          offer={offer}
          onTitleClickHandler={onTitleClickHandler}
          onCurrentCard={this.onCurrentCard}
          key={offer.id}
        />
      ));
    });
  }
}

PlaceCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  onTitleClickHandler: PropTypes.func
};
