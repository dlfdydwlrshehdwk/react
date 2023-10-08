/* eslint-disable */
// warning 메시지 안뜨게 해주는 기능

import './assets/scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <ul>
          <li>
            <div>{ item[0] }</div>
            <div onClick={()=>{
              let copy
              copy = good;
              copy[0] = copy[0] + 1;
              setGood(copy)
            }}>좋아요{good[0]}</div>
          </li>
          
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
