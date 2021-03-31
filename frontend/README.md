## General info
This project is website admin page. this project using template from [CoreUI Free React.js Admin Template](https://github.com/coreui/coreui-free-react-admin-template)
	
## Technologies
Project is created with:
* Npm version: 6.4.1
* Node version: v10.13.0
	
## Setup
To run this project, install it locally using npm:

``` bash
# clone the repo
$ git clone https://github.com/anonymousliem/admin-page-e-workplace.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install

# start project
$ npm start

```
## Features
* Admin can create, read, update, delete attandance
* Admin can create, read, delete role
* Admin can create, read, delete account
* Admin can create, read division
* Admin can create, read job title
* Admin can upload image to blobstorage

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:


```
CoreUI-React#v2.0.0
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html template
│
├── src/             #project root
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```

## Dependencies
```
"dependencies": {
    "@coreui/coreui": "^2.1.16",
    "@coreui/coreui-plugin-chartjs-custom-tooltips": "^1.3.1",
    "@coreui/icons": "0.3.0",
    "@coreui/react": "^2.5.5",
    "axios": "^0.19.2",
    "bootstrap": "^4.4.1",
    "chart.js": "^2.9.3",
    "classnames": "^2.2.6",
    "core-js": "^3.6.4",
    "datatables.net": "^1.10.20",
    "date-fns": "^2.9.0",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.2",
    "flag-icon-css": "^3.4.6",
    "font-awesome": "^4.7.0",
    "jquery": "^3.4.1",
    "node-sass": "^4.13.1",
    "prop-types": "^15.7.2",
    "react": "^16.13.0",
    "react-app-polyfill": "^1.0.6",
    "react-bootstrap": "^1.0.0-beta.17",
    "react-chartjs-2": "^2.9.0",
    "react-date-range": "^1.0.1",
    "react-dom": "^16.12.0",
    "react-router-config": "^5.1.1",
    "react-router-dom": "^5.1.2",
    "react-select": "^3.0.8",
    "react-test-renderer": "^16.12.0",
    "reactstrap": "^8.4.1",
    "script": "^0.1.4",
    "simple-line-icons": "^2.4.1"
  }
```

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```
# build for production with minification
$ npm run build
```
