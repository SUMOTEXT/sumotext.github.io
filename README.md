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
* 
* 