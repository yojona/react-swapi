import React, { Component } from 'react';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Service from '../services/api.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
    this.orderByEpisode = this.orderByEpisode.bind(this);
    this.orderByReleasedDay = this.orderByReleasedDay.bind(this);
  }

  async fetchFilms() {
    const films = await Service.getFilms();
    this.setState({films})
  }

  async componentDidMount() {
    this.fetchFilms(1);
  }

  orderByReleasedDay() {
    const films = this.state.films.sort((a, b) => new Date (b.release_date) - new Date(a.release_date));
    this.setState({films})
  }

  orderByEpisode() {
    const films = this.state.films.sort((a, b) => b.episode_id - a.episode_id)
    this.setState({films})
  }
  render() {
    return (
      <Layout>
        <button onClick={this.orderByEpisode}>order by episode</button>
        <button onClick={this.orderByReleasedDay}>order by release date</button>
        <Grid>
          {this.state.films.map((film, key) => (
            <Card key={key} url={film.url}>{film.title}</Card>
          ))}
        </Grid>
      </Layout>
    );
  }
}
