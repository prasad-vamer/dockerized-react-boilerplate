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