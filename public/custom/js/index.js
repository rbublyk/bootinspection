(function($, window, document) {
    // Listen for the jQuery ready event on the document
    $(function() {
        var listener = new ViewListener();
        listener.init();
        listener.listen();
    });
}(window.jQuery, window, document));