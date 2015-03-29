# React-mini

### Why
I built this project because I write the widgets library for traitify, and a couple co workers discussed using react.js for our  widget views.
The problem with using react.js was it was too large to bundle with our api client. So I went into react.js and tried to get a handle on some of the things we regularly use in react, to recreate them.

This is very small, does not have all the features, and is missing things that some would call a necessity for the core library, but since we do not need them for our projects I probably will not include them.
It also probably doesn't have certain error handling for more complex components, and does not have speed optimization for intelligent rewrites of the dom, but again its tailored for our particular use case.

Unless you're trying to find an extremely small (a couple kbs), unbacked, fairly featureless library for a special use case, I would not reccomend using it.
React Is a fantastic library and the facebook people made it really robust, full featured and fast.

##### So Small Less Than 1kb Minified!  (878 bytes currently)

### React JSX Supported
With that however I would like to say that I do intend to support the majority of use cases for jsx. If you see something that jsx builds but the lib doesn't support please put in a pull request.

##### NPM JSX Compilation
    npm install -g react-tools

### Terminal Commands
    gulp coffee     # Builds the lib
    gulp webserver  # Will bring up a live auto refreshing server
    gulp test       # will run tests
