import { useState } from 'react'
import Board from './board/Board';
import Head from './main_component/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './main_component/Foot';
import MainCarousel from './components/MainCarousel';

function App() {
  return (
    <>
      <Head></Head>
      <div className="container">
        <MainCarousel/> 
        <Board></Board>
      </div>
      <Foot></Foot>
    </>
  );
}

export default App;
