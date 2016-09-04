var dynamicyload = window.dynamicyload || {};
var localstorage = window.localStorage;
dynamicyload = {
	initialize : function(){
		this.bindEvent();
	},
	bindEvent : function() {
		if (!window.dynamicyload) {
			window.dynamicyload = this;
		}
	},
	getFile : function(key,url) {
		var _this = this;
		$.get(url,function(data){
			_this.saveFile(key,data);
		})
	},
	saveFile : function(key,data) {
		localstorage.setItem(key,data);
	},
	isExists : function(key) {
		var data = localstorage.getItem(key) ;
		return data;
	},
	loadData : function(key) {
		return localstorage.getItem(key);
	},
	writeIn : function(key,url) {
		var data = this.loadData(key);
		var head = document.getElementsByTagName('HEAD').item(0);  
        var link = document.createElement("script");  
        link.type = "text/javascript";  
		if (data) {
			// alert("in");
	        link.innerHTML = data;  
		} else {
			// alert("out");
			link.innerHTML = this.getFile(key,url);
		}
		head.appendChild(link);  
	},
	checkVersion : function(key,version,url) {
		var data = this.loadData(key);
		var reg = /\/\*\#version:.*(?=\*\/)/g;
		if (!reg.test(data)) {
			this.saveFile(key,this.getFile(key,url));
			return;
		}
		var oldVersion = data.match(reg)[0].split("#version:")[1];
		if (oldVersion !== version) {
			this.saveFile(key,this.getFile(key,url));
		} 
	},
	getConfig : function(){
		var _this = this;
		$.getJSON("http://192.168.3.11:8080/cordova_lib.json",function(data){
			if (data) { //todo check Array
				for (i in data) {
					var s = data[i];
					_this.checkVersion(s.key ,s.version ,s.url);
				}
			}
		})
	}

};

dynamicyload.initialize();