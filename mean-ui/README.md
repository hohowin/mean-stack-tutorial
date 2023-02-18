# Angular UI

## Setup

### Angular UI

```bash
ng new mean-ui
```

Start server and go to http://localhost:4200

### Angular Material

```bash
ng add @angular/material
```

### Angular Material Theme

- Theme is defined in `angular.json`

### i18n

Angular does build time localization

- Youtube: [Introduction to Internationalization in Angular](https://youtu.be/KNTN-nsbV7M)
- Docs: [Example Angular Internationalization application](https://angular.io/guide/i18n-example)
- Docs: [Common Internationalization tasks](https://angular.io/guide/i18n-common-overview)

First:

```bash
ng add @angular/localize
```

Then, modify `angular.json`:

Under `projects` and your project, add:

```json
      "i18n": {
        "sourceLocale": "en-US",
        "locales": {
          "zh-HK": "src/locale/messages.zh.xlf"
        }
      },
```

Under `architect > build > options`, add:

```json
            "localize": ["zh-HK"],
```

In the html, attach `i18n` attributes. Then, type:

```bash
ng extract-i18n --output-path src/locale
```

Finally, add `<target>` in the zh file

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

### Routes

See `app-routing.module.ts`, `app-component.html`, `header.component.html`, and `post-create.component.ts`

### Background Image

See `assets/img` and `post-create.component.scss`

---

## To Run Development Mode

```bash
yarn start
```
Then go to http://localhost:4200

---

## Note

1\. Use the spread operator (return all elements of an array) to clone the array and

```javascript
[...this.posts]
```

2\. In `post.service.ts`, saving state didn't quite work. So simply call getPosts() again. Maybe can fix it later.

3\. Convert `string | null` to `string`

```javascript
mystring ?? ""
```

4\. Handle array.find

```javascript
const found = this.posts.find(p => p.id === id);
if (found) {
  return {...found};
} else {
  return {id: '', title: '', content: ''};
}
```

5\. Require vs Import: 
- https://www.educba.com/require-vs-import/
- https://www.educba.com/require-vs-import/

6\. Import Export:
- https://www.typescriptlang.org/docs/handbook/modules.html
- https://stackoverflow.com/questions/12696236/module-exports-in-typescript
- https://www.educative.io/answers/how-to-import-and-export-a-module-in-typescript
- https://www.sitepoint.com/understanding-module-exports-exports-node-js/