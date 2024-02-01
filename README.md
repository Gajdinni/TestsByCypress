Cypress End-to-End Testing Suite
Overview
This repository contains a comprehensive Cypress testing suite for end-to-end testing of a web application. The test suite covers various functionalities, ensuring reliability, security, and performance. The tests include scenarios for navigation, login, cache handling, responsiveness, and more.

Setup
Clone the Repository:

git clone https://github.com/TomekGajda/TestByCypress.git

Install Dependencies:
npm install cypress --save-dev

Run Cypress Tests:
npx cypress open

Test Categories
1. Navigation Tests
Covers navigation between different pages and subpages.
Tests basic authentication functionality.
Handles load timeouts and utilizes callback functions.
2. Login and Password Tests
Validates correct login and password scenarios.
Tests incorrect login and password cases.
Handles empty login and password inputs.
3. Cache and Performance Tests
Clears cache and checks resource caching.
Measures page load time and ensures it meets performance standards.
4. Responsive Design Tests
Verifies mobile, tablet, and desktop responsiveness.
Tests visibility and layout of elements on various devices.
5. Endpoint Testing
This category involves tests that send HTTP requests to various endpoints within the application. The goal is to verify that the responses align with the expected status codes, ensuring the correct functioning of the backend.
6. Accessibility Tests
Accessibility Tests are implemented using the Axe plugin. These tests aim to identify and rectify potential accessibility issues, contributing to a more inclusive user experience.
7. Task and Intercept Tests
The suite employs Cypress tasks for custom functionality and intercepts network requests for thorough testing. This category ensures that custom tasks and network interceptions perform as expected.
8. Button Operation Tests
Button Operation Tests validate the functionality of buttons across different views in the application. The tests cover scenarios involving the correct operation of buttons, contributing to a seamless user interaction experience.
