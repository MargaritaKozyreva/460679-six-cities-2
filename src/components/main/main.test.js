import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

describe(`initial Main`, () => {
  const mockProps = {
    list: []
  };

  it(`Main renders correctly`, () => {
    const tree = renderer.create(<Main {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
