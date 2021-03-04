# [Candidates App][applink]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Sample Candidates App, to view list of candidates in home page and also update exisiting user data.
Application is deployed on [Github pages][applink]

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Technical Details

- Built on ReactJS Framework
- Display of different application state is handled using `react-router-dom`
- Redux is used for application state management
- Using `react-redux` hooks to integrate data between React components and Redux Store
- For Form validations `formik` is used. Field validations can be handled using `yup` scehma but as of now its kept in javascript to showcase development skills.
- Used `@testing-library` for unit testing of react components
- Configured git hooks using `husky` to validate `pre-commit` and `pre-push` checks
- Configured `commitizen` to validated commit message standards.
- Standard coding practice is validated using `eslint` and `prettier`
- Github actions are configured to deploy static content on Github pages

[applink]: https://ksupriya03.github.io/candidates-app/
