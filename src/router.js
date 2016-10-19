import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

import HTMLCourse from './components/courses/HTML.js';
import CSSCourse from './components/courses/CSS.js';
import JSCourse from './components/courses/JavaScript.js';
import Course from './components/courses/Course.js';


// Routes

const routes = (
 <Router history={browserHistory}>
    <Route component = {App} >
	    <Route path="/" component = {Home} />
	    <Route path="/about" component = {About} />
	    <Route path="/teachers" component = {Teachers} />
	    <Route path="/courses" component = {Courses}>
	        <Route path="/courses" component = {Course}/>
    		<Route path="/courses/html" component = {HTMLCourse}/>
    		<Route path="/courses/css" component = {CSSCourse}/>
    		<Route path="/courses/JavaScript" component = {JSCourse}/>

	    </Route>
	  </Route>

  </Router>
);

export default routes;