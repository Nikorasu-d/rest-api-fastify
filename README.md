## Simple TO DO API using NodeJS, Fastify Framework and MongoDB

This a Simple Project Based on a NUWE Challenge, you can use this project as a reference to learn the basics of **Restful API Development** with a different framework than [ExpressJS](https://expressjs.com/) in this case using [Fastify](https://fastify.dev/) to mount a web service

This is not a Course but i will expose some useful information if you want to build and test this project with your own [MongoDB](https://mongodb.com/) database

### Preview of this project on render

I've deployed this app previously on render, you can open this links to see this code in action

>[!IMPORTANT]
>If you notice there is delay on the reply, please wait the free web service on render may shutdown the server when there is no use

- [GET ALL](https://rest-api-fastify.onrender.com/api/v1/todos/all)
- [GET HOLA MUNDO](https://rest-api-fastify.onrender.com/api/v1/todos/668f7ddab018f6429f3f0f0d)
- You need an API key to test **POST, PUT AND DELETE**, so test this locally please

> [!WARNING]
> I'm assuming you have a MongoDB database already mounted locally or you have a MongoDB Atlas Cluster, if you haven't, please create one

### To Mount this Project you will need:

- NodeJS
- Npm
- MongoDB Atlas Cluster or MongoDB **(Locally or in your own Server)**
- Git
- Text Editor **(VS Code)**

## First Steps

1. If you don't have it, please install Node.js [>> Here](https://nodejs.org)
2. If you dont have it, please Install Git [>> Here](https://git-scm.com/downloads)

>[!Important]
>Is a must have to install this tools, then restart your PC

### Once you do the Must have:

You need to create folder where you want to clone this repo, i suggest to create a git folder on your personal user home: ```C:/users/<your_user>/git```

Then open the created folder and once you are in, open a **Terminal / CMD / Git Bash / Bash** and type:

```bash
git clone https://github.com/Nikorasu-d/rest-api-fastify.git
```

This will clone the repo and you will have access to this project locally 🍻


### Second Steps

Now you have everything installed open the Project folder, if you have done following my instructions the route will be ```C:/users/<your_user>/git/rest-api-fastify```

Open a terminal and install the dependencies from the Package.json with the following command:

```bash
npm install
```

This is gonna create the node_modules folder, when everything is installed, execute this just in case of any problem with nodemon:

```bash
npm install nodemon --save-dev
```

### Last Steps

Then the last step to have everything ready with the backend project is to include the env file. To do this you need to open the project folder with the text editor of your preference.

When you can see all the files you need to create a file without extension called **.env** 

**Will to look like this:**

```bash
./--
    node_modules
    src
        model
            todo.js
        controller
            todoController.js
        routes
            commonRoutes.js
        services
            todoService.js       
    .gitignore
    index.js
    package-lock.json
    package.json
    README.md
    .env  -> You need to create this file
```

Inside this file you need to add the following code and complete the info with the route to your database

```python

CON_STR = "your_connection_string"
API_KEY = "choose a password for post, put and delete"
DB = "name of your database"
COLLECTION = "name of your collection"

```

### Build your project 🍾

Once you complete the previous configuration, you're ready to test it, to do that just open a terminal inside the project folder and run any of this scripts:

```bash

npm run dev  -> this one gonna launch nodemon index.js
npm run start  -> this one gonna launch node index.js

```
>[!NOTE]
> If you want to develop changes over the code use dev, this one is going to use nodemon and you will be able to see changes in real time if you make a save when the server is running

### For those who wants to deploy this API on [Render](render.com)

Make sure to create a new repo on your github, make a push to it, create a web service on render and connect to it, i will leave a code to make the git push easier:

```bash
// Make sure to Copy this code line by line on your terminal

git remote remove origin
git remote add <the_url_of_your_repo>
git add .
git commit -m "First commit"
git branch -M main
git push origin main
```
>[!IMPORTANT]
> When you're ready please take care of include all the env variables you have on **.env** and add an extra one called **RENDER** and value it to **true**, like this into the environment variables panel when you config your web service on **RENDER**:

```bash

RENDER = true

```


### END

Please leave a star if you like this project and follow me, you can always fork this project and suggest changes if you want 🫂
