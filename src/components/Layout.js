import React from 'react';

export default props => {
  return (
    <div style={styles.container}>
      {props.children}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#E9EBEE'
  }
}