import React, { Component } from 'react';
import firebase from '../config/firebase'

class phone extends Component {
    setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            'recaptcha-container', 
            {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              this.onSignInSubmit();
            }
          });
    }

    onSignInSubmit= (event) => {
        event.preventDefault();
        this.setUpRecaptcha();
        var phoneNumber = +923042238288;
        // getPhoneNumberFromUserInput();
    
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          var code = window.prompt('Enter OTP')
          // getCodeFromUserInput();
          confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            // ...
            console.log('User Sign in')
          }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSignInSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Phone Number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Next</button>
                </form>
            </div>
        );
    }
}

export default phone;