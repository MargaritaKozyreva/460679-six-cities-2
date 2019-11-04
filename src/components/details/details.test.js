import React from "react";
import Details from "./details.jsx";
import renderer from "react-test-renderer";

describe(`initial Details`, () => {

  const mockProps = {
    type: `Apartment`,
    offers: {
      id: 1,
      title: `Canal View Prinsengracht`,
      price: 140,
      mainImg: `img/apartment-01.jpg`,
      gallery: [
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`
      ],
      raiting: 3,
      roomClass: `Premium`,
      insideList: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen, Dishwasher`,
        `Cabel TV`,
        `Fridge`
      ],
      host: {
        hostImg: `img/avatar-angelina.jpg`,
        userName: `Angelina`,
        userStatus: `Pro`,
        description: [
          `A quiet cozy and picturesque that hides behind a a river by
              the unique lightness of Amsterdam. The building is green and
              from 18th century.`,
          `
              An independent House, strategically located between Rembrand
              Square and National Opera, but where the bustle of the city
              comes to rest in this alley flowery and colorful.
              `
        ]
      }
    }
  };

  it(`Details renders correctly`, () => {
    const tree = renderer.create(<Details {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
