<p align="center">
  <a href="https://www.apollographql.com/docs/apollo-server" target="__blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" width="200" alt="Graphql Logo" /></a>
</p>

# Rick and Morty API

# Technologies used

![Graphql](https://img.shields.io/badge/GraphQL-e10098?style=flat&logo=graphql)

![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)

![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Code structure

```
app/
  ├── module/
    ├── dto/
    ├── interfaces/
    ├── resolvers/
    ├── schema/
    ├── services/
    ├── __tests__/


```

# Results

## ERD

- ERD diagram:

<p align="left">
  <a target="__blank"><img src="./rickMorty.png" width="600" /></a>
</p>

## How to start the app locally

# Clone Project and run it locally

1. Make sure you got docker-desktop installed on your pc
2. Clone the Repository

```
https://github.com/dasanchez11/graphql-rick-morty
```

3. Create a **.env** that has the same parameters as the **.env.example** and add environment variables
   if on docker, leave DB_HOST and REDIS_HOST as the example

```
DB_USERNAME = 'postgres'
```

4. Run the app on Docker

```
docker-compose up -d
```

5. Open the app on your web browser

```
http://localhost:4000/
```

6. If you don't have docker,

- 1. Start a postgres db
- 2. Start a redis service
- 3. map the ports in the env variables
- 4. run

```
npm run db:create
```

- 5. run

```
npm run db:migrate
```

- 6. run

```
npm run db:seed
```

- 7. run

```
npm run start
```

7. Enjoy
