import React from "react";
import PlaceCard from "./place-card";
import renderer from "react-test-renderer";

describe(`initial PlaceCard`, () => {

  const onTitleClickHandler = jest.fn();
  const onCurrentCard = jest.fn();

  const mockProps = {
    type: `Apartment`,
    offer: {
      title: `Canal View Prinsengracht`,
      link: `#`,
      price: 140,
      img: `img/apartment-01.jpg`,
      raiting: 3
    },
    onTitleClickHandler,
    onCurrentCard,
  };

  it(`PlaceCard renders correctly`, () => {
    const tree = renderer.create(<PlaceCard {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
