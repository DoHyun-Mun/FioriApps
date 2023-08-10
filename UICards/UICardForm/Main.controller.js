sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.demo.StepFlowCard.Main", {
		onInit: function () {
			this._wizard = this.byId("ShoppingCartWizard");
			var oCard = this.getOwnerComponent().card;
			var testTxtObj = this.byId("testTxt");
			//testTxtObj.setText("reHi");
			oCard.request({
				"url": "{{destinations.bpa}}/v1/workflow-instances/",
				"headers": {
					"Content-Type": "application/json"
				},
				"withCredentials": true
			}).then(function (aData) {
				debugger;
				//testTxtObj.setText(JSON.stringify(aData));
			});
		},

		checkCreditCardStep: function () {
			var cardName = "He" || "";
			if (cardName.length < 3) {
				this._wizard.invalidateStep(this.byId("CreditCardStep"));
			} else {
				this._wizard.validateStep(this.byId("CreditCardStep"));
			}
		},

		onCreateForm: function () {
			debugger;
			
			// var aa =
			// this.byId("requestId").getValue()+":"+
			// this.byId("receiveId").getValue()+":"+
			// this.byId("startDate").getValue()+":"+
			// this.byId("endDate").getValue()+":"+
			// this.byId("txaRequest").getValue()+":"+
			// this.byId("chkAprove").getSelected();
			
			var testTxtObj = this.byId("testTxt");
			

			// return;
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