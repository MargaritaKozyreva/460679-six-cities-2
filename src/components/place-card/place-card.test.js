import React from "react";
import PlaceCard from "./place-card";
import renderer from "react-test-renderer";

describe(`initial PlaceCard`, () => {

  const clickHandler = jest.fn();

  const mockProps = {
    title: `test`,
    link: `test`,
    clickHandler
  };

  it(`PlaceCard renders correctly`, () => {
    const tree = renderer.create(<PlaceCard {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
