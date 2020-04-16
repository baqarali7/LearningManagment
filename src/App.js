import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation'
import SignIn from './components/SignIn/SignIn'
import Registor from './components/Registor/Registor'
import Sic from './components/sic/sic'
import Table from './components/Table/table'
import Admin from './components/AdiminLogin/Admin'
import AdminPanel from './components/AdminPanel/AdminPanel'
import ScheduleClass from './components/ScheduleClass/ScheduleClass'
import Entry from './components/EntryHome/Entry'


class App extends Component {

  constructor () {
    super();
    this.state = {
      route: 'entry',
      isSignedIn: false,
      AdminSignIn: false
    }
  }


  OnRouteChange = (route) =>{
    if(route === 'adminpanel') {
      this.setState({AdminSignIn: true})
    } else if(route === 'signin') {
      this.setState({isSignedIn: false, AdminSignIn: false})
    }  else if(route === 'signout') {
      this.setState({isSignedIn: false, AdminSignIn: false})
    } else if(route=== 'home') {
      this.setState({isSignedIn : true})
    } else if(route === 'sic') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){

    const {isSignedIn, route, AdminSignIn} = this.state;

    return (
      <div className="App">
        <Navigation AdminSignIn = {AdminSignIn} isSignedIn = {isSignedIn} OnRouteChange = {this.OnRouteChange}/>
        {
        route === 'home' ?
        <div>
          <Entry />
        </div>
        : (
          route === 'entry' ?
          <Entry /> :
          route === 'signin' ?
          <SignIn OnRouteChange = {this.OnRouteChange}/> :
          route === 'admin' ? 
          <Admin OnRouteChange = {this.OnRouteChange}/> :
          route === 'adminpanel'?
          <AdminPanel OnRouteChange = {this.OnRouteChange}/>:
          route === 'addclass' ?
          <ScheduleClass OnRouteChange = {this.OnRouteChange} />:
          route === 'sic' ?
         <Sic OnRouteChange = {this.OnRouteChange} /> :
          route === 'table' ?
          <Table AdminSignIn = {AdminSignIn} OnRouteChange = {this.OnRouteChange} />
         :<Registor OnRouteChange = {this.OnRouteChange}/>
        )
        }
      </div>
    );
  }
}

export default App;
