"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4362"], {
3179: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_importing_data_why_do_my_imported_currency_values_appear_as_0_md_28b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-importing-data-why-do-my-imported-currency-values-appear-as-0-md-28b.json
var site_docs_kb_importing_data_why_do_my_imported_currency_values_appear_as_0_md_28b_namespaceObject = JSON.parse('{"id":"kb/importing-data/why-do-my-imported-currency-values-appear-as-0","title":"Why do my imported currency values appear as \\"0\\"?","description":"When importing from spreadsheets, make sure all monetary values (for default fields such as deal value, and for any custom fields where you have currencies) are formatted as numbers without currency symbols (so as 1000000000 as opposed to $1000000000).","source":"@site/docs/kb/importing-data/why-do-my-imported-currency-values-appear-as-0.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/why-do-my-imported-currency-values-appear-as-0","permalink":"/kb/importing-data/why-do-my-imported-currency-values-appear-as-0","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1717459200000,"sidebarPosition":16,"frontMatter":{"id":"why-do-my-imported-currency-values-appear-as-0","title":"Why do my imported currency values appear as \\"0\\"?","sidebar_position":16,"tags":["Getting started","Importing data"],"last_update":{"date":"2024-06-04T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Importing-> mandatory fields","permalink":"/kb/importing-data/importing-mandatory-fields"},"next":{"title":"Pipeline View","permalink":"/category/pipeline-view"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/importing-data/why-do-my-imported-currency-values-appear-as-0.md


const frontMatter = {
	id: 'why-do-my-imported-currency-values-appear-as-0',
	title: 'Why do my imported currency values appear as "0"?',
	sidebar_position: 16,
	tags: [
		'Getting started',
		'Importing data'
	],
	last_update: {
		date: new Date('2024-06-04T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["When importing from spreadsheets, make sure all monetary values (for default fields such as deal value, and for any custom fields where you have currencies) are formatted as numbers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without"
      }), " currency symbols (so as 1000000000 as opposed to $1000000000)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If numbers include currency symbols, the Fintesk import system won’t detect them properly and thus all values will be formatted as ”0”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you’ve already imported and are facing this issue, the best course of action is to revert your import, remove the currency symbols from the spreadsheet you’re importing and import again."
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