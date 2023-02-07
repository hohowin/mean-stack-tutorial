# mean-server

---

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

### express

```bash
yarn add -D @types/express @types/dotenv @types/debug
yarn add express dotenv debug
```

### dotenv

See `utils/config.ts` and `package.json`

### debug

See `index.ts` and `package.json`

---

## Run

```bash
yarn build
# or yarn debug for debug
yarn start
```
