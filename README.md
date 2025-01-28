# React Native Authentication App

## Overview

This is a simple React Native application featuring authentication screens for user login and signup. The app leverages `react-navigation` for managing screen transitions and includes context-based authentication state management using `AuthContext`.

---

## Features

### Authentication Screens
- **Signup screen**: Register a new user.
- **Login screen**: Authenticate an existing user.

### Navigation
- Seamless navigation between Login and Signup screens.

### State Management
- Context API to handle user authentication state.

---

## Prerequisites

Before setting up the app, ensure you have the following installed:
- **Node.js** (v18 or above)
- **npm** or **yarn**
- **React Native CLI**
- **Xcode** (for iOS builds)
- **Android Studio** (for Android builds)

---

## Setup and Installation

### Clone the Repository
```bash
git clone <repo_url>
cd <repo_name>
```

### Install Dependencies

```bash
npm install
```

### Run the App Locally

#### For iOS:

```bash
npx pod-install
npm run ios
```

#### For Android:

```bash
npm run android
```

* * *

Project Structure
-----------------

```lua
/root
  |-- App.js
  |-- AuthContext.js
  |-- navigation/appNavigation.js
  |-- screens/
      |-- LoginScreen.js
      |-- SignUpScreen.js
  |-- index.tsx
  |-- .github/workflows/
      |-- lint-and-test.yml
      |-- build.yml
  |-- package.json
  |-- README.md
```

* * *

CI/CD Setup
-----------

This project uses **GitHub Actions** for CI/CD to ensure code quality and automate builds.

### Workflows

#### 1. Lint and Test Workflow (`lint-and-test.yml`)

This workflow runs on every push to the `main` branch and performs the following steps:

* Checks out the repository.
* Installs dependencies.
* Runs linting to ensure code adheres to standards.
* Executes basic tests to validate functionality.
  
#### 2. Build Workflow (`build.yml`)

This workflow triggers on pushes to `main` or any `release/*` branch. It generates release builds for Android and iOS.


Extending the CI/CD Pipeline
----------------------------

### Additional Enhancements

* **Add Additional Tests**: Update `lint-and-test.yml` to include new testing scripts.
* **Schedule Builds**: Automate builds at specific intervals using a schedule trigger.
* **Code Coverage**: Integrate tools like **Codecov** or **SonarCloud**.



Troubleshooting
---------------

* **Node.js Version Mismatch**: Ensure you have Node.js v18 installed.
* **Dependency Issues**: Run `npm install` to resolve missing packages.
* **Build Failures**: Verify that Android Studio and Xcode are properly configured on your machine.

* * *


