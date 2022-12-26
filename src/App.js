import React from 'react';
import './App.css';

import Main from './components/main';

export const AppContext = React.createContext({
  count: 0,
  updateCount: () => {},
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateCount = () => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    };

    this.state = {
      count: 0,
      updateCount: this.updateCount,
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Main />
      </AppContext.Provider>
    );
  }
}
