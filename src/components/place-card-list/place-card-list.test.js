import React from "react";
import PlaceCardList from "./place-card-list.jsx";
import renderer from "react-test-renderer";

describe(`initial PlaceCardList`, () => {

  const onTitleClickHandler = jest.fn();

  const mockProps = {
    cards: [
      {
        type: `Private room`,
        offers: [
          {
            id: 4,
            title: `Nice, cozy, warm big bed apartment`,
            link: `#`,
            price: 170,
            img: `img/apartment-01.jpg`,
            raiting: 3
          }
        ]
      },
      {
        type: `Private room`,
        offers: [
          {
            id: 4,
            title: `Nice, cozy, warm big bed apartment`,
            link: `#`,
            price: 170,
            img: `img/apartment-01.jpg`,
            raiting: 3
          }
        ]
      }
    ],
    onTitleClickHandler
  };

  it(`PlaceCardList renders correctly`, () => {
    const tree = renderer.create(<PlaceCardList {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
