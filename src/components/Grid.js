import React from 'react';

export default props => {
  return (
    <div style={styles.grid}>
      {props.children}
    </div>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: "200px 200px 200px 200px",
  }
}
