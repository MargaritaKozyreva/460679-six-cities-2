import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

describe(`initial Main`, () => {
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
  };

  it(`Main renders correctly`, () => {
    const tree = renderer.create(<Main {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});