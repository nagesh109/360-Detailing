import React, {useContext, useState, useEffect} from 'react';
import detailinglogo from '../../assets/images/home/detailinglogo.svg';
import search from '../../assets/images/home/search.svg';
import './navBar.scss';

const NavBar = () => {
  return (
    <div className='nav-bar-master'>
        <div className='nav-bar-full-main'>
            <div className='nav-left'>
                <div className="full-logo-box">
                    <div className="logo-image-box">
                        <img className="logo-image" src={detailinglogo} alt="" />
                    </div>
                    {/* <div>
                        <div className="logo-text">NFT MULTI</div>
                        <div className="logo-text">MARKETS</div>
                    </div> */}
                </div>
                <div className='nav-search-box'>
                    <img className="search-icon" src={search} alt="" />
                    <input className="searchBox" type="text" placeholder="Search Web3" />
                </div>
                <div className='nav-menu-box'>
                    <div className='nav-menu'>Explore</div>
                    <div className='nav-menu'>Create</div>
                    <div className='nav-menu1'>Art Bank</div>
                    <div className='nav-menu1'>Minting Engine</div>
                    <div className='nav-menu1'>Brand NFTs</div>
                    <div className='nav-menu1'>NFT Connect</div>
                </div>
            </div>
            <div className='nav-right'>
                <div className='nav-btn'>Connect Wallet</div>
                {/* <div className='nav-bag-box'>
                    <img className='nav-bag' src={bag} alt="" />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default NavBar;