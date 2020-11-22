
![SuperTokens banner](https://raw.githubusercontent.com/supertokens/supertokens-logo/master/images/Artboard%20%E2%80%93%2027%402x.png)

# SuperTokens ReactJS Auth Theme

<a href="https://supertokens.io/discord">
<img src="https://img.shields.io/discord/603466164219281420.svg?logo=discord"
    alt="chat on Discord"></a>
    
## About
This repository is an example of implementing a custom theme for SuperTokens authentication system.
It implements a Sign-up/Sign-in theme on top of [supertokens-auth-react](https://github.com/supertokens/supertokens-auth-react).

If you are new to SuperTokens, please start by completing the [starter guide](https://supertokens.io/docs/emailpassword/starter-guide/overview).

Once this is done follow the [Embed in a page guide](https://supertokens.io/docs/emailpassword/intermediate-guide/signup-form/embed-in-page).

You can use it as is and you can also fork this repository to fully customize this theme for your own use. 
Please contact us if you'd like your theme to be listed in this repository for other people to use.


## Example use

```js
import React from 'react';

import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';

SuperTokens.init({
    appInfo: {...},
    recipeList: [
        EmailPassword.init({
            useShadowDom: false // Currently you need to disable the shadow Dom to use this theme.
        }),
        Session.init()
    ]
}) // See https://supertokens.io/docs/emailpassword/starter-guide/frontend

const backgroundSvgLink = "" // Your own background svg (undefined for default background)
function App() {
  return(
      <Router>
          <Switch>
            <Route exact path="/login">
              <SignInAndUp >
                <SignInAndUpFullPageTheme
                  backgroundUrl={backgroundSvgLink}
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
            <Route path="/reset-password">
              <ResetPasswordUsingToken >
                <ResetPasswordUsingTokenFullPageTheme
                  logo={"https://supertokens.io/static/assets/dark-home/logo.png"}
                  backgroundUrl={backgroundSvgLink}
                />
              </ResetPasswordUsingToken >
            </Route>
          </Switch>
      </Router>
  )
}
```

### Examples


![Screenshot 1](./assets/screenshot1.png?raw=true)
![Screenshot 2](./assets/screenshot2.png?raw=true)
![Screenshot 3](./assets/screenshot3.png?raw=true)
![Screenshot 4](./assets/screenshot4.png?raw=true)
![Screenshot 5](./assets/screenshot5.png?raw=true)
![Screenshot 8](./assets/screenshot8.png?raw=true)


<img width="300px" src="./assets/screenshot6.png?raw=true"/>

<img width="300px" src="./assets/screenshot7.png?raw=true"/>


### SVG Backgrounds

Illustrations background generated using the awesome [BGJar](https://bgjar.com/)

## Documentation
To see documentation, please click [here](https://supertokens.io/docs/auth-react/installation).

## Contact us
For any queries, or support requests, please email us at team@supertokens.io, or join our [Discord](supertokens.io/discord) server.

## Authors
Created with :heart: by the folks at SuperTokens.io.
