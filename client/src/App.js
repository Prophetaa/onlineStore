import React, { Component } from 'react';
import NavBar from "./components/NavBar"
import { Route } from "react-router-dom"
import MainButtonsContainer from "./containers/MainButtonsContainer"
import AdvertisementsContainer from "./containers/AdvertisementsContainer"


class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="NavBar">
      <NavBar />
      </div>
      <div className="Main">
      <Route exact path="/" component={MainButtonsContainer} />
      <Route exact path="/advertisements" component={AdvertisementsContainer} />
      </div>
      </div>
    );
  }
}




export default App /*connect(
  mapStateToProps,
  mapDispatchToProps
)(App); */
