import React, { Component } from 'react';
import { connect } from "react-redux";
import request from "superagent"
import NavBar from "./components/NavBar"
import { Route } from "react-router-dom"
import MainButtonsContainer from "./containers/MainButtonsContainer"
import AdvertisementsContainer from "./containers/AdvertisementsContainer"



class App extends Component {

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res => {
        this.props.setAllBreeds(res.body.message);
      })
      .then(() =>
        this.props.addThreeUniques(
          this.props.allBreeds,
          this.props.selectedBreeds
        )
      )
      .then(() => {
        this.props.addImagesToTempSelectedBreeds(this.props.tempSelectedBreeds);
      })
      .then(() => this.nextQuestion());
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

const mapDispatchToProps = {}

export default App /*connect(
  mapStateToProps,
  mapDispatchToProps
)(App); */
