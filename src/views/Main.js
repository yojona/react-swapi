import React, { Component } from 'react';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Service from '../services/api.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  async fetchFilms() {
    const films = await Service.getFilms();
    this.setState({films})
  }

  async componentDidMount() {
    this.fetchFilms(1);
  }
  render() {
    return (
      <Grid>
        {this.state.films.map((film, key) => (
          <Card key={key} url={film.url}>{film.title}</Card>
        ))}
      </Grid>
    );
  }
}
