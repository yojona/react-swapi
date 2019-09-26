import React from 'react';
import { Link } from "react-router-dom";

export default props => {

  const hover = e => {
    e.target.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2)";
    e.target.style.transform = "translate(0px, -10px)";
  }

  const reset = e => {
    e.target.style.boxShadow = '0 0px 0px 0 rgba(0,0,0,0.2)';
    e.target.style.transform = "translate(0px, 0px)";
  }

  const getLink = link => {
    return link.match(/(\d)+/)[0]
  }
  return (
    <Link to={`details/${getLink(props.url)}`}
      style={styles.container}
      onMouseEnter={hover}
      onMouseOut={reset}
    >
      {props.children}
    </Link>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    borderRadius: 3,
    minHeight: 150,
    padding: 16,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    margin: 8,
    boxShadow: '0 0px 0px 0 rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: '0.2s'
  }
}