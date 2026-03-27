# Playwright E2E Automation Framework — Demo Web Shop

[![Playwright Tests](https://github.com/sgrvperera/Playwright_Project_02/actions/workflows/playwright.yml/badge.svg)](https://github.com/sgrvperera/Playwright_Project_02/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-Automation%20Framework-brightgreen.svg)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

A professional **end-to-end automation testing framework** built with **Playwright** and **TypeScript** for the Demo Web Shop application.

This project is structured to reflect real-world QA automation standards with:
- maintainable Page Object Model design,
- reusable test fixtures,
- authentication session reuse through storage state,
- cross-browser execution,
- and GitHub Actions CI support.

**Target application:** https://demowebshop.tricentis.com

---

## Project Summary

This repository demonstrates how to build a scalable and maintainable Playwright automation solution for modern web applications.

It is designed to be easy to extend, simple to maintain, and suitable for both practice and client-facing portfolio presentation.

The framework focuses on:
- clean test architecture,
- reusable page classes,
- stable test execution,
- and clear reporting for fast debugging.

---

## Key Capabilities

- **Playwright + TypeScript** for modern browser automation
- **Page Object Model (POM)** for clean separation of UI logic and test logic
- **Global setup** to prepare authenticated test state
- **Storage state reuse** to avoid repeated login/setup steps
- **Custom fixtures** for reusable test data and structure
- **Cross-browser execution** for Chromium, Firefox, and WebKit
- **HTML report generation** for fast test analysis
- **Screenshots, videos, and traces** for failure investigation
- **GitHub Actions CI pipeline** for automated execution on push and pull request

---

## Test Coverage

The current smoke flow demonstrates a real e-commerce user journey:

1. Register a new user
2. Sign in to the application
3. Search for a product
4. Add the product to the cart
5. Validate cart contents

This validates the core buying path and proves the framework can cover important business-critical user flows.

---

## Technology Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **GitHub Actions**
- **dotenv**

---

## Repository Structure

```text
Playwright_Project_02
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── CartPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── RegisterPage.ts
├── tests/
│   ├── e2e/
│   │   └── demowebshop-smoke.spec.ts
│   └── fixtures/
│       ├── example.spec.ts
│       └── user.fixture.ts
├── global-setup.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

---

## Framework Design

### 1. Page Object Model
The `pages/` directory contains reusable page classes that keep selectors and actions out of the test files.  
This makes the framework easier to maintain when UI changes happen.

### 2. Global Setup
The `global-setup.ts` file creates a unique user, registers that user, and saves the authenticated session to `storageState.json`.  
This helps reduce repeated setup steps and keeps test runs faster and more stable.

### 3. Configuration Driven Execution
The `playwright.config.ts` file controls:
- base URL configuration,
- retries,
- worker count in CI,
- timeouts,
- reporting,
- screenshots,
- videos,
- traces,
- and browser projects.

### 4. CI Workflow
The GitHub Actions workflow runs the tests automatically on push and pull request events, using a browser matrix for:
- Chromium
- Firefox
- WebKit

---

## Prerequisites

Before running the project, make sure you have:

- **Node.js** installed
- **npm** available
- A GitHub account if you want to use CI
- Internet access to reach the Demo Web Shop site

---

## Installation

### 1) Clone the repository
```bash
git clone https://github.com/sgrvperera/Playwright_Project_02.git
cd Playwright_Project_02
```

### 2) Install dependencies
```bash
npm install
```

### 3) Install Playwright browsers
```bash
npx playwright install
```

---

## Running Tests

### Run the full test suite
```bash
npx playwright test
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/e2e/demowebshop-smoke.spec.ts
```

### Run tests for a single browser project
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## Viewing the Report

After execution, open the HTML report:

```bash
npx playwright show-report
```

The report helps you quickly inspect:
- passed and failed tests,
- screenshots,
- videos,
- trace files,
- and execution history.

---

## Environment Variables

The project supports environment-based configuration using `.env`.

Example `.env.example`:

```env
BASE_URL=https://demowebshop.tricentis.com
STORAGE_STATE=storageState.json
```

This makes the framework easier to adapt for other environments such as QA, staging, or production-like test systems.

---

## GitHub Actions CI

The repository includes a CI workflow that is designed to run automatically in GitHub Actions.

The pipeline:
- checks out the code,
- sets up Node.js,
- installs dependencies,
- installs Playwright browsers,
- runs tests across multiple browsers,
- and uploads reports, screenshots, videos, and test artifacts.

This gives the project a more professional delivery standard and makes it easier to demonstrate automation results to clients or hiring managers.

---

## Why This Project Looks Professional

This framework is built and organized to show real QA engineering skills, including:

- structured framework design,
- reusable automation components,
- clean separation of concerns,
- reliable setup and execution flow,
- strong debugging support,
- and CI integration.

It is suitable as:
- a portfolio project,
- an Upwork/Freelancer sample,
- a QA automation demo,
- or a foundation for a client automation framework.

---

## Future Enhancements

Possible next improvements include:
- API test integration,
- test data generation utilities,
- advanced reporting with Allure,
- tagging and filtering strategy,
- Docker-based execution,
- and parallel execution tuning for larger test suites.

---

## Author

**Ruchika Perera**  
QA Automation Engineer  
Playwright | TypeScript | CI/CD

---

## Contact

If you are reviewing this project as a client, recruiter, or collaborator, this repository shows how I approach automation with a focus on stability, maintainability, and professional delivery.

---

> Built as a clean, scalable Playwright automation framework for real-world testing practice and professional portfolio use.
