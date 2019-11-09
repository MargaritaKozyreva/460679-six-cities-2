import React from "react";
import Details from "./details.jsx";
import renderer from "react-test-renderer";

describe(`initial Details`, () => {
  const onTitleClickHandler = jest.fn();
  const mockProps = {
    details: {
      coordinates: [52.3909553943508, 4.85309666406198],
      id: 1,
      type: `Apartment`,
      title: `Canal View Prinsengracht[TEST-1]`,
      link: `offer/`,
      price: 140,
      mainImg: `img/apartment-01.jpg`,
      gallery: [
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`
      ],
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
          userName: `Maria`,
          userImg: `img/avatar-max.jpg`,
          userRaiting: 4,
          text: `Nice.`,
          createDate: `2019-04-24`
        }
      ]
    },
    cards: [
      {
        coordinates: [52.3909553943508, 4.85309666406198],
        id: 1,
        title: `Canal View Prinsengracht`,
        price: 140,
        mainImg: `img/apartment-01.jpg`
      }
    ],
    coords: [[1, 2]],
    onTitleClickHandler
  };

  it(`Details renders correctly`, () => {
    const tree = renderer
      .create(<Details {...mockProps} />, {
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
