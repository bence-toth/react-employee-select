# EmployeeSelect Application

This project consists of three stateless components and a small React application which showcases one of them, the EmployeeSelect.

The project was bootstrapped with create-react-app, you might want to [read a bit about it](https://github.com/facebook/create-react-app), it’s really cool.

## Application structure

### Stateless components

The stateless components are in `/src/components`:
- EmployeeSelect in `/src/components/employeeSelect/`
- Avatar in `/src/components/avatar/`
- Spinner in `/src/components/spinner/`

EmployeeSelect is dependent on both Avatar and Spinner.

All components are documented in Storybook.

### React application

Besides these components, there is the React application in `/src/app`.

Think about this as a set (a pair to be fair) of implementation examples of the EmployeeSelect component.

This is where all of the state management happens and all side effect are neatly isolated here.

The application fetches data [from the server](../server/README.md).

The application has two routes:
- `/` for default demo
- `/disabled` for a disabled component

Routing is done via `reach-router`.

The application is bootstrapped at `/src/index.js`, which imports `/src/app/app.container.js` which is where all the magic starts. The container is a React function component using hooks for state management (and more).

I decided not to introduce an external state manager like Redux or MobX, instead, I used the `useReducer` and `useState` hooks and stored all the data I needed in the React component itself. Nonetheless I decided to keep the _consumer_, _reducer_, and _action creator_ patterns familiar from the Redux world, even if I managed to build a slightly unconventional (but switch-case-free) setup.

The app fetches data from the server and keeps track of the state. It renders an EmployeeSelect component on both routes, although the select is disabled on `/disabled`.

The container handles all microcopy necessary for rendering EmployeeSelect. It is made in a way that it would be extremely simple to support (some) other languages. The default language selection (`en_US`) is hard-coded in the container.

## Run the application

To run the application, first install dependencies:
```bash
npm ci
```

Then start up the project in your favorite browser with React running in dev mode, hot reloading, and all the bells and whistles:
```bash
npm start
```

### Do weird things

The project was built on top of create-react-app, so you _can_ technically `npm run build` or `npm run eject`, but why in Odin’s name would you ever want to do that is beyond me.

## Test the application

### ESLint

To run ESLint with [a _very_ extensive config](https://www.npmjs.com/package/@agillic/eslint-config) I love:
```
npm run lint
```

### Storybook

You can run [Stroybook](https://storybook.js.org/) that documents and showcases all stateless components:
```
npm run storybook
```
There are plenty of stories and it uses the knobs addon, so you can see every possible state of the components, and even interact with them to some extent.

### Jest and StoryShots

Start Jest’s test runner:

```
npm test
```

Press `a` to run all tests, or just follow the instructions in the console.

Running `npm test` will execute unit tests and integration tests.

It will also execute snapshot tests with [StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots), a snapshot tester for Storybook. After thoroughly reviewing failed snapshot tests, you can regenerate the snapshots by pressing `u`.

You can generate a coverage report with Jest:
```
npm test:coverage
```
A few boilerplate files are excluded from the report.

### Cypress

You can run [Cypress](https://www.cypress.io/) tests that cover every possible use case I could come up with:
```
npm run cypress
```
Just click “Run all specs” in the main Cypress window and see the magic happen.

Please note that as the tests work with focus, **it is required that the focus stays in the browser running the tests**, otherwise the tests could semi-randomly fail.

## Improvement ideas

- Viewport/component edge detection (so the drop down can go on the top if that is more convenient).

- Keep cursor position and selection state of the input field when returning after leaving it for suggestions.

- The race condition situation could be handled in a better way with request cancellation. Now every time the component fires a new request, previous requests are left there hanging and resolving, while they could be cancelled [using `AbortController`s](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

- Consider using _department_ instead of _email address_ in drop down and selection to help the users identify suggestions easier, maybe this should be user tested.

- When there are many suggestions in the drop down, it is unnecessary to render all of them, it is only necessary to render the ones that are visible within the viewport of the scrollable area. Using some tool like `react-virtual-list` could come with a nice performance gain, especially because of the avatar images.

- Rounded corners – on the screenshot one version was with rounded corners, and the other without. I decided to go with rounded corners as I thought that it looked nicer, but it could be easily turned to a `prop` so the EmployeeSelect component would support both.

- Scroll bar styles could be cross-browser, now only webkit-based browsers get the nice scroll bars.

- The presenters and their event handlers should be tested with libraries like `sinon` and `react-testing-library`, right now the only tests that actually tests their behavior is end-to-end (Cypress).

- Although I subjectively consider the component generally accessible, no actual accessibility testing was conducted, so the component probably has some space for improvement there.

- Some usability testing would not hurt.