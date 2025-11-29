"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["9476"], {
78456: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_users_and_permissions_who_is_the_admin_user_of_my_account_md_f36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-users-and-permissions-who-is-the-admin-user-of-my-account-md-f36.json
var site_docs_kb_users_and_permissions_who_is_the_admin_user_of_my_account_md_f36_namespaceObject = JSON.parse('{"id":"kb/users-and-permissions/who-is-the-admin-user-of-my-account","title":"Who is the admin user of my account?","description":"The admin user with \\"account settings access\\" is the first user that set up the account and the users that they assigned admin status since then.","source":"@site/docs/kb/users-and-permissions/who-is-the-admin-user-of-my-account.md","sourceDirName":"kb/users-and-permissions","slug":"/kb/users-and-permissions/who-is-the-admin-user-of-my-account","permalink":"/kb/users-and-permissions/who-is-the-admin-user-of-my-account","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Account settings","permalink":"/tags/account-settings"},{"inline":true,"label":"Users and permissions","permalink":"/tags/users-and-permissions"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":8,"frontMatter":{"id":"who-is-the-admin-user-of-my-account","title":"Who is the admin user of my account?","sidebar_position":8,"tags":["Account settings","Users and permissions"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How can I add a user?","permalink":"/kb/users-and-permissions/how-can-i-add-a-user"},"next":{"title":"Global User Management","permalink":"/kb/users-and-permissions/global-user-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/users-and-permissions/who-is-the-admin-user-of-my-account.md


const frontMatter = {
	id: 'who-is-the-admin-user-of-my-account',
	title: 'Who is the admin user of my account?',
	sidebar_position: '08',
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
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The admin user with \"account settings access\" is the first user that set up the account and the users that they assigned admin status since then."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are not sure who the admin user is on your account, for security reasons and to maintain user privacy, our support agents cannot answer this question for you. Unfortunately, there is no possibility for our support team to share this information with you."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this case, one possibility would be for you to check the user that your invitation email to Fintesk arrived from. In many cases, this user will still be the admin user."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Otherwise, you will need to contact your manager, supervisor, IT admin, or colleagues to find out who is the admin user on the account."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": The original creator of the account will be given account settings admin status, however this status can be removed or given to other users."]
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