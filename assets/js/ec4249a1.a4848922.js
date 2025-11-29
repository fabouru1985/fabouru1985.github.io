"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["6151"], {
99908: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_core_api_concepts_date_format_md_ec4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-core-api-concepts-date-format-md-ec4.json
var site_docs_developers_core_api_concepts_core_api_concepts_date_format_md_ec4_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-date-format","title":"Date format","description":"All dates and times received by the API will be in ISO 8601 format 2019-01-22 0859 (would be the same as 2019-01-22T0859).","source":"@site/docs/developers/core-api-concepts/core-api-concepts-date-format.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-date-format","permalink":"/developers/core-api-concepts/core-api-concepts-date-format","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":5,"frontMatter":{"id":"core-api-concepts-date-format","title":"Date format","sidebar_position":5,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Requests","permalink":"/developers/core-api-concepts/core-api-concepts-requests"},"next":{"title":"Pagination","permalink":"/developers/core-api-concepts/core-api-concepts-pagination"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/core-api-concepts-date-format.md


const frontMatter = {
	id: 'core-api-concepts-date-format',
	title: 'Date format',
	sidebar_position: 5,
	tags: [
		'Developers',
		'Fintesk Api',
		'Core Api Concepts'
	],
	last_update: {
		date: new Date('2025-02-22T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = 'Date format';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "date-format",
        children: "Date format"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All dates and times received by the API will be in ISO 8601 format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2019-01-22 08:55:59"
      }), " (would be the same as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2019-01-22T08:55:59"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["All times received by the API will be in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UTC"
        }), " timezone."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The times that are sent to the API should also be converted to the UTC timezone before being sent."
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