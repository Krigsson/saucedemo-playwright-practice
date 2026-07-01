# Saucedemo Playwright Tests

Automated UI test suite for [saucedemo.com](https://www.saucedemo.com/) built with Playwright and TypeScript.

## Stack
- Playwright;
- Typescript;
- GitHub Actions (CI).

## Project Structure
- `tests/` - test files;
- `pages/` - Page Object Model classes;
- `test-data/` - JSON test data files.

## How to run
Install dependencies:
npm install
npx playwright install

Run all tests:
npx playwright test

View HTML report:
npx playwright show-report

## CI
Test run automatically on every push to `master` via GitHub Actions.

![Playwright Tests](https://github.com/Krigsson/saucedemo-playwright-practice/actions/workflows/playwright.yml/badge.svg)