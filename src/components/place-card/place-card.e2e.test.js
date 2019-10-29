import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({adapter: new Adapter()});

describe(`PlaceCard initial`, () => {
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
    onCurrentCard
  };

  const placeCard = shallow(<PlaceCard {...mockProps} />);

  it(`PlaceCard click on title correctly`, () => {
    const title = placeCard.find(`.place-card__name`);
    title.simulate(`click`);
    expect(onTitleClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`PlaceCard focus on card correctly`, () => {
    const card = placeCard.find(`.cities__place-card`);
    card.simulate(`mouseOver`, {target: 0});
    expect(onCurrentCard).toBeCalled();
  });
});
