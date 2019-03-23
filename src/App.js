import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import _ from 'lodash'
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

const URL = 'https://swapi.co/api/planets'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { data: {} }
  }
  componentDidMount(){
    axios.get(URL)
    .then(response => {
      this.setState({data: response.data})
      console.log(response.data)
    }
  )
}
  renderPlanet(){
    return _.map(this.state.data.results, planet =>{
      return(
        <div class = "container">
         <Card  bg="primary" text="white"></Card>
         <li key = {planet.name}>
         <Card.Body>
            <Card.Text><strong> Planet Name :</strong>{planet.name}</Card.Text>
            <Card.Text><strong>Planet Population: </strong>{planet.population} </Card.Text>
            <Card.Text><strong>Planet Gravity: </strong>{planet.gravity} </Card.Text>
            <Card.Text><strong>Planet Climate: </strong>{planet.climate} </Card.Text>
            <Card.Text><strong> Planet Terrain:</strong>{planet.terrain} </Card.Text>
          </Card.Body>
        </li>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="App">
          <h2 className="App-header">Planet in Starwar</h2>
          <ul>
            {this.renderPlanet()}
          </ul>
      </div>
    );
  }
}

export default App;
