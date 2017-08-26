require('normalize.css/normalize.css');
import React from 'react';
import {Router, Route, hashHistory, Link, IndexRoute, Redirect, browserHistory} from 'react-router';
import Home from './Home'
import Content from './Content'
import Person from './Person'
import Project from './project'
import Artical from './artical'
import Contact from './contact'

let AppComponent = React.createClass({
  render() {
    return (
      <div className="index">
       {React.cloneElement(this.props.children, this.state)}
      </div>
    );
  }
})


let RouteConfig=React.createClass({
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
          <IndexRoute  component={Home}/>
          <Route  path="/Person" component={Person}/>
          <Route path="/Project" component={Project}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Artical" component={Artical}/>
        </Route>
      </Router>
    )
  }
})

export default RouteConfig;
