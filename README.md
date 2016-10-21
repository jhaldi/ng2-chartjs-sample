## Angular2 and Chart.js sample project

This is a simple example showing how to leverage the Chart.js library inside an Angular 2 app.

Typescript assumption:  I work with WebStorm and have TypeScript 2.0.3 installed globally, so it is not included in this package.json file.
If you need TypeScript you should get it by either installing it to your package
```sh
npm install --save typescript
```
or install it globally
```sh
npm install -g typescript 
```

*Note:* At the time of this writing, the typings included in the @types library for Chart.js appear to be out of date (not current to Chart.js v2.3.0).  However the typings found in the 'typings' library do seem correct.  

To recreate the same Chart.js typings found in this library, do the following:
  
```
//If needed, install typings globally
npm install -g typings

//To install Chart.js typings
typings install --save chart.js
```

## Installation
####1. Clone this project or download it as a zip file

```sh
$ git clone https://github.com/jhaldi/quick-ng2-template.git
```

####2. Install the local packages
 
```sh
$ npm install
```

####3. Change the <base href> tag in the index.html file to your correct local directory

```
    <!--
    Change this to suit your needs
     For example, if your project is running on XAMPP windows in a directory called 'foobar',
     as in C:\xampp\htdocs\NG2-TEMPLATE, and you would access the site with http://localhost/foobar,
     then change it to
     <base href="/foobar/"
    -->
    <base href="/ng2-chartjs-sample/">
```