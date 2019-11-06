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

    const leafletMock = jest.mock(`leaflet`);
    const citys = [{
      coords: [0, 0],
    }];

    const tree = renderer
      .create(<Map {...mockProps} leaflet={leafletMock} citys={citys}/>, {
        createNodeMock: () => {

          let mapMock = document.createElement(`section`);
          mapMock.setAttribute(`id`, `map`);
          document.body.appendChild(mapMock);

          return mapMock;

        }
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
