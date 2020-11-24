
# Helium Theme

## About

## Example use

```js
import React from 'react';

import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import {Helium} from "supertokens-auth-react-themes";

SuperTokens.init({
    appInfo: {...},
    recipeList: [
        EmailPassword.init({
            useShadowDom: false // Currently you need to disable the shadow Dom to use this theme.
        }),
        Session.init()
    ]
}) // See https://supertokens.io/docs/emailpassword/starter-guide/frontend

function App() {
  return(
      <Router>
          <Switch>
            <Route exact path="/login">
              <SignInAndUp >
                <Helium.SignInAndUpTheme
                  logo={"/logo.png"}
                />
              </SignInAndUp >
            </Route>
            <Route path="/reset-password">
              <ResetPasswordUsingToken >
                <Helium.ResetPasswordUsingTokenTheme
                  logo={"/logo.png"}
                />
              </ResetPasswordUsingToken >
            </Route>
          </Switch>
      </Router>
  )
}
```

### Examples


![Screenshot 1](../assets/helium/screenshot1.png?raw=true)
![Screenshot 2](../assets/helium/screenshot2.png?raw=true)
![Screenshot 3](../assets/helium/screenshot3.png?raw=true)
![Screenshot 4](../assets/helium/screenshot4.png?raw=true)
<img width="300px" src="../assets/helium/screenshot5.png?raw=true"/>
<img width="300px" src="../assets/helium/screenshot6.png?raw=true"/>
<img width="300px" src="../assets/helium/screenshot7.png?raw=true"/>


## Documentation
To see documentation, please click [here](https://supertokens.io/docs/auth-react/installation).

## Contact us
For any queries, or support requests, please email us at team@supertokens.io, or join our [Discord](supertokens.io/discord) server.

## Authors
Created with :heart: by the folks at SuperTokens.io.
