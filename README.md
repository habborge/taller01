![logo](http://globalex.dot5hosting.com/designware/nodejs.jpg)

# Node web Service Taller No 1

Task web service is a web service prototype that help you to learn how use node JS.

##Requirements

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

OBS: Do not forget create the .env file in your root web service folder and edit the file.

```text
SERVER_PORT= port number that you prefer.
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

## Considerations

- http://yourdomainname:3000/api/v1/task/ It is the same as using http://yourdomainname:3000/api/task/

- in controller.js file there is an array preloaded

```shell
proyect = [
  {
    _id: 1,
    description:
      'Node.js es una plataforma que nos permite ejecutar código JavaScript fuera del navegador.',
    author: 'Hab Borge',
    created_at: '2018-12-30',
    updated_at: '2019-01-02',
  },
  {
    _id: 2,
    description: 'Muchas personas creen que Node.js se utiliza sólo para crear aplicaciones Web.',
    author: 'Jesús Osorio',
    created_at: '2019-01-03',
    updated_at: '2019-01-04',
  },
];
```

Routes to use:

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
