/*#version:2016090103*/

cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "jpush-phonegap-plugin.JPushPlugin",
        "file": "plugins/jpush-phonegap-plugin/www/JPushPlugin.js",
        "pluginId": "jpush-phonegap-plugin",
        "clobbers": [
            "JPush"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    // {
    //     "id": "cordova-plugin-splashscreen.SplashScreen",
    //     "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    //     "pluginId": "cordova-plugin-splashscreen",
    //     "clobbers": [
    //         "navigator.splashscreen"
    //     ]
    // },
    {
        "id": "com.hroice.cordova.plugin.toast.cordova-toast",
        "file": "plugins/com.hroice.cordova.plugin.toast/www/cordova-toast.js",
        "pluginId": "com.hroice.cordova.plugin.toast",
        "clobbers": [
            "cordova.plugins.cordova-toast"
        ]
    },
    // {
    //     "id": "com.qdc.plugins.baidu.location.baidu_location",
    //     "file": "plugins/com.qdc.plugins.baidu.location/www/baidu_location.js",
    //     "pluginId": "com.qdc.plugins.baidu.location",
    //     "clobbers": [
    //         "baidu_location"
    //     ]
    // }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-device": "1.1.2",
    "jpush-phonegap-plugin": "2.2.4",
    "cordova-plugin-network-information": "1.2.1",
    // "cordova-plugin-splashscreen": "4.0.0",
    "com.hroice.cordova.plugin.toast": "0.0.1",
    // "com.qdc.plugins.baidu.location": "1.0.0"
};
// BOTTOM OF METADATA
});