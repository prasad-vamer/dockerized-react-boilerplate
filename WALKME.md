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