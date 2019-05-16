import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
  height: 300px;
  background-color: #d1d1d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
  border-radius: 1em;
`;

const Title = styled.h1`
  text-align: center;
  padding: 40px 0 20px 0;
  font-size: 3.2rem;
`;

const HomePage = ({ data }) => {
  const generateData = data.map(({ cell, picture, name, email }) => {
    return (
      <Block key={cell}>
        <img src={picture.large} alt={name.first} />
        <p>
          <b>Name: </b>
          {name.first} {name.last}
        </p>
        <p>
          <b>Email: </b>
          {email}
        </p>
      </Block>
    );
  });
  return (
    <>
      <Title>Our workers</Title>
      {generateData}
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default HomePage;
