"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 90:
/***/ ((module) => {

module.exports = import("chatgpt");;

/***/ }),

/***/ 145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var chatgpt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chatgpt__WEBPACK_IMPORTED_MODULE_0__]);
chatgpt__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    const api = new chatgpt__WEBPACK_IMPORTED_MODULE_0__.ChatGPTAPI({
        // apiKey: process.env.OPENAI_API_KEY
        apiKey: req.query.apiKey || "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"
    });
    try {
        const { parentMessageId , conversationId , question  } = req.query;
        const _res = await api.sendMessage(question, parentMessageId && conversationId ? {
            parentMessageId,
            conversationId
        } : {});
        res.status(200).json(_res);
    } catch (e) {
        console.log(e.toString());
        res.status(200).json({
            text: e.toString(),
            error: true
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(145));
module.exports = __webpack_exports__;

})();