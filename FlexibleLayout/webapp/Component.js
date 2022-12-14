/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/sap/demo/flexiblelayout/model/models",
        
        "sap/base/util/UriParameters",
        "sap/ui/model/json/JSONModel",
        "sap/f/library",
        "sap/f/FlexibleColumnLayoutSemanticHelper"
    ],
    function (UIComponent, Device, models, UriParameters, JSONModel, library, FlexibleColumnLayoutSemanticHelper) {
        "use strict";

        return UIComponent.extend("com.sap.demo.flexiblelayout.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                var oModel = new JSONModel();
                this.setModel(oModel);

                var oProductsModel;
                // set products demo model on this sample
                oProductsModel = new JSONModel();
                oProductsModel.loadData("https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/products.json", null, false, 'GET');
                oProductsModel.setSizeLimit(1000);
                this.setModel(oProductsModel, 'products');

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },

            /**
             * Returns an instance of the semantic helper
             * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
             */
            getHelper: function () {
                var LayoutType = library.LayoutType;

                var oFCL = this.getRootControl().byId("fcl"),
                oParams = UriParameters.fromQuery(location.search),
                oSettings = {
                    defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
                    defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
                    mode: oParams.get("mode"),
                    maxColumnsCount: oParams.get("max")
                };

                return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
            }
        });
    }
);