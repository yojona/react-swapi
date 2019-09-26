import React from 'react';
import Layout from './Layout'

export default props => {
  return (
    <Layout>
      <div style={styles.grid}>
        {props.children}
      </div>
    </Layout>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: "200px 200px 200px 200px",
  }
}
