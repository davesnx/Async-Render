# async render poc spike

This is a poc app using async rendering with react and virtual dom
[TF-5789](https://typeform.atlassian.net/browse/TF-5789)

### Based on... [the ultimate webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)

#### React by default
The project runs with React by default and hot replacement of changes to the modules. Currently it is on 0.14 RC.

#### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted.
Run `npm run eslint` or `npm run jscs` to verify all files.
I would recommend installing `language-babel` package too for syntax highlighting
