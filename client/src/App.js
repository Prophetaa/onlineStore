import React, { Component } from 'react';
import { connect } from "react-redux";
import request from "superagent"
import NavBar from "./components/NavBar"
import { Route } from "react-router-dom"
import MainButtonsContainer from "./containers/MainButtonsContainer"
import AdvertisementsContainer from "./containers/AdvertisementsContainer"

import setAllAdds from "./reducers/index.js"

class App extends Component {

  componentDidMount() {
    request
      .get("https://localhost/advertisements")
      .then(res => {
        this.props.setAllAdds(res.body.message);
      })
  }

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



const mapStateToProps = ({})

const mapDispatchToProps = { setAllAdds }

export default App /*connect(
  mapStateToProps,
  mapDispatchToProps
)(App); */
