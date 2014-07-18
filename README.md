<!-- 	SUMOTEXT API Documentation Website 
		
		api by Mase Woods mase@sumotext.com
		
		docs, website/design by Carter Smith carter@sumotext.com -->


##For Future Development

This website was built using [jekyll](https://github.com/jekyll/jekyll), a static site generator. Read their [documentation](http://jekyllrb.com/docs/home/) if you are unfamiliar with jekyll.

###Editing Content

*Page Order* - Each documentation page is generated from a markdown file in the _posts/ directory. Jekyll enforces the naming convention yyyy-mm-dd-title.md, and orders the posts from "newest" to "oldest". The current documents are named with arbitrary dates that determine their order. The first post would be the "newest", and the last the "oldest". Order the documents using this convention.

*YML Front Matter* - Each page in _posts/ contains meta-data between "---" tags. This is the [YML Front Matter](http://jekyllrb.com/docs/frontmatter/) that jekyll uses when generating the page. 

* layout - the 'layout' in the _layouts/ folder that the page will be generated with.
* title - the title of the page (populates the <h1> on the page, and also the sidebar link that links to it)
* categories - categories the post is in, separated by commas. (now, there's only 'docs'. later, there can be other categories that are separated from the 'docs' _posts).
* permalink - assigns the tail URL that leads to the page (gets appended to baseURL).

*Page Content* - The pages are written in [markdown](http://daringfireball.net/projects/markdown/syntax) syntax. Note: Markdown can contain html snippets, as these docs pages do.

###Editing Layout

*HTML Layouts* - The layouts are in the _layouts/ folder. "default.html" is the master layout. 
*Includes* - Throughout the layouts, the tag "{% include xxxx.html %}". This inserts the content in 'xxxx.html' where that tag appears.
*{{content}}* - Any page that has "layout: default" will be inserted where the {{content}} tag is in the default.html layout. 

###Backend

To build this project: 
1. have [nodejs](http://nodejs.org/) installed.
2. clone this project `git clone https://github.com/SUMOTEXT/sumotext.github.io.git`
3. run npm install
4. if you don't have [bower](http://bower.io/) installed, install it globally using `npm install -g bower`
5. run `bower install bootstrap`
6. finally, run `grunt`. This watches for changes in any development files, and when they're edited, rebuilds the project (for developer to see changes in realtime).

*styles* - The css for this site is generated from LESS. The files are in app/assets/stylesheets/. When one of these files changes, grunt rebuilds the main .css file that the webpage uses to incorporate the changes.
...edit/add any .less files in app/assets/stylesheets, and @include it in base.less. Grunt will concat the necessary bootstrap css as the base, then concat your custom css to the end of it.

*javascript* - A small amount of javascript exists at public/assets/scripts/application.js (used to show/hide menuoverlay). 

###Deploying

To deploy, run "git push sumo master" after making your necessary commits. This pushes the project to its GitHub repo, which is set to build the jekyll site. The site exists at sumotext.github.io.

###Mirrored Docs

The docs are mirrored [here](https://github.com/SUMOTEXT/Sumotext-API-Guide/tree/master/api-docs). The content of these docs is a copy of the pages in the _posts/ directory, without the YML Front Matter.


