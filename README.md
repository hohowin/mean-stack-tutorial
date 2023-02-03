# mean-stack-tutorial

Youtube: [Angular - Node - MongoDB & Express (MEAN) Tutorial for Beginners - Getting Started](https://youtu.be/1tRLveSyNz8)

## Setup

### Monorepo

```bash
yarn init -y

mkdir whatever
cd whatever
yarn init -y
```

Then, add in the root package.json:
- `workspaces` info
- `private` true

### Angular UI

```bash
ng new mean-ui
```

To run `ng-server`, type:

```bash
yarn workspace mean-ui start
```

go to localhost:4200

## Development

### Angular

```bash
ng generate component post-create
```