import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import GlobalStyle from 'theme/GlobalStyle';

class App extends Component {
  state = {
    data: [],
  };

  componentWillMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => this.setState({ data: data.results }));
  }

  render() {
    const { data } = this.state;
    return (
      <Router>
        <>
          <GlobalStyle />
          <Header />
          <Navigation />
          <Content data={data} />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
