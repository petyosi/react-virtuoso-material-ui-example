import React, {Component} from 'react';
import {render} from 'react-dom';
import {Virtuoso} from 'react-virtuoso';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListContainer = ({listRef, style, children}) => {
  return (
    <List ref={listRef} style={style}>
      {children}
    </List>
  );
};

const ItemContainer = ({children, ...props}) => {
  return (
    <ListItem {...props} style={{margin: 0}}>
      {children}
    </ListItem>
  );
};

const App = () => {
  return (
    <Virtuoso
      ListContainer={ListContainer}
      ItemContainer={ItemContainer}
      style={{width: '400px', height: '400px'}}
      totalCount={500}
      item={index => <ListItemText primary={`Item ${index}`} />}
    />
  );
};

render(<App />, document.getElementById('root'));
