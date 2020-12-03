# frontend-breaking-bad

[Breaking bad API](https://www.breakingbadapi.com/) consumption using react - redux - hooks - webpack.
Implemented by Oggo Petersen.

## Installation

In order to install and run the application you'll need docker and docker-compose ([docker](https://docs.docker.com/get-docker/) - [docker-compose](https://docs.docker.com/compose/install/))

To start the application, simply run

```bash
docker-compose up -d
```

The application will be available at the default port (80) when the installation finishes through a [nginx](https://www.nginx.com/) docker.
If you need to change the default port, simply edit the .env file to your needs (variable FRONTEND_PORT).

## About the implementation

This project was implemented using [React](https://pt-br.reactjs.org/), [Redux](https://react-redux.js.org/introduction/quick-start) and [SASS](https://sass-lang.com/documentation/syntax).

For the automated tests the chosen libraries are [Jest](https://jestjs.io/) and [enzyme](https://github.com/enzymejs/enzyme).

The styles are written using SASS and the BEM naming convention (Block Element Modifier - [BEM](http://getbem.com/))

To publish the application, and also have a development environment, I chose [webpack](https://webpack.js.org/) as the bundle creator.

React Hooks were used in order to simplify the components, alongside Redux to improve action / state manipulation.

The pagination was all done in memory. Having a few results returned from the API (about 63 rows) motivated this decision. Also the Breaking Bad API matches the exact name on the filter and the status filter wasn't working well when I tested it, so I wanted to make something more practical while implementing the pagination.

I've left the functions that sends requests to the API with limit, offset, name and status but abandoned the idea of using the API filters because of the reasons mentioned before. So we only request once, obtaining all the characters from the API and work with them in-memory via slice and filter, removing any "loading" icons while using the infinite scroll.

## Commands to run in Development Mode

If you wish to run the code in development mode, it is important to use node 8 (you can do so using [NVM](https://github.com/nvm-sh/nvm)).

The chosen package manager was [yarn](https://yarnpkg.com/).

To install and run the application in development mode, run the commands listed below:

```bash
# If you need to install the packages, use the commands below:
# nvm installation
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install node 8

# yarn installation
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

# Install application dependencies
yarn install

# Run the automated tests
yarn test

# Run the dev-server
yarn run dev-server
```
