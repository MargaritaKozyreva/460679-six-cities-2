import React from "react";
import Map from "./map.jsx";
import renderer from "react-test-renderer";

describe(`Initial Map`, () => {
  const mockProps = {
    coordinates: {
      0: [52.3909553943508, 4.85309666406198],
      1: [52.369553943508, 4.85309666406198],
      2: [52.3909553943508, 4.929309666406198],
      3: [52.3809553943508, 4.939309666406198]
    }
  };
  it(`render correctly`, () => {
    const tree = renderer.create(<Map {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
