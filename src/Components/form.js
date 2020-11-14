import React, { Component } from 'react';
import {connect} from 'react-redux';
import { facebook_login, google_login, email_login, email_sign } from '../store/action/index'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


class form extends Component {
    state = {
        login_class: "login-form",
        btn_class: "disabled",
        email_class: "none",
        phone_class: "none",
        email: "",
        password:""
    }
    changeHandler = () =>{
        this.state.btn_class = ""
        this.setState({
            btn_class: this.state.btn_class
        })
    }
    emailHandler = () => {
        this.state.email_class = "block"
        this.state.login_class = "none"
        this.setState({
            email_class: this.state.email_class,
            login_class: this.state.login_class
        })
    }
    phoneHandler = () => {
        this.state.phone_class = "block"
        this.state.login_class = "none"
        this.setState({
            phone_class: this.state.phone_class,
            login_class: this.state.login_class
        })
    }
    
    render() {
        console.log("Form Props==>", this.props)
        return (
            <div>
              <div className={this.state.login_class}>
                <h2 className="text-center">Sign in</h2>		
                <div className="text-center social-btn">
                    <a href="#" className="btn btn-block p-2 loginBtn" onClick={()=>this.phoneHandler()}> Sign in with <b>Phone</b></a>
                    <a href="#" className="btn btn-block p-2 loginBtn" onClick={()=>this.props.facebook_login(this.props.history)}> Sign in with <b>Facebook</b></a>
                    <a href="#" className="btn btn-block p-2 loginBtn" onClick={()=>this.props.google_login()}> Sign in with <b>Google</b></a>
			        <a href="#" className="btn btn-block p-2 loginBtn" onClick={()=>this.emailHandler()}> Sign in with <b>Email</b></a>
                </div>
                <div className="s12 text-center"><span>We won't share your personal details with anyone</span></div>
                <p className="span">
                    <span>If you continue, you are accepting </span>
                    <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" data-aut-id="">
                      <span>OLX Terms and Conditions and Privacy Policy</span>
                    </a>
                </p>
              </div>
              <div className={this.state.email_class}>
                <h2 className="text-center">Enter your Email</h2>
                <InputGroup className="mb-3" >
                <FormControl
                  aria-describedby="basic-addon1"
                  placeholder="Email"
                />
              </InputGroup>
              <InputGroup className="mb-3" >
                <FormControl
                  aria-describedby="basic-addon1"
                  placeholder="Email"
                />
              </InputGroup>
                <button className={"btn btn-block p-2 loginBtn "+this.state.btn_class}>Next</button>
                <div className="s12 text-center"><span>We won't share your personal details with anyone</span></div>
              </div>
              <div className={this.state.phone_class}>
            <div id="receptcha-container"></div>
              <h2 className="text-center">Enter Your Phone Number</h2>		
              <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">+92</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-describedby="basic-addon1"
                  placeholder="Phone Number"
                />
              </InputGroup>
              </div>
              <div className="text-center social-btn">
                <a href="#" className="btn btn-block p-2 loginBtn"><b>Next</b></a>
              </div>
              <div className="s12 text-center"><span>We won't share your personal details with anyone</span></div>
              <p className="span">
                <span>If you continue, you are accepting </span>
                <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" data-aut-id="">
                  <span>OLX Terms and Conditions and Privacy Policy</span>
                </a>
              </p>
          </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    name: "GHOUS AHMED"
  })
  
  const mapDispatchToProps = (dispatch) => ({
    facebook_login: (history) => dispatch(facebook_login(history)),
    google_login: () => dispatch(google_login()),
    email_login: () => dispatch(email_login()),
    email_sign: () => dispatch(email_sign()),
    
  })
  
  export default connect(
    mapStateToProps, mapDispatchToProps
    )(form);