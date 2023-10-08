/* eslint-disable */
// warning 메시지 안뜨게 해주는 기능

import './assets/scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/component/List';
// import React from 'react';
import { useState } from 'react';

function App() {
  let [item,setItem] = useState(['감자','고구마','당근']);
  let [good,setGood] = useState([0,0,0])

  function goodUp(){

  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <List />
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
