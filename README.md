## Yeoman - Sample 

> Creating Custom Generator for Yeoman


#### Yeoman ? 
> Yeoman is scaffolding tool for modern web application.

Here we can see how to create the custom yeoman generator.

#### Installation

```
$ npm install -g yo
```


### Creating a generator

Your yeoman generator name(folder name) must be start with _generator-_name.

Here's the folder structure

```
|-- generator-name/
	|-- package.json
	|-- app/
		|-- index.js
	|-- router/
		|-- index.js
```

#### Extending Generator
```javascript
var generator = require('yeoman-generator');

module.export = generator.Base.extend();
// if you'd like to require the name argument... ((yo name foo)... then you can use -

// module.export = generator.NameBase.extend();

```



