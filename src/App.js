import React from 'react';
import './App.css';
import './New.css';
import './Props.css';
import './Main.css'
import AppRouter from './config/router'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  render() {
      return(
        <div>
          <AppRouter />
        </div>
      )
  }
}

export default App;
