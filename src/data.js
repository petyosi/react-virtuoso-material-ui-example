import {useMemo, useState, useRef, useEffect} from 'react';
import faker from 'faker';

const getUser = () => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  return {
    name: `${firstName} ${lastName}`,
    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,
    description: faker.company.catchPhrase(),
    avatar: faker.internet.avatar(),
  };
};

const sortUser = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const useUserRecords = count => {
  const allUsers = useMemo(
    () =>
      new Array(count)
        .fill(true)
        .map(getUser)
        .sort(sortUser),
    [count],
  );

  const loadedCount = useRef(0);
  const endReached = useRef(false);
  const [loadedUsers, setLoadedUsers] = useState([]);

  const loadMore = () => {
    if (!endReached.current) {
      setTimeout(() => {
        loadedCount.current += 50;

        if (loadedCount.current === 500) {
          endReached.current = true;
        }

        // in a real world scenario, you would fetch the next
        // slice and append it to the existing records
        setLoadedUsers(allUsers.slice(0, loadedCount.current));
      }, 500);
    }
  };

  useEffect(loadMore, []);

  return {
    loadedUsers,
    loadMore,
  };
};
