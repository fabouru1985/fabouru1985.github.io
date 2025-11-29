"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["3980"], {
6496: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_users_and_permissions_users_md_c57_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-users-and-permissions-users-md-c57.json
var site_docs_kb_users_and_permissions_users_md_c57_namespaceObject = JSON.parse('{"id":"kb/users-and-permissions/users","title":"Users","description":"Note: This action is only available to users with \\"account settings access\\".","source":"@site/docs/kb/users-and-permissions/users.md","sourceDirName":"kb/users-and-permissions","slug":"/kb/users-and-permissions/users","permalink":"/kb/users-and-permissions/users","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Account settings","permalink":"/tags/account-settings"},{"inline":true,"label":"Users and permissions","permalink":"/tags/users-and-permissions"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":3,"frontMatter":{"id":"users","title":"Users","sidebar_position":3,"tags":["Account settings","Users and permissions"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Updating user information","permalink":"/kb/users-and-permissions/updating-user-information"},"next":{"title":"How can I deactivate, reactivate or delete a user?","permalink":"/kb/users-and-permissions/how-can-i-deactivate-or-reactivate-a-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/users-and-permissions/users.md


const frontMatter = {
	id: 'users',
	title: 'Users',
	sidebar_position: 3,
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



const toc = [{
  "value": "Active",
  "id": "active",
  "level": 3
}, {
  "value": "Invited",
  "id": "invited",
  "level": 3
}, {
  "value": "Deactivated",
  "id": "deactivated",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This action is only available to users with \"account settings access\"."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your Fintesk user list can be found in ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Company settings > Manage Users > ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://app.fintesk.com/settings/company/manage-users?utm_source=fintesk-docs",
          children: "Users and access"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In addition to a list of users, this will also show you:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The users that have access to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/users-and-permissions/global-user-management#account-settings",
          children: "account settings"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The permission sets users are granted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "users01",
        src: (__webpack_require__(81012)/* ["default"] */.A) + "",
        width: "1417",
        height: "665"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": The first user to start a new trial account is automatically given ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "admin user rights with \"account settings access\""
        }), ". Any users with \"account settings access\" can remove the admin user permission of the initial user if need be."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manage users"
      }), " section, you’ll have three sections: active, invited, and deactivated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user is currently enrolled with the Fintesk account and has access"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invited",
      children: "Invited"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An invite has been sent to the email address, but a new user has not yet been enrolled."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deactivated",
      children: "Deactivated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user has been disabled and the user no longer has access to the company Fintesk's account."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a user has been invited to join the account but has not accepted, you can cancel their Fintesk invite link under the invited tab."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can learn more about adding new users in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/users-and-permissions/how-can-i-add-a-user",
        children: "this article"
      }), "."]
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
81012: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/users01-598c37f3f74894359e2401095b4e30da.jpeg");

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