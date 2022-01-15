# AngularJS Marvel Heroes Application


## Overview


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`

## Development with `marvelheroes`

The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various JS libraries, such as AngularJS and jQuery, and Node.js tools,
such as [Karma][karma] and [Protractor][protractor]. You can install these by running:

```
npm install
```

This will also download the AngularJS files needed for the current step of the tutorial and copy
them to `app/lib`.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
  running.

### Unit Testing

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

### End-to-End Testing

We recommend using [Protractor][protractor] for end-to-end (e2e) testing.

It requires a webserver that serves the application. See the
_Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is
  set up to run the tests on Chrome directly. If you want to run against other browsers, you must
  modify the configuration at `e2e-tests/protractor-conf.js`.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].


## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  lib/...                --> 3rd party JS/CSS libraries, including AngularJS and jQuery (copied over from `node_modules/`)
  core/                  --> all the source code of the core module (stuff used throughout the app)
    checkmark/...        --> files for the `checkmark` filter, including JS source code, specs
    core.module.js       --> the core module
  img/...                --> image files
  app.animations.css     --> hooks for running CSS animations with `ngAnimate`
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of AngularJS services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

e2e-tests/               --> config and source files for e2e tests
  protractor.conf.js     --> config file for running e2e tests with Protractor
  scenarios.js           --> e2e specs

node_modules/...         --> 3rd party libraries and development tools (fetched using `npm`)

scripts/                 --> handy scripts
  private/...            --> private scripts used by the AngularJS Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)

karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
package-lock.json        --> Npm specific metadata, including versions of installed development tools dependencies
```

## Contact

For more information on AngularJS, please check out https://angularjs.org/.


[angular-seed]: https://github.com/angular/angular-seed
[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
