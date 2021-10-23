(function (window) {
"use strict";

var App = window.App || {};

var FirebaseConfig = {
    apiKey: "AIzaSyByA2_Zl6iHH1WBiqh1sAqi-Y475j7loME",
    authDomain: "coffeerun-65e42.firebaseapp.com",
    projectId: "coffeerun-65e42",
    storageBucket: "coffeerun-65e42.appspot.com",
    messagingSenderId: "87020272867",
    appId: "1:87020272867:web:c3faded509f145519f19d6",
    measurementId: "G-4EKYRB2B9D"
};

App.FirebaseConfig = FirebaseConfig;
firebase.initializeApp(App.FirebaseConfig);
window.App = App;
})(window);
