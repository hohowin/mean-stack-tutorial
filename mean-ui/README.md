# Angular UI

## Setup

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

### Angular Material Theme

- Theme is defined in `angular.json`
 

---

## Development

### Angular

```bash
ng generate component components/post-create
ng generate component components/post-list
ng generate component components/header

ng generate service services/post
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

- See [Components](https://material.angular.io/components/categories)
- See `app.modules.ts`, `post-create.component.html` and `post-create.component.scss` for example.

### Angular Material Theme

- Create `my-theme1.scss`
- Check out [MATERIAL DESIGN PALETTE GENERATOR](http://mcg.mbitson.com/) and [The color system](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors)
- See [Styles and scripts configuration](https://angular.io/guide/workspace-config#styles-and-scripts-configuration) and [Theming Angular Material](https://material.angular.io/guide/theming)
