# mean-stack-tutorial

Youtube: [Angular - Node - MongoDB & Express (MEAN) Tutorial for Beginners - Getting Started](https://youtu.be/1tRLveSyNz8)

## Setup

---

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

### Angular Material

```bash
ng add @angular/material
```

theme is defined in `angular.json`

---

## Development

### Angular

```bash
ng generate component post-create
```

To bind data, either:

```html
<textarea [value]="newPost" #postInput></textarea>
<!-- onAddPost(postInput: HTMLTextAreaElement) -->
<button> (click)="onAddPost(postInput)">Save Post</button>
```

or:

```html
<textarea [(ngModel)]="enteredPost"></textarea>
<button (click)="onAddPost()">Save Post</button>
```

### Angular Material