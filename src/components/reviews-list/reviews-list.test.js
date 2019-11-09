import React from "react";
import ReviewsList from "./reviews-list.jsx";
import renderer from "react-test-renderer";

describe(`initial ReviewsList`, () => {

  const mockProps = {
    reviews: [
      {
        id: 1,
        userName: `Max`,
        userImg: `img/avatar-max.jpg`,
        userRaiting: 4.5,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        createDate: `2019-05-21`
      },
      {
        id: 2,
        userName: `Max`,
        userImg: `img/avatar-max.jpg`,
        userRaiting: 4.5,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        createDate: `2019-05-21`
      }
    ]
  };


  it(`Component renders correctly`, () => {
    const tree = renderer.create(<ReviewsList {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
