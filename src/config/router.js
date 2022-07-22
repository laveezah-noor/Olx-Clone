import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../container/Home'
import About from '../container/About'
import Sell from '../container/Sell'
import phone from '../Components/phone'
import Item from '../container/Item'
import {connect} from 'react-redux'

class AppRouter extends React.Component {
    render() {
        let ads = this.props.ads
        return(
            <Router>
                <Routes>

                <Route exact path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path="/sell" element={<Sell/>} />
                <Route path="/phone" element={<phone/>} />
                <Route path={"/item"} element={<Item/>} />
                
                </Routes>
            </Router>
        )
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
  
  export default 
//   connect(
//       mapStateToProps, null
//       )
      (AppRouter);