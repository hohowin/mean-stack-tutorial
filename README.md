# mean-stack-tutorial

- Youtube: [Angular - Node - MongoDB & Express (MEAN) Tutorial for Beginners - Getting Started](https://youtu.be/1tRLveSyNz8)
- Youtube: [Subjects in RxJS | Observables | Angular 12+](https://youtu.be/CKyMb3kXN_A)

## Setup Monorepo

```bash
yarn init -y

mkdir whatever
cd whatever
yarn init -y
```

Then, add in the root package.json:
- `workspaces` info
- `private` true

## Angular UI

- See [mean-ui\'s README](mean-ui/README.md)
- In root folder, to run `ng-server`, type:

```bash
yarn workspace mean-ui start
```

## Node Server

- See [mean-server\'s README](mean-server/README.md)
- In root folder, to run, type:

```bash
yarn workspace mean-server build
yarn workspace mean-server start
```