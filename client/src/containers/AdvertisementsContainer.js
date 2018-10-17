import React, { Component } from 'react'
import { connect } from "react-redux";
import * as request from "superagent";
import AdvertisementArea from './AdvertisementArea';

import { loadAllAdds, loadAdDetails } from "../actions/AppActions"

class AdvertisementContainer extends Component {
  componentDidMount() {
   this.getAllAds()
  }

   getAllAds() { 
   request
  .get("http://localhost:4000/advertisements")
  .then(res => {
    this.props.loadAllAdds(res.body.adds)
  })
}

getAdDetails = advertisementId => this.props.loadAdDetails(this.props.advertisements, advertisementId);
  render() {
    return ( 
      <div className="AdsContainer"> 
    <AdvertisementArea advertisementsToShow={this.props.advertisements}
      getAd={this.getAdDetails}/> 
     </div>
   
    )
  }
}


const mapStateToProps = state => {
  return {
    advertisements: state.advertisements
  };
  };


export default connect(
mapStateToProps,
{ loadAllAdds, loadAdDetails }
)(AdvertisementContainer);