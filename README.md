# <h1 align="center"> Cypress CICD Sandbox Automation </h1>

## Repo Description

Cypress Continous Integration & Continous Development setup sandbox to be used for ref into the implementation of other repos

## Pre-req

- Be sure to have at Nodejs v 16+

## Installation

After cloning the repo 'see cheatsheet for ref'(https://education.github.com/git-cheat-sheet-education.pdf)

```javascript
Navigate to the root folder -> Run the command 'npm install'
This may take some time!!
````

## Usage

To run and execute individual test, you can do so by opening cypress

```javascript
open Cypress Test Runner
'npx cypress open'

below command will open using Staging configurations
'npx cypress open --config-file staging-config.json --env configFile=staging'

```

There are 3 different testing area/environments

### Local testing

For local testing, it is best to do your test while using cypress test runner.
In order to ensure cypress works with your local application, you will have to align the following configurations, that exist in cypress.json file.

```javascript
    "baseUrl":"https://<localhost+port for zenledger main app>/",
    "landUrl":"https://<localhost+port for zenledger marketing app>/"
```

by default, when running cypress open command, it defaults to cypress.json config file or you could just run the other command mentioned above, to get the same result.

FOR DEV - If you just want to run the test after doing the above modifications, you can simply run the command below

```javascript
   'npm run e2eLocal'
```

### Staging testing

Configurations already done (or will be done), you just need to run command below
```javascript
   'npm run e2eStaging'
```

### Production Testing
Configurations already done (or will be done), you just need to run command below
```javascript
   'npm run e2eProd'
```
Note that this type of testing, will be pushing results to Cypress Dashboard

## Contributing

QA Team!!

## License

Zenledger owns all rights to this code
