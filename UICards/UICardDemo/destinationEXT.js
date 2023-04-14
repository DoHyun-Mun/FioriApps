sap.ui.define([
	"sap/ui/integration/Extension", 
	"sap/ui/model/json/JSONModel",
	'sap/m/MessageToast'],

	function (Extension, JSONModel, MessageToast) {
	"use strict";

	var DataExtension = Extension.extend("com.sap.demo.UICardTest.DataExtension");

	/** 
	 * content 하위 Data영역을 교체하면 사용 가능
	 "data": {
                "request": {
                    "url": "{{destinations.apikey}}/dsodata/DS_01?$top=5",
                    "withCredentials": true
                },
                "parameters": {
                    "$format": "json",
                    "$orderby": "date1 desc"
                },
                "path" : "/value"
            },
	 */
	/**
	 * 
	 * @returns 
	 */
    // should return a promise
	DataExtension.prototype.getData = function () {
        var oCard = this.getCard(),
		oParameters = oCard.getCombinedParameters();
		
		return oCard.request({
			"url": "{{destinations.apikey}}/dsodata/DS_01?$top=5",
			"withCredentials": true,
			"parameters": {
				"$format": "json",
				"$orderby": "date1 desc"
			},
		}).then(function (aData) {
			//MessageToast.show("1.0.17")
			return Promise.resolve(aData.value);
		});
	};

	
	return DataExtension;
});
