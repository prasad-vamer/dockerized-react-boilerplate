# Walk me through the entire creation of this Repo.
## My thoughts and points were i stuck and Rethink will be here for future reference.

## Trying to build a react app which is completely on docker environment.
I think there are 2 approached when it comes to dockerizing a project.

1. create the project on your local machine (or an existing project) then dockerize it.
In this method the all requirements for the project needed to be (will be) there in the local machine.
For existing project its not a problem, but for a new project with new requirements you may need to install the software packages correct version and all.
So we will focus on approach 2

2. In this approach our local machine will not have any library or software installed, 
We will just have [docker](https://www.docker.com/products/docker-desktop/)
Everything wee needed for the project will be insttalled and build on docker.

I will be always usng docker compose.
Even though for this dockerized react app we dont need a docker compose, in future it will be always easy to add and manage multiple services if we are using docker compose.

## Lets Start

### StoryLine 1: I need to insall all te dependency for creating a react app,
The idea is to create a React app Completely from inside a container.
So that I docnt have to nstall any dependency on my local machine.
Then once we have the React app we will dockerize it so that it will me easy to develop and deploy the React Project on any machne.

### 1. Creating a interactive container from Node Image
Lets pull a node image and start a container from it, make the container interactive so that we can start from there.

As of today (27/04/2024) Latest version of [Node.js is 22](https://nodejs.org/en/blog/announcements/v22-release-announce)
We will be using Node Version 22.


```
docker run -it --rm -v "$PWD:/app" -w /app node:22.0.0 /bin/bash
```

<details>
<summary>Explanation</summary>

- `docker run`: 
This is the command to run a new Docker container.

- `-it`: 
This option combines -i (interactive) and -t (pseudo-TTY) flags. 
It allows you to interact with the container's command line interface (CLI) and provides a terminal-like experience.

- `--rm`: 
This flag automatically removes the container when it exits. It ensures that the container is cleaned up after you're done using it.

- `-v "$PWD:/app"`: 
This option mounts a volume from the host machine to the container. It maps the current working directory ($PWD) on the host to the /app directory inside the container. This allows you to access and modify files from your host machine within the container.

- `-w /app`: 
This option sets the working directory inside the container to /app. It means that when the container starts, it will be positioned in the /app directory.

- `node:22.0.0`: 
This specifies the Docker image to be used for creating the container. In this case, it uses the node image with the version 22.0.0. This image provides a Node.js environment.

- `/bin/bash`: 
This is the command that will be executed inside the container when it starts. In this case, it launches the Bash shell, allowing you to interact with the container's command line.

#### So, when you run this command, it does the following:
It starts a new Docker container using the node:22.0.0 image.
It mounts the current working directory ($PWD) from the host machine to the /app directory inside the container.
It sets the working directory inside the container to /app.
It starts the Bash shell inside the container, allowing you to interact with the container's command line.
When you exit the container (e.g., by typing exit or pressing Ctrl+D), the container is automatically removed due to the --rm flag.

</details>

### StoryLine 2: Now that we have entered into the container of node
The main part is completed.
Next is to create a React app uisng Vite.

### 2. Creating A react ts app with vite

```
npm create vite@latest . -- --template react-ts
```

<details>
<summary>Explanation</summary>

`npm create vite@latest . -- --template react-ts`

The command `npm create vite@latest . -- --template react-ts` is used to create a new [Vite project](https://vitejs.dev/guide/) with React and TypeScript. Let's break down the different parts of the command:

- `npm`: This is the Node Package Manager (npm) command, which is used to interact with npm and manage JavaScript packages.

- `create`: This is an npm command that allows you to create new projects using pre-configured templates or starter kits.

- `vite`: This specifies the package or template that you want to use for creating the project. In this case, it refers to the Vite build tool.

- `@latest`: This specifies the version of the `create-vite` package to use. `@latest` ensures that the latest version of the package is used.

- `.`: This represents the current directory where you want to create the project. It means that the project will be created in the current folder.

- `--`: This is used to separate the `create` command options from the Vite-specific options that follow.

- `--template react-ts`: This is a Vite-specific option that specifies the template to use for the project. In this case, it indicates that you want to use the "react-ts" template, which sets up a Vite project with React and TypeScript.
</details>

### StoryLine 3: I have done as below for the create vite command.
```
root@c322a190746c:/app# npm create vite@latest . -- --template react-ts
Need to install the following packages:
create-vite@5.2.3
Ok to proceed? (y) y
✔ Current directory is not empty. Please choose how to proceed: › Ignore files and continue

Scaffolding project in /app...

Done. Now run:

  npm install
  npm run dev

npm notice 
npm notice New minor version of npm available! 10.5.1 -> 10.6.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.6.0
npm notice Run npm install -g npm@10.6.0 to update!
npm notice 
root@c322a190746c:/app# 
```

What Happened Now!
The  create vite command created a react app for us.
But how does that files came out from the container to our local folder?

` -v "$PWD:/app" `
Yes thats the reason.
Since we attached our PWD to the conatiner folder.

Any change happends in either will be sync in the other.

So even without Node installed in my local machine I have created a react ts App.

This Mark the END of Step 2.

### StoryLine 4: Lets Dockerize
Now that we have a React ts app. the next thing is to run this app in the docker environment.
We will be uding docker and docker compose.


### 3. Docker file

create a file named `Dockerfile` in the root directory and copy the below contents
```
FROM node:22.0.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]

```

`FROM node:22.0.0`

This line specifies the base image for the Docker container. It uses the Node.js image with version 22.0.0. The `node` image provides a pre-configured environment for running Node.js applications.

`# Set the working directory`
`WORKDIR /app`

These lines add comments and set the working directory inside the container to `/app`. Any subsequent instructions in the Dockerfile will be executed in this directory.

`# Copy package.json and package-lock.json`
`COPY package*.json ./`

These lines copy the `package.json` and `package-lock.json` files from the host machine to the current directory (`.`) inside the container. The `package*.json` pattern matches both `package.json` and `package-lock.json` files.

`# Install dependencies`
`RUN npm install`

This line runs the `npm install` command inside the container to install the dependencies specified in the `package.json` file. It ensures that all required packages are installed before proceeding.

`# Copy the rest of the application`
`COPY . .`

This line copies the entire contents of the build context (the directory containing the Dockerfile) to the current directory (`.`) inside the container. It effectively copies all the application files into the container.

`# Expose the port the app runs on`
`EXPOSE 5173`

This line exposes port 5173 from the container to the host machine. It indicates that the application inside the container will listen on port 5173. However, it does not automatically publish the port; you need to use the `-p` flag when running the container to map the container port to a host port.

`# Command to run the application`
`CMD ["npm", "run", "dev"]`

This line specifies the default command to run when the container starts. In this case, it runs the command `npm run dev`, which is typically used to start the development server for a Node.js application. The command is executed inside the container's working directory (`/app`).

### 4. Docker Compose file

create a file named `docker-compose.yml` in the root directory and copy the below contents
```
services:
  app:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
    # Use Pooling if Windows files systme shows any Hot Reloading isues.
    # Uncomment the below 2 environment variables if HOT Reloading(HR) is Not working.
    # environment:
    #   - CHOKIDAR_USEPOLLING=true
    #   - CHOKIDAR_INTERVAL=1000
    stdin_open: true
    tty: true

```
`services:`

This line starts the definition of the services section, which contains the configuration for the Docker containers that make up the application.

`app:`

This line defines a service named "app" for the application container.

`build: .`

This line specifies that the "app" service should be built using the Dockerfile located in the current directory (`.`). It instructs Docker Compose to build the image based on the Dockerfile.

`ports:`
`- "5173:5173"`

These lines define the port mapping for the "app" service. It maps port 5173 from the host machine to port 5173 inside the container. This allows accessing the application running inside the container through the specified port on the host machine.

`volumes:`
`- .:/app`

These lines define a volume mapping for the "app" service. It mounts the current directory (`.`) on the host machine to the `/app` directory inside the container. This allows the application code to be synchronized between the host and the container, enabling live reloading during development.

`# Use Pooling if Windows files systme shows any Hot Reloading isues.`
`# Uncomment the below 2 environment variables if HOT Reloading(HR) is Not working.`
`# environment:`
`# - CHOKIDAR_USEPOLLING=true`
`# - CHOKIDAR_INTERVAL=1000`

These lines are commented out and provide instructions for resolving hot reloading issues on Windows file systems. If hot reloading is not working correctly, uncommenting the `environment` section and the specified environment variables (`CHOKIDAR_USEPOLLING` and `CHOKIDAR_INTERVAL`) can help resolve the issue by enabling file system polling.

`stdin_open: true`
`tty: true`

These lines configure the "app" service to keep the standard input open (`stdin_open`) and allocate a pseudo-TTY (`tty`). This allows interactive input and enables attaching to the container's console.


### StoryLine 5: Run our react App.
We have successfully dockerized our react ts app.
Now that we can test its working by running the app.

Build the docker image.
```
docker compose build --no-cache
```

Run the container.
```
docker compose up
```


React App is running on port 5173.
```
app-1  |   VITE v5.2.10  ready in 3185 ms
app-1  | 
app-1  |   ➜  Local:   http://localhost:5173/
app-1  |   ➜  Network: use --host to expose
app-1  |   ➜  press h + enter to show help
```

Try accessing http://localhost:5173/

## Stuck 1. Site can't be reached.
When I access the site http://localhost:5173/ nothing comes.
I cannot access the react app.
What Went Wrong!

### Vite Server Binding
Vite, by default, may bind to the local interface (127.0.0.1 or localhost) inside the container, which would prevent it from being accessible from outside the container. 

Adjust the package.json to use the --host flag, which should solve this issue by binding to 0.0.0.0. 
So Update the package.json as below
package.json
```
"scripts": {
  "dev": "vite --host",
  ...
},
```
add --host flag to the command.

Stop the container by pressing Ctrl+C

Run the container again.
```
docker compose up
```

YES.... The react app is working and listening on port 5173.
