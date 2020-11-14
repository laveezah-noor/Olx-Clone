import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
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
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path="/sell" component={Sell} />
                <Route path="/phone" component={phone} />
                <Route path={"/item"} component={Item} />
                
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
  
  export default connect(
      mapStateToProps, null
      )(AppRouter);