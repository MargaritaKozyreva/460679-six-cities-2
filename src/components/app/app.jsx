import React, {Fragment} from 'react';
import Main from "../main/main.jsx";
import Details from "../details/details.jsx";
import PropTypes from "prop-types";

const getPageScreen = (props, staticProps) => {
  switch (location.pathname) {
    case `/`:
      return <Main cards={props} />;
    case `/details`:
      return <Details {...staticProps}/>;
  }
  return null;
};

const App = ({props, staticProps}) => {

  return <Fragment>{getPageScreen(props, staticProps)}</Fragment>;
};

App.propTypes = {
  props: PropTypes.any,
  staticProps: PropTypes.object.isRequired
};

export default App;
