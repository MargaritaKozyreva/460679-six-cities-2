import React from "react";
import ReviewsItem from "./reviews-item.jsx";
import renderer from "react-test-renderer";

describe(`initial ReviewsItem`, () => {

  const mockProps = {
    review: {
      id: 1,
      userName: `Max`,
      userImg: `img/avatar-max.jpg`,
      userRaiting: 4.5,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      createDate: `2019-05-21`
    }
  };

  it(`Component renders correctly`, () => {
    const tree = renderer.create(<ReviewsItem {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
