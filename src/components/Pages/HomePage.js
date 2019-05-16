import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ data }) => {
  console.log(data);
  return <div>Home Page</div>;
};

HomePage.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default HomePage;
