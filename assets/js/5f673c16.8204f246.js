"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["8637"], {
10108: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_getting_started_organization_vs_company_account_md_5f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-getting-started-organization-vs-company-account-md-5f6.json
var site_docs_kb_getting_started_organization_vs_company_account_md_5f6_namespaceObject = JSON.parse('{"id":"kb/getting-started/organization-vs-company-account","title":"Organization vs. company account","description":"When a Fintesk account is created, both a user account and a company account are created.","source":"@site/docs/kb/getting-started/organization-vs-company-account.md","sourceDirName":"kb/getting-started","slug":"/kb/getting-started/organization-vs-company-account","permalink":"/kb/getting-started/organization-vs-company-account","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Basic concepts","permalink":"/tags/basic-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741046400000,"sidebarPosition":4,"frontMatter":{"id":"organization-vs-company-account","title":"Organization vs. company account","sidebar_position":4,"tags":["Getting started","Basic concepts"],"last_update":{"date":"2025-03-04T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Fintesk interface","permalink":"/kb/getting-started/interface-in-fintesk"},"next":{"title":"What is the difference between a user and a seat?","permalink":"/kb/getting-started/what-is-the-difference-between-a-user-and-a-seat"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/getting-started/organization-vs-company-account.md


const frontMatter = {
	id: 'organization-vs-company-account',
	title: 'Organization vs. company account',
	sidebar_position: 4,
	tags: [
		'Getting started',
		'Basic concepts'
	],
	last_update: {
		date: new Date('2025-03-04T00:00:00.000Z'),
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
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "When a Fintesk account is created, both a user account and a company account are created."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["That company account is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your"
      }), " company, and you can invite your work colleagues to join you as ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/users-and-permissions/users",
        children: "users"
      }), " to access the same database."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "However, you do not have to create a brand new company account in order to use Fintesk. If you know someone who already has an account, they can invite you to join their company."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are invited, the access you have to data and account privileges will be decided by the company owner or other users."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": If you do not have access to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "User Management"
        }), ", or do not know what user type you are, please contact your account admin."]
      })
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