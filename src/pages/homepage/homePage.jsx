import React, {useContext, useState} from 'react';
import {MainContext} from '../../components/Context/context';
import NavBar from '../../components/navbar/navBar';
import indiaFlag from '../../assets/images/home/indiaFlag.svg';
import downarrow from '../../assets/images/home/downarrow.svg';
import searchIcon from '../../assets/images/home/searchIcon.svg';
import Card from '../../assets/images/home/Card.svg';
import Discount from '../../assets/images/home/Discount.svg';
import Motorcycle from '../../assets/images/home/Motorcycle.svg';
import Sedan from '../../assets/images/home/Sedan.svg';
import Star from '../../assets/images/home/Star.svg';
import Commitment from '../../assets/images/home/Commitment.svg';
import Quality from '../../assets/images/home/Quality.svg';
import Trust from '../../assets/images/home/Trust.svg';
import Services from '../../assets/images/home/Services.svg';
import Equipment from '../../assets/images/home/Equipment.svg';
import Team from '../../assets/images/home/Team.svg';
import sustain from '../../assets/images/home/sustain.svg';
import Memberships from '../../assets/images/home/Memberships.svg';
import bannerimg1 from '../../assets/images/home/bannerimg1.svg';
import './homePage.scss';

const sec2Menu = [
  {
    id:0,
    icon: Motorcycle,
    text:"Bike Service",
  },
  {
    id:1,
    icon: Sedan,
    text:"Car Service",
  },
  {
    id:2,
    icon: Star,
    text:"Service 360",
  },
  {
    id:3,
    icon: Card,
    text:"Membership",
  },
  {
    id:4,
    icon: Discount,
    text:"Offers",
  },
]

const chooseMenu = [
  {
    id:0,
    icon: Commitment,
    title:"Commitment",
    desc:"At 360 we aim for 3A’s - Afforable, Accessible and Advance Car care Service",
  },
  {
    id:1,
    icon: Quality,
    title:"Quality",
    desc:"We provide premium car care services without compromising on the quality",
  },
  {
    id:2,
    icon: Trust,
    title:"Trust",
    desc:"We are the most trusted car detailing company in the indian market",
  },
  {
    id:3,
    icon: Services,
    title:"Services",
    desc:"We Imbibe a customer centric approach ehich makes us stand apart from the league",
  },
]

const chooseMenu1 = [
  {
    id:4,
    icon: Equipment,
    title:"Equipment",
    desc:"We use extra edge whilst compiling with the industry’s standards.",
  },
  {
    id:5,
    icon: Team,
    title:"The Team",
    desc:"Our team is completely trained and professional to the world",
  },
  {
    id:6,
    icon: sustain,
    title:"Sustainability",
    desc:"We always try our maximum to use only eco-friendly products",
  },
  {
    id:7,
    icon: Memberships,
    title:"Memberships",
    desc:"Our value cards programdsare considered atempation that can’t be resisted",
  },
]

const HomePage = () => {
  const {selectedCity} = useContext(MainContext);
  const [searchservice, setsearchservice] = useState("")
  return (
    <div className='home-master'>
        <div className='main-nav'>
          <NavBar />
        </div>
        <div className='home-page-main'>
          <div className='home-sec1'>
            <div className='home-sec1-content'>
              <div className='home-sec1-title'>Perfect Location for your <span style={{fontWeight:"900", fontSize:"3.5vw"}}>Detailing</span></div>
              <div className="option-box">
                <div className="city-main-box">
                    <div className="flag-box">
                      <img className="flag-img" src={indiaFlag} alt="" />
                    </div>
                    <div className="city-data">{selectedCity}</div>
                    <div className="arrow-box">
                      <img className="arrow-img" src={downarrow} alt="" />
                    </div>
                </div>
                <div className="search-main-box">
                    <div className="search-box">
                      <img className="search-img" src={searchIcon} alt="" />
                    </div>
                    <input className="seach-input" type="text" value={searchservice} onChange={(e) => setsearchservice(e.target.value)} placeholder="Search for the Service" />
                </div>
              </div>
            </div>
          </div>
          <div className='home-sec2'>
            {sec2Menu.map((each, i) => {
              return(
                <div className="each-sec2-menu" key={i}>
                  <img className="sec2-img" src={each.icon} alt="" />
                  <div className="sec2-text">{each.text}</div>
                </div>
              )
            })} 
          </div>
          <div className='home-sec3'>
              <div className='sec3-title'>Why Choose us?</div>
              <div className='all-choose-menu'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                {
                  chooseMenu.map((each, i) => {
                    return(
                      <div key={i} className="each-choose-menu">
                        <div className='each-choose-box'>
                          <div className='each-choose-img'>
                            <img className='each-choose-img' src={each.icon} alt="" />
                          </div>
                          <div className='each-choose-textbox'>
                            <div className='each-choose-title'>{each.title}</div>
                            <div className='each-choose-desc'>{each.desc}</div>
                          </div>
                        </div>
                        <div className='each-choose-main-title'>{each.title}</div>
                      </div>
                    )
                  })
                }
                </div>
                <div  style={{display:"flex", justifyContent:"space-between"}}>
                {
                  chooseMenu1.map((each, i) => {
                    return(
                      <div key={i} className="each-choose-menu">
                        <div className='each-choose-box'>
                          <div className='each-choose-img'>
                            <img className='each-choose-img' src={each.icon} alt="" />
                          </div>
                          <div className='each-choose-textbox'>
                            <div className='each-choose-title'>{each.title}</div>
                            <div className='each-choose-desc'>{each.desc}</div>
                          </div>
                        </div>
                        <div className='each-choose-main-title'>{each.title}</div>
                      </div>
                    )
                  })
                }
                </div>
              </div>
          </div>
          <div className='home-sec4'>
              <div className="">
                <img className="" src={bannerimg1} alt="" />
              </div>
              <div className='bbox'> </div>
              <div>
                <div className='sec4-title'>Searching for the <br/>best in town ?</div>
                <div className='sec4-btn'>Book Your Slot Now</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage