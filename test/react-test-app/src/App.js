import React, {Fragment} from 'react';
import './App.css';

import AppWithReactDomRouter from './AppWithReactDomRouter';
import Footer from "./Footer";
/* SuperTokens imports */
import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';


let resetPasswordURL = window.location.pathname.startsWith("/theme/fullpage/auth") === true ? "/theme/fullpage/auth/reset-password" : "/auth/reset-password";

SuperTokens.init({
  appInfo: {
    appName: "Example App",
    websiteDomain: "localhost:3032",
    apiDomain: "localhost:8082"
  },
  recipeList: [
    EmailPassword.init({
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
  
  return <AppWithReactDomRouter/>
}

export default App;

export function BaseComponent ({children}) {
  return (
       <Fragment>
       <div className="page">
          {children}
       </div>
        <Footer/>
      </Fragment>
  )
}
