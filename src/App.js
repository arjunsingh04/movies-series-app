import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';

import store from './store';
import { Provider } from 'react-redux';

function App() {
   return (
      <Provider store={store}>
         <Navbar />
         <Landing />
         <Footer />
      </Provider>
   );
}

export default App;
