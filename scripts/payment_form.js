(function (window) {
    "use strict";
    
    var FORM_SELECTOR = "[data-coffee-order='form']";
    var App = window.App;
    var FormHandler = App.FormHandler;

    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        var text = ((data.title !== undefined) ? (data.title + " ") : "") + data.username;        
        $("#payment-modal-text").text("Thank you for your payment, " + text);
        $("#payment-modal").modal();
    });
})(window);
