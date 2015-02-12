angular-markdown-filter
=======================

Markdown filter for Angular

#### Usage

1. `bower install angular-markdown-filter`
2. Made sure the showdown lib is loaded. It should be installed as a dependency 
   at `bower_components/showdown/compressed/showdown.js`.
3. Include the `markdown.js` script provided by this component into your app. 
4. Add `markdown` as a module dependency to your app.
5. Insert code in view:

        <div class="container">{{ info | markdown }}</div>

6. Insert code in controller:

        $scope.info = '# Heading 1';

#### Configuration

The underlying Showdown converter can be configured through the `markdown` provider:

    angular.module('markdown')
      .config(function(markdownProvider) {
        markdownProvider.config({
          extensions: ['table']
        });
      });
      
see the [Showdown documentation](https://github.com/showdownjs/showdown#creating-markdown-extensions)
for details on how to create extensions.
