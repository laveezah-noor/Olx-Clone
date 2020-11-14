import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {connect} from 'react-redux';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

class Item extends Component {
    render() {

        console.log("Item=>",this.props)
        return (
            <React.Fragment>
                <Header />
            
            <div className="container-fluid">
                <div className="flex container breadcrumb s12 mx-3 mb-0">
                    <span>Home /  </span>
                    <span>Sub HOme</span>
                    <span className="b s14 color mx-2 change" role="button" onClick={()=>this.changeHandler()}>Change</span>
                </div>
                <div className="">
                    <div className="w-800 d-inline-block ml-5">
                        <div>
                        <Carousel className="Carousel bg-dark">
                          <Carousel.Item>
                            <img
                              className="d-block m-8 "
                              src="logo512.png"
                              alt="First slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        </div>
                        <div className="card m-0 w-800 p-3 border border-secondary rounded ">
                            <h2 className="mb-2 b s20">Details</h2>
                            <div className=""></div>
                            <hr/>
                            <h2 className="mb-2 b s20">Description</h2>
                            <div className=""></div>
                        </div>
                    </div>
                    <div className="flex Details Col justify-c mr-5">
                        <div className="w-100 border border-secondary rounded col mx-2 mb-3 p-5">
                            <h1 className="s34 mb-3">Rs 10,000</h1>
                            <span className="colorGrey s16 b">Ali Beach</span>
                            <div className="d-flex mt-6 colorGrey pb-5 justify-content-between">
                                <span className="d-flex flex-row">Gulstan-e-Jauhar, Karachi</span>
                                <span className="d-flex flex-row-reverse">Oct 2020</span>
                            </div>
                        </div>
                        <div className="border border-secondary rounded w-100 col mx-2 mb-3 p-5">
                            <h1 className="s34 mb-3">Rs 10,000</h1>
                            <span className="colorGrey s16 b">Ali Beach</span>
                            <div className="flex mt-6 colorGrey">
                                <span className="d-flex flex-row">Gulstan-e-Jauhar, Karachi</span>
                                <span className="d-flex flex-row-reverse">Oct 2020</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    current_user: state.auth.current_user,
    Locations: state.app.Locations,
    ads: state.app.ads
  })
  
  // const mapDispatchToProps = (dispatch) => ({
  //     facebook_login: () => dispatch(facebook_login()),
  // })
  
  export default connect(
      mapStateToProps, null
      )(Item);