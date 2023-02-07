# mean-server

## Setup

### Typescript

```bash
yarn init -y
yarn add -D @types/node typescript nodemon
tsc --init
```

and then add `.gitignore`

### Package.json

```json
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "dev": "nodemon dist/index.js",
    "start": "node dist/index.js"
  },
```

### tsconfig.json

enable:

```json
"outDir": "./dist",
```

### express

```bash
yarn add -D @types/express @types/dotenv
yarn add express dotenv
```

## Run

```bash
yarn build
yarn start
```