This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes on the Music Player app

### Structure

A `src/components_shared` folder has been created which houses any shared components used throughout the app. Otherwise, child components are stored locally to their parent components.

### Redux

Please see the `src/store` for the definitions of actionTypes, actions and reducer used throughout the app.

### Styling

Please note that this app uses different styling approaches. Most styles are injected via Sass. However, where props are required to inform specific style attributes, styled components have been used (for example, see the `StyledDiv` component: `src/pages/MusicPlayer/SongList/TrackItemWrapper/StyledDiv`).

The `components_shared` folder houses a `Grid` and a `Button` component, which utilise pre-built components from the `material-ui` library for React. These components can receive props which affect presentation or function. For example the `Grid` can receive props which allow the app to be responsive, and is based on Flexbox.

### Tests

Unit tests have been written using react-testing-library. The components for which tests have been written are the `SongList` and `PlayerArea` components, which also tests for the presentation of the elements from their child components in the ui.

A `src/utils` folder was created to house the `renderWithRedux` function, allowing it to be used in more than one set of tests.

Please run `npm run test`. There are two test suites in this app. If only one is run, press `w` then `a` in the terminal to run all tests. If no tests are run, just press `a`.

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
