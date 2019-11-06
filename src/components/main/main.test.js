import React from "react";
import Main from "./main.jsx";
import renderer from "react-test-renderer";

describe(`initial Main`, () => {
  const mockProps = {
    cards: [
      {
        type: `Apartment`,
        offers: [
          {
            id: 1,
            title: `Canal View Prinsengracht`,
            link: `offer/`,
            price: 140,
            img: `img/apartment-01.jpg`,
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
            },
            coordinates: [52.3909553943508, 4.85309666406198],
          },
          {
            id: 2,
            title: `Wood and stone place`,
            link: `offer/`,
            price: 150,
            img: `img/apartment-02.jpg`,
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
              userName: `Roma`,
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
            },
            coordinates: [52.369553943508, 4.85309666406198],
          },
          {
            id: 3,
            type: `Apartment`,
            title: `Beautiful & luxurious apartment at great location`,
            link: `offer/`,
            price: 132,
            img: `img/apartment-03.jpg`,
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
              userName: `Ivan`,
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
            },
            coordinates: [52.3909553943508, 4.929309666406198],
          }
        ]
      }
    ],
  };

  it(`Main renders correctly`, () => {
    const tree = renderer.create(<Main {...mockProps} />, {
      createNodeMock: () => {

        let mapMock = document.createElement(`section`);
        mapMock.setAttribute(`id`, `map`);
        document.body.appendChild(mapMock);

        return mapMock;

      }
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
