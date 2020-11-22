import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {SignInAndUp, ResetPasswordUsingToken} from 'supertokens-auth-react/recipe/emailpassword';
import {SignInAndUpFullPageTheme, ResetPasswordUsingTokenFullPageTheme} from 'supertokens-auth-react-themes/';
import {BaseComponent} from './App';

const backgroundId = getQueryParams("backgroundId") || Math.floor(Math.random() * 20) +1;
console.log("BackgroundId", backgroundId);
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
            <Route exact path="/theme/fullpage/auth">
              <SignInAndUp >
                <SignInAndUpFullPageTheme
                  backgroundUrl={`/backgrounds/background${backgroundId}.svg`}
                  logo={"https://supertokens.io/static/assets/dark-home/logo.png"}
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
            <Route path="/theme/fullpage/auth/reset-password">
              <ResetPasswordUsingToken >
                <ResetPasswordUsingTokenFullPageTheme
                  logo={"https://supertokens.io/static/assets/dark-home/logo.png"}
                  // logo={"https://dbd6j53uzcole.cloudfront.net/assets/images/logos/b.bbdd29c1e022d8800d7be23e476d38dd.svg"}
                  backgroundUrl={`/backgrounds/background${backgroundId}.svg`}
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
        <li key="custom4"><a className="menu__link" style={{ textDecoration: 'none' }} href="/theme/fullpage/auth">Fullpage Theme</a></li>
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
