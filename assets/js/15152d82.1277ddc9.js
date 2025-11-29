"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6044"], {
68804: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_products_can_i_import_products_and_automatically_link_them_to_deals_md_151_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-products-can-i-import-products-and-automatically-link-them-to-deals-md-151.json
var site_docs_kb_products_can_i_import_products_and_automatically_link_them_to_deals_md_151_namespaceObject = JSON.parse('{"id":"kb/products/can-i-import-products-and-automatically-link-them-to-deals","title":"Can I import products and automatically link them to deals?","description":"While you can import a list of products into Fintesk, unfortunately, you cannot attach these products to deals through the import process.","source":"@site/docs/kb/products/can-i-import-products-and-automatically-link-them-to-deals.md","sourceDirName":"kb/products","slug":"/kb/products/can-i-import-products-and-automatically-link-them-to-deals","permalink":"/kb/products/can-i-import-products-and-automatically-link-them-to-deals","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Features","permalink":"/tags/features"},{"inline":true,"label":"Products","permalink":"/tags/products"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":7,"frontMatter":{"id":"can-i-import-products-and-automatically-link-them-to-deals","title":"Can I import products and automatically link them to deals?","sidebar_position":7,"tags":["Features","Products"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How can I link products to a deal?","permalink":"/kb/products/how-can-i-link-products-to-a-deal"},"next":{"title":"Troubleshooting","permalink":"/category/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/products/can-i-import-products-and-automatically-link-them-to-deals.md


const frontMatter = {
	id: 'can-i-import-products-and-automatically-link-them-to-deals',
	title: 'Can I import products and automatically link them to deals?',
	sidebar_position: 7,
	tags: [
		'Features',
		'Products'
	],
	last_update: {
		date: new Date('2025-03-05T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["While you can ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
        children: "import"
      }), " a list of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/products",
        children: "products"
      }), " into Fintesk, unfortunately, you cannot attach these products to deals through the import process."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Currently, this can only be done manually, or through our ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../fintesk/api/v1",
        children: "API"
      }), " if you are a skilled developer or have dedicated engineering staff at your disposal."]
    })]
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