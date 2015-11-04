# Async Render POC Spike

This is a POC app using async rendering with marko vs async rendering with react and virtual dom.
[TF-5789](https://typeform.atlassian.net/browse/TF-5789)

### Based on... [the ultimate webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)

#### React by default
The project runs with React by default and hot replacement of changes to the modules. Currently it is on 0.14 RC.

#### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

To turn off CSS Modules remove it from the `webpack.config.js` file. 

#### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted. With atom you install the `linter` package, then `linter-eslint` and `linter-jscs`. You are covered. Also run `npm run eslint` or `npm run jscs` to verify all files. I would recommend installing `language-babel` package too for syntax highlighting

#### Beautify
With a beautify package installed in your editor it will also do that
