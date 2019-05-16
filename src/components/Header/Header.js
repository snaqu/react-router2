import React from 'react';
import image1 from 'assets/bg1.jpg';
import image2 from 'assets/bg2.jpg';
import image3 from 'assets/bg3.jpg';
import image4 from 'assets/bg4.jpg';
import { Switch, Route } from 'react-router-dom';
import HeaderWrapper from './HeaderWrapper/HeaderWrapper';

const Header = () => (
  <Switch>
    <Route path="/" exact render={() => <HeaderWrapper img={image1} />} />
    <Route path="/products" render={() => <HeaderWrapper img={image2} />} />
    <Route path="/admin" render={() => <HeaderWrapper img={image3} />} />
    <Route path="/contact" render={() => <HeaderWrapper img={image4} />} />
  </Switch>
);

export default Header;
