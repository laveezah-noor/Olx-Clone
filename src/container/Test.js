import React from 'react'


class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Ghous Ahmed",
      email: "ghous@gmail.com",
      value: ""
    }
  }

  set_name = () => {
    this.setState({
      name: this.state.value
    })
  }

  get_name = () => {
    console.log(this.state.name)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
  return (
    <div className="App container">
      {/* <Header /> */}
      {/* <Main /> */}
      <h2>{this.state.name}</h2>
      <h4>{this.state.email}</h4>
      <input name="name" type="text" placeholder="Enter Name" onChange={(e)=> this.handleChange(e)}/>
      <input name="email" type="text" placeholder="Enter Email" onChange={(e)=> this.handleChange(e)}/>
      <button onClick={this.set_name}>Set Name</button>
      <button onClick={this.get_name}>Get Name</button>
      {/* <Footer /> */}
    </div>
  )
}
}


export default Test;