import React, { useEffect, useState } from 'react';
import Product from './Product'
import { Link } from 'react-router-dom';


function Main() {
  const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(true);
  const product = [
    {
      price:"Rs 55,000",
      desc:"The perfect smartphone for your daily usage.",
      img:"https://firebasestorage.googleapis.com/v0/b/folx-7fde7.appspot.com/o/Vivo.png?alt=media&token=6089eeb3-8cf5-43bd-a570-cae0b045f0cd",
      location:"Punjab",
      date:"20 mar"
  },
  {
    price:"Rs 55,000",
    desc:"The perfect smartphone for your daily usage.",
    img:"https://firebasestorage.googleapis.com/v0/b/folx-7fde7.appspot.com/o/Vivo.png?alt=media&token=6089eeb3-8cf5-43bd-a570-cae0b045f0cd",
    location:"Punjab",
    date:"20 mar"
},
{
  price:"Rs 55,000",
  desc:"The perfect smartphone for your daily usage.",
  img:"https://firebasestorage.googleapis.com/v0/b/folx-7fde7.appspot.com/o/Vivo.png?alt=media&token=6089eeb3-8cf5-43bd-a570-cae0b045f0cd",
  location:"Punjab",
  date:"20 mar"
},
{
  price:"Rs 55,000",
  desc:"The perfect smartphone for your daily usage.",
  img:"https://firebasestorage.googleapis.com/v0/b/folx-7fde7.appspot.com/o/Vivo.png?alt=media&token=6089eeb3-8cf5-43bd-a570-cae0b045f0cd",
  location:"Punjab",
  date:"20 mar"
},
{
  price:"Rs 55,000",
  desc:"The perfect smartphone for your daily usage.",
  img:"https://firebasestorage.googleapis.com/v0/b/folx-7fde7.appspot.com/o/Vivo.png?alt=media&token=6089eeb3-8cf5-43bd-a570-cae0b045f0cd",
  location:"Punjab",
  date:"20 mar"
},
{
  price:"Rs 55,000",
  desc:"The perfect smartphone for your daily usage.",
  img:"https://firebasestorage.googleapis.com/v0/b/folx-7fde7.appspot.com/o/Vivo.png?alt=media&token=6089eeb3-8cf5-43bd-a570-cae0b045f0cd",
  location:"Punjab",
  date:"20 mar"
},
]
  // useEffect(()=>{
  //   // if(loading){
  //     let _list = [];
  //     for(let i = 0; i<6; i++){
  //       _list.push(<Product placeholder={true} key={i}/>);
  //     }
  //     setList(_list);
  //   // }
  // }, list);
  // const list = <Product/>
    return (
      <div>
        <div className="Main">
          <div className="Home-row flex justify-c">
            <div className="Home-image">
              <img src="banner-800x600.jfif" />
            </div>
          </div>
          <div className="Home-row">
            {/* <div className="slider">
              <h2>Based on your last search</h2>
            </div> */}
            <div>
              <h2>Fresh recommendation</h2>
              <div className='d-flex w-75'>

              {product.map((item,i) => {
                console.log(item);
                return(
                <Product
                img={item.img}
                price={item.price}
                desc={item.desc}
                location={item.location}
                date={item.date}
                />
              )})}
              </div>
            </div>
          </div>
        </div>
        {/* <h1>Main</h1> */}
        <div className="app-ad flex align-c">
          <div>
            <img src="olxMobileApp.webp"/>
          </div>
          <div className="typography">
            <h2 className="title s30 color b">Try the olx app</h2>
            <h2 className="slogan b s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
          </div>
          
          <div className="app-links row">
            <h2 className="b s18 color pb-6">Get Your App Today</h2>
          <div>
            <Link to="https://play.google.com/store/apps/details?id=com.olx.pk" >
              <img src="iconGooglePlay.svg" />
            </Link>
            <Link to="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8" >
              <img src="iconAppStore.svg" />
            </Link>
            <Link to="https://appgallery.huawei.com/#/app/C104375435" >
              <img src="iconAppGallery.svg" />
            </Link>
            
          </div>
          </div>
        </div>
      </div>
    );
  }

export default Main;