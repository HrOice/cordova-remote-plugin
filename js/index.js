var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        alert("ready");
        APP.addScript("jpush-plugin.js")
        document.addEventListener("backbutton",backButton,false);
    },
};

app.initialize();