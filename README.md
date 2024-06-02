# React TypeScript Boilerplate

This is a boilerplate project for building React applications with TypeScript. It provides a pre-configured development environment with Docker and Docker Compose, making it easy to set up and run the application locally.

## Features

- React with TypeScript
- Dockerized development environment
- Multiple branches with different configurations and features:
  - `plain_vite_react`: Basic React TypeScript application
  - `react_ts_twcss`: React TypeScript application with Tailwind CSS configured
  - `react_router_6-23-0`: This is an ideal starting point for React projects utilizing React Router 6.23.0 and Tailwind CSS
  - `shadcn_ui`: Planing to use shadcn components in the project, checkout this branch
  - `react_redux`: React Redux configuration with TypeScript
  

## Branch Structure

- `main` branch:

The main branch serves as the central hub for the latest stable features and configurations. 
It represents the most up-to-date and production-ready code. When a feature or configuration is independently developed in a separate branch and reaches a stable and complete state, it is merged into the main branch.

- `Feature/Configuration` branches:
When a new feature or configuration is being developed, a dedicated branch is created specifically for that work.
Once a feature or configuration is complete, it is merged into the main branch. 
These branches are useful for referencing specific features or configurations.

When a feature or configuration in the main branch reaches a stable and complete state, a new branch is created specifically for that feature or configuration.
The purpose of these dedicated branches is to provide a fixed and immutable snapshot of the completed work.
Once a feature or configuration branch is created, it remains unchanged to preserve the integrity and reliability of that particular version.
These branches are useful for referencing or deploying specific features or configurations in a stable and predictable manner.

## Branches

### 1. `plain_vite_react`

The [plain_vite_react](https://github.com/prasad-vamer/dockerized-react-boilerplate/tree/plain_vite_react) branch contains a basic React TypeScript application without any additional configurations or features. It serves as a starting point for building React applications with TypeScript.

### 2. `react_ts_twcss`

The [react_ts_twcss](https://github.com/prasad-vamer/dockerized-react-boilerplate/tree/react_ts_twcss) branch extends the basic React TypeScript application from the `plain_vite_react` branch and includes the configuration for Tailwind CSS. It allows you to quickly build React components with utility-first styling using Tailwind CSS.

### 3. `react_router_6-23-0`
The [react_router_6-23-0](https://github.com/prasad-vamer/dockerized-react-boilerplate/tree/react_router_6-23-0) branch is a template for React projects that includes React Router 6.23.0 and Tailwind CSS. The project consist of configurations till `react_ts_twcss` and has been cleaned up and organized into `Components` and `Container` directories to follow react atomic design folder structure. The `Container` directory includes sample pages demonstrating the implementation of React Router. This branch is an ideal starting point for React projects utilizing Tailwind CSS and React Router.

### 4. `shadcn_ui`

The [shadcn_ui](https://github.com/prasad-vamer/dockerized-react-boilerplate/tree/shadcn_ui) branch is a template for React projects that includes shadcn. The project consist of configurations till `react_router_6-23-0`. If you are planning to implement shadcn components in your library this branch will be the better starting point for React projects.

### 5. `react_redux`

The [react_redux](https://github.com/prasad-vamer/dockerized-react-boilerplate/tree/react_redux) branch is a template for React projects that includes React Redux with TypeScript. The project consist of configurations till `shadcn_ui`. If you are planning to implement redux in your library this branch will be the better starting point for React projects.

## Prerequisites

Before running the application, make sure you have the following installed:

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:
```
git clone https://github.com/prasad-vamer/dockerized-react-boilerplate.git
```

2. Navigate to the project directory:
```
cd dockerized-react-boilerplate
```

3. Build the Docker image:
```
docker compose build --no-cache
```

4. install node modules
```
docker compose run --rm app npm install
```

5. Start the react app
```
docker compose up
```

This will start the application and make it accessible at `http://localhost:5173/`.

5. Open your browser and visit `http://localhost:5173/` to see the running application.

## Development

The source code for the React application is located in the `src` directory.

You can modify the code and the changes will be automatically reflected in the browser.

### Usefull commands
#### 1. Enter into the bash shell of the 'app' service container.
Accessing the interactive shell (bash) inside the running container named "app" defined in the Docker Compose file.

When the app service is running
```
docker-compose run app bash
```

When the app service is not running
```
docker-compose exec app bash
```

## Add dependencies
To install new dependencies, you can use the following command:

```
docker-compose run app npm install <package-name>
```

## Project Walkthrough

For a detailed walkthrough of the steps involved in creating this project, please refer to the [WALKME.md](WALKME.md) file. 

This file provides an in-depth explanation of the path followed, the issues encountered along the way, and the solutions implemented to overcome those challenges.

The `WALKME.md` file serves as a comprehensive guide that documents the entire process of building this project from start to finish. It includes valuable insights, lessons learned, and troubleshooting tips that can be helpful for anyone looking to understand the project's development journey or seeking guidance on similar projects.

Whether you are a curious developer, a contributor, or someone interested in learning from the project's experiences, the `WALKME.md` file is an excellent resource to explore. It offers a behind-the-scenes look at the thought process, decision-making, and problem-solving approaches employed throughout the project's lifecycle.

Feel free to dive into the `WALKME.md` file to gain a deeper understanding of the project's creation and to learn from the challenges and successes encountered along the way.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, explaining your changes in detail.

Please ensure that your code follows the existing code style and passes all tests (if any) before submitting a pull request.
