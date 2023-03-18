# mean-server

---

## Setup

### Typescript

```bash
yarn init -y
yarn add -D @types/node typescript nodemon eslint
tsc --init
```

and then add `.gitignore`

### Package.json

```json
  "scripts": {
    "build": "tsc && cp .env ./dist && cp .env.dev ./dist",
    "watch": "tsc -w",
    "dev": "nodemon dist/index.js",
    "debug": "DEBUG=mean-server nodemon dist/index.js",
    "start": "node dist/index.js"
  },
```

### tsconfig.json

enable:

```json
"outDir": "./dist",
```

### eslint

```bash
npx eslint --init
```

### express

```bash
yarn add -D @types/express @types/dotenv @types/debug
yarn add express dotenv debug
```

### dotenv

See `utils/config.ts` and `package.json`

### debug

See `index.ts` and `package.json`

### mongo

- https://www.mongodb.com/docs/mongodb-shell/run-commands/
- https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

To connect

```bash
docker exec -it mongodb bash

# To check mongodb
mongo --version
mongod --version

# and then
mongosh -u rootuser

# show databases, users, roles
show dbs
show users
show roles

# create db
use mean-app
db.myCollection.insertOne( { x: 1 } );

# show collections
show collections

# create user (Optional)
use admin
db.createUser({ user: "mongoadmin" , pwd: "mongoadmin", roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]})

# create user in new database
use mean-app
db.createUser({ user: "peter" , pwd: "Parker", roles: ["dbOwner", "readWrite"]})

# Show objects
db.posts.find()
```

### mongoose

- https://mongoosejs.com/docs/index.html
- http://localhost:8081

---

## Run

```bash
yarn build
# or yarn debug for debug
yarn start
```

---

## Tips

1/. Change:
```javascript
const express = require("express");
const router = express.Router();
module.exports = router;
`` 
to:
import { Router } from 'express';
const router = Router();
export default router;
```

2/. Change:
```javascript
const postRoutes = require("src/routes/posts");
`` 
to:
import postRoutes from './routes/posts';
```
