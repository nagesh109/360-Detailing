import React, {useContext, useState, useEffect} from 'react';
import NavBar from '../../components/navbar/navBar';
import './homePage.scss';

const HomePage = () => {
  return (
    <div>
        <NavBar />
        <div className='home-page-main'>homePage</div>
    </div>
  )
}

export default HomePage