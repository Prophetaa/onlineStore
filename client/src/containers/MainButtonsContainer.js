import React, { Component } from 'react';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import { Link } from 'react-router-dom'

class MainButtonsContainer extends Component {
  
  render() {
    return (
      <div className="ButtonsContainer">
       <Link className="Links" to="/advertisements"> <Button1 /></Link>  
       <span className="spann">  sdassasdssdasdas</span>
       <Link className="Links" to="/createAdvertisement" ><Button2 /></Link>  
      </div>
    );
  }
}


export default MainButtonsContainer;