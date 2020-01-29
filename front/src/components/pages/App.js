import './App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar';
import NewNote from './NewNote';
import Home from './Home';

import {API_BACK_URL} from '../../constants';

import {stateFetchGetNotes, stateFetchDeleteNote} from "../../actions/notes";
import {getCookie, setCookie} from "../../util";

class App extends Component {
  constructor(props) {
    super(props);

    if (!getCookie("user_id")) {
      setCookie("user_id", "");
      fetch(API_BACK_URL + "/users")
        .then(response => {
          if (!response.ok){
            throw new Error(response.statusText);
          }
          return response;
        })
        .then (response => response.json())
        .then (response => {
          setCookie("user_id", response.user_id);
        });
    }
  }

  render(){
      return(
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
                <Home notes={this.props.notes}
                      fetchGetNotes={this.props.fetchGetNotes.bind(this)}
                      fetchDeleteNote={this.props.fetchDeleteNote.bind(this)}
                      />
            </Route>
            <Route path="/NewNote" component={NewNote}/>
          </Switch>
        </div>
      );
    }
}

const mapStateToProps = state =>{
  return{
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchGetNotes: url => {dispatch(stateFetchGetNotes(url))},
    fetchDeleteNote: url => {dispatch(stateFetchDeleteNote(url))}
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
