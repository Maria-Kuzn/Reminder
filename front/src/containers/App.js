import './App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

//Добавление страниц
import NewNote from '../components/pages/NewNote';
import Home from '../components/pages/Home';
import Authorization from '../components/pages/Authorization';

import {stateFetchGetNotes, stateFetchDeleteNote} from "../actions/notes";

class App extends Component {
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
            <Route path="/Authorization" component={Authorization}/>
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
