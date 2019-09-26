import React from 'react';
import Service from '../services/api.js';
import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Detail from '../components/Detail';
import { Link } from "react-router-dom";

export default ({match}) => {

  const [film, setFilm] = useState({})
  const [characters, setCharacters] = useState([])
  const [species, setSpecies] = useState([])

  useEffect(() => {
    async function fetchFilm() {
      const film = await Service.getFilm(match.params.id);
      const characters = await Service.getCharacters(film.characters);
      const species = await Service.getSpecies(film.species);

      setFilm(film);
      setCharacters(characters);
      setSpecies(species);
    }

    fetchFilm();
  }, [match])

  return (
    <Layout>
      <Link to='/' style={styles.link}>Back</Link>
      {characters.length ?
        <Detail film={film} characters={characters} species={species} />:
        <p>Loading...</p>}
    </Layout>
  )
}

const styles = {
  link: {
    color: 'gray',
    textDecoration: 'none'
  }
}