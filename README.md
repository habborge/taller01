![logo](http://globalex.dot5hosting.com/designware/nodejs.jpg)

# Node web Service Taller No 1

Task web service is a web service prototype that help you to learn how use node JS.

## Requirements

Task web service need to run:

- node 10
- npm 6

## Install

In order to work with Task Web Service you have to clone te repository.

```shell
git clone https://github.com/habborge/taller01.git && cd taller01
```

After you need install some node modules, to do this, you just need run a simple command

```shell
npm install
```

#### OBS: Do not forget create the .env file in your root web service folder and edit the file.

```text
SERVER_PORT= port number that you prefer.
DATABASE_URL= Database URL, well be local or remote connection.
DATABASE_USERNAME= username (if you created it)
DATABASE_PASSWORD= password (if you created it)
```

## How to Start the server

if you will use this API in order to work in develoment environment you must type on terminal:

```shell
npm run dev
```

but, if you will use this API in order to work in production environment you must type on terminal:

```shell
npm start
```

## Database connection

This project has a mongoDB database. You can use a local connection or remote connection.
You must edit the database file.

#### Remote Connection

```shell
In this case, you do not do anything in database.js file:
const url = `mongodb://${database.username}:${database.password}@${database.url}`;
```

#### local Connection

```shell
If in you do not created username and password in your local connection, you must edit database.js file:
const url = `mongodb://${database.url}`;
```

## Considerations

- http://yourdomainname:3000/api/v1/tasks/ It is the same as using http://yourdomainname:3000/api/tasks/

OR

- http://yourdomainname:3000/api/v1/users/ It is the same as using http://yourdomainname:3000/api/users/

### Routes to use:

#### Task Routes

| Route              | Method | Parameters | Body                                |
| ------------------ | :----: | ---------: | ----------------------------------- |
| /api/v1/tasks      |  GET   |          - | -                                   |
| /api/v1/tasks      |  POST  |          - | description: string, author: string |
| /api/v1/tasks/{id} |  GET   | id: number | -                                   |
| /api/v1/tasks/{id} |  PUT   | id: number | description: string, author: string |
| /api/v1/tasks/{id} | PATCH  | id: number | description: string, author: string |
| /api/v1/tasks/{id} | DELETE | id: number | -                                   |

| Operations          | Status Code | Description                    |
| ------------------- | ----------- | ------------------------------ |
| CREATE (POST)       | 201         | Create a new task              |
| READ (GET)          | 200         | Get all tasks                  |
| READ (GET)          | 200         | Get task from Id {id}          |
| UPDATE (PUT, PATCH) | 200         | Update a task using a ID{\_id} |
| DELETE (DELETE)     | 200 / 204   | Get task from Id {id}          |

#### Task Routes

| Route              | Method | Parameters | Body                                |
| ------------------ | :----: | ---------: | ----------------------------------- |
| /api/v1/users      |  GET   |          - | -                                   |
| /api/v1/users      |  POST  |          - | description: string, author: string |
| /api/v1/users/{id} |  GET   | id: number | -                                   |
| /api/v1/users/{id} |  PUT   | id: number | description: string, author: string |
| /api/v1/users/{id} | PATCH  | id: number | description: string, author: string |
| /api/v1/users/{id} | DELETE | id: number | -                                   |

| Operations          | Status Code | Description                    |
| ------------------- | ----------- | ------------------------------ |
| CREATE (POST)       | 201         | Create a new user              |
| READ (GET)          | 200         | Get all users                  |
| READ (GET)          | 200         | Get user from Id {id}          |
| UPDATE (PUT, PATCH) | 200         | Update a user using a ID{\_id} |
| DELETE (DELETE)     | 200 / 204   | Get user from Id {id}          |
