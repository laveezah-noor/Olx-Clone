import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import {connect} from 'react-redux';
import {set_data, facebook_login} from '../store/action'

class Home extends React.Component {
    render() {
        // console.log('Props==>', this.props);
        return (
            <div>
                <Header />
                <Main />
                <h1>Home Page</h1>
                <Link to="/about">Go To About</Link>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.auth.users,
    name: "GHOUS AHMED"
})

const mapDispatchToProps = (dispatch) => ({
    facebook_login: () => dispatch(facebook_login()),
})

export default connect(
    mapStateToProps, mapDispatchToProps
    )(Home);