import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    <>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
       </Switch> 
    </BrowserRouter>    
    </>
  );
}
export default App;
