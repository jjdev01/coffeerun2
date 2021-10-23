(function (window) {
    "use strict";
    
    var FORM_SELECTOR = "[data-coffee-order='form']";
    var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";
    
    var SERVER_URL = "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders";
    var FIREBASE_SERVER_URL = "http://coffeerun-65e42.firebaseapp.com";
    
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FirebaseDataStore = App.FirebaseDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    
    //var datastore = new DataStore();
    //var datastore = new RemoteDataStore(SERVER_URL);
    var datastore = new FirebaseDataStore(FIREBASE_SERVER_URL);
    var myTruck = new Truck("ncc-1705", datastore);
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        return myTruck.createOrder.call(myTruck, data)
            .then(function() {
                checkList.addRow.call(checkList, data);
            },
            function() { 
                alert("Server unreachable. Try again later.");
            });
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);

    myTruck.printOrders(checkList.addRow.bind(checkList));

    //console.log(formHandler);
})(window);
