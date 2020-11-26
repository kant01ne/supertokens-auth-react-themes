import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PeriodicTable from "./PeriodicTable";

/* SuperTokens imports */
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';

/* SuperTokens Theme imports */
import HydrogenComponents from "./Components/Hydrogen";
import HeliumComponents from "./Components/Helium";
import LithiumComponents from "./Components/Lithium";


const resetPasswordURL = getResetPasswordUrl();

SuperTokens.init({
  appInfo: {
    appName: "Example App",
    websiteDomain: "localhost:3032",
    apiDomain: "localhost:8082"
  },
  recipeList: [
    EmailPassword.init({
      // palette: {
      //   background: "#000",
      //   primary: "#000",
      //   textLink: "red"
      // },
      useShadowDom: false,
      resetPasswordUsingTokenFeature:{
        disableDefaultImplementation: true,
      },
      signInAndUpFeature: {
        disableDefaultImplementation: true,
        onSuccessRedirectURL: '/dashboard',
        signInForm: {
          resetPasswordURL
        },
        signUpForm: {
          privacyPolicyLink: "https://supertokens.io/legal/privacy-policy",
          termsOfServiceLink: "https://supertokens.io/legal/terms-and-conditions",
          formFields: [{
                id: "email",
                label: "Your Email",
                placeholder: "Your work email"
            },{
                id: "name",
                label: "Full name",
                placeholder: "First name and last name"
            },{
                id: "age",
                label: "Your age",
                placeholder: "How old are you?",
                validate: async (value) => {
                  if (parseInt(value) > 18) {
                      return undefined;
                  }

                  return "You must be over 18 to register";;
                }
              }, {
                id: "country",
                label: "Your Country",
                placeholder: "Where do you live?",
                optional: true
            }]
          }
      }
    }),
    Session.init()
  ]
});

/* App */
function App() {
  return (
    <Router>
      <Switch>

          {/* Hydrogen Theme */}
          <Route exact path="/theme/hydrogen/auth">
            <HydrogenComponents.Auth />
          </Route>
          <Route exact path="/theme/hydrogen/auth/reset-password">
            <HydrogenComponents.ResetPassword />
          </Route>

          {/* Helium Theme */}
          <Route exact path="/theme/helium/auth">
            <HeliumComponents.Auth />
          </Route>
          <Route exact path="/theme/helium/auth/reset-password">
            <HeliumComponents.ResetPassword />
          </Route>

          {/* Lithium Theme */}
          <Route exact path="/theme/lithium/auth">
            <LithiumComponents.Auth />
          </Route>
          <Route exact path="/theme/lithium/auth/reset-password">
            <LithiumComponents.ResetPassword />
          </Route>

          <Route path="/">
            <PeriodicTable />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

function getResetPasswordUrl () {
  let pathArr = window.location.pathname.split("/");
  if (pathArr[1] === "theme") {
    return `/theme/${pathArr[2]}/auth/reset-password`;
  }
  return undefined;
}