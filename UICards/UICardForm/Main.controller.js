sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.demo.StepFlowCard.Main", {
		onInit: function () {
			
		},

		onCreateForm: function () {
			var oCard = this.getOwnerComponent().card;
			oCard.request({
				"url": "{{destinations.bpa}}/v1/workflow-instances",
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				"withCredentials": true,
				"parameters": {
					"definitionId": "jp10.potaldemosvc-y56vwri9.demoprocess.approval",
					"context": {
						"requestname": this.byId("requestId").getValue(),
						"receivename": this.byId("receiveId").getValue(),
						"startdate": this.byId("startDate").getValue(),
						"enddate": this.byId("endDate").getValue(),
						"requestcontent": this.byId("txaRequest").getValue(),
						"condition": this.byId("chkAprove").getSelected(),
						"createemail": "dohyun.mun@sap.com"
					}
				},
			}).then(function (aData) {
				MessageToast.show("정상적으로 요청 되었습니다.");				
			});
		}
	});
});
