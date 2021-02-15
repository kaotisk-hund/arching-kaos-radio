# Arching Kaos Radio Website

## Branch: ptyxiaki
As of 2021.02.08

# Further description

This project is the source code which builds the [radio.arching-kaos.com](https://radio.arching-kaos.com/). It 's supposed to be hosting our icecast Live stream and a Playlist in a Menu where our different mixes or recorded shows will show up in order to play on demand.

**DONE**
- Create a logo
- Have a player for our live stream
- Have metadata for each song/mix/show is played printed in site and get updated
- Menu Playlist

## Intergrated with arching-kaos-api

Now the website of our radio station, Arching Kaos Radio, is intergrated with its sister project [arching-kaos-api](https://git.arching-kaos.net/kaotisk/arching-kaos-api).

## Intergration with Icecast

The website asks the metadata of the current playing stream, which are updated every `INTERVAL` seconds.

## IRC communication

There is an added kiwiIRC instance connected to our IRC server `irc.arching-kaos.net` over TLS connection.

## Install

Clone this repository and cd to it, like:

```sh
git clone https://git.arching-kaos.net/kaotisk/arching-kaos-radio
cd arching-kaos-radio
```
With docker you can run to build the image:

`docker build -t arching-kaos-radio .`

and this to run it exposing port 5000 to localhost as well:

`docker run -p 5000:5000 archkaradio`



----------

##  About ReactJS

Bellow you can read the bootstrapped README.md from react. After cloning this repo, run `npm install` so you get the project install its depedencies and then follow the instructions below.

----------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
