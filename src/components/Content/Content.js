import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HomePage from 'components/Pages/HomePage';
import ProductPage from 'components/Pages/ProductPage';
import ContactPage from 'components/Pages/ContactPage';
import AdminPage from 'components/Pages/AdminPage';
import { Switch, Route } from 'react-router-dom';

const Wrapper = styled.section`
  width: 100%;
  min-height: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Page = styled.div`
  width: 1100px;
  min-height: 500px;
  height: 100%;
`;

const Content = ({ data }) => {
  // console.log(data);
  return (
    <Wrapper>
      <Page>
        <Switch>
          <Route path="/" exact render={() => <HomePage data={data} />} />
          <Route path="/products" render={ProductPage} />
          <Route path="/admin" render={AdminPage} />
          <Route path="/contact" render={ContactPage} />
        </Switch>
      </Page>
    </Wrapper>
  );
};

Content.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Content;
