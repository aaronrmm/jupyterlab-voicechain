"use strict";
(self["webpackChunkjupyterlab_voicechain"] = self["webpackChunkjupyterlab_voicechain"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Initialization data for the jupyterlab-voicechain extension.
 */
const activate_func = (app, palette) => {
    console.log('JupyterLab extension jupyterlab-voicechain.activate_func is activated!');
    console.log('ICommandPalette:', palette);
    // Define a widget creator function,
    // then call it to make a new widget
    const newWidget = () => {
        // Create a blank content widget inside of a MainAreaWidget
        const content = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Widget();
        const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
        widget.id = 'apod-jupyterlab';
        widget.title.label = 'Astronomy Picture';
        widget.title.closable = true;
        return widget;
    };
    let widget = newWidget();
    // Add an application command
    const command = 'apod:open';
    app.commands.addCommand(command, {
        label: 'Random Astronomy Picture',
        execute: () => {
            // Regenerate the widget if disposed
            if (widget.isDisposed) {
                widget = newWidget();
            }
            if (!widget.isAttached) {
                // Attach the widget to the main work area if it's not there
                app.shell.add(widget, 'main');
            }
            // Activate the widget
            app.shell.activateById(widget.id);
        }
    });
    // Add the command to the palette.
    palette.addItem({ command, category: 'Tutorial' });
};
const plugin = {
    id: 'jupyterlab-voicechain:plugin',
    description: 'A Jupyterlab extension that provides voice commands for AI code completion with LangChain.',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette],
    activate: activate_func
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.e569bf2e63e287b8e99e.js.map