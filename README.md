[![Build Status](https://travis-ci.org/SureBro/react-redux-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/SureBro/react-redux-webpack-boilerplate) [![Dependency Status](https://gemnasium.com/badges/github.com/SureBro/react-redux-webpack-boilerplate.svg)](https://gemnasium.com/github.com/SureBro/react-redux-webpack-boilerplate) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/316b0b7d9e954f3b847d4bff62ae5162)](https://www.codacy.com/app/SureBro/react-redux-webpack-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SureBro/react-redux-webpack-boilerplate&amp;utm_campaign=Badge_Grade) [![GitHub version](https://badge.fury.io/gh/SureBro%2Freact-redux-webpack-boilerplate.svg)](https://badge.fury.io/gh/SureBro%2Freact-redux-webpack-boilerplate)
# react-redux-webpack-boilerplate 

Boilerplate set up with Koa-React, Babel, ESLint, Redux, Sass, Bootstrap, Mocha, Chai, Webpack. **This is still a work in progress**

## Installation and Getting it started ##
1. Clone into your local device with `git clone https://github.com/SureBro/react-redux-webpack-boilerplate.git`
2. Run `npm install`
3. Run `npm run webserver` to get your backend started
4. Open a new tab in your terminal and run `npm run dev` to get your frontend started
5. Your app should be running on localhost:8080 unless you changed the port

## Tests ##
This boilerplate is setup with [Chai](https://github.com/chaijs/chai) and [Mocha](https://github.com/mochajs/mocha) to handle testing. The frontend test files should be added to `/app/tests/` and your api test files should be added to `/api/tests/`. 

You can test both parts of your apps individually. 

For frontend tests, you can have different test files for different modules or components wherever it makes sense, *(same folder as the module/component the test is built for)* but import them in `/app/tests` or `/api/tests` so mocha can use it to test your application.

To test your frontend application `npm run test`. This will test your app once and close. To **watch** your tests, run `npm run test:watch`. This way your tests will run everytime you edit your code. This might be useful in certain scenarios.

Similarly, test your api with `npm run testserver` and **watch** them with `npm run testserver:watch`.

## Project Structure Explanation ##
*Will add a guide to where each part of the app should go*

## Tech Stack ##
*Will add brief explanation and links soon*

1. *Koa*

2. *ReactJs*

3. *Redux*

4. *React Router*

5. *Babel*

6. *Webpack*

7. *ESLint*

8. *React Helmet*

## TODOs ##
- [ ] Support for SSR  
- [ ] Instanbul to test Code Coverage

With :heart: from [Surebro](https://surebro.com)
