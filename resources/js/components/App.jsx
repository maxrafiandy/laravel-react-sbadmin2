import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import FlotChart from './FlotChart';
import Tables from './Tables';
import Forms from './Forms';
import PanelWeels from './PanelWeels';
import Buttons from './Buttons';
import Notifications from './Notifications';
import Typography from './Typography';
import Icons from './Icons';
import Grid from './Grid';
import Blank from './Blank';
import Login from './Login';

class App extends Component {
  render() {
    return (
      true ? <BrowserRouter>
        <div id="wrapper">
          <Nav />
          <main role="main">
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/flot-chart' component={FlotChart} />
            <Route exact path='/tables' component={Tables} />
            <Route exact path='/forms' component={Forms} />
            <Route exact path='/panel-weels' component={PanelWeels} />
            <Route exact path='/buttons' component={Buttons} />
            <Route exact path='/notifications' component={Notifications} />
            <Route exact path='/typography' component={Typography} />
            <Route exact path='/icons' component={Icons} />
            <Route exact path='/grid' component={Grid} />
            <Route exact path='/blank' component={Blank} />
            <Route exact path='/' component={Dashboard} />
          </main>
        </div>
      </BrowserRouter> : <Login />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));