import React, { Component ,useState} from 'react';

class Product extends Component {
    render(){
        console.log(this.props);
        return (
            <div className="product" >
                <div className="product__top" >
                    <div className="product__image" >
                    <img
                    // srcSet={this.props.img} 
                    src={this.props.img}
                    alt="Test" />
                    </div>
                    <div className="product__info featured" >
                        <h3 className="product__price" >{this.props.price}</h3>
                        <p className="product__desc" >{this.props.desc}</p>
                    </div>
                </div>
                <div className="product__bottom" >
                    <div className="product__meta featured" >
                        <span className="product__location" >{this.props.location}</span>
                        <span className="product__timeStamp" >{this.props.date}</span>
                    </div>
                </div>
                <button className="product__like">
                    <svg className="MuiSvgIcon-root product__like-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" >
                    </path>
                    </svg>
                </button>
            </div>
            // <div className="card">
            //     <div className="card-media placeholder">
            //         {/* <img src="https://apollo-singapore.akamaized.net:443/v1/files/m25tgyaz2uhp3-PK/image;s=272x0" /> */}
            //     </div>
            //     <div className="card-head s20 placeholder">
            //         {/* <h3>Rs 12,500</h3> */}
            //     </div>
            //     <div className="card-tagline placeholder">
            //         {/* <span>NOKIA 2.2</span> */}
            //     </div>
            //     <div className="card-footer flex">
            //         <div className="location placeholder"></div>
            //         <div className="stamp placeholder"></div>
            //     </div>
            // </div>
        );
    }
}

export default Product;         