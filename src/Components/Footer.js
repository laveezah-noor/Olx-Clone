import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="footer flex">
        <div className="flex col block">
          <h2 className="title s16 color b">POPULAR CATEGORIES</h2>
          <Link to="/" className="no-ul s14 color">Cars</Link>
          <Link to="/" className="no-ul s14 color">Flats for rent</Link>
          <Link to="/" className="no-ul s14 color">Jobs</Link>
          <Link to="/" className="no-ul s14 color">Mobile Phones</Link>
        </div>
        <div className="flex col block">
          <h2 className="title s16 color b">TRENDING SEARCHES</h2>
          <Link to="/" className="no-ul s14 color">Bikes</Link>
          <Link to="/" className="no-ul s14 color">Watches</Link>
          <Link to="/" className="no-ul s14 color">Books</Link>
          <Link to="/" className="no-ul s14 color">Dogs</Link>
        </div>
        <div className="flex col block">
          <h2 className="title s16 color b">ABOUT US</h2>
          <Link to="/" className="no-ul s14 color">About OLX Group</Link>
          <Link to="/" className="no-ul s14 color">OLX Blog</Link>
          <Link to="/" className="no-ul s14 color">Contact Us</Link>
          <Link to="/" className="no-ul s14 color">OLX for Businesses</Link>
        </div>
        <div className="flex col block">
          <h2 className="title s16 color b">OLX</h2>
          <Link to="/" className="no-ul s14 color">Help</Link>
          <Link to="/" className="no-ul s14 color">Sitemap</Link>
          <Link to="/" className="no-ul s14 color">Legal & Privacy information</Link>
        </div>
        <div className="flex block col">
          <h2 className="title s16 color b">FOLLOW US</h2>
          <div className="flex-row">
          <Link to="https://www.facebook.com/olxpakistan" className="no-ul s14 color"><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="Fill" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path></svg></Link>
          <Link to="https://twitter.com/OLX_Pakistan" className="no-ul s14 color"><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="Fill" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM600.499 335.040c25.728 0 51.499 9.6 67.584 25.728 16.085 0 45.013-9.643 57.899-19.328-6.443 19.328-25.771 41.813-38.613 51.499 22.528 0 44.971-9.685 51.456-12.885-12.843 16.085-25.728 32.171-45.013 45.056 6.4 144.768-109.397 263.851-260.608 263.851-51.499 0-99.755-12.885-148.011-38.656 64.341 9.685 119.040-22.528 135.125-38.613-41.856 0-80.427-35.371-83.669-61.141 9.685 0 28.971 3.243 38.656-3.2-54.699-12.885-70.784-54.699-70.784-86.869 9.643 9.685 32.128 9.685 41.813 9.685-32.171-19.328-54.699-70.827-28.971-119.040 48.256 57.899 122.283 90.069 193.067 93.269-3.243-6.4-3.243-12.885-3.243-19.285 0-48.256 41.856-90.069 93.312-90.069z"></path></svg></Link>
          <Link to="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1" className="no-ul s14 color"><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="Fill" d="M512 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM382.605 321.86l311.125 190.123-311.125 190.165v-380.288z"></path></svg></Link>
          <Link to="https://www.instagram.com/olx.pakistan/" className="no-ul s14 color"><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="Fill" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM619.721 291.247c70.784 0 128.384 57.643 128.384 128.469v0 184.619c0 70.784-57.6 128.427-128.384 128.427v0h-215.424c-70.827 0-128.384-57.643-128.384-128.427v0-184.619c0-70.827 57.557-128.469 128.384-128.469v0zM619.721 335.791h-215.424c-46.293 0-83.883 37.632-83.883 83.925v0 184.619c0 46.293 37.589 83.925 83.883 83.925v0h215.424c46.251 0 83.883-37.632 83.883-83.925v0-184.619c0-46.293-37.632-83.925-83.883-83.925v0zM512.021 405.248c63.659 0 115.456 49.195 115.456 109.653 0 59.904-50.688 106.752-115.456 106.752-63.659 0-115.499-49.195-115.499-109.653 0-59.861 50.688-106.752 115.499-106.752zM512.021 444.885c-41.813 0-75.819 31.403-75.819 70.016 0 37.291 35.413 70.016 75.819 70.016s75.776-32.725 75.776-70.016c0-38.613-34.005-70.016-75.776-70.016zM630.857 358.852c23.296 0 43.008 19.712 43.008 43.008s-19.712 43.008-43.008 43.008c-23.296 0-43.008-19.712-43.008-43.008s19.712-43.008 43.008-43.008zM630.857 386.927c-8.661 0-15.019 6.272-15.019 14.933 0 8.704 6.357 14.976 15.019 14.976s14.976-6.272 14.976-14.976c0-8.661-6.315-14.933-14.976-14.933z"></path></svg></Link>
          </div>
          <div className='flex pt-5'>
          <Link className='mx-2' to="https://play.google.com/store/apps/details?id=com.olx.pk" >
              <img width={100} src="iconGooglePlay.svg" />
            </Link>
            <Link className='mx-2' to="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8" >
              <img width={100} src="iconAppStore.svg" />
            </Link>
            <Link className='mx-2' to="https://appgallery.huawei.com/#/app/C104375435" >
              <img width={100} src="iconAppGallery.svg" />
            </Link>
            
          </div>  
        </div>
      </div>
      <div className="footerb flex">
        {/* <div className="flex row">
          <h2 className="s14 b">Other Countries</h2>
          <Link to="" className="no-ul s14 colfff">India</Link>
          -
          <Link to="" className="no-ul s14 colfff">South Africa</Link>
          -
          <Link to="" className="no-ul s14 colfff">Indonesia</Link>
        </div> */}
        <div className="flex row-reverse">
          <h2 className="s14 b">Free Classifieds in Pakistan</h2>
          <span className="s14"> . © 2006-2020 OLX</span>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Footer;