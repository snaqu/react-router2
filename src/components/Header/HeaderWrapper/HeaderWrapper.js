import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 6.8rem;
  color: #fff;
  font-weight: 300;
`;

// eslint-disable-next-line react/prop-types
const HeaderWrapper = ({ img }) => {
  return (
    <Wrapper image={img}>
      <Title>Hello, look below!</Title>
    </Wrapper>
  );
};

export default HeaderWrapper;
