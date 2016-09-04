var backButton = function() {
	window.plugins.toastPlugin.longToast("再按一次退出");
	document.removeEventListener("backbutton",backButton,false);

	document.addEventListener("backbutton",exitApp,false);

	var intervalID = window.setInterval(function(){
		window.clearInterval(intervalID);
		document.removeEventListener("backbutton", exitApp, false)
		document.addEventListener("backbutton",backButton,false);

	},3000);
}
var exitApp = function() {
	navigator.app.exitApp();
}
/*#version:2016090301*/