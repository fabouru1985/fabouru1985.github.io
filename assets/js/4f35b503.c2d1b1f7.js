"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["9230"], {
55890: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_troubleshooting_which_browser_is_best_for_fintesk_md_4f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-troubleshooting-which-browser-is-best-for-fintesk-md-4f3.json
var site_docs_kb_troubleshooting_which_browser_is_best_for_fintesk_md_4f3_namespaceObject = JSON.parse('{"id":"kb/troubleshooting/which-browser-is-best-for-fintesk","title":"Which browser is best for Fintesk?","description":"Google Chrome and Edge will provide the best experiences when using Fintesk. We recommend staying away from common default browsers, such as Internet Explorer and Safari, as they may cause performance issues.","source":"@site/docs/kb/troubleshooting/which-browser-is-best-for-fintesk.md","sourceDirName":"kb/troubleshooting","slug":"/kb/troubleshooting/which-browser-is-best-for-fintesk","permalink":"/kb/troubleshooting/which-browser-is-best-for-fintesk","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Troubleshooting","permalink":"/tags/troubleshooting"},{"inline":true,"label":"Browser","permalink":"/tags/browser"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":5,"frontMatter":{"id":"which-browser-is-best-for-fintesk","title":"Which browser is best for Fintesk?","sidebar_position":5,"tags":["Troubleshooting","Browser"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How do I open my browser console?","permalink":"/kb/troubleshooting/how-do-i-open-my-browser-console"},"next":{"title":"Can Fintesk be used offline?","permalink":"/kb/troubleshooting/can-fintesk-be-used-offline"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/troubleshooting/which-browser-is-best-for-fintesk.md


const frontMatter = {
	id: 'which-browser-is-best-for-fintesk',
	title: 'Which browser is best for Fintesk?',
	sidebar_position: 5,
	tags: [
		'Troubleshooting',
		'Browser'
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
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.google.com/chrome/",
        children: "Google Chrome"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.microsoft.com/en-us/edge",
        children: "Edge"
      }), " will provide the best experiences when using Fintesk. We recommend staying away from common default browsers, such as Internet Explorer and Safari, as they may cause performance issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It's important to make sure your browser is on the latest version for optimal rendering. You can view the following documentation to learn how to update the recommended browsers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en",
          children: "Google Chrome"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.microsoft.com/en-us/topic/microsoft-edge-update-settings-af8aaca2-1b69-4870-94fe-18822dbb7ef1",
          children: "Edge"
        })
      }), "\n"]
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