import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({adapter: new Adapter()});

describe(`PlaceCard initial`, () => {
  const clickHandler = jest.fn();

  const mockProps = {
    list: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`
    ],
    clickHandler
  };

  const placeCard = shallow(<PlaceCard {...mockProps} />);

  it(`PlaceCard click on title correctly`, () => {
    const title = placeCard.find(`h2`);
    title.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
