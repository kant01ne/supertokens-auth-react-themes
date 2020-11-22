#!/bin/bash

#
# Use.
#
# ./startTestApp => Start frontend test app
# 

#
# Methods.
#

function startFrontEnd () {
    (
        echo "Starting test example app"
        # go to test app.
        cd test/react-test-app/
        # Run static react app on PORT 3032.
        BROWSER=none PORT=3032 npm run start
    )
}

function mvClashingNodeModulesToTmp () {
    # Prevent clashes on react-router-dom, and react.
    echo "Move clashing node_modules to tmp."
    mv node_modules/react-dom node_modules/react-dom-tmp > /dev/null 2>&1
    mv node_modules/react-router-dom node_modules/react-router-dom-tmp > /dev/null 2>&1
    mv node_modules/react node_modules/react-tmp > /dev/null 2>&1
    mv node_modules/eslint node_modules/eslint-tmp > /dev/null 2>&1
    mv node_modules/supertokens-auth-react node_modules/supertokens-auth-react-tmp > /dev/null 2>&1
    mv node_modules/emotion node_modules/emotion-tmp > /dev/null 2>&1
    mv node_modules/emotion-server node_modules/emotion-server-tmp > /dev/null 2>&1
}

function moveBackNodeModules () {
    echo "Adding back node_modules"
    mv node_modules/react-router-dom-tmp node_modules/react-router-dom > /dev/null 2>&1
    mv node_modules/react-dom-tmp node_modules/react-dom > /dev/null 2>&1
    mv node_modules/react-tmp node_modules/react > /dev/null 2>&1
    mv node_modules/eslint-tmp node_modules/eslint > /dev/null 2>&1
    mv node_modules/supertokens-auth-react-tmp node_modules/supertokens-auth-react > /dev/null 2>&1
    mv node_modules/emotion-tmp node_modules/emotion > /dev/null 2>&1
    mv node_modules/emotion-server-tmp node_modules/emotion-server > /dev/null 2>&1
}

trap "moveBackNodeModules" EXIT # Trap to execute on script shutdown
#
# Run.
#
mvClashingNodeModulesToTmp
startFrontEnd # Start Front end.