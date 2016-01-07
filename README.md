# Alice Mollon's Super Awesome portfolio

**Site Structure**
The site is pretty simple there is an `index.html` file and three folders `css`, `js` & `images`. Inside `css` we have some files and one with the extension `.min.css` this is just a naming convention but tells us that this file is the minified version of the files `reset.css`, `lanes.css` & `style.css`, I will explain how we did this under the header [Gulp](#gulp-setup).

In the `js` folder there are some files most of them are plugins or libraries e.g jQuery, the one named `portolfio.js` is where we kick off and run our code. There is also another one named `portfolio.min.js`, this is similar to the css one from earlier and simply is the minified version of all the plugins and libraries all in one file.


## Gulp Setup

**Is node installed?**
Gulp runs on node so you have to have that installed before you can run this stuff, you can check its installed by opening your terminal and running `node -v`, if you get some thing that doesn't look like an error then its installed.

If you get an error then head over to `https://nodejs.org` and install it.

**Install Gulp**
So Gulp is a fun little js project that allows you to run boring tasks to do with files of your project. To use gulp you first need to install it, in your terminal run `npm install -g gulp`, this will install gulp to your entire computer which will enable you to run the command `gulp` in your terminal.

**Install gulp plugins**
Once that is installed you can install the gulp setup for your project, head to the project in terminal and run `npm install` this will tell node to look for a file named `package.json` in your project and in there are all of the plugins for gulp listed out that you need.

**Run gulp**
Once npm has installed everything you can now run gulp in your project. To do this its really easy just run `gulp`, if every goes well you should see some text in your terminal saying things are starting and finishing, these are the gulp tasks.

This default task will also open your site in the browser and start watching all your files for any changes and then push them automatically to the browser. This means that when you update css or js it will automatically compile them to the minified versions and refresh your browser automagically!

**gulpfile.js**
Your gulp tasks are created in the file named `gulpfile.js`, a quick overview of what is going on here, first off its important to know it is just a javascript file, so all the code is js.

**require="allthethings"**
First we have a load of `var` statements these are juts pulling in the gulp plugins that were installed from package.json and assigns a variable name to them.

**files**
Next we have another 2 vars named `cssFiles` & `jsFiles` these are just arrays and contain the paths to the files we want to include in our minified files, the last one with the **!** tells us to ignore the minified file as we will create an infinite loop if we include that in our bundle as well.

**gulp.task**
This is where the fun happens, there are 3 tasks the first `uglifyJS` grabs all the files in the array we setup earlier, then it passes all those files using `pipe` to the plugins going through each one, first it creates `sourcemaps` which make it easier to debug your code, then to `uglify` which minifies your js then to `concat` which joins all the files together into one file, then finally it puts the newly created file into the `js` folder.

The `minifyCSS` task does pretty much the same thing as the js task but instead of using `uglify` it uses the `cssnano` plugin.

The `jsWatch` task, watches the js task and when its finished makes the browser reload.

`serve`, simply starts browsersync and then watches for if any of the other tasks run and will then update the browser automtically

The final task `default`, just runs both the `serve` task that in turn runs & watches the `uglifyJS`, `minifyCSS` tasks.

The default keyword is a special one in gulp and it means that instead of having to run `gulp default` in the terminal you can juts run `gulp`, this will run the `default` task which runs the other two tasks.

And thats all! Have fun!