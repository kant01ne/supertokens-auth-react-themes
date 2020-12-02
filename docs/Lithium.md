
# Lithium Theme

## About

## Example use

```js
import React from 'react';

import SuperTokens from 'supertokens-auth-react';
import EmailPassword, {SignInAndUp, ResetPasswordUsingToken} from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import {Lithium} from "supertokens-auth-react-themes";

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
                <Lithium.SignInAndUpTheme
                  backgroundUrl={"/backgroundUrl.svg"}
                  logo={"/logo.png"}
                />
              </SignInAndUp >
            </Route>
            <Route path="/reset-password">
              <ResetPasswordUsingToken >
                <Lithium.ResetPasswordUsingTokenTheme
                  backgroundUrl={"/backgroundUrl.svg"}
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


![Screenshot 1](https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot1.png?raw=true)
![Screenshot 2](https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot2.png?raw=true)
![Screenshot 3](https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot3.png?raw=true)
![Screenshot 4](https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot4.png?raw=true)
![Screenshot 5](https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot5.png?raw=true)
![Screenshot 8](https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot8.png?raw=true)


<img width="300px" src="https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot6.png?raw=true"/>

<img width="300px" src="https://raw.githubusercontent.com/NkxxkN/supertokens-auth-react-themes/main/assets/lithium/screenshot7.png?raw=true"/>


### SVG Backgrounds

Illustrations background generated using the awesome [Undraw project](https://undraw.co//)

## Documentation
To see documentation, please click [here](https://supertokens.io/docs/auth-react/installation).

## Contact us
For any queries, or support requests, please email us at team@supertokens.io, or join our [Discord](supertokens.io/discord) server.

## Authors
Created with :heart: by the folks at SuperTokens.io.
