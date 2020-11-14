import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Login, MyVerticallyCenteredModal} from './Login'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'




class Header_Main extends Component {
  state = {
    SelectedLocation: "Pakistan"
  }
  locationHandler = (e) =>{
    this.setState({
      SelectedLocation: e.target.value
    })
  }
  
  render() {
    console.log("Header",this.props.props)
    return (
      <div className="header fixed flex align-c justify-c">
        <div className="flex align-c logo colfff">
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="fillColor" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
        </div>
        <div className="main-input flex align-c ">
          <div className="location rel flex align-c">
            <div className="icon-Search s24">
              <span>
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="fillColor" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
              </span>
            </div>
            <input className="label s15" placeholder="Your Location" defaultValue={this.state.SelectedLocation}/>
            <button className="icon-Arrow s24" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                <path className="fillColor" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
              </svg>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Separated link</a>
              <div class="dropdown-divider"></div>
              {this.props.props.Locations.map((option,i) => 
              {return(<a className="dropdown-item" key={i} href="#" value={option} onClick={(e)=>this.state.locationHandler(e)}>{option}</a>)})
              }
            </div>
          </div>
          <div className="search flex align-c">
            <input type="text" placeholder="Find Cars, Mobile Phones and more..." onChange className="query" />
            <button className="icon-Search s24 colfff">
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                  <path className="fill-white" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                </svg>
            </button>
          </div>
        </div>
        <div className="actions flex align-c">
          <Login atr={this.props.props}/>
          <button className="sell flex align-c">
            <div className="s24">
              <svg width="104" height="48" viewBox="0 0 1603 768">
                <g>
                    <path className="Sell-Btn-Fill-1" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
                    <path className="Sell-Btn-Fill-2" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
                    <path className="Sell-Btn-Fill-3" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
                    <path className="Sell-Btn-Fill-4" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
                </g>
              </svg>
              <div className="Sell-Inner">
                <span className="Plus"><svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd">
                    <path className="Plus-Fill" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
                  </svg>
                </span>
                <Sell atr={this.props.props}/>
              </div>
            </div>

          </button>
        </div>

      </div>
    );
  }
}

function Sell (props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props)
  return (
    <>
    {props.atr.current_user.length ?
      <Link to="/sell">Sell</Link>
      :
      <span>
      <span onClick={() => setModalShow(true)}>Sell</span>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      </span>
      }
      
    </>
    );

}

function Nav() {
  const nav = [
    {ID:1, label: "Mobile Phones"},
    {ID:2, label: "Cars"},
    {ID:3, label: "Motorcycles"},
    {ID:4, label: "Houses"},
    {ID:5, label: "TV-Video-Audio"},
    {ID:6, label: "Tablets"},
    {ID:7, label: "Land & Plots"}];

    return (
      <div className="Nav fixed flex align-c justify-c">
          <div className="nav-head">
              <div className="nav-text">
                <span>ALL CATEGORIES</span>
              </div>
              <div className="nav-icon">
                <button>
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="fillColor" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                </button>
              </div>
            </div>
            <div className="nav-content">
              {
                nav.map(item => {
                  return(
                  <Link to={"browser/"+item.ID} key={item.ID} className="color block no-ul">{item.label}</Link>
                  )
                })
              }
            </div>
          </div>
    )
  
  }


class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
      <Header_Main props={this.props}/>
      < Nav />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  current_user: state.auth.current_user,
  Locations: state.app.Locations,
})

// const mapDispatchToProps = (dispatch) => ({
//     facebook_login: () => dispatch(facebook_login()),
// })

export default connect(
    mapStateToProps, null
    )(Header);