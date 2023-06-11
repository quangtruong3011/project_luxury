import logo from './logo.svg';
import React from 'react'
import Layout from './common/Layout'
import './App.css';

function App({ isMobileDevice }) {
  return (
    <Layout isMobileDevice={isMobileDevice}>
      <div>
        I love you
      </div>
    </Layout>
  );
}

export default App;
