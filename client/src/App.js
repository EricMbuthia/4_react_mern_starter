import React ,{useEffect, useLayoutEffect} from 'react';
import { Link, Switch, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';
import BotResume from './components/pages/BotResume/BotResume.js'
import User from './components/pages/User/UserPage.js'
import Recruiter from './components/pages/RecruiterPage/RecruiterPage.js'
import About from './components/pages/About/About.js'
import ScrollToTopOnMount from './components/pages/ScrollToTop/ScrollToTop'
import PdfDocRender from './components/pages/PdfDocument/PdfDocRender.js' 

// function App() {




function App () {
  // useLayoutEffect(() => {
  //   console.log("appp scrolling")
  //   window.scrollTo(0, 700);
  //   ///window.scrollTo(0, 600);
  // }, []);

  return (
    <div className="App">
   
          <nav className="App-navigation">
        <h1 className="App-title"></h1>

        {/* <Link to="/">Welcome</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/write/">Write Article</Link>

        <Link to="/botresume/"> Bot Resume</Link>
         */}
      </nav>
      

      <div className="App-mainContent">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/blog/' component={Blog} />
          <Route exact path='/write/' component={WriteArticle} />
          <Route exact path='/botresume/' component={BotResume} />
          <Route exact path='/User/' component={User} />
          <Route exact path='/recruiter/' component={Recruiter} />
          <Route exact path='/about/' component={About} />
          <Route exact path='/pdf/' component={PdfDocRender} />
          <Route exact path='/recruiter/:id' component = {Recruiter}/>

        </Switch>
      </div>

    </div>
  );
}

export default App;