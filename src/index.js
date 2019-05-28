import React from 'react';
import {render} from 'react-dom';
import {Virtuoso} from 'react-virtuoso';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import {useUserRecords} from './data';

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
  const users = useUserRecords(500);

  return (
    <Virtuoso
      ListContainer={ListContainer}
      ItemContainer={ItemContainer}
      style={{width: '400px', height: '400px'}}
      totalCount={users.length}
      item={index => {
        return (
          <>
            <ListItemAvatar>
              <Avatar alt={`Avatar n°${index + 1}`} src={users[index].avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${users[index].name}`}
              secondary={<span>{users[index].description}</span>}
            />
          </>
        );
      }}
    />
  );
};

render(<App />, document.getElementById('root'));
