# React TypeScript Boilerplate

This is a boilerplate project for building React applications with TypeScript. It provides a pre-configured development environment with Docker and Docker Compose, making it easy to set up and run the application locally.

## Features

- React with TypeScript
- Dockerized development environment
- Multiple branches with different configurations and features:
  - `plain_vite_react`: Basic React TypeScript application
  

## Branch Structure

- `main` branch:

The main branch serves as the central hub for the latest feature development and configuration creation.
It represents the most up-to-date and cutting-edge work in progress.
New features and configurations are initially developed and tested in the main branch.

- `Feature/Configuration` branches:

When a feature or configuration in the main branch reaches a stable and complete state, a new branch is created specifically for that feature or configuration.
The purpose of these dedicated branches is to provide a fixed and immutable snapshot of the completed work.
Once a feature or configuration branch is created, it remains unchanged to preserve the integrity and reliability of that particular version.
These branches are useful for referencing or deploying specific features or configurations in a stable and predictable manner.

## Branches

### 1. `plain_vite_react`

The [plain_vite_react](https://github.com/prasad-vamer/dockerized-react-boilerplate/tree/plain_vite_react) branch contains a basic React TypeScript application without any additional configurations or features. It serves as a starting point for building React applications with TypeScript.

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

4. Start the react app
```
docker compose up
```

This will start the application and make it accessible at `http://localhost:5173/`.

5. Open your browser and visit `http://localhost:5173/` to see the running application.

## Development

The source code for the React application is located in the `src` directory.

You can modify the code and the changes will be automatically reflected in the browser.

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
