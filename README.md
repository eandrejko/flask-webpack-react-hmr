# Example Flask Webpack with React and Hot Module Replacement (HMR) #

This is an example project setup that supports combining Flask with React. 

Benefits include:

- webpack for asset bundling (providing many benefits)
- flask / webpack integration
- support for front-end development using React
- live reloading of changes in development mode
- [TODO] Docker integration (with support for Docker based deployments) 

Based on the [Flask-Webpack][flask-webpack] and [Webpack React HMR example][react-hmr-blog].

[react-hmr-blog]: http://matthewlehner.net/react-hot-module-replacement-with-webpack/
[flask-webpack]: https://github.com/nickjj/flask-webpack

## Quick Start

To run:

- clone the repo
- run `docker-compose run webpack-dev npm i` to setup your development environment
- run `docker-compose up`
- visit `http://localhost:5000`
- edit anything in the `render` method of `App.js` and see HMR at work.

**NOTE**: this example runs within docker, but is configured to mount the host directory (so that standard edits to source files are reflected within the container)

## How It Works

<img src="https://github.com/eandrejko/flask-webpack-react-hmr/raw/master/flask-webpack-react-hmr-example.gif" width="873" height="424" />

During normal development, `docker-compose` is used to start _both_ Flask (the primary web server) and the `webpack-dev-server` which serves the compiled Javascript and handles the hot module reloading on changes.

Since `webpack-dev-server` is installed and runs within a Docker container, packages should be installed by running inside of the container:

```
docker-compose run webpack-dev npm i <foo> --save-dev
```

## Contributing

- [JavaScript style guide](docs/js_style_guide.md)

### Technologies used
- React
- Redux
