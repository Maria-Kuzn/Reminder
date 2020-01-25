import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {personsFetchData} from "../actions/persons";
//import axios from 'axios';

class App extends React.Component {

componentDidMount(){
  // this.props.fetchData("http://localhost:8000/api/users");
}

render(){
    return(
      <div>
        <ul>
            {this.props.persons.map((person, index)=>{
              return<li key={index}>
              <div>{person.name}</div>
              </li>
            })}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    fetchData: url => {dispatch(personsFetchData(url))}
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
