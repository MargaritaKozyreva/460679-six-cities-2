import React from "react";
import Map from "./map.jsx";
import renderer from "react-test-renderer";

describe(`Initial Map`, () => {
  const mockProps = {
    coordinates: [
      [52.3909553943508, 4.85309666406198],
      [52.369553943508, 4.85309666406198],
      [52.3909553943508, 4.929309666406198],
      [52.3809553943508, 4.939309666406198]
    ]
  };
  it(`render correctly`, () => {
    const tree = renderer
      .create(<Map {...mockProps} />, {
        createNodeMock: (element) => {
          if (element.type === `section`) {
            return document.createElement(`section`);
          }
          return null;
        }
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
