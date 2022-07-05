import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

import img from "./img/Mirziyoyev.png"

import avatar from "./img/Group.png"
import Footer from './components/Footer';
import MainFluid from './components/MainFluid';
import Wrappers from './components/Wrappers';
import Category from './components/Category'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar img={avatar} />
      <Wrappers />
      <MainFluid img={img} />

      <Main img={img} />





      <div className='container'>
        <div className="row">
          <Category />
        </div>
        <div className="row">

          <Contact />
        </div>
      </div>


      <Footer />

    </>
  );
};

export default App;
