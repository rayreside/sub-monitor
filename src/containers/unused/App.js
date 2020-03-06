import React from 'react';
import '../styles/App.scss';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Footer from '../components/Footer';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
