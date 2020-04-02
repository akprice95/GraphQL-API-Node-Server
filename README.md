# GraphQL Apollo Server Example

This example shows how to implement a **GraphQL server with JavaScript (Node.js)** based on [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/).

## How to use

### 1. Download example & install dependencies

Install npm dependencies:

```
cd into project
npm install
```

### 2. Run each npm script in package.json

```
npm run launchDocker
npm run createDB
npm run generate
npm run postinstall
npm run seed
npm run dev
```

In another terminal tab run

```
npm run start
```

### 3. Open in browser

- Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the GraphQL Playground.
- Then navigate to [http://localhost:5555](http://localhost:5555) in your broswer to view Prisma Studio.

### Prisma as your data modeling tool

- [See Prisma Code](https://github.com/akprice95/GraphQL-API-Node-Server/tree/master/prisma)

### Docker-based PostgreSQL, MySQL, or MongoDB as your data store

- [See Postgres in scripts](https://github.com/akprice95/GraphQL-API-Node-Server/blob/master/package.json)

### At least 3 Query resolvers to get data from your server

#### \* The id's in all queries and mutations are provided for a premade stat for easy testing.

#### Get all stats

```graphql
query getAllStats {
  Stat {
    id
    updatedAt
    name
    KD
    GamerTag
    Platform
  }
}
```

#### Get a single Stat

```graphql
query getStat {
  Stat(id: "ck8hvilvm0003xh14cgqfng3r") {
    name
    KD
    GamerTag
    Platform
  }
}
```

#### Filter Stats based on a searchstring

```graphql
query filterStat {
  filterStat(searchstring: "100") {
    name
    KD
    GamerTag
    Platform
  }
}
```

### At least 2 Mutation resolvers allowing users to create, update, or upsert an item.

#### Create Stat

```graphql
mutation createStat {
  createStat(name: "New Stat Example", age: 0) {
    id
    updatedAt
    name
    KD
    GamerTag
    Platform
  }
}
```

#### Update Stat

```graphql
mutation updateStat {
  updateStat(id: "ck8hviluf0000xh14ta14rgx7", name: "Updated name", age: 170) {
    id
    updatedAt
    name
    KD
    GamerTag
    Platform
  }
}
```

### At least 1 Mutation resolver allowing users to delete an item.

#### Delete Stat

```graphql
mutation deleteOneStat {
  deleteOneStat(where: { id: "ck8hviluz0001xh14yaojpumg" }) {
    id
    name
  }
}
```

### Your datastore will contain at least 25 items

- You can see the number of items in [Primsa Studio](http://localhost:5555/) or the [Seed File](seed.js), and the data being seeded in the [coD.json](coD.js)

### Your app will be deployable locally using Docker and will have seed data entered into the datastore.

- This can be seen in the npm scripts above and in the [package.json](package.json)
