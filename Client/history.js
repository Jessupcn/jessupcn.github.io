import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createHistory({
        basename: process.env.PUBLIC_URL
      });

export default history;
