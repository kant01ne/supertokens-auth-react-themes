import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {SignInAndUp, ResetPasswordUsingToken} from 'supertokens-auth-react/recipe/emailpassword';
import {
  Hydrogen,
  Helium
} from 'supertokens-auth-react-themes/';
import {BaseComponent} from './App';

const backgroundId = getQueryParams("backgroundId") || Math.floor(Math.random() * 20) +1;
const backgroundUrl = `/backgrounds/background${backgroundId}.svg`;
const logo = "/logo.png"

function AppWithReactDomRouter() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <BaseComponent>
                <Nav/> 
              </BaseComponent>
            </Route>
            <Route exact path="/theme/hydrogen/auth">
              <SignInAndUp >
                <Hydrogen.SignInAndUpTheme
                  backgroundUrl={backgroundUrl}
                  logo={logo}
                  testimonial={{
                      quote: "Use SuperTokens themes to increase convertion to your product!",
                      name: "Kevin Antoine",
                      title: "Software Engineer",
                      company: "SuperTokens",
                      picture:
                          "https://media-exp1.licdn.com/dms/image/C4E03AQGdxygrLo8PLQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=ixyXoqGsdpQ7BPzBWXVXdlebrYvd8l0ZFtad_ebCITM"
                  }}
                />
              </SignInAndUp >
            </Route>
            <Route path="/theme/hydrogen/auth/reset-password">
              <ResetPasswordUsingToken >
                <Hydrogen.ResetPasswordUsingTokenTheme
                  logo={logo}
                  backgroundUrl={backgroundUrl}
                />
              </ResetPasswordUsingToken >
            </Route>

            {/* Helium */}
            <Route exact path="/theme/helium/auth">
              <SignInAndUp >
                <Helium.SignInAndUpTheme
                  logo={logo}
                />
              </SignInAndUp >
            </Route>
            <Route path="/theme/helium/auth/reset-password">
              <ResetPasswordUsingToken >
                <Helium.ResetPasswordUsingTokenTheme
                  logo={logo}
                />
              </ResetPasswordUsingToken >
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

function Nav () {
  return (
    <div className="header__menu menu">
    <div className="menu__icon icon-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav className="menu__body">
      <ul className="menu__list">
        <li key="home"><Link  className="menu__link" style={{ textDecoration: 'none' }} to="/">Home</Link></li>
        <li key="hydrogen"><a className="menu__link" style={{ textDecoration: 'none' }} href="/theme/hydrogen/auth">Hydrogen</a></li>
        <li key="helium"><a className="menu__link" style={{ textDecoration: 'none' }} href="/theme/helium/auth">Helium</a></li>
      </ul>
    </nav>
  </div>
  )
}

function getQueryParams(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export default AppWithReactDomRouter;
