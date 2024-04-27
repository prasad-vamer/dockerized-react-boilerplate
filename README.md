# React TypeScript Boilerplate

This is a boilerplate project for building React applications with TypeScript. It provides a pre-configured development environment with Docker and Docker Compose, making it easy to set up and run the application locally.

## Features

- React with TypeScript
- Dockerized development environment

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

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, explaining your changes in detail.

Please ensure that your code follows the existing code style and passes all tests (if any) before submitting a pull request.
