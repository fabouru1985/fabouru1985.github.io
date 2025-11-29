"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["8354"], {
88418: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_ApiDoc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 170 modules
var Layout = __webpack_require__(16099);
// EXTERNAL MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/Redoc/index.js + 7 modules
var Redoc = __webpack_require__(29560);
;// CONCATENATED MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/ApiDoc/ApiDoc.jsx




function ApiDoc({ layoutProps, specProps }) {
    const defaultTitle = specProps.spec?.info?.title || 'API Docs';
    const defaultDescription = specProps.spec?.info?.description || 'Open API Reference Docs for the API';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* ["default"] */.A, {
        title: defaultTitle,
        description: defaultDescription,
        ...layoutProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Redoc/* ["default"] */.A, {
            ...specProps
        })
    });
}
/* export default */ const ApiDoc_ApiDoc = (ApiDoc);

;// CONCATENATED MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/ApiDoc/index.js

/* export default */ const theme_ApiDoc = (ApiDoc_ApiDoc);


}),
54735: (function () {
/* (ignored) */

}),
37800: (function () {
/* (ignored) */

}),
40517: (function () {
/* (ignored) */

}),
70452: (function () {
/* (ignored) */

}),

}]);