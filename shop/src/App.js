/* eslint-disable */
// warning 메시지 안뜨게 해주는 기능

import './assets/scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/component/List';
import Practice from './components/component/Practice';
// import React from 'react';
import { useState } from 'react';

function App() {
  let [item,setItem] = useState(['감자','고구마','당근']);
  let [good,setGood] = useState([0,0,0])

  let [list , setList] = 
  useState([
    {
      id : 0,
      name : '아이템1',
      star : 4.5
    },
    {
      id : 1,
      name : '아이템2',
      star : 3.5
    },
    {
      id : 2,
      name : '아이템3',
      star : 2.1
    },
  ])
  

  return (
    <div className="App">
      <Header />
      <div id='container'>
        <div className='content-list'>
          {
            list.map((x,i)=>{
              return (
                // <List item={x} key={i}/>
                <Practice />
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
