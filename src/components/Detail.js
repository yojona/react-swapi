import React from 'react';

export default props => {

  return (
    <div style={styles.container}>
      <div>
      <h3>{props.film.title}</h3>
        <p><strong>Episode ID: </strong>{props.film.episode_id}</p>
        <p><strong>Director: </strong>{props.film.director}</p>
        <p><strong>Producer: </strong>{props.film.producer}</p>
      </div>

      <p><strong>About:</strong></p>
      <p>{props.film.opening_crawl}</p>

      <h3>Characters</h3>
      <div>
        {props.characters.map((char, key) => (
          <span key={key} >
            <a href={`${char.url}?format=json`}>{char.name}, </a>
          </span>
        ))
      }
      </div>

      <h3>Species</h3>
      <div>
        {props.species.map((specie, key) => (
          <span key={key} >
            <a href={`${specie.url}?format=json`}>{specie.name}, </a>
          </span>
        ))
      }
      </div>

    </div>
  )
}

const styles = {
  container: {
    width: 500,
    background: 'white',
    borderRadius: 3,
    minHeight: 150,
    padding: 16,
    fontSize: 12,
    fontFamily: 'sans-serif',
    margin: 8,
    boxShadow: '0 0px 0px 0 rgba(0,0,0,0.2)',
    transition: '0.2s'
  }
}