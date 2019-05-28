import React, { Component } from 'react';
import { render } from 'react-dom';
import { Virtuoso } from 'react-virtuoso'

const App = () => {
return  <Virtuoso
      style={{width: '200px', height: '400px'}}
      totalCount={500}
      item={index => <div>Item {index}</div>}
    />

}

render(<App />, document.getElementById('root'));
