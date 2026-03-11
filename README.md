# Playwright E2E Automation – Demo Web Shop

[![Playwright Tests](https://github.com/sgrvperera/Playwright_Project_02/actions/workflows/playwright.yml/badge.svg)](https://github.com/sgrvperera/Playwright_Project_02/actions)

End-to-End automation testing project built with **Playwright and TypeScript**.  
This project demonstrates a maintainable automation framework using **Page Object Model**, **fixtures**, **global setup**, and **GitHub Actions CI**.

The tests run against the public demo site:

https://demowebshop.tricentis.com

---

# Project Overview

This repository demonstrates how to build a **scalable Playwright automation framework** with modern best practices used in real QA automation projects.

The framework includes:

- Playwright with TypeScript
- Page Object Model (POM)
- Global test setup
- Storage state reuse for authentication
- Test fixtures
- Cross-browser test support
- GitHub Actions CI pipeline
- HTML reports, screenshots, videos, and traces

---

# Automated Test Scenario

The sample smoke test automates the following user journey:

1. Register a new user
2. Login to the application
3. Search for a product
4. Add the product to cart
5. Verify the cart contents

This test validates core e-commerce functionality.

---

# Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **GitHub Actions (CI/CD)**

---

# Project Structure
Playwright_Project_02
│
├── pages
│ ├── HomePage.ts
│ ├── LoginPage.ts
│ ├── RegisterPage.ts
│ └── SearchPage.ts
│
├── tests
│ ├── e2e
│ │ └── demowebshop-smoke.spec.ts
│ │
│ └── fixtures
│ └── user.fixture.ts
│
├── global-setup.ts
├── playwright.config.ts
├── package.json
└── README.md


---

# Installation

Clone the repository:

```bash
git clone https://github.com/sgrvperera/Playwright_Project_02.git

Navigate to the project directory:

cd Playwright_Project_02

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
Running Tests

Run all tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

Run a specific test:

npx playwright test tests/e2e/demowebshop-smoke.spec.ts
Test Reports

After running tests, open the Playwright HTML report:

npx playwright show-report

The report includes:

Test results

Screenshots

Videos

Execution traces

Continuous Integration

This project uses GitHub Actions to automatically run tests on every push.

The CI pipeline:

Installs dependencies

Installs Playwright browsers

Runs Playwright tests

Generates reports and artifacts

You can view the CI runs here:

https://github.com/sgrvperera/Playwright_Project_02/actions

Author

Ruchika Perera
QA Automation / Playwright Practice Project
