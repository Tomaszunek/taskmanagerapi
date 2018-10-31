
# React Task Manager API

A basic template that consists of the essential elements that are required to start building a Single Page Application using React, Redux, Sass, and Webpack.

The template consists of:

* a typcial api structure based on express framework
* a Sequelizejs model setup
* a Database MySql setup and configuration
* a test setup based on Mocha and Chai

---

## API Interface

### [GET] /api/tasks/all

* Return all tasks

### [PUT] /api/tasks/edit/:id

* Change user number for task id

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Express](https://expressjs.com/) - Node.js web application framework
* [Sequelizejs](http://docs.sequelizejs.com/) - Database ORM
* [MySql] - A transpiler for javascript
* [Mocha](https://mochajs.org/) - asynchronous testing framework
* [Chai](https://www.chaijs.com/) - testing framework


### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

### Install

Follow the following steps to get development environment running.

* Clone _'taskmanagerapi'_ repository from GitHub

  ```bash
  git clone https://github.com/Tomaszunek/taskmanagerapi.git
  ```

* Install node modules

   ```bash
   cd taskmanagerapi
   npm install
   ```

### Run

#### Run Start

This will run the _'node server.js'_ npm task

```bash
npm start
```

#### Run Test

This will run the _'node cross-env NODE_ENV=test mocha test/taskTest.js'_ npm task

```bash
npm test
```

---

### Run Prod On Heroku

This command will build application using production settings and start the application using _live-server_

```bash
commit changes
git push heroku master
then wait for build
```


---

