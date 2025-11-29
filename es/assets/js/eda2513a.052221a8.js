"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4784"], {
93736: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_overview_getting_started_md_eda_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-overview-getting-started-md-eda.json
var site_docs_developers_overview_getting_started_md_eda_namespaceObject = JSON.parse('{"id":"developers/overview/getting-started","title":"Getting started","description":"Check out our Changelog for the latest changes regarding our Developer Platform.","source":"@site/docs/developers/overview/getting-started.md","sourceDirName":"developers/overview","slug":"/developers/overview/getting-started","permalink":"/es/developers/overview/getting-started","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/es/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/es/tags/fintesk-api"},{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":1,"frontMatter":{"id":"getting-started","title":"Getting started","sidebar_position":1,"tags":["Developers","Fintesk Api","Getting started"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/es/category/overview"},"next":{"title":"Core API concepts","permalink":"/es/category/core-api-concepts"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/overview/getting-started.md


const frontMatter = {
	id: 'getting-started',
	title: 'Getting started',
	sidebar_position: 1,
	tags: [
		'Developers',
		'Fintesk Api',
		'Getting started'
	],
	last_update: {
		date: new Date('2025-02-22T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = 'Getting started';

const assets = {

};



const toc = [{
  "value": "Create an account",
  "id": "create-an-account",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "getting-started",
        children: "Getting started"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Check out our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../fintesk/changelog",
          children: "Changelog"
        }), " for the latest changes regarding our Developer Platform."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fintesk is a sales CRM with an intuitive ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../fintesk/v1.mdx",
        children: "RESTful API"
      }), ". You can use our API to create public or private apps"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-an-account",
      children: "Create an account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#create-a-developer-sandbox-account"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Testing in a risk-free account. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://app.fintesk.com?utm_source=fintesk-docs",
        children: "sign up for one now"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Didn't find what you were looking for? Let us know!"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Tell us about what you're looking for or inform us about the missing article"
      })]
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