"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["3452"], {
20039: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_fintesk_v_1_mdx_0dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fintesk-v-1-mdx-0dd.json
var site_docs_fintesk_v_1_mdx_0dd_namespaceObject = JSON.parse('{"id":"fintesk/api-v1","title":"Fintesk API - V2","description":"","source":"@site/docs/fintesk/v1.mdx","sourceDirName":"fintesk","slug":"/fintesk/api-v1","permalink":"/fintesk/api-v1","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"fabouru1985","lastUpdatedAt":1740177720000,"frontMatter":{"id":"api-v1","title":"Fintesk API - V2","hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"Changelog","permalink":"/fintesk/changelog"},"next":{"title":"Privacy","permalink":"/category/privacy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/Redoc/index.js + 7 modules
var Redoc = __webpack_require__(29560);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(99044);
;// CONCATENATED MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/useSpecData.js

/**
 *
 * @param id ID of plugin data
 * @returns Spec Data of ID or first one if ID is not provided
 */ function useSpecData(id) {
    const allData = (0,useGlobalData/* .useAllPluginInstancesData */.kh)('docusaurus-plugin-redoc');
    const apiData = id ? allData?.[id] : Object.values(allData ?? {})?.[0];
    return apiData;
}
/* export default */ const theme_useSpecData = (useSpecData);

;// CONCATENATED MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/ApiDocMdx/ApiDocMdx.jsx





const ApiDocMdx = ({ id })=>{
    const specProps = theme_useSpecData(id);
    const optionsOverrides = (0,react.useMemo)(()=>{
        return {
            theme: {
                // TODO: Investigate what the best breakpoints should be
                breakpoints: {
                    medium: '130rem',
                    large: '130rem'
                }
            }
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Redoc/* ["default"] */.A, {
        ...specProps,
        optionsOverrides: optionsOverrides
    });
};
/* export default */ const ApiDocMdx_ApiDocMdx = (ApiDocMdx);

;// CONCATENATED MODULE: ./node_modules/docusaurus-theme-redoc/dist-jsx/theme/ApiDocMdx/index.js

/* export default */ const theme_ApiDocMdx = (ApiDocMdx_ApiDocMdx);

;// CONCATENATED MODULE: ./docs/fintesk/v1.mdx


const frontMatter = {
	id: 'api-v1',
	title: 'Fintesk API - V2',
	hide_table_of_contents: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(theme_ApiDocMdx, {
    id: "fintesk-v1"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



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
28453: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);