# Book Search Engine

This book search engine was converted from using RESTful API to using GraphQL API to handle user and book queries/mutations. On this React site, users are able to search for books using Google's Book API whether or not they're logged in. However, once logged in, a user is able to save books and remove books from their saved list. This application uses Apollo Server integrated with Express to use the GraphQL queries and mutations.

## Table of Contents
* [Live Deployment](#live-deployment)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Live Deployment
[View the live Book Search Engine with Heroku.](https://book-search-jcolecodes.herokuapp.com/)

## Screenshot
![Screenshot of the book search engine](./screenshot.png)

## Installation
To install and run this project, please follow these steps: 
1. Make sure you have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com/try/download) installed.
2. Through the command line, go to the folder you wish this application's folder to be in.
3. Do `git clone` of the repository to get the application's files.

This program requires the following packages from npm: 
* [concurrently](https://www.npmjs.com/package/concurrently) (root)
* [express](https://www.npmjs.com/package/express) (server)
* [apollo-server-express](https://www.npmjs.com/package/apollo-server-express) (server)
* [graphql](https://www.npmjs.com/package/graphql) (server & client)
* [mongoose](https://www.npmjs.com/package/mongoose) (server)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (server)
* [bcrypt](https://www.npmjs.com/package/bcrypt) (server)
* [@apollo/client](https://www.npmjs.com/package/@apollo/client) (client)
* [jwt-decode](https://www.npmjs.com/package/jwt-decode) (client)
* [react](https://www.npmjs.com/package/react) (client)
* [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) (client)
* [bootstrap](https://www.npmjs.com/package/bootstrap) (client)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) (client)
* And more...

In order to install all of them, enter the following into the command line:
```
npm install
```

## Usage
To run this project, enter the following into the command line of the project's root folder:
```
npm run develop
```
Then open [localhost:3000](http://localhost:3000/) to see the local webpage.

## Contributing
If you would like to contribute to this project, you can do so by:
1. Forking the project. ([Learn how to fork.](https://docs.github.com/en/get-started/quickstart/fork-a-repo))
2. Creating a new feature branch, committing the changes, and pushing the branch.
3. Opening a [Pull Request](https://github.com/JColeCodes/novel-find/pulls).

You can also check the list of [Issues](https://github.com/JColeCodes/novel-find/issues).

Read the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## Tests
This application does not have any tests written for it.

## Questions
Book Search Engine was created by [JColeCodes](https://github.com/JColeCodes). For inquiries regarding the project, please email the creator at [capauldi@gmail.com](mailto:capauldi@gmail.com).