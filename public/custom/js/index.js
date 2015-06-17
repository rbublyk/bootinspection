(function($, window, document) {
    // Listen for the jQuery ready event on the document
    $(function() {
        var main = new ViewRender();
        main.init();
        main.listen();
    });
}(window.jQuery, window, document));