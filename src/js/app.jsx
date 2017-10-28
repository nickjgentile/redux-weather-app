import React from 'react';
import Searchbar from './components/searchbar';
import History from './components/history';
import Info from './components/info';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="card card-inverse">
          <h2>
            Origin Weather Application <br /><small>Always Know If You'll Need
          an umbrella.</small>
          </h2>
        </div>
        <Searchbar />
        <div className="row">
          <Info />
          <History />
        </div>
      </div>
    );
  }
}
