import React, { useEffect, useState } from 'react';
import Product from './Product'
import { Link } from 'react-router-dom';


function Main() {
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   if(loading){
  //     let _list = [];
  //     for(let i = 0; i<12; i++){
  //       _list.push(<Product placeholder={true} key={i}/>);
  //     }
  //     setList(_list);
  //   }
  // }, list);
    return (
      <div>
        <div className="Main">
          <div className="Home-row flex justify-c">
            <div className="Home-image">
              <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" />
            </div>
          </div>
          <div className="Home-row">
            <div className="slider">
              <h2>Based on your last search</h2>
            </div>
            <div>
              <h2>Fresh recommendation</h2>
              {/* {list} */}
            </div>
          </div>
        </div>
        <h1>Main</h1>
        <div className="app-ad flex align-c">
          <div>
            <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp"/>
          </div>
          <div className="typography">
            <h2 className="title s30 color b">Try the olx app</h2>
            <h2 className="slogan b s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
          </div>
          
          <div className="app-links row">
            <h2 className="b s18 color pb-6">Get Your App Today</h2>
          <div>
            <Link to="https://play.google.com/store/apps/details?id=com.olx.pk" >
              <img src="https://statics.olx.com.pk/external/base/img/appstore.webp" />
            </Link>
            <Link to="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8" >
              <img src="https://statics.olx.com.pk/external/base/img/playstore.webp" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    );
  }

export default Main;