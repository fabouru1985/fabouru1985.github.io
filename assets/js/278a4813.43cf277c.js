"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4620"], {
64229: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_users_and_permissions_what_is_a_regular_user_md_278_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-users-and-permissions-what-is-a-regular-user-md-278.json
var site_docs_kb_users_and_permissions_what_is_a_regular_user_md_278_namespaceObject = JSON.parse('{"id":"kb/users-and-permissions/what-is-a-regular-user","title":"What is a \\"regular user\\"?","description":"When navigating the Manage Users page, you might notice that your permissions are set to regular.","source":"@site/docs/kb/users-and-permissions/what-is-a-regular-user.md","sourceDirName":"kb/users-and-permissions","slug":"/kb/users-and-permissions/what-is-a-regular-user","permalink":"/kb/users-and-permissions/what-is-a-regular-user","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Account settings","permalink":"/tags/account-settings"},{"inline":true,"label":"Users and permissions","permalink":"/tags/users-and-permissions"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":6,"frontMatter":{"id":"what-is-a-regular-user","title":"What is a \\"regular user\\"?","sidebar_position":6,"tags":["Account settings","Users and permissions"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How can I replace users in my Fintesk company account?","permalink":"/kb/users-and-permissions/how-can-i-replace-users-in-my-fintesk-company-account"},"next":{"title":"How can I add a user?","permalink":"/kb/users-and-permissions/how-can-i-add-a-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/users-and-permissions/what-is-a-regular-user.md


const frontMatter = {
	id: 'what-is-a-regular-user',
	title: 'What is a "regular user"?',
	sidebar_position: 6,
	tags: [
		'Account settings',
		'Users and permissions'
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
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["When navigating the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manage Users"
      }), " page, you might notice that your permissions are set to regular."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regular"
      }), " access in deals and \"global permissions\" have the permissions which were given to them when they were invited into their Fintesk company account."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Based on the chosen options in that permission set, the user may have limited access to viewing and changing certain items in the Fintesk account."
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