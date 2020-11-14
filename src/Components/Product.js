import React, { Component ,useState} from 'react';

class Product extends Component {
    render(){
        return (
            <div className="card">
                <div className="card-media placeholder">
                    {/* <img src="https://apollo-singapore.akamaized.net:443/v1/files/m25tgyaz2uhp3-PK/image;s=272x0" /> */}
                </div>
                <div className="card-head s20 placeholder">
                    {/* <h3>Rs 12,500</h3> */}
                </div>
                <div className="card-tagline placeholder">
                    {/* <span>NOKIA 2.2</span> */}
                </div>
                <div className="card-footer flex">
                    <div className="location placeholder"></div>
                    <div className="stamp placeholder"></div>
                </div>
            </div>
        );
    }
}

export default Product;         