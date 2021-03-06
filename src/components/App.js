import React, { Component } from 'react';
import router from '../router.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
