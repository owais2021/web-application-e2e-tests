# web-application-e2e-tests

#### Introduction
This project shows how to create a complete Cypress testing setup for a web application.

- Write and run Cypress tests
- Generate test reports in HTML using Mochawesome
- Run tests automatically using GitHub Actions on every push or pull request
- Upload reports to GitHub after each test run
- Wait for the app to start before running tests
- Use environment variables for login and URLs

#### Overview
This project uses Cypress to run automated tests that simulate a user interacting with a Sample web application. The tests ensure that the application works properly.

#### Technologies

1. Cypress: A tool that helps test websites quickly and easily.
2. JavaScript: The programming language used to write the tests.
3. Node.js: Needed to run Cypress and manage the tools used in the project.
   
#### Getting Started
##### Prerequisites
To set up and run this project, you need to have Node.js and npm installed on your machine.

Install Node.js from here, which will also install npm (Node Package Manager).

#### Installation
1. Clone the repository to your local machine:

- git clone https://github.com/owais2021/web-application-e2e-tests.git
- cd web-application-e2e-tests

2. Install dependencies:
In the project directory, run: npm install
This will install Cypress and other necessary dependencies.

#### Running Tests
1. Open Cypress Test Runner
- To run the tests interactively in Cypress: npx cypress open
- This will open a GUI where you can click to run specific tests

2. Run Tests in Headless Mode
- To run all tests in a headless mode (no UI), use the following command: npx cypress run
- This is ideal for running tests in CI/CD pipelines.

#### GitHub Actions CI
This project includes a GitHub Actions workflow that:

- Installs dependencies
- Builds and starts the app
- Waits for the app to be ready
- Runs Cypress tests
- Uploads the HTML report as an artifact
  
#### Triggers
GitHub Actions for Automated Testing

- On every push to main
- On pull requests
- Manually via GitHub UI

- The workflow is defined in .github/workflows/test.yml.
- GitHub Actions will automatically install dependencies and run tests when changes are made.

#### View Report
Go to the Actions tab on GitHub.

- Click the latest workflow run.
- Download the cypress-report artifact under the “Artifacts” section.
- Open index.html inside the downloaded report folder.

