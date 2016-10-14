import * as React from 'react';
import { createStore } from './store';
import App from './App';
import * as DEVELOPERS from '../../developers.json'

export class AppWrapper extends React.Component {

  constructor(props) {
    super(props);

    let setState = (store) => this.setState({store: store});
    let initialStore = DEVELOPERS

    this.state = {
      store: createStore(setState, initialStore) 
    };
  }

  render() {
    return ( 
      <App store={this.state.store} />
    ); 
  }
};